<template>
  <q-page class="row justify-center">
    <!--<div class="column">
   <div class="divContent">
       <p class="caption">Field components</p>
       <q-input v-model="text" float-label="Input float label" />
    </div>
    </div>-->
<div>
    <text-box :name="schema.name" v-model="schema.value" :placeholder="schema.placeholder" :value.sync="schema.value" ></text-box>
    <text-box :name="schema2.name" v-model="schema2.value" :placeholder="schema2.placeholder" :value.sync="schema2.value" ></text-box>
    <input type="button" @click="test" value="test"/>
</div>

  </q-page>
 </template>
<script>
import TextBox from "../controls/formBuilder/text-box";
export default {
  components:{
    textBox: TextBox
  },
  data() {
    return {
      text: "Hello world",
      schema:{name:'txt1', value:'test', placeholder:'here is fun'},
      schema2:{name:'txt2', value:'test2', placeholder:'here is fun2'}
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



