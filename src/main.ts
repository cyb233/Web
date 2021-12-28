import './assets/style/main.scss'
import './registerServiceWorker'
import router from './router'
import { Quasar, Dark } from 'quasar'
import quasarUserOptions from '@/plugins/quasar/options'
import { QGridItem, QGrid } from '@/plugins/quasar/components'
import { app } from './app'
import { pinia } from '@/plugins/pinia'

app.component('q-grid', QGrid)
app.component('q-grid-item', QGridItem)

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.min.css'
app.use(Viewer, {
  defaultOptions: {
    navbar: false
  }
})

app.use(pinia).use(router).use(Quasar, quasarUserOptions).mount('#app')
