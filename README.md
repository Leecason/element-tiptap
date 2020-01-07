<p align="center"><a href="https://github.com/Leecason/element-tiptap" target="_blank" rel="noopener noreferrer"><img src="/examples/assets/logo_for_github.png?raw=true" alt="ElTiptap logo"></a></p>

<p align="center">
  <img alt="npm" src="https://img.shields.io/npm/v/element-tiptap">
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Leecason/element-tiptap">
  <img alt="npm peer dependency version" src="https://img.shields.io/npm/dependency-version/element-tiptap/peer/vue?color=vue">
  <img alt="CircleCI" src="https://img.shields.io/circleci/build/github/Leecason/element-tiptap">
  <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
  <img alt="GitHub" src="https://img.shields.io/github/license/Leecason/element-tiptap">
</p>

A WYSIWYG editor based on [tiptap](https://github.com/scrumpy/tiptap) and uses [Element's](https://github.com/ElemeFE/element) components.

## 🎄 Demo
![ScreenShot](/examples/assets/screenshot.png?raw=true)
[Live Demo](https://leecason.github.io/element-tiptap)

## ✨ Features

- use [Element's](https://github.com/ElemeFE/element) components
- markdown support
- events you might use: `init`, `transaction`, `focus`, `blur`, `paste`, `drop`, `update`
- add your own extensions
- customize all extension menu button view
- menu buttons can render in menubar and bubble menu
- all it's up to you.

## 📦 Installation

```shell
yarn add element-tiptap
```

Or

```shell
npm install --save element-tiptap
```

## 🚀 Usage

Install `element-tiptap` plugin.

```js
import Vue from 'vue';
import { ElementTiptapPlugin } from 'element-tiptap';

Vue.use(ElementTiptapPlugin);
```

Now you globally register `'element-tiptap'` component.

### Import extensions in component

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
- `BulletList`
- `OrderedList`
- `TodoItem`
- `TodoList`
- `TextAlign`
- `Indent`
- `LineHeight`
- `HorizontalRule`
- `HardBreak`
- `TrailingNode`
- `History`
- `Table`
- `TableHeader`
- `TableCell`
- `TableRow`
- `FormatClear`
- `TextColor`

You can customize the extension menu button view,

1) create your custom extension.

```js
// create your extension file
import { Bold } from 'element-tiptap';

export default class CustomBold extends Bold {
  menuBtnView (editorContext) {
    // editorContext contains a collection of properties that are useful to you
    // see https://github.com/scrumpy/tiptap#editormenubar
    // ElTiptap plus editor instance to editorContext.
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
  <el-tiptap :extensions="extensions />
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

When editor is empty, placeholder will display.

```vue
<el-tiptap
  placeholder="Write something …"
/>
```

### content

Editor's content

```vue
<el-tiptap
  :content="content"
  @onUpdate="onEditorUpdate"
/>
```

or Use `'v-model'`

```vue
<el-tiptap
  v-model="content"
/>
```

### output

Output can be defined to `'html'`(default) or `'json'`.

```vue
<el-tiptap
  output="json"
/>
```

## 👽 Events

### Init

```vue
<template>
  <el-tiptap
    @init="onInit"
  />
</template>

<script>
export default {
  ...
  methods: {
    // argument (object)
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

### Transaction, Focus, Blur, Paste, Drop

The same as `init`

## ⚗️ Slots

### menubar

You can customize the menubar.

```vue
<el-tiptap
  v-model="content"
  :extensions="extensions"
>
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

```vue
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

## 📝 Changelog
[Changelog](https://github.com/Leecason/element-tiptap/blob/master/CHANGELOG.md)

## 💪 Roadmap
- TypeScript
- Font Size
- Font Type

## 📄 License
[MIT](https://github.com/Leecason/element-tiptap/blob/master/LICENSE)
