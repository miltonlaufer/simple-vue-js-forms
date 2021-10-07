export default function (Vue) {
    Vue.component('ml-form', () => import('../../components/Form'));
    Vue.component('ml-form-items', () => import('../../components/FormItems'));
    Vue.component('ml-password-meter', () => import('../../components/PasswordMeter'));
}