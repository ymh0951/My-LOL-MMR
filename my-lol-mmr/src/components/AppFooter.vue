<template>
    <footer class="app_footer">
      <div class="footer_text">
        <p>API Support</p>
        <a href="https://na.whatismymmr.com/">What is MMR?</a>
      </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app_footer {
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: #04001E;
}
.footer_text {
  width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer_text p, .footer_text a {
  color: #C7C7C7;
}
.footer_text a {
  text-decoration: underline;
  color: white;
}
</style>