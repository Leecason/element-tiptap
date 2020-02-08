import { t } from '../i18n/index.ts';

export default {
  methods: {
    t (...args) {
      return t.apply(this, args);
    },
  },
};
