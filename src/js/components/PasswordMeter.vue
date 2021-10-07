<template>
  <div>
    <div>
      <el-input :type="inputType" v-model="internalValue" :placeholder="placeholder"
                :class="[hasRules?'has-popover':'']">
        <font-awesome-icon slot="suffix" :icon="[ 'fas', icon ]" @click="visible = !visible"/>
      </el-input>
      <el-popover
          v-if="hasRules"
          slot="suffix"
          placement="top"
          title="Your password must include"
          width="200"
          trigger="hover">
        <div class="popover-il"><p v-for="rule in passwordRulesTested" class="rules"
                                   :class="[rule.passed ? 'rule-passed': '']">
          {{ rule.text }}</p>
        </div>
        <font-awesome-icon slot="reference" :icon="[ 'fas', 'question-circle' ]"/>
      </el-popover>
    </div>
    <div class="meter" :class="scoreClass">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, reactive, ref} from "@vue/composition-api";

export default {
  name: "PasswordMeter",
  props: {
    value: {
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    passwordRules: {
      type: Array,
      required: false,
      default: () => [],
    },
    score: {
      type: [Number, Object],
      required: false,
      default: 0,
    }
  },
  setup(props, {emit}) {
    const internalValue = computed({
      get: () => props.value,
      set: value => emit('input', value)
    });

    const score = ref(0);
    const visible = ref(false);

    const icon = computed(() => {
      return visible.value ? 'eye' : 'eye-slash';
    });

    const myScore = computed(() => Math.max(props.score, score.value))

    const hasRules = computed(() => props.passwordRules.length > 0)

    const inputType = computed(() => {
      return visible.value ? 'text' : 'password';
    });

    const scoreClass = computed(() => {
      if (props.value.length) {
        let value = myScore.value;

        if (value > 5) {
          value = 5;
        }

        return ['', 'poor', 'regular', 'fair', 'almost', 'passed'][value];
      }

      return '';
    });

    const passwordRulesTested = computed(() => {
      if (!props.passwordRules.length) {
        return 0;
      }

      let internalScore = 0;
      let result = [];
      let currentValue = props.value;

      props.passwordRules.forEach(rule => {
        let passed = false;

        if (rule.testFunction(currentValue)) {
          passed = true;
          internalScore++;
        }

        result.push(
            {
              text: rule.text,
              passed,
            }
        )
      });

      score.value = internalScore * 5 / props.passwordRules.length;

      return result;
    });

    return {
      scoreClass,
      hasRules,
      inputType,
      icon,
      visible,
      internalValue,
      passwordRulesTested,
    }
  }
}
</script>

<style lang="scss">
body .el-popover {
  &__title {
    font-size: .9em !important;
  }
}

.has-popover {
  width: 93%;
}

.el-input__suffix-inner {
  margin-right: .2em;
}

.rules {
  margin: 0 auto;
  width: 90%;

  &.rule-passed {
    text-decoration: line-through;
    position: relative;
    color: var(--success);

    &:after {
      content: "✓";
      font-size: 2em;
      text-decoration: none !important;
      position: absolute;
      right: -1em;
    }
  }
}

.meter {
  height: 5px;
  display: flex;
  margin: 1em 0 0;
  border: 1px solid #eee;
  background-color: #fff;
  width: 100%;

  div {
    border-right: 2px solid #ccc;
    width: 25%;
  }

  div:last-child {
    border-right: none;
  }

  &.poor {
    div:first-child {
      background-color: var(--danger);
    }
  }

  &.regular {
    div:first-child {
      background-color: var(--danger);
    }

    div:nth-child(2) {
      background-color: var(--danger);
    }
  }

  &.fair {
    div:first-child {
      background-color: var(--warning);
    }

    div:nth-child(2) {
      background-color: var(--warning);
    }

    div:nth-child(3) {
      background-color: var(--warning);
    }
  }

  &.almost {
    div {
      background-color: var(--warning);
    }

    div:last-child {
      background-color: #fff;
    }
  }

  &.passed {
    div {
      background-color: var(--success);
    }
  }
}
</style>