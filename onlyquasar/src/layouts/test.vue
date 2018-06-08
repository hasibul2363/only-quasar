<template>
  <q-layout>
    <!-- <q-layout-header>
      <q-toolbar color="primary">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
        <q-search inverted  v-model="search" color="none" />
      </q-toolbar>
    </q-layout-header> -->

    <q-page-container >
      <div style="background-color: whitesmoke">
        <div style="height:200px;" class="bg-primary"></div>
        <div class="xs form-content-xs">
          <router-view />
        </div>

        <div class="gt-xs form-content-lg">
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      search:""
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
/*.form-content-lg {
  margin-top: -100px;
}
.form-content-xs {
  margin-top: -150px;
}*/
</style>
