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

A WYSIWYG rich-text editor using [tiptap](https://github.com/scrumpy/tiptap) and [Element UI](https://github.com/ElemeFE/element) for Vue.js

that's easy to use, friendly to developers, fully extensible and clean in design.

## 📔 Languages

English | [简体中文](./README_ZH.md)

## 🎄 Demo

👉[https://leecason.github.io/element-tiptap](https://leecason.github.io/element-tiptap)
👾[Code Sandbox](https://codesandbox.io/s/element-tiptap-bwlnj)

## ✨ Features

- 🎨Use [element-ui](https://github.com/ElemeFE/element) components
- 💅Many [native extensions](https://github.com/Leecason/element-tiptap#extensions) can be used directly
- 🔖Markdown support
- 📘TypeScript support
- 🌐I18n support(`en`, `zh`, `pl`). welcome to contribute more languages
- 🎈Events you might use: `init`, `transaction`, `focus`, `blur`, `paste`, `drop`, `update`
- 🍀Fully extensible, you can customize extension with [tiptap](https://github.com/scrumpy/tiptap) and [Prosemirror](https://github.com/ProseMirror/prosemirror)
- 🌂Customize all extension menu button view
- 💭Menu buttons can render in menubar and bubble menu

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
import Vue from 'vue';
import ElementUI from 'element-ui';
import { ElementTiptapPlugin } from 'element-tiptap';
// import ElementUI's styles
import 'element-ui/lib/theme-chalk/index.css';
// import this package's styles
import 'element-tiptap/lib/index.css';

// use ElementUI's plugin
Vue.use(ElementUI);
// use this package's plugin
Vue.use(ElementTiptapPlugin, { /* plugin options */ });
// Now you register `'el-tiptap'` component globally.
```

Default plugin options:

```js
{
  lang: "en", // see i18n
  spellcheck: true, // can be overwritten by editor prop
}
```

_Or_

#### Partial import

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

## 🌐 I18n

You can declare when you install the plugin.

```js
Vue.use(ElementTiptapPlugin, {
  lang: 'zh',
});
```

Available languages: `en`(default), `zh`, `pl`.

Welcome contribution.

## 🚀 Usage

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
  // necessary extensions
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
    // editor extensions
    // they will be added to menubar and bubble menu by the order you declare.
    extensions: [
      new Doc(),
      new Text(),
      new Paragraph(),
      new Heading({ level: 5 }),
      new Bold({ bubble: true }), // render command-button in bubble menu.
      new Underline(),
      new Italic(),
      new Strike(),
      new ListItem(),
      new BulletList(),
      new OrderedList(),
    ],
    // editor's content
    content: `
      <h1>Heading</h1>
      <p>This Editor is awesome!</p>
    `,
  },
},
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
- `ListItem`
- `BulletList` (use with `ListItem`)
- `OrderedList` (use with `ListItem`)
- `TodoItem`
- `TodoList` (use with `TodoItem`)
- `TextAlign`
- `Indent`
- `LineHeight`
- `HorizontalRule`
- `HardBreak`
- `TrailingNode`
- `History`
- `Table` (use with `TableHeader`, `TableCell`, `TableRow`)
- `TableHeader`
- `TableCell`
- `TableRow`
- `FormatClear`
- `TextColor`
- `TextHighlight`
- `Preview` (New)
- `Print` (New)
- `Fullscreen` (New)
- `SelectAll` (New)

You can customize the extension menu button view

1) create your custom extension.

```js
// create your extension file
import { Bold } from 'element-tiptap';

export default class CustomBold extends Bold {
  menuBtnView (editorContext) {
    // editorContext contains some properties that are useful to you
    // see https://github.com/scrumpy/tiptap#editormenubar
    // this package append editor instance to editorContext
    return {
      component: CustomButton, // your component
      componentProps: {
        ...
      },
    },
  }
}
```

2) use custom extension in component
```vue
<template>
  <el-tiptap :extensions="extensions" />
</template>

<script>
import CustomBold from '...'; // import your extension

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

### placeholder

Type: `string`

Default: `''`

When editor is empty, placeholder will display.

```html
<el-tiptap
  placeholder="Write something …"
/>
```

### content

Type: `string`

Default: `''`

Editor's content

```html
<el-tiptap
  :content="content"
  @onUpdate="onEditorUpdate"
/>
```

or Use `'v-model'`

```html
<el-tiptap
  v-model="content"
/>
```

### output

Type: `string`

Default: `'html'`

Output can be defined to `'html'` or `'json'`.

```html
<el-tiptap
  output="json"
/>
```

[prosemirror data structure](https://prosemirror.net/docs/guide/#doc)
[html and json output demo](https://leecason.github.io/element-tiptap/#/preview)

### readonly

Type: `boolean`

Default: `false`

```html
<el-tiptap
  :readonly="true"
/>
```

when `readonly` is `true`, editor is not editable.

### spellcheck

Type: `boolean`

Default: plugin `spellcheck` option value

```html
<el-tiptap
  :spellcheck="true"
>
</el-tiptap>
```

Whether the content is spellcheck enabled.

## 👽 Events

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
    // arguments (object)
    // {
    //   editor: Editor, // tiptap editor instance
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

The same as `init`

## ⚗️ Slots

### menubar

You can customize the menubar and will receive some properties through a scoped slot.

properties: [https://github.com/scrumpy/tiptap#editormenubar](https://github.com/scrumpy/tiptap#editormenubar)

```html
<el-tiptap
  v-model="content"
  :extensions="extensions"
>
  <!-- new syntax for slot since Vue 2.6.0
  see: https://vuejs.org/v2/guide/components-slots.html -->
  <template #menubar="{ commands, isActive }">
    <!--You can render custom menu buttons.-->
    <custom-button
      :class="{ 'is-active': isActive.bold() }"
      @click="commands.bold"
    >
      Bold
    </custom-button>
  </template>
</el-tiptap>
```

### menububble

Customize the bubble menu like menubar.

properties: [https://github.com/scrumpy/tiptap#editormenububble](https://github.com/scrumpy/tiptap#editormenububble)

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

### footer
Footer of the editor, after the editor content.

## 🏗 Contribution

1. fork this project
2. edit code
3. PR

_OR_

1. Just create an issue!

## 📝 Changelog
[Changelog](https://github.com/Leecason/element-tiptap/blob/master/CHANGELOG.md)

## 📄 License
[MIT](https://github.com/Leecason/element-tiptap/blob/master/LICENSE)

## 🚩TODO

I'm continuously working to add in new features 💪.

- [x] demo page
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
- [x] readonly editor
- [x] image resizable
- [ ] theme
