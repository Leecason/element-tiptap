import { Component, Vue } from 'vue-property-decorator';
import { t } from '@/i18n/index';

@Component
export default class i18nMixin extends Vue {
  t (...args: any[]): string {
    // @ts-ignore
    return t.apply(this, args);
  }
};
