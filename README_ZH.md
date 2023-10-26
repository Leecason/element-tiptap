<p align="center"><a href="https://github.com/Leecason/element-tiptap" target="_blank" rel="noopener noreferrer"><img src="/demos/assets/logo_for_github.png?raw=true" alt="ElTiptap logo"></a></p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/element-tiptap">
  <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/Leecason/element-tiptap">
  <img alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/element-tiptap/peer/vue?color=vue">
  <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  <img alt="GitHub" src="https://img.shields.io/github/license/Leecason/element-tiptap">
</p>

<h3 align="center">Element Tiptap Editor</h3>

一个 Vue3 的基于 [tiptap](https://github.com/ueberdosis/tiptap) 和 [Element Plus](https://github.com/element-plus/element-plus) 的 「所见即所得」 富文本编辑器

易上手，对开发者友好，可扩展性强，设计简洁

## 💥 2.0 目前在 alpha 版本

支持 Vue3，基于 [tiptap2](https://github.com/ueberdosis/tiptap) 和 [Element Plus](https://github.com/element-plus/element-plus)，[查看详情](https://github.com/Leecason/element-tiptap/tree/alpha)

## 📔 选择语言

[English](./README.md) | 简体中文

## 🎄 Demo

👉[https://leecason.github.io/element-tiptap](https://leecason.github.io/element-tiptap)

👾[Code Sandbox](https://codesandbox.io/s/element-tiptap-bwlnj)

## ✨ 特色

- 🎨 使用 [element-plus](https://github.com/element-plus/element-plus) 组件
- 💅 许多开箱即用的 [extension](https://github.com/Leecason/element-tiptap#extensions) (欢迎提交 issue 为新的 feature 留下建议 👏)
- 🔖 支持 markdown 语法
- 📘TypeScript 支持
- 🌐 支持 i18n(`en`, `zh`, `pl`, `ru`, `de`, `ko`, `es`, `zh_tw`, `fr`, `pt_br`, `nl`, `he`). 欢迎贡献更多的语言
- 🎈 可用的 `events`: `create`, `transaction`, `focus`, `blur`, `destroy`
- 🍀 高度自定义, 你可以自定义 extension 和它对应的菜单按钮视图
- 💻 也可以通过直接控制编辑器的行为来定制编辑器。

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
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import ElementTiptapPlugin from 'element-tiptap';
// import element-tiptap 样式
import 'element-tiptap/lib/style.css';

// 安装 ElementUI 插件
app.use(ElementPlus);
// 安装 element-tiptap 插件
app.use(ElementTiptapPlugin);
// 现在你已经在全局注册了 `el-tiptap` 组件。

app.mount('#app');
```

_或者_

#### 局部引入

```vue
<template>
  <el-tiptap ...><el-tiptap>
</template>

<script setup>
import { ElementTiptap } from 'element-tiptap';
</script>
```

## 🚀 用法

```vue
<template>
  <el-tiptap v-model:content="content" :extensions="extensions" />
</template>

<script setup>
import { ref } from 'vue';
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
  BulletList,
  OrderedList,
} from 'element-tiptap';

// 编辑器的 extensions
// 它们将会按照你声明的顺序被添加到菜单栏和气泡菜单中
const extensions = [
  Doc,
  Text,
  Paragraph,
  Heading.configure({ level: 5 }),
  Bold.configure({ bubble: true }), // 在气泡菜单中渲染菜单按钮
  Underline.configure({ bubble: true, menubar: false }), // 在气泡菜单而不在菜单栏中渲染菜单按钮
  Italic,
  Strike,
  BulletList,
  OrderedList,
];

// 编辑器的内容
const content = ref(`
  <h1>Heading</h1>
  <p>This Editor is awesome!</p>
`);
</script>
```

## 📔 Props

### 扩展 extensions

类型: `Array`

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
- `BulletList`
- `OrderedList`
- `TaskList`
- `TextAlign`
- `Indent`
- `LineHeight`
- `HorizontalRule`
- `HardBreak`
- `History`
- `Table`
- `FormatClear`
- `Color`
- `Highlight`
- `Print`
- `Fullscreen`
- `SelectAll`
- `FontFamily`
- `FontSize`
- `CodeView`

[查看](https://github.com/Leecason/element-tiptap/issues/107)所有 extensions 的文档

你可以自定义 extension. 查看 [Custom extensions](https://tiptap.dev/guide/custom-extensions).

### 占位符 placeholder

类型: `string`

默认值: `''`

当编辑器没有内容的时候，将会显示 placeholder。

```html
<el-tiptap placeholder="Write something …" />
```

### 内容 content

类型: `string`

默认值: `''`

编辑器的内容

```html
<el-tiptap :content="content" @onUpdate="onEditorUpdate" />
```

或者使用 `'v-model'`

```html
<el-tiptap v-model:content="content" />
```

### 输出 output

类型: `string`

默认值: `'html'`

可被定义为 `'html'`(默认) 或者 `'json'`.

```html
<el-tiptap output="json" />
```

进一步了解: [prosemirror 数据结构](https://prosemirror.net/docs/guide/#doc)

### readonly

类型: `boolean`

默认值: `false`

```html
<el-tiptap readonly />
```

当 `readonly` 为 `true`, 编辑器不可编辑。

### spellcheck

类型: `boolean`

默认值: 插件 `spellcheck` 配置项的值

```html
<el-tiptap spellcheck> </el-tiptap>
```

编辑器内容是否开启拼写检查。

### width, height

类型: `string | number`

带单位的字符串值，无单位的值会将 **`px`** 作为单位:

```html
<el-tiptap :width="700" height="100%"> </el-tiptap>
```

上例会被转换为:

```css
width: 700px;
height: 100%;
```

### showMenubar

类型: `boolean`

默认值: `true`

是否显示 menubar

### enableCharCount

类型: `boolean`

默认值: `true`

是否显示字数统计

### tooltip

类型: `boolean`

默认值: `true`

鼠标移到按钮上时是否显示 tooltip

### locale

指定编辑器国际化语言

```js
<template>
  <el-tiptap :locale="zh"></el-tiptap>
</template>

<script setup>
import { ElementTiptap } from 'element-tiptap';
import zh from 'element-tiptap/lib/locales/zh';
</script>
```

可用的语言:

- `en`(默认)
- `zh`
- `pl` by @FurtakM
- `ru` by @baitkul
- `de` by @Thesicstar
- `ko` by @Hotbrains
- `es` by @koas
- `zh_tw` by @eric0324
- `fr` by @LPABelgium
- `pt_br` by @valterleonardo
- `nl` by @Arne-Jan
- `he` by @shovalPMS

欢迎贡献更多的语言.

## 👽 事件 Events

### onCreate

```vue
<template>
  <el-tiptap @onCreate="onCreate" />
</template>

<script setup>
/**
 * tiptap editor 实例
 * 阅读 https://tiptap.scrumpy.io/docs/guide/editor.html
 */
const onCreate = ({ editor }) => {
  // ...
};
</script>
```

### onTransaction, onFocus, onBlur, onDestroy

用法与 `init` 相同

## 🏗 贡献代码

详细信息见 [CONTRIBUTING](CONTRIBUTING.md)

## 📝 更新日志

[更新日志](https://github.com/Leecason/element-tiptap/blob/master/CHANGELOG.md)

## 📄 许可证

[MIT](https://github.com/Leecason/element-tiptap/blob/master/LICENSE)

## 💝 Buy Me A Coffee

看到这么多人喜欢这个项目我非常开心，有了你们的支持我会做的更好。

<p>
  <img alt="reward" src="/public/wechat_reward_qrcode.jpg?raw=true" width="300">
  <a href="https://www.buymeacoffee.com/leecason" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
</p>
