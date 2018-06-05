<template>
  <input type="text" :value="value" :id="name" :name="name" :placeholder="placeholder" @input="raiseChangeEvent" />
</template>
<script>
export default {
  props: ["name", "value", "placeholder"],
  methods:{
    raiseChangeEvent(event){
      console.log('changed fire from'+this.name);
      this.$emit('update:value',event.target.value);
    }
  }
};
</script>

