<template>
  <div class="right-part">
    <Users />
  </div>
</template>

<script>
  import Users from "../right/Users";

  export default {
    name: 'RightMenu',
    components: {
      Users
    }
  }
</script>

<style lang="scss" scoped>
  .right-part{
    margin:10px
  }
</style>
