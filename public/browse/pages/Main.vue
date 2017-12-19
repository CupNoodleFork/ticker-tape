<template>
  <div class="browse-page">
    <Row type="flex" align="middle" justify="space-between" class="header-bar gray">
      <router-link to="/" tag="div" class="logo-white-icon logo-item pointer"></router-link>
      <Row type="flex" align="middle" v-if="!userInfo">
        <router-link :to="{name: 'signup'}" tag="div" class="operate-btn">Sign Up</router-link>
        <router-link :to="{name: 'login'}" tag="div" class="operate-btn">Login</router-link>
      </Row>
      <Dropdown placement="bottom-end" v-if="userInfo">
        <Row type="flex" align="middle">
          <Row type="flex" align="middle" justify="center" class="avatar">
            <Icon type="person"></Icon>
          </Row>
          <div class="user-name" v-text="userInfo.displayName"></div>
        </Row>
        <DropdownMenu slot="list" class="user-dropdown-menu">
          <Row type="flex" align="middle" class="log-out-item" @click.native="logout">
            <Icon type="power" class="mgr10 logout-icon"></Icon>
            <div>Log out</div>
          </Row>
        </DropdownMenu>
      </Dropdown>
    </Row>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import firebase from 'firebase/app';

  export default {
    created() {
    },
    computed: {
      ...mapState('user', ['userInfo'])
    },
    methods: {
      logout() {
        firebase.auth().signOut();
      }
    }
  }
</script>

<style lang="scss">
  .user-dropdown-menu {
    width: 150px;
    .log-out-item {
      padding: 0px 12px;
      cursor: pointer;
      height: 36px;
      &:hover {
        background-color: #ebebeb;
      }
      .logout-icon {
        font-size: 16px;
        color: #ed3f14;
      }
    }
  }
  .browse-page {
    .avatar {
      border-radius: 18px;
      height: 36px;
      width: 36px;
      border: 2px solid #ffffff;
      color: #ffffff;
      font-size: 20px;
      margin-right: 10px;
    }
    .user-name {
      color: #ffffff;
    }
  }
</style>
