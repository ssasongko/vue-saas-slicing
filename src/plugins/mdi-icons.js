import vueInit from '@/core/initiate.js'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

vueInit.use(mdiVue, {
    icons: mdijs
})
