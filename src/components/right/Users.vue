<template>
  <div>
    <v-text-field
      label="Search"
      single-line
      v-model="userNameLike"
      :value="userNameLike"
    />

    <v-progress-circular
      indeterminate
      color="purple"
      v-if="loading"
    />

    <v-tooltip top v-for="user in users" :key="user.id">
      <template v-slot:activator="{ on }">
        <div class="user">
          <v-avatar
            size="18px"
            style="margin-right: 5px"
            dark v-on="on"
          >
            <img
              :src="user.profile_image"
              alt="Avatar"
            >
          </v-avatar>
          <div>{{ user.display_name }}</div>
        </div>
      </template>

      <div>
        <p>Gold: {{ user.badge_counts.gold }}</p>
        <p>Silver: {{ user.badge_counts.silver }}</p>
        <p>Bronze: {{ user.badge_counts.bronze }}</p>
      </div>
    </v-tooltip>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Users',
    computed: {
      ...mapGetters({
        users: 'user/getList',
        loading: 'user/getLoading'
      })
    },
    data() {
      return {
        userNameLike: ''
      }
    },
    watch: {
      'userNameLike': function(val){
        this.fetchUsers({ '_limit': 50, 'display_name_like': val })
      }
    },
    created () {
      this.fetchUsers({ '_limit': 50, 'display_name_like': this.userNameLike })
    },
    methods: {
      ...mapActions({
        fetchUsers: 'user/fetch'
      })
    }
  }
</script>

<style scoped>
  .user {
    display: flex;
    margin: 15px 0 15px 0;
  }
</style>
