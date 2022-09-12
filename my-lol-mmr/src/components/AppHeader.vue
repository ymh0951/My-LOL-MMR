<template>
    <header class="app_header">
      <router-link to="/">
        <img class="logo" src="../assets/images/logo.png" alt="My LOL MMR 로고">
      </router-link>
      <AppSearchBox></AppSearchBox>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue'
    import AppSearchBox from './AppSearchBox.vue';

    export default Vue.extend({
        components: {
            AppSearchBox,
        },
    })
</script>

<style scoped>
.app_header {
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
</style>