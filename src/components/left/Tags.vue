<template>
  <v-list-group no-action>
    <template v-slot:activator="">
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title>Tags</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>

    <v-list-tile
      v-for="tag in tags"
      :key="tag.name"
      @click=""
    >
      <v-list-tile-content>
        <v-list-tile-title>{{ tag.name }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list-group>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Tags',
    computed: {
      ...mapGetters({
        tags: 'tag/getList'
      })
    },
    created () {
      this.fetchTags()
    },
    methods: {
      ...mapActions({
        fetchTags: 'tag/fetch'
      })
    }
  }
</script>
