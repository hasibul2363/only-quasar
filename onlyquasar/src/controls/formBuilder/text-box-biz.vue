<template>
<div>
   <label> {{schema.label}}</label>
  <text-box
  :name="schema.name"
  :placeholder="schema.placeholder"
  :maxLength="schema.maxLength"
  :minLength="schema.minLength"
  :readonly="schema.readonly"
  :required="schema.required"
  :value="schema.value"
  :data.sync="schema.value">
  </text-box>
</div>
</template>

<script>
import textBox from "./text-box";
export default {
  props: ["schema"],
  components: {
    textBox: textBox
  }
};
</script>

