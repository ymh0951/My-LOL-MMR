<template>
  <div id="app">
    <header class="app-header">
      <img class="logo" src="./assets/images/logo.png" alt="My LOL MMR 로고">
      <AppSearchBox></AppSearchBox>
    </header>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppFooter from './components/AppFooter.vue';
import AppSearchBox from './components/AppSearchBox.vue';

export default Vue.extend({
  components: {
    AppFooter,
    AppSearchBox
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
.app-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #04001E;
}
.logo {
  width: 120px;
  margin-left: 25px;
}
.app-footer {
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: #04001E;
}
</style>
