```jsx | pureReact
export default () => {
  return (
    <>
      <p
        className="package-version"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          position: 'relative',
          top: 3,
        }}
      >
        <a
          href={`https:///www.npmjs.com/package/@yl-d/pro-components`}
          target="_blank"
        >
          <img alt="npm" src={`https://img.shields.io/npm/dt/@yl-d/pro-components`} />
        </a>
        <a
          href={`https:///www.npmjs.com/package/@yl-d/pro-components`}
          target="_blank"
        >
          <img
            alt="NPM downloads"
            src={`https://img.shields.io/npm/v/@yl-d/pro-components.svg`}
          />
        </a>
      </p>
    </>
  );
};
```

## 说明

- 将视图层 Jsx 中所依赖的配置抽离成独立 schema 模块，避免后期不同人开发导致单个页面庞大不好维护

- 采用统一的开发模式，提高项目代码的统一性、可读性、在一定程度上即使你不会 React 也可以完成基础的 CRUD 的页面（后端同学）且代码风格一致

- 统一管理表单项，我们希望所有的表单被统一管理，我们能有入口可以拦截到，去做一些事情。

## 安装

### 组件库本身依赖 arco.design，使用需要同时安装 arco.design

```js
pnpm install @arco-design/web-react
pnpm install @yl-d/pro-components
```

## 使用 cdn

```html
<link
  rel="stylesheet"
  href="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/pro-components.min.css"
/>
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/@yl-d/pro-components.min.js"></script>
```

> 依赖 cdn

```html
<!-- window.React -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react.production.min.js"></script>
<!-- window.ReactDOM -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/react-dom.production.min.js"></script>
<!-- window.jsxRuntime -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/jsx-runtime.polyfill.js"></script>
<!-- window.arco -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco.min.js"></script>
<!-- window.arcoicon -->
<script src="https://lyr-cli-oss.oss-cn-beijing.aliyuncs.com/cdn/arco-icon.min.js"></script>
```

## 优势

- 基于 arco.design 的 Form 表单进行扩展、增强，编写好配置即可完成复杂的渲染和交互逻辑

- 扩展多种异步选择器的 `widgets`，可以满足大部分的查询场景用少量代码即可实现

- 内置组件，支持详情和编辑 2 种渲染模式可一键切换

- 通过支持自定义渲染、自定义组件的模式，可以 100%覆盖业务场景

## 扩展 widget

```tsx | pureReact
import { Button } from '@yl-d/pro-components';

export default () => {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {[
        'Render 自定义渲染',
        'AsyncSelect 支持异步',
        'AsyncCheckGroup 支持异步',
        'AsyncRadioGroup 支持异步',
        'AsyncTreeSelect 支持异步',
        'DebounceSelect 设置防抖',
        'AsyncCascader 支持异步',
        'AsyncRender 自定义异步渲染',
        'RangeInput 数字范围输入框',
        'FormList 子表单',
        'TableList 编辑表格',
        'BlockQuote 平级区块',
        'FieldSet 父子级区块',
        'OssFileUpload 文件上传',
      ].map((item) => {
        return (
          <Button size="small" key={item}>
            {item}
          </Button>
        );
      })}
    </div>
  );
};
```

## 配置说明

> 我们将模型转为 Jsx 的过程中会做一些默认处理，减少配置，如下

- Input 开启计数器，最大长度 `64`
- 输入框 placeholder `请输入`，下拉框 placeholder `请选择`
- 输入框、选择框开启 `allowClear`
- 下拉选、下拉树选择，默认开启 `showSearch`
- FormItem required: true 等于 rules:[{required: true, message: `${label}不能为空`}]

## 修改配置

```ts
import { setGlobalConfig } from '@yl-d/pro-components';

setGlobalConfig({
  defaultInputMaxLength: 64,
  defaultOpenAllowClear: true,
  defaultFillPlaceholder: true,
  defaultShowInputCount: true,
  autoTrimInputSpaceOnBlur: true,
  defaultShowSearch: true,
  defaultSetPopupContainer: true,
});

export interface GlobalConfigProps {
  /** 默认输入框最大长度 */
  defaultInputMaxLength: number;
  /** 是否开启自动填充 placeholder */
  defaultFillPlaceholder: boolean;
  /** 是否开启自动清空 */
  defaultOpenAllowClear: boolean;
  /** 输入框失去焦点自动清除前后空格 */
  autoTrimInputSpaceOnBlur: boolean;
  /** 默认展示输入框的计数器 */
  defaultShowInputCount: boolean;
  /** 默认开启下拉选模糊查询(支持大小写和trim) */
  defaultShowSearch?: boolean;
  /** 默认给下拉选设置 PopupContainer */
  defaultSetPopupContainer?: boolean;
}
```

## 高级用法

- [如何处理的简单联动](#/pro-components/form/form-advance#使用effect实现联动交互)
- [如何支持定制化渲染逻辑](#/pro-components/form/form-advance#使用自定义渲染)
- [如何编写自定义组件](#/pro-components/form/form-advance#使用自定义组件)
- [下拉选择数据源是通过接口获取的怎么在模型中配置](#/pro-components/form/form-advance#使用异步的options)
- [弹出一个提交表单，不希望通过 visible 控制怎么实现](#/pro-components/form/create-modal)
