import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

interface searchUser {
  country: string,
  summerName: string
}

export default new Vuex.Store({
  state: {
    country: '' as string,
    summerName: '' as string,
    userData: {} as object,
  },
  getters: {
  },
  mutations: {
    getUser(state, userData: searchUser): void {
      state.country = userData.country;
      state.summerName = userData.summerName;
      state.userData = {};

      axios.get(`https://${state.country}.whatismymmr.com/api/v1/summoner?name=${state.summerName}`)
        .then(response => {
          state.userData = response.data;
        })
        .catch(err => {
          if (err.response.data.error.code === 100) alert('일치하는 유저가 없습니다.');
          else if (err.response.data.error.code === 9001) alert('요청이 너무 많습니다.');
          else alert('예기치 않는 내부 서버 오류입니다.');
        })
    }
  },
  actions: {
    searchUser({ commit }, userData) {
      commit('getUser', userData);
    }
  },
  modules: {
  }
})
