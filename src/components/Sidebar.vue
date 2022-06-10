<template>
  <div class="sidebar" :class="menu ? 'sidebar_adapt' : null">
    <router-link class="d-flex-center" to="/dashboard">
      <logo />
    </router-link>

    <ul class="sidebar-wrap">
      <profile class="profile__adaptive" />
      <sidebar-link
        v-for="link in namesLink"
        :key="link.name"
        class="sidebar__link"
        :link="link"
      />
    </ul>
  </div>
</template>

<script>
  import Logo from './Logo';
  import Profile from './Profile';
  import SidebarLink from './SidebarLink';
  import ProfilePopup from './EditProfile';
  import { mapGetters } from 'vuex';
  export default {
    name: 'sidebar',
    components: {
      Logo,
      Profile,
      SidebarLink,
      ProfilePopup,
    },
    props: {
      namesLink: { type: Array },
    },
    computed: {
      ...mapGetters({
        menu: 'stateMenu',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .sidebar {
    padding: 24px 24px 0 24px;
    border-right: 1px solid #343434;
    background: #000000;
    @media screen and (max-width: $table) {
      position: absolute;
      z-index: 1000;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
  @media screen and (max-width: $table) {
    .profile__adaptive {
      display: none;
    }
  }

  .sidebar-wrap {
    margin-block-start: 24px;
    padding: 0;
    @media screen and (max-width: $desktop) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    @media screen and (max-width: $table) {
      align-items: baseline;
    }
  }
  .d-flex-center {
    display: flex;
    justify-content: center;
  }
  .sidebar_adapt {
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
</style>
