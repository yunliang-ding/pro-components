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
  docsRequire: {
    ArcoDesign: '@arco-design/web-react',
    ArcoIcon: '@arco-design/web-react/icon',
    axios: 'axios',
  },
  menus: [
    {
      label: '介绍',
      path: '/',
      group: true,
    },
    {
      label: '表单相关',
      path: '/form',
      group: true,
      children: [
        {
          label: 'Form 基本用法',
          path: '/form/form-base',
        },
        {
          label: 'Form 高级用法',
          path: '/form/form-advance',
        },
        {
          label: 'CardForm 卡片',
          path: '/form/card-form',
        },
        {
          label: 'CreateModal 弹出层',
          path: '/form/create-modal',
        },
        {
          label: 'CreateDrawer 抽屉',
          path: '/form/create-drawer',
        },
        {
          label: 'StepForm 分布操作',
          path: '/form/step-form',
        },
        {
          label: 'AnchorCardForm 锚点',
          path: '/form/anchor-card-form',
        },
        {
          label: 'Search 查询',
          path: '/form/search',
        },
        {
          label: 'TableList 编辑表格',
          path: '/form/table-list',
        },
        {
          label: 'OssFileUpload 上传',
          path: '/form/oss-file-upload',
        },
      ],
    },
    {
      label: '数据展示',
      path: '/display',
      group: true,
      children: [
        {
          label: 'Table 数据表格',
          path: '/display/table',
        },
        {
          label: 'AnchorCard 锚点卡片',
          path: '/display/anchor-card',
        },
        {
          label: 'AppLayout 应用布局',
          path: '/display/app-layout',
        },
      ],
    },
    {
      label: '拖拽相关',
      path: '/dnd',
      group: true,
      children: [
        {
          label: 'DragWrapper 拖拽',
          path: '/dnd/drag-wrapper',
        },
        {
          label: 'DragList 拖拽序列',
          path: '/dnd/drag-list',
        },
        {
          label: 'DragForm 拖拽表单',
          path: '/dnd/drag-form',
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
          path: '/other/button',
        },
        {
          label: 'Suspend 悬浮容器',
          path: '/other/suspend',
        },
      ],
    },
    {
      label: '更新日志',
      path: '/logs',
      group: true,
    },
  ],
});
