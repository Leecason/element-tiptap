# [1.18.0](https://github.com/Leecason/element-tiptap/compare/@1.17.2...@1.18.0) (2020-04-02)


### Features

* **font-type:** ✨ add new extension FontType ([0c5bd28](https://github.com/Leecason/element-tiptap/commit/0c5bd28be985f3771222853989f1673c9c6f5e30))
* **i18n:** support german ([46bd42c](https://github.com/Leecason/element-tiptap/commit/46bd42c38f6b9ed1fdf3ff23d7f37de93a0a5493))

## [1.17.2](https://github.com/Leecason/element-tiptap/compare/@1.17.1...@1.17.2) (2020-03-31)


### Bug Fixes

* **fullscreen:** 🐛 fix editor fullscreen width, height ([acc52dd](https://github.com/Leecason/element-tiptap/commit/acc52dde881508caf3892cc8b2998b673aa140f3))
* 🐛 @ProvideReactive (https://github.com/Leecason/element-tiptap/issues/39) ([c5dc5b6](https://github.com/Leecason/element-tiptap/commit/c5dc5b6bf0b9230f32aa5b96d3adc32733a65882))

## [1.17.1](https://github.com/Leecason/element-tiptap/compare/@1.17.0...@1.17.1) (2020-03-30)


### Bug Fixes

* 🐛 temporarily remove EditorView type check, https://github.com/Leecason/element-tiptap/issues/21#issuecomment-605615966 ([1232f26](https://github.com/Leecason/element-tiptap/commit/1232f269703c64fede92d85f0d51deefb737eb77)), closes [/github.com/Leecason/element-tiptap/issues/21#issuecomment-605615966](https://github.com//github.com/Leecason/element-tiptap/issues/21/issues/issuecomment-605615966)
* **fullscreen:** 🐛 use fixed position instead fullscreen API because the append-to-body element is invisble in fullscreen mode https://github.com/Leecason/element-tiptap/issues/21#issuecomment-605615794 ([042a22a](https://github.com/Leecason/element-tiptap/commit/042a22afe3ea687e9158325164b19459debe12c1)), closes [/github.com/Leecason/element-tiptap/issues/21#issuecomment-605615794](https://github.com//github.com/Leecason/element-tiptap/issues/21/issues/issuecomment-605615794)
* **i18n:** 🐛 fix wrong polish translation ([d2bb414](https://github.com/Leecason/element-tiptap/commit/d2bb414b3b8f6bc2536ad2b8eae3faa10c9664bf))

# [1.17.0](https://github.com/Leecason/element-tiptap/compare/@1.16.2...@1.17.0) (2020-03-28)


### Features

* **editor:** ✨ a new prop: editorProps, enable customize editor for yourself with it ([532e8a3](https://github.com/Leecason/element-tiptap/commit/532e8a34efdd69625c4615b310714a395c9334c9))
* **editor:** ✨ add editor props: width, height (https://github.com/Leecason/element-tiptap/issues/23) ([1290fb0](https://github.com/Leecason/element-tiptap/commit/1290fb0f03da90297f58f4a708360e4656bdc64a))
* **image:** ✨ add image bubble menu, enable edit image alt, width, height ([9791533](https://github.com/Leecason/element-tiptap/commit/9791533931532bf3a4ff9299d4b7e263afffe590))
* **image:** ✨ enable update imgae display: float_left and float_right ([3adf51b](https://github.com/Leecason/element-tiptap/commit/3adf51b62d33982da0aafb582fe29cdc6bec69f7))
* **image:** ✨ enable update imgae display: inline or break_text ([6f27fbd](https://github.com/Leecason/element-tiptap/commit/6f27fbd8577ceaa49e392b117e560f21e7c73af9))
* **image:** ✨ parse img dom to node, add img data-display style ([a6680a4](https://github.com/Leecason/element-tiptap/commit/a6680a41aabd11cf4e344183570b9837a56529db))
* **image:** 💫 add image-view outline hover color ([655cef3](https://github.com/Leecason/element-tiptap/commit/655cef3ba635fb553692122ec600f8520b896330))
* **image:** 💫 improve image outline-color when resizing, try to resolve popover wrong position after edit size, add core func comments ([26f65ad](https://github.com/Leecason/element-tiptap/commit/26f65ada10f94ad8d3baecc9c26188baaae864ad))
* **image:** 💫 show loading when image uploading ([c915aea](https://github.com/Leecason/element-tiptap/commit/c915aea2e1fe8ee84a248ed45f703dce31429471))

## [1.16.2](https://github.com/Leecason/element-tiptap/compare/@1.16.1...@1.16.2) (2020-03-26)


### Bug Fixes

* 🐛 spellcheck init in component partial usage (fix https://github.com/Leecason/element-tiptap/issues/31) ([8eb1e91](https://github.com/Leecason/element-tiptap/commit/8eb1e91c9eff3befee7111fc66a3df462ab06457))

## [1.16.1](https://github.com/Leecason/element-tiptap/compare/@1.16.0...@1.16.1) (2020-03-23)


### Bug Fixes

* typos in some labels ([ede1659](https://github.com/Leecason/element-tiptap/commit/ede16592454afdb821f4b4bb2af64d6667d3b0ca))
* **color:** 🐛 set color-item border-box ([8962c01](https://github.com/Leecason/element-tiptap/commit/8962c01b4c18b65a35c8727eb08ac63b67498490))

# [1.16.0](https://github.com/Leecason/element-tiptap/compare/@1.15.0...@1.16.0) (2020-03-22)


### Bug Fixes

* **dialog:** 🐛 nested dialog ([bd83b9c](https://github.com/Leecason/element-tiptap/commit/bd83b9c171f91fa340b22ff24647349950bc7d04))
* 🐛 bubble menu render error when select color ([80678e2](https://github.com/Leecason/element-tiptap/commit/80678e2880ad2d658289a11fefd58b4d480ebc2c))


### Features

* **color:** ✨ new ui for color_picker, add [#000](https://github.com/Leecason/element-tiptap/issues/000) to default colorSet ([6954354](https://github.com/Leecason/element-tiptap/commit/6954354146893ea1ebbbef154bec3a65fd84559e))
* **color:** ✨ support hex color input ([648ea43](https://github.com/Leecason/element-tiptap/commit/648ea435143236fd35d48b954d89cbbaffbe22fb))

# [1.15.0](https://github.com/Leecason/element-tiptap/compare/@1.14.0...@1.15.0) (2020-03-19)


### Features

* Add russiang i18n locale ([9e7f241](https://github.com/Leecason/element-tiptap/commit/9e7f24166ede13bbecd9cc0d39dd44d25a5eebee))

# [1.14.0](https://github.com/Leecason/element-tiptap/compare/@1.13.0...@1.14.0) (2020-03-15)


### Bug Fixes

* 🐛 bubble menu bind command_ button component events ([6c94328](https://github.com/Leecason/element-tiptap/commit/6c943280a512d730a81e3a2e6a9f959775a735cd))
* 💄 dropdown menu item active style ([29b2a5f](https://github.com/Leecason/element-tiptap/commit/29b2a5f9cb72ead5fbfe9ca6d3bf12fdb805a5c5))


### Features

* ✨ active fullscreen command_button if fullscreen ([54420d9](https://github.com/Leecason/element-tiptap/commit/54420d961dc1c0867e063e15224265de4b02ef73))
* ✨ show remove_image button when image selected ([095d5cd](https://github.com/Leecason/element-tiptap/commit/095d5cd783eefa272ada34f88a884b60796c79c0))

# [1.13.0](https://github.com/Leecason/element-tiptap/compare/@1.12.0...@1.13.0) (2020-03-13)


### Bug Fixes

* 🌐 editor characters i18n ([18a3935](https://github.com/Leecason/element-tiptap/commit/18a39356adfb230de279e53fd66df2097014d039))
* 💄 tweak bubble menu position and style ([1c73e04](https://github.com/Leecason/element-tiptap/commit/1c73e04c3a5c529a18eb0f688f3eef2682d3374a))


### Features

* ✨ add Code extension ([dab5bdc](https://github.com/Leecason/element-tiptap/commit/dab5bdc98fda90b17a3d47a0bb61a144d184658e))
* ✨ edit link in bubble menu ([8b93b2c](https://github.com/Leecason/element-tiptap/commit/8b93b2cf52b3102d683e0f3859d16ee0f7ad7063))
* ✨ make image resizable ([d3523e7](https://github.com/Leecason/element-tiptap/commit/d3523e73646bd6778a801567519bfc1049e6f34f))
* ✨ open link in bubble menu ([8768f82](https://github.com/Leecason/element-tiptap/commit/8768f8207f7e408bdeb7b2af46f2d7cff3f49f0a))
* ✨ select link when clicked ([825d8ca](https://github.com/Leecason/element-tiptap/commit/825d8ca675774409b1b5f4704d03e2bda4146056))
* ✨ spellcheck attribute for editor ([876c497](https://github.com/Leecason/element-tiptap/commit/876c4976473006e2400e502deca7cdd5d1bb9cb6))
* ✨ unlink in bubble menu ([d991841](https://github.com/Leecason/element-tiptap/commit/d991841543e7f1d2d7e4a394a7fcfa75c48b2f25))
* 💄 editor characters style ([3261f3b](https://github.com/Leecason/element-tiptap/commit/3261f3b5a20a854823d7058ba0fd690c97ce50b6))
* 💄 new ui for command button ([6e924cc](https://github.com/Leecason/element-tiptap/commit/6e924cc28ffae2bcb808f4ffca2b9d1c377ca92b))
* 💄 new ui for menubar and menububble ([5204444](https://github.com/Leecason/element-tiptap/commit/5204444b36d5b4a7948bb40c2ea091b4526c228d))

# [1.12.0](https://github.com/Leecason/element-tiptap/compare/@1.11.0...@1.12.0) (2020-03-10)


### Features

* ✨ add characters count to editor footer ([ede119e](https://github.com/Leecason/element-tiptap/commit/ede119efbb39f8c182949afa4c7f90df48d4a8df))
* ✨ add SelectAll extension ([1054270](https://github.com/Leecason/element-tiptap/commit/105427034b234b38ef255d61d4388cc51d609dbf))
* 💄 pointer cursor for link ([e94085c](https://github.com/Leecason/element-tiptap/commit/e94085c47504bd8b9097dcad6c0e061f75e73340))

# [1.11.0](https://github.com/Leecason/element-tiptap/compare/@1.10.2...@1.11.0) (2020-03-06)


### Bug Fixes

* 🐛 resolve error caused by import element-ui styles ([3454506](https://github.com/Leecason/element-tiptap/commit/34545061c21662e032281f0cf2d8f65da4c54cdd))


### Features

* **line_height:** 💄 add line_height dropdown trigger to click ([b1d2d71](https://github.com/Leecason/element-tiptap/commit/b1d2d71cf3b97f8118e3cd7b7dd1b43d5a8e5abe))
* **tooltip:** 💫 use el-zoom-in-bottom transition ([cbfcb2e](https://github.com/Leecason/element-tiptap/commit/cbfcb2e2e4ffac4b4965e4a23c4a2595c40b2bf6))

## [1.10.2](https://github.com/Leecason/element-tiptap/compare/@1.10.1...@1.10.2) (2020-03-05)


### Bug Fixes

* 🐛 remove extensions ([9fc839e](https://github.com/Leecason/element-tiptap/commit/9fc839e594ee6d57613e731223653c627826adab))
* 🐛 type definitions ([228e972](https://github.com/Leecason/element-tiptap/commit/228e9720fff2866d82648a66a21ab7e2c19f128b))
* 🐛 types attributes in package.json ([4dd78dc](https://github.com/Leecason/element-tiptap/commit/4dd78dc391674d03645b4b681de87ccd768cc433))
* 🐛 unpack element-ui dropdown ([ee38e0d](https://github.com/Leecason/element-tiptap/commit/ee38e0d05fccb4eb1c254f33163c7fdf8418054a))
* 💄 border-box with command_button ([97d369f](https://github.com/Leecason/element-tiptap/commit/97d369fd24330053621d3ec75a85d3cc2efbaa5c))

## [1.10.1](https://github.com/Leecason/element-tiptap/compare/@1.10.0...@1.10.1) (2020-03-02)


### Bug Fixes

* 🐛 set color_popover box-sizing attribute border-box ([4056a23](https://github.com/Leecason/element-tiptap/commit/4056a23550d19673e50757ece2a6d802ca1110a8))
* 🐛 use Message.prompt instead instance property ([dfe8aff](https://github.com/Leecason/element-tiptap/commit/dfe8aff354ad2b296c8ae026a4177f4f50cdc8a4))

# [1.10.0](https://github.com/Leecason/element-tiptap/compare/@1.9.1...@1.10.0) (2020-03-01)


### Bug Fixes

* 🐛 import clearMarks from utils ([dfbfb85](https://github.com/Leecason/element-tiptap/commit/dfbfb8549c8c493c03428c82ac0ae81eefb5a0e9))


### Features

* ✨ add Fullscreen extension ([42a63e9](https://github.com/Leecason/element-tiptap/commit/42a63e91564d2afcf38a4c8fb85faf9278cd23f6))
* ✨ add Preview extension ([50a510e](https://github.com/Leecason/element-tiptap/commit/50a510ef5dba89fc99f97f9ace5288f2acb5193f))
* ✨ add Print extension ([9206135](https://github.com/Leecason/element-tiptap/commit/920613553e8fb73f7a85abce1e490fa8ecaf52b1))

## [1.9.1](https://github.com/Leecason/element-tiptap/compare/@1.9.0...@1.9.1) (2020-02-26)


### Bug Fixes

* 🐛 editor content style ([52fd69c](https://github.com/Leecason/element-tiptap/commit/52fd69cdd6823ab75e3dfb0e2ae77bca0559ae56))

# [1.9.0](https://github.com/Leecason/element-tiptap/compare/@1.8.0...@1.9.0) (2020-02-25)


### Bug Fixes

* 🐛 ALIGN_PATTERN ([10aeaf6](https://github.com/Leecason/element-tiptap/commit/10aeaf6263408fd6c504e4c40accf5336a3b1ee5))
* 🐛 correct isListNode parameters types ([462475b](https://github.com/Leecason/element-tiptap/commit/462475b581fa0631e2c74fef9bb384ab38a6f95d))
* 🐛 register component ([8f9880a](https://github.com/Leecason/element-tiptap/commit/8f9880a43aedd88adc9dbf16005c0d2cac47342f))
* 🐛 transformLineHeightToCSS parameter types ([a49125c](https://github.com/Leecason/element-tiptap/commit/a49125c6a97a3b47035fb925461065dd2508631c))
* 🐛 zh lang add_column_after typo ([19d9e10](https://github.com/Leecason/element-tiptap/commit/19d9e106e3d9a389d5ebce4489ff4d43667bb482))
* 💄 blockquote margin ([c495a93](https://github.com/Leecason/element-tiptap/commit/c495a93cf72a74c134013857280a251964215203))
* 💄 line_height dropdown active item style ([0daaa38](https://github.com/Leecason/element-tiptap/commit/0daaa38e9b4c5c7e154dcc2d4de69cc15526c910))
* 📝 ProsemirrorNode typo ([524fdaf](https://github.com/Leecason/element-tiptap/commit/524fdaf866cd7c09703959815711a69a12a92a00))


### Features

* ✨ add tiptap, tiptap-extensions, tiptap-commands types definitions ([f08165a](https://github.com/Leecason/element-tiptap/commit/f08165a2dda9b1d2fe7d485d0be2101a7619c732))
* ✨ add types folder for npm package ([dbc433d](https://github.com/Leecason/element-tiptap/commit/dbc433d183f19071a94bb1fb8a3ab77204cb69be))
* ✨ vue add typescript ([bf3395a](https://github.com/Leecason/element-tiptap/commit/bf3395a6273047cf1753af9bcf9fa2b8330417d9))

# [1.9.0-beta.2](https://github.com/Leecason/element-tiptap/compare/@1.9.0-beta.1...@1.9.0-beta.2) (2020-02-24)


### Bug Fixes

* 🐛 register component ([8f9880a](https://github.com/Leecason/element-tiptap/commit/8f9880a43aedd88adc9dbf16005c0d2cac47342f))


### Features

* ✨ add types folder for npm package ([dbc433d](https://github.com/Leecason/element-tiptap/commit/dbc433d183f19071a94bb1fb8a3ab77204cb69be))

# [1.9.0-beta.1](https://github.com/Leecason/element-tiptap/compare/@1.8.0...@1.9.0-beta.1) (2020-02-23)


### Bug Fixes

* 🐛 ALIGN_PATTERN ([10aeaf6](https://github.com/Leecason/element-tiptap/commit/10aeaf6263408fd6c504e4c40accf5336a3b1ee5))
* 🐛 correct isListNode parameters types ([462475b](https://github.com/Leecason/element-tiptap/commit/462475b581fa0631e2c74fef9bb384ab38a6f95d))
* 🐛 transformLineHeightToCSS parameter types ([a49125c](https://github.com/Leecason/element-tiptap/commit/a49125c6a97a3b47035fb925461065dd2508631c))
* 🐛 zh lang add_column_after typo ([19d9e10](https://github.com/Leecason/element-tiptap/commit/19d9e106e3d9a389d5ebce4489ff4d43667bb482))
* 💄 line_height dropdown active item style ([0daaa38](https://github.com/Leecason/element-tiptap/commit/0daaa38e9b4c5c7e154dcc2d4de69cc15526c910))
* 📝 ProsemirrorNode typo ([524fdaf](https://github.com/Leecason/element-tiptap/commit/524fdaf866cd7c09703959815711a69a12a92a00))


### Features

* ✨ add tiptap, tiptap-extensions, tiptap-commands types definitions ([f08165a](https://github.com/Leecason/element-tiptap/commit/f08165a2dda9b1d2fe7d485d0be2101a7619c732))
* ✨ vue add typescript ([bf3395a](https://github.com/Leecason/element-tiptap/commit/bf3395a6273047cf1753af9bcf9fa2b8330417d9))

# [1.8.0](https://github.com/Leecason/element-tiptap/compare/@1.7.2...@1.8.0) (2020-02-21)


### Features

* **i18n:** 🌐i18n pl support ([578c2fe](https://github.com/Leecason/element-tiptap/commit/578c2feca29a26a37253c16d293219d634f26873))

## [1.7.2](https://github.com/Leecason/element-tiptap/compare/@1.7.1...@1.7.2) (2020-02-08)


### Bug Fixes

* **i18n:** 🌐 capitalize Heading paragraph button ([0dc3000](https://github.com/Leecason/element-tiptap/commit/0dc300057e1655bec475b10498ea066ab64ea466))

## [1.7.1](https://github.com/Leecason/element-tiptap/compare/@1.7.0...@1.7.1) (2020-01-31)


### Bug Fixes

* **i18n:** 🐛 rename $i18n -> t to fix conflict with vue-i18n ([650bf69](https://github.com/Leecason/element-tiptap/commit/650bf69eaae753310664b6e15c28458367327fa2))
* **style:** 💄 reset default tag style ([6a18a95](https://github.com/Leecason/element-tiptap/commit/6a18a95e6e4bb4f565fd248a47e48ded4cf67bb4))

# [1.7.0](https://github.com/Leecason/element-tiptap/compare/@1.6.0...@1.7.0) (2020-01-21)


### Features

* **i18n:** 🌐 enable config lang when install plugin ([d5e1def](https://github.com/Leecason/element-tiptap/commit/d5e1defabecef315d8753540be497ab1316b8a26))
* **i18n:** 🌐 support 'zh' lang ([09ab9df](https://github.com/Leecason/element-tiptap/commit/09ab9df2f43413718ca09dc3474b59b194d146ec))
* **i18n:** 🌐 translate extension button tooltip ([22d458c](https://github.com/Leecason/element-tiptap/commit/22d458ca2d6155f26318255efbdeee270639463f))
* **i18n:** 🌐 translate extension control text ([279247f](https://github.com/Leecason/element-tiptap/commit/279247f479c84d5f70d641c4339135bda9430682))

# [1.6.0](https://github.com/Leecason/element-tiptap/compare/@1.5.0...@1.6.0) (2020-01-16)


### Bug Fixes

* **heading:** paragraph command in heading_dropdown not work ([46d161c](https://github.com/Leecason/element-tiptap/commit/46d161c75e9017556d25bb4751fa684c396ed10d))
* **line-height:** clear_format shuold reset line_height ([2158ad6](https://github.com/Leecason/element-tiptap/commit/2158ad6019ef8f6441533e81511d691c9efbb2e5))


### Features

* add TextHighlight extension ([715790e](https://github.com/Leecason/element-tiptap/commit/715790e67e8b1d9637253e070d827be37a5c9bb8))
* autoInstall function for CDN usage ([b044ce6](https://github.com/Leecason/element-tiptap/commit/b044ce6ee265517fcb8d30f054d18de47c573706))
* enable cleart color in colorPopover ([62675d8](https://github.com/Leecason/element-tiptap/commit/62675d89743a67156992f732f5ab5699d85c9bda))
* **editor:** add el-tiptap readonly prop ([9949163](https://github.com/Leecason/element-tiptap/commit/994916363931b49b9bded69e9dae2f3eb7268425))
* **style:** add command button style file ([1f66c25](https://github.com/Leecason/element-tiptap/commit/1f66c2539b682b8e63ac9bc0d3865ee94aadc409))
* **style:** extract editor menu style ([d21c89d](https://github.com/Leecason/element-tiptap/commit/d21c89d9f2d718ecb8e8618b7d95665a65cee95f))
* refactor lineHeight extension, change default line_heights options, todo_list support textAlign and lineHeight ([dbac82c](https://github.com/Leecason/element-tiptap/commit/dbac82c149c8fff9e73ce659f5c4d3ad703e16a8))
* **style:** add editor style file ([f2d38c8](https://github.com/Leecason/element-tiptap/commit/f2d38c83e8c7f16b06b72f8a0e6807458a643f52))
* **style:** add editor style file ([20b2229](https://github.com/Leecason/element-tiptap/commit/20b2229a076e0c92dc3743d5e5607a97134d906f))
* **tooltip:** add arrow and open-delay ([ac7c65c](https://github.com/Leecason/element-tiptap/commit/ac7c65c202c7ab853bc045e52fbb597f50f2752d))
* **tooltip:** update tooltip text ([91d2c80](https://github.com/Leecason/element-tiptap/commit/91d2c8058f4e7557c6b83242a85572b13c6d47a2))

# [1.5.0](https://github.com/Leecason/element-tiptap/compare/@1.4.1...@1.5.0) (2020-01-07)


### Bug Fixes

* 💄 safari menubar style bug ([d7803cd](https://github.com/Leecason/element-tiptap/commit/d7803cd2154979af0bffb7c5abed5ac26d0cc96a))


### Features

* ✨ add FormatClear extension ([5f9530e](https://github.com/Leecason/element-tiptap/commit/5f9530e19d577b693d05e7df28a151338d52e6ea))
* ✨ add paragraph dropdown-item in heading dropdown ([3996f60](https://github.com/Leecason/element-tiptap/commit/3996f60b7dcbbecceaeedb97ab30c2fed66c6e9e))
* ✨ add TextColor extension to change text color ([5bf2981](https://github.com/Leecason/element-tiptap/commit/5bf2981748d5d9f3e9696bd7bd6d1484a9062ff3))
* ✨ enable insert image by url ([70f7aae](https://github.com/Leecason/element-tiptap/commit/70f7aae0b1b9834be02136790ffaf1c1a3e24862))

## [1.4.1](https://github.com/Leecason/element-tiptap/compare/@1.4.0...@1.4.1) (2020-01-03)


### Bug Fixes

* 🐛 align left cant work bug ([859224b](https://github.com/Leecason/element-tiptap/commit/859224b260e99dfbd4aa98fe44cafd5502cf40f5))

# [1.4.0](https://github.com/Leecason/element-tiptap/compare/@1.3.0...@1.4.0) (2020-01-01)


### Features

* ✨ add iframe extension to insert embeds ([290ac2c](https://github.com/Leecason/element-tiptap/commit/290ac2cac59e30c42a2627564550e758f5fbfce2))
* ✨ merge cells and split cell in table ([c27d694](https://github.com/Leecason/element-tiptap/commit/c27d6942007d5b861e32153c0e2de7b2518a334b))

# [1.3.0](https://github.com/Leecason/element-tiptap/compare/@1.2.0...@1.3.0) (2019-12-31)


### Bug Fixes

* 🎨 selectedCell background-color ([6f98473](https://github.com/Leecason/element-tiptap/commit/6f984735fca9ca9a514843dcaa8b653b60b5db34))


### Features

* ✨ add table menu button and select table grid size popover ([7419071](https://github.com/Leecason/element-tiptap/commit/74190719835d0100ab042c12500d16076aaa988e))
* ✨ create table with custom row and col ([5b60281](https://github.com/Leecason/element-tiptap/commit/5b602814d7c110e8c5fb5de5a6fe6a86571d2126))
* ✨ enable insert row and column in table ([abfb489](https://github.com/Leecason/element-tiptap/commit/abfb489ebf7528d2ba04ad37823a08890e9250d0))
* 💄 table colunm_resize_handle and selected_cell style ([5beb81d](https://github.com/Leecason/element-tiptap/commit/5beb81dc0892657136a9feb7f4779f81f0939198))

# [1.2.0](https://github.com/Leecason/element-tiptap/compare/@1.1.0...@1.2.0) (2019-12-28)


### Bug Fixes

* 🐛 ensure heading extension attr level is number type ([a1d51aa](https://github.com/Leecason/element-tiptap/commit/a1d51aa8799fa1c9c037ec72132bbc7657939cf6))
* 💄 editor content text-align, default to left ([0631364](https://github.com/Leecason/element-tiptap/commit/0631364ace1913c7c2ed0b3d0217ef1b97792e82))
* 🔧 remove unnecessary peerDependencies ([f183a7b](https://github.com/Leecason/element-tiptap/commit/f183a7b6cd57a829731508acde94105d56edf13a))


### Features

* ✨ support hard_break extension ([d3daa6a](https://github.com/Leecason/element-tiptap/commit/d3daa6ad37105cdb75c6b7848922881a88a68f31))

# [1.1.0](https://github.com/Leecason/element-tiptap/compare/@1.0.1...@1.1.0) (2019-12-23)


### Features

* 🎨 inject style in js file ([0fe9cf6](https://github.com/Leecason/element-tiptap/commit/0fe9cf62f12105afe889e202b17dabb8c8bc547a))
* 🎨 on command import element components ([fea07f6](https://github.com/Leecason/element-tiptap/commit/fea07f620de3cf9a0ae98507e2dd31637e89846c))
* 🔧 package type ([4afe657](https://github.com/Leecason/element-tiptap/commit/4afe657f3a3a2513a19a17364c9b77e9ce214fe6))

## [1.0.1](https://github.com/Leecason/element-tiptap/compare/@1.0.0...@1.0.1) (2019-12-22)


### Bug Fixes

*  🔧 package.json config ([bcfe269](https://github.com/Leecason/element-tiptap/commit/bcfe26973fc9c795006af2fe2419bd6c32ad348c))

# 1.0.0 (2019-12-20)


### Bug Fixes

* 🎨 lint ([1f8768e](https://github.com/Leecason/element-tiptap/commit/1f8768e4d661e9782e4908480f124bfea51aca58))
* 🐛 alias entries, remove utils alias ([65416b8](https://github.com/Leecason/element-tiptap/commit/65416b8b0e49f7855e05463792ab9c1e4456206a))
* 🐛 emit init event when editor instantiated ([41cf7d8](https://github.com/Leecason/element-tiptap/commit/41cf7d824568cff94115d1c9937a0ac8cd940132))
* 🐛 fontawesome dependencies ([75baf34](https://github.com/Leecason/element-tiptap/commit/75baf34fd1454c5e7bbf1bac35c47ece2ec17de9))
* 🐛 relative path ([a206b2e](https://github.com/Leecason/element-tiptap/commit/a206b2eee46033e96b23a328f54ccab4d955c5bd))


### Features

* ✨ apply link ([b3d3295](https://github.com/Leecason/element-tiptap/commit/b3d32956ca4976f3d6a2b9ecefdde3de43c6d40c))
* ✨ base example route ([1b1a49d](https://github.com/Leecason/element-tiptap/commit/1b1a49de383d455e32e583355dde4b517c32f41c))
* ✨ editor content prop ([de9585d](https://github.com/Leecason/element-tiptap/commit/de9585d4f4bbd0bb94bab711851e300eb5201b55))
* ✨ editor placeholder ([6165a58](https://github.com/Leecason/element-tiptap/commit/6165a58fcfa3a89a0d548731e97cfd29becd7f16))
* ✨ editor placeholder prop ([a092923](https://github.com/Leecason/element-tiptap/commit/a0929238b7d6cb2a2bc55de2acb51e76e9a8cc37))
* ✨ emit events ([0444b44](https://github.com/Leecason/element-tiptap/commit/0444b44f6f9dfa3d6ea949af1ef5ed95ef4c319b))
* ✨ emit events and support v-model ([71d37a3](https://github.com/Leecason/element-tiptap/commit/71d37a33692f27f7d4203f20dad94eb1ed9c883c))
* ✨ event route ([d76b404](https://github.com/Leecason/element-tiptap/commit/d76b404d71ef6e9e3719fcc353e671c180f3d60a))
* ✨ export ElTiptapPlugin ([281c4f9](https://github.com/Leecason/element-tiptap/commit/281c4f91c39dcd43533583cddc14ef36ef42cb5f))
* ✨ footer slot ([d706fce](https://github.com/Leecason/element-tiptap/commit/d706fce491c216a4a65f0c0bce34d69a37362fde))
* ✨ image extension support httpRequest options ([fe236c5](https://github.com/Leecason/element-tiptap/commit/fe236c56e10dc08f30de0d6b9fc39ae7ef73a2e1))
* ✨ line_height extension ([eb467e1](https://github.com/Leecason/element-tiptap/commit/eb467e1707e9ca9039e589f0b9d6c26243b43e21))
* ✨ menu bubble ([40c2bd6](https://github.com/Leecason/element-tiptap/commit/40c2bd620f8293af994f49decd9d5d6d48606d45))
* ✨ menu bubble route ([0bcc936](https://github.com/Leecason/element-tiptap/commit/0bcc93646a15c709191589597c0c14db321afd81))
* ✨ output prop ([2f7cad5](https://github.com/Leecason/element-tiptap/commit/2f7cad5c78f531aeae7208294ce2944239e35e2a))
* ✨ output route ([550fe2c](https://github.com/Leecason/element-tiptap/commit/550fe2cc554844ec40c8efc760f51ac369d494e2))
* ✨ page style, add github link ([9f32208](https://github.com/Leecason/element-tiptap/commit/9f32208aaaa7b6fe84176862c44624f32aad3562))
* ✨ support custom necessary alignments ([2807f2d](https://github.com/Leecason/element-tiptap/commit/2807f2da66800b10d8bc15b034301b413e06166e))
* ✨ todo list ([6115c99](https://github.com/Leecason/element-tiptap/commit/6115c997f902953250c4a2370e427048281d5f38))
* ✨ upload image ([26ac703](https://github.com/Leecason/element-tiptap/commit/26ac70309b5e583f7d9776666aedb21fcdd9308d))
* ✨ use vue-awesome instead [@fortawesome](https://github.com/fortawesome) ([f22f0e3](https://github.com/Leecason/element-tiptap/commit/f22f0e313f3acde8c14f6c12dfb5e9d80be63e05))
* 🎨 beforeDestroy hook and onUpdate method ([55826ca](https://github.com/Leecason/element-tiptap/commit/55826ca7e1fad51b204863b56cc0d137d4035f0f))
* 🎨 generate extensions ([da52e1e](https://github.com/Leecason/element-tiptap/commit/da52e1ef3d7d02766d03e7c8ddd9585487527330))
* 🎨 menubar slot ([a300a4e](https://github.com/Leecason/element-tiptap/commit/a300a4e1b232974f3924c91e46319da0a8be4ab1))
* 🎨 use fontawesome vue component, remove CDN ([3a08a45](https://github.com/Leecason/element-tiptap/commit/3a08a45c9a7ae9aa6817c85e306d7cc902d0567e))
* 💄 add logo ([74954f5](https://github.com/Leecason/element-tiptap/commit/74954f50048890ea813831b5af2ab8f76d4c0bc6))
* 💄 homepage navigation style ([5710ccc](https://github.com/Leecason/element-tiptap/commit/5710cccf3de6c4265ec0ddeef9b63194329bf778))
* 🔥 remove paragraph default menu button ([410b205](https://github.com/Leecason/element-tiptap/commit/410b205ee4d09bbe88154038087f438d4963c732))
* 🚧 base editor, support bold, underline, italic, strike, undo, redo ([a728ccc](https://github.com/Leecason/element-tiptap/commit/a728ccc2b41c79997f406a5234260aca818dec34))
* 🚧 paragraph command button ([d291a6f](https://github.com/Leecason/element-tiptap/commit/d291a6f926ca0be894663d20d556ac3b1a2e4f7a))
* 🚧 render editor content ([0d16cfc](https://github.com/Leecason/element-tiptap/commit/0d16cfc5a93fab5d6d58a169f6573295df3ab857))
* 🚧 support blockquote ([8b4dd26](https://github.com/Leecason/element-tiptap/commit/8b4dd263ad2b28e162a17645e612ea68b440a316))
* 🚧 support bullet_list and ordered_list ([c94f7e4](https://github.com/Leecason/element-tiptap/commit/c94f7e4feac7592acc33da22b7028e20459b972f))
* 🚧 support code ([f9a3298](https://github.com/Leecason/element-tiptap/commit/f9a3298c0e7bf7fef833311e37db746f8d6ac9c5))
* 🚧 support heading ([61b6e6c](https://github.com/Leecason/element-tiptap/commit/61b6e6c89cd04209b12d6c2bb431e59529811f2c))
* 🚧 support horizontal_rule, trailing_node ([a58fc9b](https://github.com/Leecason/element-tiptap/commit/a58fc9b4e58dcb94ebc3467c571b20b4612a568c))
* 🚧 support indent, outdent ([7451271](https://github.com/Leecason/element-tiptap/commit/7451271887323d90206bec543c77251ac1cc8915))
* 🚧 support text_align ([c47bec6](https://github.com/Leecason/element-tiptap/commit/c47bec6a18d3f248cb95b57f8e5d276ce9546e9d))
