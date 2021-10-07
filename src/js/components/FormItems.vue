<template>
  <div class="form-items__wrapper">
    <el-form-item v-for="(field,index) in fields" :key="index" :prop="field.model" :label="field.label"
                  :name="field.model" :required="!fakeIsRequired && field.required" :class="getClass(field)">
      <component v-if="field.type !== 'el-select'"
                 v-bind:is="field.type" v-bind="getProps(field)" v-model="model[field.model]" v-on="field.events"
                 :placeholder="field.placeholder?field.placeholder:(labelAsPlaceholder?field.label:'')">
        {{ field.content }}
      </component>
      <el-select v-else v-bind="getProps(field)" v-model="model[field.model]">
        <el-option
            v-for="(item, index) in destructureData(field.data)"
            :key="index"
            :label="item[1]"
            :value="item[0]">
        </el-option>
      </el-select>
      <div v-if="field.slotSide && field.slotHTML" class="note-side" v-html="field.slotSide"></div>
      <div v-if="field.slotSide && !field.slotHTML" class="note-side">
        {{ field.slotSide }}
      </div>
      <div v-if="field.slotAfter && field.slotHTML" class="note-after" v-html="field.slotAfter"></div>
      <div v-if="field.slotAfter && !field.slotHTML" class="note-after">
        {{ field.slotAfter }}
      </div>
    </el-form-item>
  </div>
</template>

<script>
import {computed} from "@vue/composition-api";

export default {
  name: "ArrayToForm",
  props: {
    fields: {
      type: Array,
      required: true
    },
    model: {
      type: Object,
      required: true
    },
    labelAsPlaceholder: {
      type: Boolean,
      default: true,
    },
    fakeIsRequired: {
      type: Boolean,
      default: false
    },
    includeNames: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
    const getClass = field => {
      let myClasses = {};

      if (props.fakeIsRequired && field.required) {
        myClasses['is-required'] = true;
      }

      if (field.slotSide) {
        myClasses['has-side-note'] = true;
      }

      if (field.class) {
        myClasses[field.class] = true;
      }

      return myClasses;
    };

    const destructureData = data => {
      if (Array.isArray(data)) {
        return data;
      } else {
        let actualData = Object.create(data);

        if (data.hasOwnProperty('value')) {
          actualData = data.value;
        }

        return Object.entries(actualData).map(values => [parseInt(values[0], 10), values[1]]);
      }
    }

    const getProps = field => {
      let fieldProps = field.props ? field.props : {};

      if (props.includeNames) {
        Object.assign(fieldProps, {
          name: field.name ? field.name : field.model
        })
      }

      return fieldProps;
    };

    return {
      getProps,
      getClass,
      destructureData,
    }
  }
}
</script>

<style lang="scss" scoped>
.form-items__wrapper {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: inherit;
  position: inherit;

  .note-side {
    display: inline !important;
  }

  .note-after {
    clear: both;
  }

  .note-side, .note-after {
    font-size: .9em;
    line-height: 1.7em;
    display: block;
    color: #a8a8a8;

    /deep/ a {
      color: var(--orange) !important;
    }
  }

  .has-side-note {
    /deep/ .el-form-item__content {
      line-height: 1em !important;
    }
  }
}
</style>