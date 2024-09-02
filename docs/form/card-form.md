## 基本使用

```tsx | react
import { CardForm, Form } from '@yl-d/pro-components';
import { Message } from '@arco-design/web-react';
import schema from '@/schema/form-submit/schema.ts';

const delay = (ms) => new Promise((res) => setTimeout(res, ms, true));
export default () => {
  const [form] = Form.useForm();
  const onSubmit = async (values) => {
    const res = await delay(1000);
    console.log('onSubmit ->', values);
    if (res) {
      Message.success('保存成功');
    }
  };
  return (
    <CardForm
      cardProps={{
        bodyStyle: {
          height: 500,
          overflow: 'auto',
        },
      }}
      title="新增用户"
      onSubmit={onSubmit}
      schema={schema}
      form={form}
      column={2}
    />
  );
};
```

## 使用 actionAlign 定义操作按钮位置

```tsx | react
import { CardForm } from '@yl-d/pro-components';
import { Message, Button, Space } from '@arco-design/web-react';
import schema from '@/schema/form-submit/schema.ts';

const delay = (ms) => new Promise((res) => setTimeout(res, ms, true));
export default () => {
  const [actionAlign, setActionAlign] = React.useState('end');
  const onSubmit = async (values) => {
    const res = await delay(1000);
    console.log('onSubmit ->', values);
    if (res) {
      Message.success('保存成功');
    }
  };

  return (
    <div>
      <Space>
        <Button onClick={setActionAlign.bind(null, 'start')}>左边</Button>
        <Button onClick={setActionAlign.bind(null, 'center')}>居中</Button>
        <Button onClick={setActionAlign.bind(null, 'end')}>右边</Button>
      </Space>
      <CardForm
        title="新增用户"
        cardProps={{
          style: {
            marginTop: 16,
          },
          bodyStyle: {
            height: 500,
            overflow: 'auto',
          },
        }}
        actionAlign={actionAlign}
        onSubmit={onSubmit}
        schema={schema}
        column={2}
      />
    </div>
  );
};
```

## 使用自定义 actions

```tsx | react
import { CardForm, Form } from '@yl-d/pro-components';
import { Message, Switch } from '@arco-design/web-react';
import schema from '@/schema/form-submit/schema.ts';

const delay = (ms) => new Promise((res) => setTimeout(res, ms, true));
export default () => {
  const [form] = Form.useForm();
  const onSubmit = async (values) => {
    console.log('onSubmit ->', values);
    const res = await delay(1000);
    if (res) {
      Message.success('保存成功');
    }
  };
  const onReset = (values) => {
    form.resetFields();
    console.log('onReset ->', values);
  };
  const onClear = () => {
    form.clearValues();
  };
  const actions1 = [
    {
      label: '保草稿',
      type: 'primary',
      spin: true,
      onClick: onSubmit,
    },
    {
      label: '重置表单',
      type: 'dashed',
      onClick: onReset,
    },
    {
      label: '清空表单',
      type: 'dashed',
      onClick: onClear,
    },
  ];
  const actions2 = [
    {
      label: '同意',
      type: 'primary',
      spin: true,
      validator: true,
      onClick: onSubmit,
      confirm: {
        title: '提示',
        content: '是否同意?',
      },
    },
    {
      label: '驳回',
      type: 'dashed',
      confirm: {
        title: '提示',
        content: '是否确认驳回？',
      },
      onClick: (values) => {
        message.success('驳回成功');
      },
    },
  ];
  return (
    <div>
      <Switch
        checkedText="加载状态"
        uncheckedText="加载状态"
        onChange={(v) => {
          form.setFormLoading(v);
          form.setFooterDisabled(v);
        }}
      />
      &nbsp;&nbsp;
      <Switch
        checkedText="按钮禁用"
        uncheckedText="按钮禁用"
        onChange={(v) => {
          form.setFooterDisabled(v);
        }}
      />
      &nbsp;&nbsp;
      <Switch
        checkedText="按钮切换"
        uncheckedText="按钮切换"
        onChange={(v) => {
          if (v) {
            form.setFooterActions(actions2);
          } else {
            form.setFooterActions(actions1);
          }
        }}
      />
      <CardForm
        title="新增用户"
        form={form}
        schema={schema}
        cardProps={{
          style: {
            marginTop: 16,
          },
          bodyStyle: {
            height: 500,
            overflow: 'auto',
          },
        }}
        column={2}
        initialValues={{
          input: '这里是默认值',
        }}
        actions={actions1}
      />
    </div>
  );
};
```

## API

```API
/src/form-submit/card-form/type.tsx
```
