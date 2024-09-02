import { Avatar, Dropdown, Space, Tooltip } from '@arco-design/web-react';
import {
  IconMoonFill,
  IconSettings,
  IconSunFill,
} from '@arco-design/web-react/icon';
import { Button } from '..';
import { RightProps } from './right.type';
import { generate, getRgbStr } from '@arco-design/color';

export default ({
  avatarUrl,
  avatarRender = () => {
    return (
      <Avatar size={26} style={{ marginRight: 10 }}>
        <img alt="avatar" src={avatarUrl} />
      </Avatar>
    );
  },
  droplist,
  userName,
  extra,
  dark,
  onDarkChange,
  themeColor,
  layout,
  onSetting,
}: RightProps) => {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      {extra}
      <Space size={20}>
        {dark ? (
          <Tooltip content="点击切换亮色模式" position="bottom">
            <Button
              style={{
                borderRadius: 'var(--border-radius-circle)',
                padding: 0,
                height: 30,
                width: 30,
              }}
              onClick={() => {
                onDarkChange(false);
                document.body.removeAttribute('arco-theme');
              }}
            >
              <IconSunFill />
            </Button>
          </Tooltip>
        ) : (
          <Tooltip content="点击切换暗黑模式" position="bottom">
            <Button
              style={{
                borderRadius: 'var(--border-radius-circle)',
                padding: 0,
                height: 30,
                width: 30,
              }}
              onClick={() => {
                onDarkChange(true);
                document.body.setAttribute('arco-theme', 'dark');
              }}
            >
              <IconMoonFill />
            </Button>
          </Tooltip>
        )}
        <Tooltip content="页面设置" position="bottom">
          <Button
            style={{
              borderRadius: 'var(--border-radius-circle)',
              padding: 0,
              height: 30,
              width: 30,
            }}
            drawerFormProps={{
              title: '页面设置',
              footer: false,
              onMount({ setFieldsValue }) {
                setFieldsValue({
                  themeColor,
                  layout,
                });
              },
              schema: [
                {
                  widget: 'ColorPicker',
                  label: '系统主题色',
                  name: 'themeColor',
                  props: {
                    onChange(themeColor: string) {
                      onSetting({
                        themeColor,
                      });
                      // 同步主题
                      const newList = generate(themeColor, {
                        list: true,
                        dark,
                      });
                      newList.forEach((l: string, index: number) => {
                        const rgbStr = getRgbStr(l);
                        document.body.style.setProperty(
                          `--arcoblue-${index + 1}`,
                          rgbStr,
                        );
                      });
                    },
                  },
                },
                {
                  widget: 'RadioGroup',
                  label: '布局风格',
                  name: 'layout',
                  props: {
                    type: 'button',
                    options: [
                      {
                        label: 'horizontal',
                        value: 'horizontal',
                      },
                      {
                        label: 'vertical',
                        value: 'vertical',
                      },
                      {
                        label: 'inline',
                        value: 'inline',
                      },
                    ],
                    onChange(v: string) {
                      onSetting({
                        layout: v,
                      });
                    },
                  },
                },
              ],
            }}
          >
            <IconSettings />
          </Button>
        </Tooltip>
        <Dropdown position="bottom" droplist={droplist}>
          <a
            style={{
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {avatarRender()}
            {userName}
          </a>
        </Dropdown>
      </Space>
    </div>
  );
};
