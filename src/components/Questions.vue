<template>
  <div>
    <div v-for="question in questions" :key="question.id">
      <div v-html="question.body" />
      <hr>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Questions',
  computed: {
    ...mapGetters({
      questions: 'question/getList'
    })
  },
  created () {
    this.fetchQuestions()
  },
  methods: {
    ...mapActions({
      fetchQuestions: 'question/fetch'
    })
  }
}
</script>

<style scoped>
</style>
