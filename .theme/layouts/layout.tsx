/* eslint-disable @typescript-eslint/restrict-plus-operands */
import React, { useEffect, useRef } from 'react';
import { Input, Button, Dropdown, Menu, Tooltip, Layout } from '@yl-d/design';
import uiStore from '../store/ui';
import menus from '@/.lyr/menus';
import navs from '@/.lyr/navs';
import breadcrumbStore from '../store/breadcrumb';
import { Outlet } from 'react-router-dom';
import { favicon, repository } from 'lyr';
import { IconSearch, IconLaunch, IconDown, IconGithub } from '@yl-d/icon';

export default () => {
  const layoutRef: any = useRef({});
  const breadcrumb = breadcrumbStore.useSnapshot();
  const { dark, collapsed, primaryColor } = uiStore.useSnapshot();
  const setCollapsed = (v: boolean) => {
    uiStore.collapsed = v;
  };
  // 使用 AppLayout 内置的 监听 hash 方法
  useEffect(() => {
    const removeListener = layoutRef.current.listenHashChange(
      ({ currentBreadcrumb }) => {
        /** 设置当前路由的默认面包屑 */
        breadcrumbStore.title = currentBreadcrumb.title;
        breadcrumbStore.breadcrumb = [
          ...currentBreadcrumb.breadcrumb,
        ];
        /** 滚动到顶部 */
        document
          .querySelector('.yld-layout-horizontal-body-right')
          ?.scrollIntoView({
            behavior: 'smooth',
          });
      },
    );
    setTimeout(() => {
      document
        .querySelector(
          '.yld-layout-horizontal-body-sider-menu .yld-menu-subMenu-active',
        )
        ?.scrollIntoView({
          behavior: 'smooth',
        });
    }, 2000);

    return removeListener;
  }, []);
  return (
    <Layout
      layoutRef={layoutRef}
      pathname={location.hash.substring(1)}
      layout="inline"
      className="lyr-docs-wrap"
      logo={favicon}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      title={
        <h1
          style={{ cursor: 'pointer', color: 'var(--text-color)' }}
          onClick={() => {
            location.hash = '/';
          }}
        >
          pro-components
        </h1>
      }
      dark={dark}
      onDarkChange={async (dark: boolean) => {
        uiStore.dark = dark;
      }}
      openMenu
      menus={menus}
      menuClick={({ path }: any) => {
        location.hash = path;
      }}
      themeColor={primaryColor}
      onSetting={(value: any) => {
        if (value.themeColor) {
          uiStore.primaryColor = value.themeColor;
        }
      }}
      rightContentProps={{
        extra: (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Input
              allowClear
              prefix={<IconSearch />}
              placeholder="搜索文档"
              style={{ width: 180, marginRight: 10 }}
            />
            {navs?.map((nav) => {
              return (
                <Dropdown
                  key={nav.title}
                  droplist={
                    <Menu
                      menus={nav}
                      menuClick={(item) => {
                        window.open(item.path);
                      }}
                    />
                  }
                >
                  <Button type="link" style={{ color: 'var(--text-color)' }}>
                    {nav.title}
                    <IconDown
                      style={{ marginLeft: 4, position: 'relative', top: 1 }}
                    />
                  </Button>
                </Dropdown>
              );
            })}
          </div>
        ),
        avatarRender: () => {
          return (
            <Tooltip title="Github" placement="bottom">
              <Button circle>
                <a href={repository} target="_blank">
                  <IconGithub
                    style={{ color: "var(--text-color)"}}
                    onClick={() => {
                      window.open(repository);
                    }}
                  />
                </a>
              </Button>
            </Tooltip>
          );
        },
      }}
      pageHeaderProps={breadcrumb}
      siderFooterRender={() => (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          @ design by
          <a
            style={{ marginLeft: 8 }}
            target="_blank"
            href="https://github.com/yunliang-ding/packages/tree/main/packages/docs"
          >
            @yl-d/docs
            <IconLaunch
              style={{ marginLeft: 8, position: 'relative', top: 1 }}
            />
          </a>
        </div>
      )}
    >
      <Outlet />
    </Layout>
  );
};
