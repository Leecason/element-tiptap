<p align="center"><a href="https://github.com/Leecason/element-tiptap" target="_blank" rel="noopener noreferrer"><img src="/demos/assets/logo_for_github.png?raw=true" alt="ElTiptap logo"></a></p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/element-tiptap">
  <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/Leecason/element-tiptap">
  <img alt="npm peer dependency version" src="https://img.shields.io/badge/vue-%5E3.0.0-vue">
  <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  <img alt="GitHub" src="https://img.shields.io/github/license/Leecason/element-tiptap">
</p>

<h3 align="center">Element Tiptap Editor</h3>

A WYSIWYG rich-text editor using [tiptap2](https://github.com/ueberdosis/tiptap) and [Element Plus](https://github.com/element-plus/element-plus) for Vue3

that's easy to use, friendly to developers, fully extensible and clean in design.

## 🧊 Legacy

[Element Tiptap 1.0](https://github.com/Leecason/element-tiptap/tree/master)

## 📔 Languages

English | [简体中文](./README_ZH.md)

## 🎄 Demo

👉[https://leecason.github.io/element-tiptap](https://leecason.github.io/element-tiptap)

👾[Code Sandbox](https://codesandbox.io/s/element-tiptap-bwlnj)

## ✨ Features

- 🎨Use [element-plus](https://github.com/element-plus/element-plus) components
- 💅Many out of box [extensions](https://github.com/Leecason/element-tiptap#extensions) (welcome to submit an issue for feature request👏)
- 🔖Markdown support
- 📘TypeScript support
- 🌐I18n support(`en`, `zh`, `pl`, `ru`, `de`, `ko`, `es`, `zh_tw`, `fr`, `pt_br`, `nl`, `he`). welcome to contribute more languages
- 🎈Events you might use: `create`, `transaction`, `focus`, `blur`, `destroy`
- 🍀Fully extensible, you can customize editor extension and its menu button view
- 💻Also can control the behavior of the editor directly, customize the editor for yourself.

## 📦 Installation

### NPM

```shell
yarn add element-tiptap
```

Or

```shell
npm install --save element-tiptap
```

#### Install plugin

```js
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import ElementTiptapPlugin from 'element-tiptap';
// import ElementTiptap's styles
import 'element-tiptap/lib/style.css';

const app = createApp(App);

// use ElementPlus's plugin
app.use(ElementPlus);
// use this package's plugin
app.use(ElementTiptapPlugin);
// Now you register `'el-tiptap'` component globally.

app.mount('#app');
```

_Or_

#### Partial import

```vue
<template>
  <el-tiptap ...></el-tiptap>
</template>

<script setup>
import { ElementTiptap } from 'element-tiptap';
</script>
```

## 🚀 Usage

```vue
<template>
  <el-tiptap v-model:content="content" :extensions="extensions" />
</template>

<script setup>
import { ref } from 'vue';
import {
  // necessary extensions
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

// editor extensions
// they will be added to menubar and bubble menu by the order you declare.
const extensions = [
  Doc,
  Text,
  Paragraph,
  Heading.configure({ level: 5 }),
  Bold.configure({ bubble: true }), // render command-button in bubble menu.
  Underline.configure({ bubble: true, menubar: false }), // render command-button in bubble menu but not in menubar.
  Italic,
  Strike,
  BulletList,
  OrderedList,
];

// editor's content
const content = ref(`
  <h1>Heading</h1>
  <p>This Editor is awesome!</p>
`);
</script>
```

## 📔 Props

### extensions

Type: `Array`

You can use the necessary extensions. The corresponding command-buttons will be added by declaring the order of the extension.

All available extensions:

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

You can find all extensions docs [here](https://github.com/Leecason/element-tiptap/issues/107).

You can customize the extension. See [Custom extensions](https://tiptap.dev/guide/custom-extensions).

### placeholder

Type: `string`

Default: `''`

When editor is empty, placeholder will display.

```html
<el-tiptap placeholder="Write something …" />
```

### content

Type: `string`

Default: `''`

Editor's content

```html
<el-tiptap :content="content" @onUpdate="onEditorUpdate" />
```

or Use `'v-model'`

```html
<el-tiptap v-model:content="content" />
```

### output

Type: `string`

Default: `'html'`

Output can be defined to `'html'` or `'json'`.

```html
<el-tiptap output="json" />
```

further reading: [prosemirror data structure](https://prosemirror.net/docs/guide/#doc)

### readonly

Type: `boolean`

Default: `false`

```html
<el-tiptap readonly />
```

when `readonly` is `true`, editor is not editable.

### spellcheck

Type: `boolean`

Default: `false`

```html
<el-tiptap spellcheck> </el-tiptap>
```

Whether the content is spellcheck enabled.

### width, height

Type: `string | number`

A string value with unit or a simple value (the default unit is **`px`**)：

```html
<el-tiptap :width="700" height="100%"> </el-tiptap>
```

The above example will be converted to:

```css
width: 700px;
height: 100%;
```

### enableCharCount

Type: `boolean`

Default: `true`

Enables or disables the display of the character counter.

### tooltip

Type: `boolean`

Default: `true`

Control if tooltips are shown when getting with mouse over the buttons from the toolbar.

### locale

Specifies the editor i18n language.

```js
<template>
  <el-tiptap :locale="en"></el-tiptap>
</template>

<script setup>
import { ElementTiptap } from 'element-tiptap';
import en from 'element-tiptap/lib/locales/en';
</script>
```

Available languages:

- `en`(default)
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

Welcome contribution.

## 👽 Events

### onCreate

```vue
<template>
  <el-tiptap @onCreate="onCreate" />
</template>

<script setup>
/**
 * the tiptap editor instance
 * see https://tiptap.dev/api/editor
 */
const onCreate = ({ editor }) => {
  // ...
};
</script>
```

### onTransaction, onFocus, onBlur, onDestroy

The same as `onCreate`

## 🏗 Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## 📝 Changelog

[Changelog](https://github.com/Leecason/element-tiptap/blob/master/CHANGELOG.md)

## 📄 License

[MIT](https://github.com/Leecason/element-tiptap/blob/master/LICENSE)

## 💝 Buy Me A Coffee

I am so happy that so many people like this project, and I will do better with your support.

<p>
  <img alt="reward" src="/public/wechat_reward_qrcode.jpg?raw=true" width="300">
  <a href="https://www.buymeacoffee.com/leecason" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-blue.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
</p>
