<template>
    <div class="search_box">
        <select class="country_select" v-model="countrySelect">
            <option value="na">NA</option>
            <option value="euw">EUW</option>
            <option value="eune">EUNE</option>
            <option value="kr" selected>KR</option>
        </select>
        <span class="line"></span>
        <input class="summer_name" placeholder="소환사명" v-model="summerNameInput" @keyup.enter="summerNameSearch" @click="searchMouseClick">
        <div class="icon_box">
            <i class="fa fas fa-search" v-if="!summerNameInput"></i>
            <i class="fa fas fa-times" @click="summerNameReset" v-else></i>
        </div>
        <ul class="search_list" v-if="searchClick">
            <li class="search" v-for="(data, index) in $store.state.searchData" :key="index">
                <span class="data_country">{{ data.country.toUpperCase() }}</span>
                <span class="data_summer_name" @click="searchUserClick(data)">{{ data.summerName }}</span>
                <i class="fa fas fa-times" @click="deleteSearchData(index)"></i>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                countrySelect: 'kr' as string,
                summerNameInput: '' as string,
                searchClick: false,
            }
        },
        methods: {
            summerNameSearch() {
                interface DataType {
                    country: string,
                    summerName: string,
                }

                const data: DataType = {
                    country: this.countrySelect,
                    summerName: this.summerNameInput
                }

                this.$store.dispatch('GET_USER', data);

                if (this.$store.state.userData) {
                    this.$router.push(`/search/${data.summerName}`).catch(() => { undefined });
                }

                this.summerNameInput = '';
                this.searchClick = false;
            },
            summerNameReset() {
                this.summerNameInput = '';
            },
            searchUserClick(data) {
                this.$store.dispatch('GET_USER', data);

                if (this.$store.state.userData) {
                    this.$router.push(`/search/${data.summerName}`).catch(() => { undefined });
                }

                this.summerNameInput = '';
                this.searchClick = false;
            },
            searchMouseClick() {
                this.searchClick = !this.searchClick;
            },
            deleteSearchData(index) {
                const idx = index;

                this.$store.dispatch('DELETE_SEARCH_DATA', idx);
            }
        },
    })
</script>

<style scoped>
.search_box {
    width: auto;
    height: auto;
    margin-right: 25px;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    position: relative;
    background-color: white;
}
.country_select, .summer_name {
    padding: 5px 10px;
    border: none;
    font-size: 14px;
}
.country_select:focus, .summer_name:focus {
    outline: none;
}
.country_select {
    width: 30%;
}
.summer_name {
    width: 60%;
}
.line {
    width: 1px;
    height: 15px;
    margin: 0 10px;
    display: block;
    background-color: #D2D2D2;
}
.icon_box {
    width: 20px;
}
.fa {
    color: #A6A6A6;
}
.fa-times {
    cursor: pointer;
}
.search_list {
    width: 100%;
    top: 100%;
    left: 0;
    padding: 10px 0;
    position: absolute;
    border: 1px solid #A6A6A6;
    font-size: 14px;
    color: black;
    background-color: white;
}
.search {
    padding: 5px 10px;
    background-color: white;
}
.search:hover .summer_name{
    text-decoration: underline;
}
.data_country {
    color: white;
    border-radius: 5px;
    padding: 2px 8px;
    background-color: #8d8cff;
}
.data_summer_name {
    width: 75%;
    margin-left: 15px;
    display: inline-block;
    cursor: pointer;
}
</style>