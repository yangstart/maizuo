import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {SHOWMUTATION} from '@/type'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barIsShow:true,
    commingSoon: []
  },
  mutations: {
    [SHOWMUTATION](state, data) {
     state.barIsShow = data
    },
    commingListMutaion(state, data){
      state.commingSoon = data
    }
  },
  actions: {
    getCommingAction(store){
      axios({
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=6160051",
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584235597777389081625"}',
          'X-Host': 'mall.film-ticket.film.list'  
        }
      
      }).then(res => {
        if(res.data.msg === 'ok'){
          store.commit('commingListMutaion', res.data.data.films)
        }
      })
    }
  },
  getters:{
    // 数据的加工,相当于计算属性 也可以mapGetters
    filterComming(state){
      return state.commingSoon.filter((item, index) => index<1)
    },
  },
  modules: {
  }
})
