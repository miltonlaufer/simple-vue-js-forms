#Form Builder for Vue.js
## Tired (as me) of creating forms? 

The components on src/js/components/ allow you to create a form (that implements ELement.io components) just by creating some arrays. Example:

To create the form on [this link](http://www.miltonlaufer.com.ar/forms)

```
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
```

I'll put more details in the following days


# How to build the example
## Build Setup

``` bash
# install dependencies
npm install

# watch for development
npm run watch

# build for production
npm run build

# build report
npm run build-report