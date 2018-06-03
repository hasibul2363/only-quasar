<template>
  <q-page class="row justify-center">
    <div class="column">
   <div class="divContent">
       <p class="caption">Field components</p>
      <!-- <q-field helper="Some helper">

      </q-field> -->
       <q-input v-model="text" float-label="Input float label" />
    </div>
    </div>

  </q-page>
</template>
<script>
export default {
  data() {
    return {
      text: "Hello world"
    };
  }
};
</script>
<style>
.divContent {
  background-color: white;
  height: 500px;
  min-width: 500px;
  padding: 1em;
}
</style>



