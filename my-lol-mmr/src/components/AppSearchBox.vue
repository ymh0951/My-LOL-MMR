<template>
    <div class="search_box">
        <select class="country-select">
            <option value="na">NA</option>
            <option value="euw">EUW</option>
            <option value="eune">EUNE</option>
            <option value="kr" selected>KR</option>
        </select>
        <span class="line"></span>
        <input class="summer-name" placeholder="소환사명">
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        
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
.country-select, .summer-name {
    padding: 5px 10px;
    border: none;
    font-size: 14px;
}
.country-select:focus, .summer-name:focus {
    outline: none;
}
.country-select {
    width: 80px;
}
.line {
    width: 1px;
    height: 15px;
    margin: 0 10px;
    display: block;
    background-color: #D2D2D2;
}
</style>