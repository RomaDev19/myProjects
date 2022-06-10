<template>
  <div class="editprofile__box">
    <div class="editprofile__header">
      <div class="editprofile__header-title">
        <h2>Edit Profile</h2>
        <img
          src="../assets/img/clients-filter__popup-close.svg"
          alt=""
          @click="toggleProfile"
        />
      </div>
    </div>
    <div class="editprofile__body-login">
      <div class="editprofile__body-text">Login</div>
      <input
        ref="login"
        type="text"
        class="editprofile__body-input"
        v-model="login"
      />
    </div>
    <!-- <div class="editprofile__body-password">
      <div class="editprofile__body-text">Old Password</div>
      <input ref="password" type="text" class="editprofile__body-input" />
    </div> -->

    <div class="editprofile__body-password">
      <div class="editprofile__body-text">New Password</div>
      <input
        ref="login"
        type="password"
        class="editprofile__body-input"
        v-model="newPassword"
      />
    </div>
    <div class="editprofile__body-password">
      <div class="editprofile__body-text">Confirm Password</div>
      <input
        ref="password"
        type="password"
        class="editprofile__body-input"
        v-model="confirmPassword"
      />
    </div>
    <div class="editprofile__footer">
      <button
        class="editprofile__footer-logOut"
        type="button"
        @click.prevent="singOut"
      >
        Log out
      </button>
      <button class="editprofile__footer-btn" type="button" @click="saveData">
        Save
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import axios from 'axios';
  export default {
    data() {
      return {
        newPassword: '',
        confirmPassword: '',
        login: '',
      };
    },
    methods: {
      ...mapActions({
        toggleProfile: 'profile/toggleProfile',
        singOutActions: 'auth/singOut',
      }),
      singOut() {
        this.singOutActions().then(() => {
          this.toggleProfile();
          this.$router.replace({
            name: 'SingIn',
          });
        });
      },
      async saveData() {
        let pass;
        if (this.newPassword === this.confirmPassword) {
          pass = this.newPassword;
          await axios.put('/users/', {
            name: login,
            password: pass,
          });
        } else {
          await axios.put('/users/', {
            name: login,
          });
        }
      },
    },
    computed: {
      ...mapGetters({
        user: 'auth/user',
      }),
    },
    mounted() {
      this.login = this.user[0].name;
    },
  };
</script>

<style lang="scss" scoped>
  .editprofile {
    &__box {
      padding: 0 24px;
      position: absolute;
      top: 0;
      right: 0;
      width: 628px;
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 12px;
      height: 100%;
      z-index: 3;
    }
    &__header {
      &-title {
        display: flex;
        justify-content: space-between;
        padding: 24px 0;
        align-items: center;
        border-bottom: 1px solid #202020;
        & h2 {
          font-size: 18px;
        }
        & img {
          padding: 14px;
          border: 1px solid #202020;
          border-radius: 6px;
          cursor: pointer;
        }
      }
      &-box {
        margin: 0 24px;
        padding-bottom: 24px;
        border-bottom: 1px solid #202020;
      }
    }
    &__body {
      margin: 24px 0;
      position: relative;
      display: flex;
      justify-content: space-between;
      &-login {
        flex: 0 0 48%;
      }
      &-password {
        flex: 0 0 48%;
      }
      &-text {
        color: #fff;
        padding: 16px 0;
      }
      &-input {
        width: 100%;
        height: 56px;
        background: #141414;
        border: 1px solid #1d1d1d;
        box-sizing: border-box;
        border-radius: 8px;
        margin-bottom: 16px;
        color: #fff;
        padding-left: 16px;
      }
    }
    &__footer {
      position: absolute;
      bottom: 24px;
      right: 24px;
      &-logOut {
        font-size: 16px;
        line-height: 16px;
        color: #d01e22;
        border: none;
        background: inherit;
        cursor: pointer;
        margin-right: 24px;
      }
      &-btn {
        padding: 12px 64px;
        background: rgb(54, 165, 3);
        border-radius: 12px;
        border: none;
        color: #fff;
        cursor: pointer;
        &:hover {
          transition: 0.3s;
          background: $mainColorHover;
        }
      }
    }
  }
</style>
