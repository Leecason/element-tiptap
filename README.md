<p align="center"><a href="https://github.com/Leecason/element-tiptap" target="_blank" rel="noopener noreferrer"><img src="/examples/assets/logo_for_github.png?raw=true" alt="ElTiptap logo"></a></p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/element-tiptap">
  <img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/Leecason/element-tiptap">
  <img alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/element-tiptap/peer/vue?color=vue">
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
- 💅Many out of box [extensions](https://github.com/Leecason/element-tiptap#extensions) (welcome to submit an issue for feature request👏)
- 🔖Markdown support
- 📘TypeScript support
- 🌐I18n support(`en`, `zh`, `pl`, `ru`, `de`, `ko`, `es`, `zh_tw`, `fr`, `pt_br`, `nl`, `he`). welcome to contribute more languages
- 🎈Events you might use: `init`, `transaction`, `focus`, `blur`, `paste`, `drop`, `update`
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
    <el-tiptap ...></el-tiptap>
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
    return {
      extensions: [
        new Doc(),
        new Text(),
        new Paragraph(),
        new Heading({ level: 5 }),
        new Bold({ bubble: true }), // render command-button in bubble menu.
        new Underline({ bubble: true, menubar: false }), // render command-button in bubble menu but not in menubar.
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
    };
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
- `Preview`
- `Print`
- `Fullscreen`
- `SelectAll`
- `FontType`
- `FontSize`
- `CodeView` (🆕)

You can find all extensions docs [here](https://github.com/Leecason/element-tiptap/issues/107).

You can customize the extension menu button view

1) create your custom extension.

```js
// create your extension file
import { Bold } from 'element-tiptap';

export default class CustomBold extends Bold {
  menuBtnView (editorContext) {
    // editorContext contains some properties that are useful to you, such as isActive, commands, etc
    // more detailed docs check this https://github.com/scrumpy/tiptap#editormenubar
    // this package append editor instance to editorContext
    return {
      component: CustomButton, // your component
      componentProps: { // bind to your component with v-bind
        ...
      },
      componentEvents: { // bind to your component with v-on
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

[Here](https://github.com/Leecason/element-tiptap/issues/10#issuecomment-600979545) is the example of how to create your extension button view (an extension can also render multiple menu buttons).

### editorProperties

Type: `Object`

Default: `{}`

Tiptap `Editor` properties (passed to the constructor).

see the full list of properties [here](https://github.com/scrumpy/tiptap#editor-properties).

[`editorProps`](https://prosemirror.net/docs/ref/#view.EditorProps) is a powerful prop in this list, you can use this prop to control the behavior of the editor directly, customize the editor for yourself.

❗not available properties❗(they are used in this package):

- `content`
- `editable`
- `useBuiltInExtensions`
- `extensions`
- `onInit`
- `OnFocus`
- `onBlur`
- `onUpdate`

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

further reading: [prosemirror data structure](https://prosemirror.net/docs/guide/#doc)

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

### width, height

Type: `string | number`

A string value with unit or a simple value (the default unit is **`px`**)：

```html
<el-tiptap
  :width="700"
  height="100%"
>
</el-tiptap>
```

The above example will be converted to:

```css
width: 700px;
height: 100%;
```

### showMenubar

Type: `boolean`

Default: `true`

Enables or disables the display of the menubar.

### charCounterCount

Type: `boolean`

Default: `true`

Enables or disables the display of the character counter.

### tooltip

Type: `boolean`

Default: `true`

Control if tooltips are shown when getting with mouse over the buttons from the toolbar.

### lang

Type: `string`

Default: plugin `lang` option value

```html
<el-tiptap
  lang="zh"
>
</el-tiptap>
```

Specifies the editor i18n language.

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
    /*
     * the tiptap editor instance
     * see https://tiptap.scrumpy.io/docs/guide/editor.html
    */
    onInit ({ editor }) {

    },
  },
},
</script>
```

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
