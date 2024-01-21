import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases,mdi} from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'

export default createVuetify({
    components,
    directives,
    icons:{defaultSet: 'mdi',aliases, sets:{mdi,}}
})

