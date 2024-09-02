import { SchemaProps } from '@yl-d/pro-components';

const schema: SchemaProps[] = [
  {
    key: '0001',
    widget: 'Input',
    name: 'out',
    label: '外部元素',
  },
  {
    widget: 'FieldSet',
    key: '0002',
    span: 2, // 占据2列
    label: '空容器',
    props: {
      column: 3, // 子元素3等份排
      subTitle: '这个是一个空容器...',
    },
  },
  {
    widget: 'FieldSet',
    span: 2, // 占据2列
    key: '0003',
    label: '基础表单',
    props: {
      column: 3, // 子元素3等份排
      subTitle: '这个是一个描述信息...',
      children: [
        {
          key: '0003-1',
          widget: 'Input',
          name: 'input',
          label: '输入框',
        },
        {
          key: '0003-2',
          widget: 'InputNumber',
          name: 'inputNumber',
          label: '数字输入框',
          props: {
            min: 1,
            max: 999,
          },
        },
        {
          key: '0003-3',
          widget: 'Select',
          name: 'select',
          label: '下拉选',
          props: {
            options: [
              { label: '选项1', value: 1 },
              { label: '选项2', value: 2 },
            ],
          },
        },
      ],
    },
  },
  {
    key: '0004',
    widget: 'FieldSet',
    label: '无限嵌套',
    span: 2,
    props: {
      column: 2, // 内容2等份排
      children: [
        {
          key: '0004-1',
          widget: 'Input',
          name: 'input1',
          label: '第一层',
        },
        {
          widget: 'FieldSet',
          span: 2,
          label: '无限嵌套',
          key: '0004-2',
          props: {
            column: 2,
            children: [
              {
                key: '0004-2-1',
                widget: 'Input',
                name: 'input2',
                label: '第二层',
              },
              {
                widget: 'FieldSet',
                span: 2,
                label: '无限嵌套',
                key: '0004-2-2',
                props: {
                  column: 2,
                  children: [
                    {
                      key: '0004-2-2-1',
                      widget: 'Input',
                      name: 'input3',
                      label: '第三层',
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
];
export default schema;
