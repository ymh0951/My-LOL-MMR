import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.headers.common['Access-Control-Allow-Orgin'] = '*';
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
    searchData: [] as searchUser[],
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
    GET_USER(state, userData: searchUser): void {
      state.country = userData.country;
      state.summerName = userData.summerName;
      state.userData = {};
      state.spinner = false;

      axios.get(`https://port-0-cors-anywhere-1jvasx23lbhxpotu.gksl2.cloudtype.app/https://${state.country}.whatismymmr.com/api/v1/summoner?name=${state.summerName}`)
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

          for (let i = 0; i < state.searchData.length; i++) {
            if (state.searchData[i].summerName === userData.summerName) {
              state.searchData.splice(i, 1);
            }
          }

          state.searchData.unshift(userData);
          localStorage.setItem('userSearch', JSON.stringify(state.searchData));

        })
        .catch(err => {
          if (err.response.data.error.code === 100) {
            alert('일치하는 유저가 없습니다.'); 
            location.href = 'https://ymh0951.github.io/My-LOL-MMR/';
            
          } else if (err.response.data.error.code === 9001) {
            alert('요청이 너무 많습니다.');
            location.href = 'https://ymh0951.github.io/My-LOL-MMR/';
          } else {
            alert('예기치 않는 내부 서버 오류입니다.');
            location.href = 'https://ymh0951.github.io/My-LOL-MMR/';
          }
        })
    },
    GET_SEARCH_DATA(state) {
      const localsearchData: object | any = localStorage.getItem('userSearch');

      state.searchData = JSON.parse(localsearchData) || [];
    },
    DELETE_SEARCH_DATA(state, index) {
      state.searchData.splice(index, 1);

      localStorage.setItem('userSearch', JSON.stringify(state.searchData));
    } 
  },
  actions: {
    searchUser({ commit }, userData) {
      commit('GET_USER', userData);
    },
    getSearchData({ commit }) {
      commit('GET_SEARCH_DATA');
    },
    DELETE_SEARCH_DATA({ commit }, index) {
      commit('DELETE_SEARCH_DATA', index);
    }
  },
  modules: {
  }
})
