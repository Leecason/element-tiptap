<p align="center"><a href="https://github.com/Leecason/element-tiptap" target="_blank" rel="noopener noreferrer"><img src="/examples/assets/logo_for_github.png?raw=true" alt="ElTiptap logo"></a></p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/element-tiptap">
  <a href="https://www.codacy.com/manual/Leecason/element-tiptap?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Leecason/element-tiptap&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/33557c5554394b0ab5870797f33c61c3"/></a>
  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/Leecason/element-tiptap/master">
  <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/Leecason/element-tiptap">
  <img alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/element-tiptap/peer/vue?color=vue">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/Leecason/element-tiptap">
  <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  <img alt="GitHub" src="https://img.shields.io/github/license/Leecason/element-tiptap">
</p>

<h3 align="center">Element Tiptap Editor</h3>

一个 Vue.js 的基于 [tiptap](https://github.com/scrumpy/tiptap) 和 [element-ui](https://github.com/ElemeFE/element) 的 「所见即所得」 富文本编辑器。

## 📔 选择语言

[English](./README.md) | 简体中文

## 🎄 Demo

👉[https://leecason.github.io/element-tiptap](https://leecason.github.io/element-tiptap)

## ✨ 特色

- 🎨使用 [element-ui](https://github.com/ElemeFE/element) 组件
- 💅许多 [内置 extension](https://github.com/Leecason/element-tiptap#extensions)
- 🔖支持 markdown 语法
- 📘TypeScript 支持
- 🌐支持 i18n(`en`, `zh`, `pl`). 欢迎贡献更多的语言
- 🎈可用的 `events`: `init`, `transaction`, `focus`, `blur`, `paste`, `drop`, `update`
- 🍀高度自定义, 你可以使用 [tiptap](https://github.com/scrumpy/tiptap) 和 [Prosemirror](https://github.com/ProseMirror/prosemirror) 自定义 extension
- 🌂自定义菜单按钮
- 💭菜单按钮可以被渲染在菜单栏和气泡菜单中

## 📦 安装

### 通过 NPM

```shell
yarn add element-tiptap
```

或者

```shell
npm install --save element-tiptap
```

#### 安装插件

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import { ElementTiptapPlugin } from 'element-tiptap';
// 引入 ElementUI 样式
import 'element-ui/lib/theme-chalk/index.css';
// import element-tiptap 样式
import 'element-tiptap/lib/index.css';

// 安装 ElementUI 插件
Vue.use(ElementUI);
// 安装 element-tiptap 插件
Vue.use(ElementTiptapPlugin);
// 现在你已经在全局注册了 `el-tiptap` 组件。
```

或者

#### 局部引入

```vue
<template>
  <div>
    <el-tiptap ...><el-tiptap>
  </div>
</template>

<script>
import { ElementTiptap } from 'element-tiptap';

export default {
  components: {
    'el-tiptap': ElementTiptap,
  },
};
</script>
```

## 🌐 国际化

你可以在安装插件的时候声明

```js
Vue.use(ElementTiptapPlugin, {
  lang: 'zh',
});
```

可用的语言: `en`(默认), `zh`, `pl`.

欢迎贡献更多的语言.

## 🚀 用法

```vue
<template>
  <div>
    <el-tiptap
      v-model="content"
      :extensions="extensions"
    />
  </div>
</template>

<script>
import {
  // 需要的 extensions
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  BulletList,
  OrderedList,
} from 'element-tiptap';

export default {
  data () {
    // 编辑器的 extensions
    // 它们将会按照你声明的顺序被添加到菜单栏和气泡菜单中
    extensions: [
      new Doc(),
      new Text(),
      new Paragraph(),
      new Heading({ level: 5 }),
      new Bold({ bubble: true }), // 在气泡菜单中渲染菜单按钮
      new Underline(),
      new Italic(),
      new Strike(),
      new ListItem(),
      new BulletList(),
      new OrderedList(),
    ],
    // 编辑器的内容
    content: `
      <h1>Heading</h1>
      <p>This Editor is awesome!</p>
    `,
  },
},
</script>
```

## 📔 Props

### 扩展 extensions

Type: `Array`

你可以只使用需要的 extension，对应的菜单按钮将会按照你声明的顺序被添加。

所有可用的 extensions:
- `Doc`
- `Text`
- `Paragraph`
- `Heading`
- `Bold`
- `Italic`
- `Strike`
- `Underline`
- `Link`
- `Image`
- `Iframe`
- `CodeBlock`
- `Blockquote`
- `ListItem`
- `BulletList` (与 `ListItem` 一起使用)
- `OrderedList` (与 `ListItem`一起使用)
- `TodoItem`
- `TodoList` (与 `TodoItem` 一起使用)
- `TextAlign`
- `Indent`
- `LineHeight`
- `HorizontalRule`
- `HardBreak`
- `TrailingNode`
- `History`
- `Table` (与 `TableHeader`, `TableCell`, `TableRow` 一起使用)
- `TableHeader`
- `TableCell`
- `TableRow`
- `FormatClear`
- `TextColor`
- `TextHighlight`
- `Preview` (新)
- `Print` (新)
- `Fullscreen` (新)
- `SelectAll` (新)

你可以自定义菜单按钮的渲染视图

1) 创建你自己的 extension.

```js
// 你的 extension 文件
import { Bold } from 'element-tiptap';

export default class CustomBold extends Bold {
  menuBtnView (editorContext) {
    // editorContext 包含了一些对你有用的属性
    // 见 https://github.com/scrumpy/tiptap#editormenubar
    // ElementTiptap 将 editor 实例也添加到了其中
    return {
      component: CustomButton, // 你的组件
      componentProps: {
        ...
      },
    },
  }
}
```

2) 在组件中使用自定义 extension
```vue
<template>
  <el-tiptap :extensions="extensions" />
</template>

<script>
import CustomBold from '...'; // 引入你的 extension

export default {
  ...
  data () {
    return {
      extensions: [
        ...
        new CustomBold(),
      ],
    };
  },
};
</script>
```

### 占位符 placeholder

Type: `string`

Default: `''`

当编辑器没有内容的时候，将会显示 placeholder。

```html
<el-tiptap
  placeholder="Write something …"
/>
```

### 内容 content

Type: `string`

Default: `''`

编辑器的内容

```html
<el-tiptap
  :content="content"
  @onUpdate="onEditorUpdate"
/>
```

或者使用 `'v-model'`

```html
<el-tiptap
  v-model="content"
/>
```

### 输出 output

Type: `string`

Default: `'html'`

可被定义为 `'html'`(默认) 或者 `'json'`.

```html
<el-tiptap
  output="json"
/>
```

[prosemirror 数据解构](https://prosemirror.net/docs/guide/#doc)
[html and json output demo](https://leecason.github.io/element-tiptap/#/preview)

### readonly

Type: `boolean`

Default: `false`

```html
<el-tiptap
  :readonly="true"
/>
```

当 `readonly` 为 `true`, 编辑器不可编辑。

## 👽 事件 Events

### Init

```vue
<template>
  <el-tiptap
    @onInit="onInit"
  />
</template>

<script>
export default {
  ...
  methods: {
    // 参数 (object)
    // {
    //   editor: Editor, // 编辑器 editor 的实例
    // }
    methods: {
      onInit ({ editor }) {

      },
    },
  },
},
</script>
```

[tiptap editor properties](https://github.com/scrumpy/tiptap#editor-properties)

### Transaction, Focus, Blur, Paste, Drop

用法与 `init` 相同

## ⚗️ 插槽

### 菜单栏 menubar

你可以自定义菜单栏并且可以通过作用域插槽获取到一些属性。

属性：[https://github.com/scrumpy/tiptap#editormenubar](https://github.com/scrumpy/tiptap#editormenubar)

```html
<el-tiptap
  v-model="content"
  :extensions="extensions"
>
  <!-- Vue 在 2.6.0 中，为具名插槽和作用域插槽引入了一个新的统一的语法
  https://cn.vuejs.org/v2/guide/components-slots.html -->
  <template #menubar="{ commands, isActive }">
    <!--渲染自定义菜单按钮-->
    <custom-button
      :class="{ 'is-active': isActive.bold() }"
      @click="commands.bold"
    >
      Bold
    </custom-button>
  </template>
</el-tiptap>
```

### 气泡菜单 menububble

与自定义菜单栏相同的方式来自定义气泡菜单。

属性: [https://github.com/scrumpy/tiptap#editormenububble](https://github.com/scrumpy/tiptap#editormenububble)

```html
<el-tiptap
  v-model="content"
  :extensions="extensions"
>
  <template #menububble="{ commands, isActive }">
    <custom-button
      :class="{ 'is-active': isActive.bold() }"
      @click="commands.bold"
    >
      Bold
    </custom-button>
  </template>
</el-tiptap>
```

### 底部 footer

编辑器的底部，在编辑器内容的后面

## 📝 更新日志
[更新日志](https://github.com/Leecason/element-tiptap/blob/master/CHANGELOG.md)

## 📄 许可证
[MIT](https://github.com/Leecason/element-tiptap/blob/master/LICENSE)

## 🚩TODO

- [x] demo 页面
- [x] `Table` extension
- [x] `Iframe` extension
- [ ] `FontFamily` extension
- [ ] `FontSize` extension
- [x] `TextColor` extension
- [x] `TextHighlight` extension
- [ ] `Emoji` extension
- [x] `Fullscreen` extension
- [x] `Print` extension
- [x] `Preview` extension
- [x] `SelectAll` extension
- [x] i18n
- [x] 编辑器 readonly
- [ ] 改变图片尺寸
- [ ] 主题
