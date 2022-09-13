import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://ymh0951.github.io';

Vue.use(Vuex)

interface searchUser {
  country: string,
  summerName: string
}

export default new Vuex.Store({
  state: {
    country: '' as string,
    summerName: '' as string,
    userData: {} as object | any,
    userDataClosestRank: {
      rank: '' as string,
      normal: '' as string,
      ARAM: '' as string
    },
    spinner: false,
  },
  getters: {
    differenceRanked(state) {
      return `상위 ${(100 - state.userData.ranked.percentile).toFixed(2)} %`;
    },
    differenceNormal(state) {
      return `상위 ${(100 - state.userData.normal.percentile).toFixed(2)} %`;
    },
    differenceARAM(state) {
      return `상위 ${(100 - state.userData.ARAM.percentile).toFixed(2)} %`;
    }
  },
  mutations: {
    getUser(state, userData: searchUser): void {
      state.country = userData.country;
      state.summerName = userData.summerName;
      state.userData = {};
      state.spinner = false;

      axios.get(`https://${state.country}.whatismymmr.com/api/v1/summoner?name=${state.summerName}`)
        .then(response => {
          state.userData = response.data;

          if (response.data.ranked.closestRank) {
            state.userDataClosestRank.rank = response.data.ranked.closestRank.split(' ')[0].toLowerCase();
          } else {
            state.userDataClosestRank.rank = 'sad';
          }

          if (response.data.normal.closestRank) {
            state.userDataClosestRank.normal = response.data.normal.closestRank.split(' ')[0].toLowerCase();
          } else {
            state.userDataClosestRank.normal = 'sad';
          }

          if (response.data.ARAM.closestRank) {
            state.userDataClosestRank.ARAM = response.data.ARAM.closestRank.split(' ')[0].toLowerCase();
          } else {
            state.userDataClosestRank.ARAM = 'sad';
          }

          state.spinner = true;
        })
        .catch(err => {
          if (err.response.data.error.code === 100) {
            alert('일치하는 유저가 없습니다.'); 
            location.href = '/';
            
          } else if (err.response.data.error.code === 9001) {
            alert('요청이 너무 많습니다.');
            location.href = '/';
          } else {
            alert('예기치 않는 내부 서버 오류입니다.');
            location.href = '/';
          }
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
