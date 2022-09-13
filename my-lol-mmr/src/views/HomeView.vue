<template>
  <div class="home_view">
    <div class="search_card">
      <img src="../assets/images/logo.png" alt="My LOL MMR Logo" class="logo">
      <AppSearchBox style="width: 85%; margin: 0 auto; margin-top: 40px;"></AppSearchBox>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AppSearchBox from '../components/AppSearchBox.vue';

export default Vue.extend({
    components: {
      AppSearchBox
    },
});
</script>

<style scoped>
.home_view {
  width: 100%;
  height: calc(100vh - (60px + 60px));
  display: flex;
  justify-content: center;
  align-items: center;
}
.search_card {
  width: 400px;
  height: 200px;
}
.logo {
  width: 250px;
  display: block;
  margin: 0 auto;
}
</style>