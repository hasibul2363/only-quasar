<template>


  <input
   type="number"
   id="name"
   name="name"
   :placeholder="placeholder"
   :max="max"
   :min="min"
   :readonly="readonly"
   :required="required"
  :value="value"
  @input="raiseChangeEvent"
   />

</template>
<script>
export default {
  props: ["name", "value", "placeholder", "min", "max", "required", "readonly"],
  methods:{
    raiseChangeEvent(event){
      this.$emit('update:data',event.target.value);
    }
  }
};
</script>

