<template>
<div>
   <label> {{schema.label}}</label>
  <text-box-number
  :name="schema.name"
  :placeholder="schema.placeholder"
  :max="schema.maxValue"
  :min="schema.minValue"
  :readonly="schema.readonly"
  :required="schema.required"
  :value="schema.value"
  :data.sync="schema.value">
  </text-box-number>
</div>
</template>

<script>
import textBoxNumber from "./text-box-number";
export default {
  props: ["schema"],
  components: {
    textBoxNumber: textBoxNumber
  }
};
</script>

