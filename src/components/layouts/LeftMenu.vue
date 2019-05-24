<template>
  <v-navigation-drawer>
    <v-list dense class="pt-0">
      <v-list-tile @click="">
        <v-list-tile-content>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>

      <Tags />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import Tags from '../left/Tags'

  export default {
    name: 'LeftMenu',
    components: { Tags }
  }
</script>

<style scoped>
</style>
