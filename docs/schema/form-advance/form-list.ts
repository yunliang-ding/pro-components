import { SchemaProps } from '@yl-d/pro-components';
import { BigNumber } from '@yl-d/shared';

const schema: SchemaProps[] = [
  {
    widget: 'Select',
    label: '联系人类型',
    name: 'userType',
    required: true,
    props: {
      options: [
        {
          label: '联系人类型1',
          value: 1,
        },
        {
          label: '联系人类型2',
          value: 2,
        },
      ],
    },
  },
  {
    widget: 'InputNumber',
    label: '收入总和(元)',
    name: 'totalAmount',
    disabled: true,
    extra: '子表单收入合计',
    effect: ['contactList.{{index}}.amount', 'contactList'],
    onEffect(name, { getFieldValue, setFieldsValue }) {
      const contactList = getFieldValue('contactList');
      const amount = contactList
        .filter((i) => !!i?.amount)
        .map((i) => i?.amount);
      if (Array.isArray(amount) && amount.length > 0) {
        setFieldsValue({
          totalAmount: BigNumber.add(...amount),
        });
      }
    },
  },
  {
    widget: 'FormList',
    name: 'contactList',
    label: '联系人表单',
    required: true,
    span: 3,
    props: {
      label: '联系人',
      maxCount: 3, // 最多3条
      // operation: false, // 不可操作
      // readOnly: true // 只读
      // disabled: true // 禁用
      leastOne: true, // 至少一条
      column: 3, // 3列
      grid: {
        rowGap: 0,
        colGap: 20,
      },
      children: [
        {
          widget: 'Input',
          name: 'name',
          label: '姓名',
          required: true,
        },
        {
          widget: 'InputNumber',
          name: 'amount',
          label: '收入(元)',
          required: true,
          effect: ['contactList.{{index}}.name'],
          onEffect(name, { setSchemaByName }) {
            setSchemaByName(
              ['contactList', this.name.split('.')[1], 'amount'].join('.'),
              {
                label: '收入(元)-动态修改',
              },
            );
          },
          disabled({ getFieldValue }) {
            const name =
              getFieldValue('contactList')[this.name.split('.')[1]]?.name;
            return name === '' || name === undefined;
          },
        },
        {
          widget: 'AsyncCheckGroup',
          name: 'liked',
          label: '爱好',
          required: true,
          tooltip: '和联系人类型关联',
          effect: ['userType'],
          effectClearField: true,
          props: {
            options: async ({ getFieldValue }) => {
              return [
                {
                  label: '听音乐',
                  value: 1,
                },
                {
                  label: '学习',
                  value: 2,
                },
                {
                  label: '跑步健身',
                  value: 3,
                },
                {
                  label: '联动选项',
                  value: 4,
                  disabled: getFieldValue('userType') === 1,
                },
              ];
            },
          },
        },
        {
          widget: 'Select',
          name: 'sex',
          label: '性别',
          required: true,
          props: {
            options: [
              {
                label: '男',
                value: 1,
              },
              {
                label: '女',
                value: 2,
              },
            ],
          },
        },
        {
          widget: 'Input',
          name: 'age',
          label: '年龄',
          required: true,
          effect: ['contactList.{{index}}.sex'],
          visible({ contactList }) {
            return contactList[this.name.split('.')[1]]?.sex === 1;
          },
        },
      ],
    },
  },
];
export default schema;
