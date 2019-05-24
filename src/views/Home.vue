<template>
  <div>
    <v-layout row wrap>
      <v-flex xs6>
        <h1>Questions</h1>
      </v-flex>

      <v-flex xs6 class="text-xs-right">
        <v-btn color="info">
          Ask Question
        </v-btn>
      </v-flex>
    </v-layout>

    <Questions />

  </div>
</template>

<script>
import Questions from '../components/Questions'


export default {
name: 'Home',
components: { Questions }
}
</script>

<style scoped>
</style>
