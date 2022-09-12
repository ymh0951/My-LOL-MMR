<template>
    <div class="search_box">
        <select class="country_select" v-model="countrySelect">
            <option value="na">NA</option>
            <option value="euw">EUW</option>
            <option value="eune">EUNE</option>
            <option value="kr" selected>KR</option>
        </select>
        <span class="line"></span>
        <input class="summer_name" placeholder="소환사명" v-model="summerNameInput" @keyup.enter="summerNameSearch">
        <div class="icon_box">
            <i class="fa fas fa-search" v-if="!summerNameInput"></i>
            <i class="fa fas fa-times" @click="summerNameReset" v-else></i>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        data() {
            return {
                countrySelect: 'kr' as string,
                summerNameInput: '' as string
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

                this.$store.dispatch('searchUser', data);

                if (this.$store.state.userData) {
                    this.$router.push(`/search/${data.summerName}`).catch(() => { undefined });
                }
            },
            summerNameReset() {
                this.summerNameInput = '';
            },
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
</style>