<template>
  <q-page class="row justify-center">
    <!--<div class="column">
   <div class="divContent">
       <p class="caption">Field components</p>
       <q-input v-model="text" float-label="Input float label" />
    </div>
    </div>-->
<div>
    <text-box-biz :schema="schema"></text-box-biz>
    <!-- <text-box :name="schema2.name" v-model="schema2.value" :placeholder="schema2.placeholder" :data.sync="schema2.value"
    :maxlength="schema2.maxLength"
    ></text-box> -->
    <input type="button" @click="test" value="test"/>
</div>

  </q-page>
 </template>
<script>
import textBoxBiz from "../controls/formBuilder/text-box-biz"
import TextBox from "../controls/formBuilder/text-box";
export default {
  components:{
    textBox: TextBox,
    textBoxBiz:textBoxBiz
  },
  data() {
    return {
      text: "Hello world",
      schema:{name:'txt1', value:'test', placeholder:'here is fun', readonly:false, maxLength:"5", minLength:"2", required:true},
      schema2:{name:'txt2', value:'test2', placeholder:'here is fun2',readonly:false, maxLength:"5", minLength:"2", required:false}
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
  min-width: 600px;
  padding: 1em;
}
</style>



