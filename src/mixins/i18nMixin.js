import i18n from '../i18n';

export default {
  name: 'i18nMixin',
  methods: {
    i18n (path, args) {
      return i18n(path, args);
    }
  }
};
