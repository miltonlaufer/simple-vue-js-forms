import Vue from 'vue';
import App from './App.vue';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import VueCompositionAPI from '@vue/composition-api';
import ElementUI from './js/lib/components/elements-ui';
import CustomComponents from './js/lib/components/customComponents';
import {Loading} from "element-ui";
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

/**
 * Element UI
 */
// configure language
locale.use(lang);
// Set dynamic components
ElementUI(Vue);
CustomComponents(Vue);
Vue.use(Loading);
/**
 * FontAwesome
 */
library.add(fas, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Composition API
Vue.use(VueCompositionAPI);
//Routes

if (process.env.NODE_ENV === 'development') {
    Vue.config.devtools = true;
}

/** MAKES FIRST CALL TO CHECK IF IT IS LOGGED IN **/
let forms = new Vue({
    render: h => h(App)
}).$mount('#myForms');

