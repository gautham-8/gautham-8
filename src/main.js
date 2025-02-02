import './assets/main.css'

import { createApp } from 'vue'
import VueTippy from 'vue-tippy'
import './tippy.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(
    VueTippy,
    // optional
    {
      directive: 'tippy', // => v-tippy
      component: 'tippy', // => <tippy/>
      componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
      defaultProps: {
        placement: 'auto-end',
        allowHTML: true,
      }, // => Global default options * see all props
    }
)

app.mount('#app')
