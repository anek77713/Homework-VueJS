<template>
  <div>
    <Header />

    <v-layout row wrap class="mt-4">
      <v-flex xs2>
        <LeftMenu />
      </v-flex>

      <v-flex xs8>
        <router-view />
      </v-flex>

      <v-flex xs2>
        <RightMenu />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import Header from '@/components/layouts/Header'
  import LeftMenu from '@/components/layouts/LeftMenu'
  import RightMenu from '@/components/layouts/RightMenu'

  export default {
    name: 'DefaultLayout',
    components: { RightMenu, LeftMenu, Header }
  }
</script>

<style scoped>
</style>
