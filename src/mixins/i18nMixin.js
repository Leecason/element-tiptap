import { t } from '../i18n/index';

export default {
  methods: {
    t (...args) {
      return t.apply(this, args);
    },
  },
};
