<template>


  <input
   type="text"
   id="name"
   name="name"
   :placeholder="placeholder"
   maxlength="maxlength"
   minlength="minlength"
   :readonly="readonly"
   :required="required"
  :value="value"
  @input="raiseChangeEvent"
   />

</template>
<script>
export default {
  props: ["name", "value", "placeholder", "minlength", "maxlength", "required", "readonly"],
  methods:{
    raiseChangeEvent(event){
      this.$emit('update:data',event.target.value);
    }
  }
};
</script>

