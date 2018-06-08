<template>
  <q-page class="row justify-center"  style="background-color: black; color: white">
<div>
    <text-box-biz :schema="schema"></text-box-biz>
    <text-box-number-biz :schema="schema2"></text-box-number-biz>
    <text-box-formula-biz :schema="schemaFormula" :formschema="schema2"></text-box-formula-biz>
    <input type="button" @click="test" value="test"/>
</div>

  </q-page>
 </template>
<script>
import textBoxBiz from "../controls/formBuilder/text-box-biz"
import textBoxNumberBiz from "../controls/formBuilder/text-box-number-biz"
import textBoxFormulaBiz from "../controls/formBuilder/text-box-formula-biz"

export default {
  components:{
    textBoxBiz: textBoxBiz,
    textBoxNumberBiz:textBoxNumberBiz,
    textBoxFormulaBiz:textBoxFormulaBiz
  },
  data() {
    return {
      text: "Hello world",
      schema:{label:"userName", name:'txt1', value:'test', placeholder:'here is fun', readonly:false, maxLength:"5", minLength:"2", required:true},
      schema2:{label:"Your Age",name:'txt2', value:'2', placeholder:'here is fun2',readonly:false, maxValue:5, minValue:2, required:false},
      schemaFormula:{label:"Salary",name:'txtSalary', value:'', formulaTemplate:'{txt2} * 2', placeholder:'here is your salary',readonly:false, required:false}
    };
  },
  methods:{
    test(){
      alert(this.schemaFormula.value);
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



