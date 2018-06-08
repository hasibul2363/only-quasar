<template>
<div>
   <label> {{schema.label}}</label>
  <text-box
  :name="schema.name"
  :placeholder="schema.placeholder"
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
  props: ["schema", "formschema"],
  components: {
    textBox: textBox
  },
  methods: {
    getControlsFromExpression() {
      return ["txt2"];
    },
    reInitValue() {
      var expression = this.schema.formulaTemplate;
      var controlNames = this.getControlsFromExpression();
      controlNames.forEach(element => {
        expression = expression.replace(
          "{" + element + "}",
          this.formschema.value
        );
        this.schema.value = eval(expression);
      });
    }
  },
  mounted() {
    var controlsNeedToWatch = ["txt2"];
    this.reInitValue();
    this.$watch("formschema.value", this. reInitValue/*function() {
      var expression = this.schema.formulaTemplate;
      var controlNames = this.getControlsFromExpression();
      controlNames.forEach(element => {
        expression = expression.replace(
          "{" + element + "}",
          this.formschema.value
        );
        this.schema.value = eval(expression);
      });
    }*/);
  } /*,
  data() {
    return {
      formschema1: this.formschema
    };
  }
  ,
  watch: {
    "formschema.value": function() {
      var expression = this.schema.formulaTemplate;
      var controlNames = this.getControlsFromExpression();
      controlNames.forEach(element => {
        expression = expression.replace("{" + element + "}", this.formschema.value);
        this.schema.value = eval(expression);
      });
    }
  }*/
};
</script>

