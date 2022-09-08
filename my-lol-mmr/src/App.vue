<template>
  <div id="app">
    <AppHeader></AppHeader>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default Vue.extend({
  components: {
    AppFooter,
    AppHeader
},
})
</script>

<style>
/* 기본값 초기화 */
* {
  margin: 0;
  padding: 0;
}
img {
  border: 0;
}
a {
  text-decoration: none;
  color: black;
}
ul, li {
  list-style: none;
}

/* App 컴포넌트 */
#app {
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: #070032;
}
</style>
