<template>
  <q-page class="row justify-center">
<div>
    <text-box-biz :schema="schema"></text-box-biz>
    <text-box-number-biz :schema="schema2"></text-box-number-biz>
    <input type="button" @click="test" value="test"/>
</div>

  </q-page>
 </template>
<script>
import textBoxBiz from "../controls/formBuilder/text-box-biz"
import textBoxNumberBiz from "../controls/formBuilder/text-box-number-biz"

export default {
  components:{
    textBoxBiz: textBoxBiz,
    textBoxNumberBiz:textBoxNumberBiz,
  },
  data() {
    return {
      text: "Hello world",
      schema:{label:"userName", name:'txt1', value:'test', placeholder:'here is fun', readonly:false, maxLength:"5", minLength:"2", required:true},
      schema2:{label:"Your Age",name:'txt2', value:'2', placeholder:'here is fun2',readonly:false, maxValue:5, minValue:2, required:false}
    };
  },
  methods:{
    test(){
      alert(this.schema.value);
    }
  }
};
</script>
<style>
.divContent {
  background-color: white;
  height: 500px;
  min-width: 700px;
  padding: 1em;
}
</style>



