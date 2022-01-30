<template>
  <div class="el-tiptap-editor__menu-bar">
    <component
      v-for="(spec, i) in generateCommandButtonComponentSpecs()"
      :key="'command-button' + i"
      :is="spec.component"
      :enable-tooltip="true"
      v-bind="spec.componentProps"
      :readonly="false"
      v-on="spec.componentEvents || {}"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
// import { Component, Prop, Vue, Inject } from 'vue-property-decorator';
import { Editor } from '@tiptap/core';
// import { MenuBtnViewType } from '@/../types';

export default defineComponent({
  name: 'Menubar',
  components: {},
  props: {
    editor: {
      type: Editor,
      required: true,
    },
  },

  setup() {
    const t = inject('t');

    return { t };
  },

  methods: {
    generateCommandButtonComponentSpecs() {
      const extensionManager = this.editor.extensionManager;
      console.log(extensionManager.extensions);
      return extensionManager.extensions.reduce((acc, extension) => {
        const { button } = extension.options;
        if (!button || typeof button !== 'function') return acc;

        const menuBtnComponentSpec = button({
          editor: this.editor,
          t: this.t,
          extension,
        });

        if (Array.isArray(menuBtnComponentSpec)) {
          return [...acc, ...menuBtnComponentSpec];
        }

        return [...acc, menuBtnComponentSpec];

        // const menuBtnComponentSpec = extension.menuBtnView({
        //   editor: this.editor,
        //   // t: this.et.t, // i18n
        // });
        // if (Array.isArray(menuBtnComponentSpec)) {
        //   return [...acc, ...menuBtnComponentSpec];
        // }

        // return [...acc, menuBtnComponentSpec];
      }, []);
    },
  },
});
</script>
