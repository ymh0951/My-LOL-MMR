<template>
  <div id="app">
    <header class="app-header">
      <img class="logo" src="./assets/images/logo.png" alt="My LOL MMR 로고">
    </header>
    <router-view></router-view>
    <footer class="app-footer">
      
    </footer>
  </div>
</template>

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
}
.app-footer {
  height: 60px;
  background: #04001E;
}
</style>
