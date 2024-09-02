## 基本使用

```tsx | react
import { Button, CreateDrawer } from '@yl-d/pro-components';
import schema from '@/pro-components/schema/form-submit/schema.ts';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        CreateDrawer({
          title: '新增用户',
          schema,
          async onSubmit(values) {
            alert(JSON.stringify(values));
          },
        }).open();
      }}
    >
      打开一个Drawer
    </Button>
  );
};
```

## 手动关闭和阻止关闭

```tsx | react
import { Button, CreateDrawer } from '@yl-d/pro-components';
import { Message } from '@arco-design/web-react';
import schema from '@/pro-components/schema/form-submit/schema.ts';

export default () => {
  return (
    <Button
      type="dashed"
      onClick={() => {
        const drawer = CreateDrawer({
          title: '新增用户',
          width: 1000,
          schema,
          column: 2,
          actions: [
            {
              label: '手动关闭',
              onClick() {
                drawer.close();
              },
            },
            {
              label: '手动提交',
              spin: true,
              type: 'primary',
              async onClick(value) {
                await new Promise((res) => setTimeout(res, 1000));
                console.log(value);
                Message.error('接口异常');
                return Promise.reject();
              },
            },
          ],
        });
        drawer.open();
      }}
    >
      手动关闭和阻止关闭
    </Button>
  );
};
```

## 自定义渲染

```tsx | react
import { Button, CreateDrawer } from '@yl-d/pro-components';
import { Message } from '@arco-design/web-react';

export default () => {
  return (
    <Button
      type="primary"
      onClick={() => {
        CreateDrawer({
          title: '自定义渲染',
          okText: '确认',
          onSubmit() {
            Message.success('确认完毕');
          },
        }).open({
          render: ({ value }) => {
            return <h4>这个是详情页面可用自定义渲染</h4>;
          },
        });
      }}
    >
      自定义渲染 Drawer
    </Button>
  );
};
```

## 自定义渲染底部按钮

```tsx | react
import { CreateDrawer, Button } from '@yl-d/pro-components';
import { Space } from '@arco-design/web-react';
import schema from '@/pro-components/schema/form-submit/schema.ts';

const drawer = CreateDrawer({
  title: '新增用户',
  schema,
  containId: 'footer-render-drawer',
});

export default () => {
  return (
    <Button
      onClick={() => {
        drawer.open({
          footerRender: (form) => {
            return (
              <Space>
                <a>这个是一个描述信息</a>
                <Button
                  onClick={() => {
                    drawer.close();
                  }}
                >
                  取消
                </Button>
                <Button
                  type="outline"
                  onClick={async () => {
                    const data = await form.submit();
                    alert(JSON.stringify(data));
                    drawer.close();
                  }}
                >
                  提交
                </Button>
              </Space>
            );
          },
        });
      }}
    >
      自定义渲染Drawer底部按钮
    </Button>
  );
};
```

## API

```API
/packages/pro-components/src/form-submit/drawer-form/type.tsx
```