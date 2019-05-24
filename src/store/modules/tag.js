import {fetchTags} from '@/api/tags'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }) {
      fetchTags()
        .then(result => commit('mutateList', result.data))
    }
  },
  mutations: {
    mutateList: (state, tags) => {
      state.list = tags
    }
  },
  getters: {
    getList: (state) => state.list
  }
}
