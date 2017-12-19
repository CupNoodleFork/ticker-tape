<template>
  <div>
    <Row type="flex" align="middle" justify="space-between" class="header-bar gray">
      <router-link to="/" tag="div" class="logo-white-icon logo-item pointer"></router-link>
      <Row type="flex" align="middle" v-if="!userInfo">
        <router-link :to="{name: 'signup'}" tag="div" class="operate-btn">Sign Up</router-link>
        <router-link :to="{name: 'login'}" tag="div" class="operate-btn">Login</router-link>
      </Row>
      <Row type="flex" align="middle" v-if="userInfo">

      </Row>
    </Row>
    <router-view />
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    created() {
    },
    computed: {
      ...mapState('user', ['userInfo'])
    }
  }
</script>

<style lang="scss">

</style>
