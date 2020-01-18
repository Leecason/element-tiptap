import { t } from '../i18n/index';

export default {
  methods: {
    $i18n (...args) {
      return t.apply(this, args);
    },
  },
};
