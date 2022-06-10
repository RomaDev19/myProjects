<template>
  <li class="profile" @click="toggleProfile">
    <div class="profile__wrap">
      <button type="button">{{ user[0].name.substr(0, 1) }}</button>
      <span class="profile__name">{{ user[0].name }}</span>
    </div>
    <div class="profile__line"></div>
  </li>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    methods: {
      ...mapActions({
        toggleProfile: 'profile/toggleProfile',
      }),
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .profile {
    cursor: pointer;
    button {
      min-width: 48px;
      text-transform: uppercase;
      margin-left: 18px;
      padding: 12px;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #ffffff;
      background: linear-gradient(0deg, #111111, #111111);
      border: 0.5px solid #202020;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
      @media screen and (max-width: $desktop) {
        margin-left: 0;
      }
    }
    @media screen and (max-width: $table) {
      width: 100%;
    }
    &__wrap {
      @media screen and (max-width: $desktop) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    &__line {
      margin: 24px 0;
      border-bottom: 1px solid #202020;
      @media screen and (max-width: $table) {
        display: none;
      }
    }
    &__name {
      margin-left: 16px;
      font-size: 14px;
      line-height: 24px;
      color: #36a503;
      @media screen and (max-width: $desktop) {
        margin-left: 0;
      }
    }
  }
</style>
