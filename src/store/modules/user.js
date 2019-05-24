import {fetchUsers} from '@/api/users'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }, data) {
      commit('mutateLoading', true)
      fetchUsers(data)
        .then(result => commit('mutateList', result.data))
        .finally(() => commit('mutateLoading', false))
    }
  },
  mutations: {
    mutateList: (state, users) => {
      state.list = users
    },
    mutateLoading: (state, load) => {
      state.loading = load
    }
  },
  getters: {
    getList: (state) => state.list,
    getLoading: (state) => state.loading
  }
}
