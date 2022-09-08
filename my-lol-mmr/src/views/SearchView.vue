<template>
    <div class="search_view">
        <div class="search_box">
            <div class="search_title">
                <span class="search_title_span">{{ $store.state.country.toUpperCase() }}</span>
                <h1 class="search_title_h1">{{ $store.state.summerName }}</h1>
            </div>
            <div class="search_card_box">
                <div class="card">
                    {{ $store.state.userData.ranked.avg }}
                </div>
                <div class="card">
                    {{ $store.state.userData.normal.avg }}
                </div>
                <div class="card">
                    {{ $store.state.userData.ARAM.avg }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({

    })
</script>

<style scoped>
.search_view {
  width: 100%;
  height: calc(100vh - (60px + 60px));
  display: flex;
  justify-content: center;
  align-items: center;
}
.search_box {
    width: 80%;
    height: 500px;
}
.search_title {
    display: flex;
    justify-content: center;
    align-items: center ;
}
.search_title_span {
    margin-right: 15px;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 24px;
    color: black;
    background-color: white;
}
.search_card_box {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card {
    width: 300px;
    height: 400px;
}
.card:nth-child(1) {
    background-image: url(../assets/images/ranked.png);
}
.card:nth-child(2) {
    background-image: url(../assets/images/normal.png);
}
.card:nth-child(3) {
    background-image: url(../assets/images/aram.png);
}
</style>