import axios from 'axios';
import {Message} from 'element-ui';
import store from "./store";
import NProgress from "nprogress";

export default class {
    constructor() {
        this.baseURL = '/action/my-account-api/';
        this.showErrors = false;
    }

    makeCall(params) {
        NProgress.start();
        let internalParams = {};

        if (typeof params === 'string') {
            internalParams.name = params;
        } else {
            Object.assign(internalParams, params);
        }

        let token = '';

        if (store.state.token) {
            token = store.state.token;
        } else {
            let csrfTokenElem = document.querySelector('meta[name=csrf-token]');

            if (csrfTokenElem) {
                token = csrfTokenElem.content;
                store.commit('setToken', token);
            }
        }

        if (!internalParams.hasOwnProperty('data')) {
            internalParams.data = {};
        }

        axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
        internalParams.data._csrf = token;

        if (internalParams.showErrors) {
            this.showErrors = true;
        }

        axios.defaults.baseURL = this.baseURL;

        let config = {
            method: this.method,
            url: internalParams.name,
            data: internalParams.data,
            withCredentials: true,
        };

        if (this.method !== 'GET') {
            config.transformRequest = [(data) => this.transformData(data)];
        }

        return axios(config).then(response => {
            Message.closeAll();

            if (internalParams.name !== 'login') {
                store.commit('setLogged', response.data.logged);
            }

            if (response.data.payload.hasOwnProperty('token') && response.data.payload.token) {
                store.commit('setToken', response.data.payload.token);
            }

            if (response.data.payload.hasOwnProperty('userData')) {
                store.commit('setUserData', response.data.payload.userData);
            }

            if (!response.data.success && this.showErrors) {
                let message = 'There was an error';

                if (response.data.errors.length) {
                    message = response.data.errors.filter(value => value).join(' <br> ');
                }

                Message({
                    showClose: true,
                    message: message,
                    dangerouslyUseHTMLString: true,
                    type: 'error',
                    duration: 0
                });
            }

            return {
                success: response.data.success,
                payload: response.data.payload,
                errors: response.data.errors,
            };
        }).catch(e => {
            let message = 'There was an error';

            if (e.response) {
                switch (e.response.status) {
                    case 404:
                        message += ": the page doesn't exist";
                        break;
                    case 401:
                    case 403:
                        message += ": you don't have permissions to see that page";
                        break;
                    case 408:
                        message += ": the server didn't respond on time";
                        break;
                    case 500:
                        message += ": please contact us and tell us what caused this error";
                        break;
                    case 502:
                    case 503:
                    case 504:
                        message += ": the connection with the server was lost";
                }
            } else if (e.request) {
                message += ': no data received';
            } else if (process.env.NODE_ENV === 'development') {
                console.log('Error', e.message);
            }

            Message({
                showClose: true,
                message: message,
                type: 'error',
                duration: 0
            });
        }).finally(() => NProgress.done());
    }

    read(params) {
        this.method = 'GET';

        if (params.hasOwnProperty('id')) {
            params.name += `/${id}`;
        }

        return this.makeCall(params);
    }

    create(params) {
        this.method = 'POST';

        return this.makeCall(params);
    }

    update(params) {
        this.method = 'PUT';

        return this.makeCall(params);
    }

    delete(params) {
        this.method = 'DELETE';

        return this.makeCall(params);
    }

    transformData(data) {
        let formData = new FormData();

        Object.keys(data).forEach(key => {
            this.createFormData(formData, key, data[key]);
        });

        return formData;
    }

    createFormData(formData, key, data) {
        if (data === Object(data) || Array.isArray(data)) {
            for (let i in data) {
                this.createFormData(formData, key + '[' + i + ']', data[i]);
            }
        } else {
            formData.append(key, data);
        }
    }
}