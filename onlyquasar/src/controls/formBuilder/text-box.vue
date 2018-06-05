<template>
  <input
   type="text"
   id="name"
   name="name"
   :placeholder="placeholder"
   maxlength="maxLength"
   minlength="minLength"
   :readonly="readonly"
   :required="required"
  :value="value"
  @input="raiseChangeEvent"
   />
</template>
<script>
export default {
  props: ["name", "value", "placeholder", "minLength", "maxLength", "required", "readonly"],
  methods:{
    raiseChangeEvent(event){
      this.$emit('update:data',event.target.value);
    }
  }
};
</script>

