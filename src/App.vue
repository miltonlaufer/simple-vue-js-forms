<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <h1>Easy VUE (ElementUI) Form Generator</h1>
    <div style="display: flex; justify-content: center;">
      <ml-form label-position="left" label-width="40%" :form-data="personalData" @submit.native.prevent="submitForm"
               :loading="loading" ref="personalData" @validate="validate"
               form-name="personalData"
               :v-loading="loading">
        <el-tabs tab-position="top"
                 style="width: 50vw;"
                 v-model="selectedTab">
          <el-tab-pane name="contact">
            <span slot="label" :class="errors.includes('pane-contact') ? 'tab-error' : ''">Contact info</span>

            <!-- CONTACT INFO -->
            <ml-form-items :fields="fieldsContactInfo" :model="personalData"></ml-form-items>
          </el-tab-pane>
          <el-tab-pane name="password">
            <span slot="label" :class="errors.includes('pane-password') ? 'tab-error' : ''">Password</span>

            <!-- PASSWORD -->
            <ml-form-items :fields="fieldsPassword" :model="personalData" :fake-is-required="true"></ml-form-items>
          </el-tab-pane>
        </el-tabs>

        <div class="submit-button">
          <el-button native-type="submit" type="primary" round>Submit</el-button>
        </div>
      </ml-form>
    </div>
  </div>
</template>

<script>
import {ref, reactive} from '@vue/composition-api';

export default {
  setup(props, {refs}) {

    /**
     *  Handles the validate event from the form
     *  (if a field has errors, calls the setTabErros function)
     *  As each field comes individually, it creates a buffer
     *  that waits 5 ms to send it, if another fields comes, cancels
     *  the call and adds it
     */
    const validate = (field, validated) => {
      if (!validated) {
        errorBuffer.push(field);

        if (validationTimeout) {
          clearTimeout(validationTimeout);
        }

        validationTimeout = setTimeout(() => setTabErros(), 5);
      }
    };

    /**
     *  Puts the X next to the tab label of the tab that has errors
     */
    const setTabErros = () => {
      let form = refs['personalData'];

      setTimeout(() => {
        let firstTab = true;

        errorBuffer.forEach(name => {
          form.$el.querySelectorAll(`div[name=${name}]`).forEach(elem => {
            let closestTab = elem.closest('div[role=tabpanel]');

            if (closestTab) {
              form.$el.querySelectorAll(`div[aria-controls=${closestTab.id}]`).forEach(tab => {
                //         tab.classList.add('tab-error');

                errors.value.push(closestTab.id.trim());

                if (firstTab) {
                  selectedTab.value = closestTab.id.split('-')[1];
                  firstTab = false;
                }
              });
            }
          });
        });

        errorBuffer = [];
      }, 10);
    }

    /**
     * Sets the erros of the form, called each time an Api call is made
     */
    const setFormErrors = errors => {
      let form = refs['personalData'];
      form.parseErrors(errors);
    }

    /**
     * Handles the form submission
     */
    const submitForm = () => {
      errors.value = [];
      let form = refs['personalData'];

      if (form.validateForm()) {
        console.log('Form validated');
      }
    };


    // Data
    let validationTimeout = null;
    let errorBuffer = [];
    const errors = ref([]);
    const selectedTab = ref('contact');
    const dataProviders = reactive({
          countries: [
            ['1', 'Argentina'],
            ['3', 'Germany'],
            ['4', 'Italy'],
            ['2', 'USA'],
          ],
          states: [],
        }
    );
    const loading = ref(false);
    const personalData = reactive({
          // Contact data
          email: 'milton@milton.com',
          full_name: '',
          dob: '',
          company: '',
          country: '',
          state: '',
          city: '',
          zip: '',
          address: '',
          // password
          current_password: '',
          new_password: '',
          new_password_repeat: '',
        }
    );

    /**
     * Forms setup
     */
    const fieldsContactInfo = reactive([
      {type: 'el-input', model: 'full_name', label: 'First and family name', required: true},
      {type: 'el-date-picker', model: 'dob', label: 'Date of birth'},
      {type: 'el-input', model: 'company', label: 'Company name'},
      {
        type: 'el-input', model: 'email', label: ' ', props: {disabled: true},
        slotAfter: `Your user account is identified by your e-mail address. Please make sure you keep your e-mail address
            to date, since it is the only way to recover your password if you forget it.`,
      },
      {
        type: 'el-select',
        model: 'country',
        label: 'Country',
        required: true,
        data: dataProviders.countries,
        props: {filterable: true, clearable: true}
      },
      {type: 'el-input', model: 'state', label: 'State'},
      {type: 'el-input', model: 'city', label: 'City', required: true},
      {type: 'el-input', model: 'zip', label: 'Zip', required: true},
      {type: 'el-input', model: 'address', label: 'Street address', required: true},
      {type: 'el-input', model: 'alternative_email', label: 'Alternative email'},
      {type: 'el-input', model: 'mobile', label: 'mobile'},
    ]);

    const fieldsPassword = reactive([
      {
        type: 'el-input',
        model: 'current_password',
        label: 'Current password',
        required: true,
        props: {type: 'password', autocomplete: 'off'}
      },
      {
        type: 'ml-password-meter', model: 'new_password', label: 'New password', required: true, props: {
          passwordRules: [
            {text: '8 or more characters', testFunction: value => value.length >= 8},
            {text: '1 or more lowercase letters', testFunction: value => value.match(/[a-z]/)},
            {text: '1 or more uppercase letters', testFunction: value => value.match(/[A-Z]/)},
            {text: '1 or more digits', testFunction: value => value.match(/[0-9]/)},
            {text: '1 or more special characters', testFunction: value => value.replaceAll(/[a-zA-Z0-9]/g, '').length}
          ]
        }
      },
      {
        type: 'el-input',
        model: 'new_password_repeat',
        label: 'Repeat new password',
        required: true,
        props: {type: 'password'}
      }
    ]);

    return {
      fieldsContactInfo,
      fieldsPassword,
      personalData,
      loading,
      selectedTab,
      errors,
      submitForm,
      validate,
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: .75s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
