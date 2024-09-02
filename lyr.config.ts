import { defineConfig } from 'lyr';

export default defineConfig({
  title: 'pro-components',
  favicon: 'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/assets/favicon.ico',
  link: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/monaco-file-icon.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.css',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/pro-components.min.css',
  ],
  devScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.development.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.development.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/pro-components.min.js',
  ],
  buildScript: [
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-markdown.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-router-dom.production.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/axios.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/track.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/babel-standalone.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/icon.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/design.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/code-editor.min.js',
    'https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/shared.min.js',
  ],
  serverPath: '/apis',
  menus: [
    {
      label: '介绍',
      path: '/pro-components',
      group: true,
    },
    {
      label: '表单相关',
      path: '/pro-components/form',
      group: true,
      children: [
        {
          label: 'Form 基本用法',
          path: '/pro-components/form/form-base',
        },
        {
          label: 'Form 高级用法',
          path: '/pro-components/form/form-advance',
        },
        {
          label: 'CardForm 卡片',
          path: '/pro-components/form/card-form',
        },
        {
          label: 'CreateModal 弹出层',
          path: '/pro-components/form/create-modal',
        },
        {
          label: 'CreateDrawer 抽屉',
          path: '/pro-components/form/create-drawer',
        },
        {
          label: 'StepForm 分布操作',
          path: '/pro-components/form/step-form',
        },
        {
          label: 'AnchorCardForm 锚点',
          path: '/pro-components/form/anchor-card-form',
        },
        {
          label: 'Search 查询',
          path: '/pro-components/form/search',
        },
        {
          label: 'TableList 编辑表格',
          path: '/pro-components/form/table-list',
        },
        {
          label: 'OssFileUpload 上传',
          path: '/pro-components/form/oss-file-upload',
        },
      ],
    },
    {
      label: '数据展示',
      path: '/pro-components/display',
      group: true,
      children: [
        {
          label: 'Table 数据表格',
          path: '/pro-components/display/table',
        },
        {
          label: 'AnchorCard 锚点卡片',
          path: '/pro-components/display/anchor-card',
        },
        {
          label: 'AppLayout 应用布局',
          path: '/pro-components/display/app-layout',
        },
      ],
    },
    {
      label: '拖拽相关',
      path: '/pro-components/dnd',
      group: true,
      children: [
        {
          label: 'DragWrapper 拖拽',
          path: '/pro-components/dnd/drag-wrapper',
        },
        {
          label: 'DragList 拖拽序列',
          path: '/pro-components/dnd/drag-list',
        },
        {
          label: 'DragForm 拖拽表单',
          path: '/pro-components/dnd/drag-form',
        },
      ],
    },
    {
      label: '其他',
      path: '/pro-omponents/other',
      group: true,
      children: [
        {
          label: 'Button 扩展',
          path: '/pro-components/other/button',
        },
        {
          label: 'Suspend 悬浮容器',
          path: '/pro-components/other/suspend',
        },
      ],
    },
    {
      label: '更新日志',
      path: '/pro-components/logs',
      group: true,
    },
  ],
});
