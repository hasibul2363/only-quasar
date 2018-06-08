<template>
  <q-page class="row justify-center"  style="background-color: black; color: white">
<div>

    <div v-for="schema in formSchema" :key="schema.name">
      <component :is="bizComponents[schema.controlType]" :schema="schema" :formschema="formSchema"></component>
    </div>

    <!-- <text-box-biz :schema="formSchema.txt1"></text-box-biz> -->
    <!-- <text-box-number-biz :schema="formSchema.txt2"></text-box-number-biz> -->
    <!-- <text-box-formula-biz :schema="formSchema.txtSalary" :formschema="formSchema"></text-box-formula-biz> -->
    <!-- <component :is="textBoxBiz" :schema="formSchema.txt1"></component> -->


    <input type="button" @click="test" value="test"/>
</div>
  </q-page>
 </template>
<script>
import textBoxBiz from "../controls/formBuilder/text-box-biz";
import textBoxNumberBiz from "../controls/formBuilder/text-box-number-biz";
import textBoxFormulaBiz from "../controls/formBuilder/text-box-formula-biz";
export default {
  /*components: {
    textBoxBiz: textBoxBiz,
    textBoxNumberBiz: textBoxNumberBiz,
    textBoxFormulaBiz: textBoxFormulaBiz
  },*/
  data() {
    return {
      bizComponents:{
        textBoxBiz: textBoxBiz,
         textBoxNumberBiz: textBoxNumberBiz,
         textBoxFormulaBiz: textBoxFormulaBiz
      },
      text: "Hello world",
      formSchema: {
        txt1: {
          label: "userName",
          name: "txt1",
          value: "test",
          placeholder: "here is fun",
          readonly: false,
          maxLength: "5",
          minLength: "2",
          required: true,
          controlType:"textBoxBiz"
        },
        txt2: {
          label: "Your Age",
          name: "txt2",
          value: "2",
          placeholder: "here is fun2",
          readonly: false,
          maxValue: 5,
          minValue: 2,
          required: false,
          controlType:"textBoxNumberBiz"
        },
        txtSalary: {
          label: "Salary",
          name: "txtSalary",
          value: "",
          formulaTemplate: "{txt2} * 2",
          placeholder: "here is your salary",
          readonly: false,
          required: false,
          controlType:"textBoxFormulaBiz"
        }
      }
    };
  },
  methods: {
    test() {
      alert(JSON.stringify(this.formSchema));
    }
  },
  created(){
    /*this.bizComponents["textBoxBiz"] = () => import("../controls/formBuilder/text-box-biz");
    this.bizComponents["textBoxNumberBiz"] = () => import("../controls/formBuilder/text-box-number-biz");
    this.bizComponents["textBoxFormulaBiz"] = () => import("../controls/formBuilder/text-box-formula-biz");    */
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



