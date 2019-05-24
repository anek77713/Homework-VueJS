import {fetchQuestions} from '@/api/questions'

export default {
  namespaced: true,
  state: {
    list: [],
    loading: false
  },
  actions: {
    fetch ({ commit }) {
      fetchQuestions()
        .then(result => commit('mutateList', result.data))
    }
  },
  mutations: {
    mutateList: (state, questions) => {
      state.list = questions
    }
  },
  getters: {
    getList: (state) => state.list
  }
}
