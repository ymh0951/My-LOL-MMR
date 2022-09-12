<template>
    <div class="search_view">
        <div class="search_box">
            <div class="search_title">
                <span class="search_title_span">{{ $store.state.country.toUpperCase() }}</span>
                <h1 class="search_title_h1">{{ $store.state.summerName }}</h1>
            </div>
            <div class="search_card_box">
                <div class="card">
                    <div class="card_title">
                        <h2>랭크</h2>
                        <h1 v-if="$store.state.userData.ranked.avg">
                            {{ $store.state.userData.ranked.avg }} 
                            <small>±{{ $store.state.userData.ranked.err }}</small>
                        </h1>
                        <p v-else>데이터가 부족합니다</p>
                    </div>
                    <div class="card_avg_img_box">
                        <img :src="require(`../assets/images/${$store.state.userDataClosestRank.rank}.png`)" alt="슬픈 꿀벌">
                    </div>
                    <div class="card_text" v-if="$store.state.userData.ranked.avg">
                        <h2>{{ $store.state.userData.ranked.closestRank }}</h2>
                        <p>{{ $store.getters.differenceRanked }}</p>
                    </div>
                    <div class="card_text" v-else>
                        <p>데이터가 부족합니다</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card_title">
                        <h2>일반</h2>
                        <h1 v-if="$store.state.userData.normal.avg">
                            {{ $store.state.userData.normal.avg }}
                            <small>±{{ $store.state.userData.normal.err }}</small>
                        </h1>
                        <p v-else>데이터가 부족합니다</p>
                    </div>
                    <div class="card_avg_img_box">
                        <img :src="require(`../assets/images/${$store.state.userDataClosestRank.normal}.png`)" alt="슬픈 꿀벌">
                    </div>
                    <div class="card_text" v-if="$store.state.userData.normal.avg">
                        <h2>{{ $store.state.userData.normal.closestRank }}</h2>
                        <p>{{ $store.getters.differenceNormal }}</p>
                    </div>
                    <div class="card_text" v-else>
                        <p>데이터가 부족합니다</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card_title">
                        <h2>무작위 총력전</h2>
                        <h1 v-if="$store.state.userData.ARAM.avg">
                            {{ $store.state.userData.ARAM.avg }}
                            <small>±{{ $store.state.userData.ARAM.err }}</small>
                        </h1>
                        <p v-else>데이터가 부족합니다</p>
                    </div>
                    <div class="card_avg_img_box">
                        <img :src="require(`../assets/images/${$store.state.userDataClosestRank.ARAM}.png`)" alt="슬픈 꿀벌">
                    </div>
                    <div class="card_text" v-if="$store.state.userData.ARAM.avg">
                        <h2>{{ $store.state.userData.ARAM.closestRank }}</h2>
                        <p>{{ $store.getters.differenceARAM }}</p>
                    </div>
                    <div class="card_text" v-else>
                        <p>데이터가 부족합니다</p>
                    </div>
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
.card_title {
    height: 80px;
    padding: 0 20px;
    margin-top: 20px;
    /* display: flex; */
    align-items: center ;
}
.card_title h2 {
    margin-right: 15px;
}
.card_title h1 {
    font-size: 36px;
}
.card_title small {
    font-size: 19px;
}
.card_title p {
    color: #FF6D6D;
}
.card_avg_img_box {
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card_avg_img_box img {
    width: 200px;
    height: 200px;
}
.card_text {
    text-align: center;
}
</style>