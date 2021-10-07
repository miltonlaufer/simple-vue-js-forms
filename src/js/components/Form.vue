<template>
  <el-form :rules="formRules" :label-width="labelWidth" :disabled="loading" :ref="formName" :model="formData"
           :label-position="labelPosition" :v-loading="loading" @validate="validationHappened"
           :validate-on-rule-change="false">
    <slot></slot>
  </el-form>
</template>

<script>
import {onMounted, reactive} from "@vue/composition-api";
import {Message} from "element-ui";

export default {
  name: "mlForm",
  props: {
    formName: {
      type: String,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
    extraValidation: {
      type: Object,
      required: false
    },
    errors: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    labelPosition: {
      type: String,
      default: 'top'
    },
    labelWidth: {
      type: String,
      default: ''
    }
  },
  setup(props, {refs, emit}) {
    onMounted(() => {
      setExtraRules();
    })
    const setExtraRules = () => {
      for (let extraRule in props.extraValidation) {
        if (typeof extraRule === 'string') {
          formRules[extraRule] = props.extraValidation[extraRule];
        }
      }
    }
    const triggerError = (rule, value, callback) => {
      return callback(new Error())
    }
    const clearFormRules = () => {
      Object.keys(formRules).forEach(key => {
        if (typeof key === 'string') {
          formRules[key] = null;
        }
      });

      setExtraRules();
    }

    const validateForm = () => {
      let form = refs[props.formName];

      clearFormRules();
      form.clearValidate();

      let externalValid = false;

      form.validate(valid => externalValid = valid);

      return externalValid;
    }

    const parseErrors = (errors) => {
      let form = refs[props.formName];
      let messages = [];

      for (let errorKey in errors) {
        let error = errors[errorKey];

        if (error.toString().trim()) {
          if (props.formData.hasOwnProperty(errorKey)) {
            formRules[errorKey] = {validator: triggerError, message: error/*, trigger: 'blur'*/};
          } else {
            messages.push(error);
          }
        }
      }

      form.validate(valid => valid);

      if (messages.length) {
        Message({
          showClose: true,
          message: messages.join('<br>'),
          type: 'error',
          duration: 0
        });
      }
    }

    const validationHappened = (field, validated) => {
      emit('validate', field, validated);
    };

    const formRules = reactive({});

    return {
      formRules,
      validateForm,
      parseErrors,
      validationHappened
    }
  }
}
</script>

<style scoped>

</style>