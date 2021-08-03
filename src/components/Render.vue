<script lang="ts">
import { reactive, toRefs, h } from 'vue';
import Taro from '@tarojs/taro';
import PageContainer from './PageContainer.vue';

export default {
  name: 'Render',
  render() {

    let component:any = null;

    if(this.body === null || this.body === undefined) {
      component = null
    }

    if(typeof this.body === 'string' || typeof this.body === 'number') {
      component = h(
        'span',
        this?.body
      )
    }

    if(this?.body?.component) {
      switch (this.body.component) {
        case 'page':
          component = h(PageContainer, {
              body: this.body.body
            })
          break;
      
        default:
          component = h(
            'span',
            this?.body?.body
          )
          break;
      }
    }

    return component;
  },
  props: ['body']
}
</script>