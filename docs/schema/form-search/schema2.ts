import { SchemaProps } from '@yl-d/pro-components';

const schema: SchemaProps[] = [
  {
    widget: 'Select',
    name: 'type',
    label: '资产类别',
    autoSearch: true, // 修改直接查询
    tooltip: '修改立即查询',
    labelCol: {
      style: {
        width: 100,
      },
    },
    props: {
      options: [
        {
          label: '我的资产',
          value: 0,
        },
        {
          label: '全部资产',
          value: 1,
        },
      ],
    },
  },
  {
    widget: 'Input',
    name: 'name',
    label: '用户名称',
  },
  {
    widget: 'Select',
    name: 'sex',
    label: '选择性别',
    props: {
      options: [
        {
          label: '男',
          value: 0,
        },
        {
          label: '女',
          value: 1,
        },
      ],
    },
  },
];
export default schema;
