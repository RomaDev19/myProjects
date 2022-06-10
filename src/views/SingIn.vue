<template>
  <div class="auth">
    <form class="auth-form" @submit.prevent="submit">
      <h1>Authorization</h1>
      <div class="form-input">
        <label for="email"> Login </label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your e-mail"
          v-model="credentials.email"
          required
        />
      </div>

      <div class="form-input">
        <label for="password"> Password </label>

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Type your password"
          v-model="credentials.password"
          required
        />
      </div>

      <div class="form-checked">
        <input
          class="custom-checkbox"
          type="checkbox"
          id="remember"
          name="remember"
          v-model="rememberChecked"
        />
        <label for="remember">Remember me</label>
      </div>

      <div class="form-button">
        <button @keyup.enter="submit" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'singIn',
    components: {},
    data() {
      return {
        credentials: {
          email: '',
          password: '',
        },
        rememberChecked: false,
      };
    },
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
      }),
    },
    methods: {
      ...mapActions({
        singIn: 'auth/singIn',
        stopLoader: 'loader/hide',
      }),
      submit() {
        this.rememberAction();
        this.singIn(this.credentials).then(() => {
          if (this.authenticated) {
            this.successLogin();
          } else {
            this.errorLogin();
          }
        });
      },
      successLogin() {
        this.$router.replace({
          name: 'Dashboard',
        });
      },
      errorLogin() {
        this.stopLoader();
      },
      rememberAction() {
        if (this.rememberChecked && this.credentials.email !== '') {
          localStorage.waxeenEmail = this.credentials.email;
          localStorage.waxeenCheckbox = this.rememberChecked;
        } else {
          localStorage.waxeenEmail = '';
          localStorage.waxeenCheckbox = '';
        }
      },
    },
    mounted() {
      if (localStorage.waxeenCheckbox && localStorage.waxeenEmail !== '') {
        this.rememberChecked = true;
        this.credentials.email = localStorage.waxeenEmail;
      } else {
        this.rememberChecked = false;
        this.credentials.email = '';
      }
    },
  };
</script>
<style lang="scss" scoped>
  .auth {
    background-image: url('../assets/img/backgraund_login.svg');
    position: relative;
    background-size: cover;
    background-color: #303030;
    color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Inter;
  }
  .auth-form {
    z-index: 1;
    width: 424px;
    background-color: #0b0b0b;
    border: 1px solid #202020;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px #171717;
    border-radius: 12px;
    padding: 24px;

    h1 {
      padding-bottom: 24px;
      font-style: normal;
      font-weight: 600;
      font-size: 28px;
      line-height: 136.02%;
      /* identical to box height, or 38px */
      text-align: center;
      color: #ffffff;
    }
  }
  .form-button {
    display: flex;

    button {
      font-weight: 600;
      color: #fff;
      padding: 16px 24px;
      background: #36a503;
      border-radius: 8px;
      width: 100%;
      border-width: 0;
      &:hover {
        background-color: #2e9400;
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
  .form-input {
    font-style: normal;
    font-size: 14px;
    line-height: 17px;

    label {
      font-weight: 500;
      display: block;
      margin-bottom: 8px;
    }

    input {
      color: #fff;
      margin-bottom: 24px;
      width: 100%;
      padding: 12px 0 12px 12px;
      background: #1b1b1b;
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 6px;
      &:focus-visible {
        outline: 0px;
      }
      &::placeholder {
        color: #7a828a;
      }
    }
  }
  .form-checked {
    margin-bottom: 24px;

    label {
      color: #7a828a;
    }

    input {
      background: #1b1b1b;
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 2px;
    }

    .custom-checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    .custom-checkbox + label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }

    .custom-checkbox + label::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      background: #1b1b1b;
      border: 1px solid #202020;
      border-radius: 0.25em;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
      border-radius: 2px;
    }

    .custom-checkbox:checked + label::before {
      background-size: 14px 18px;
      background-image: url('../assets/img/checkbox_checked.svg');
    }

    .custom-checkbox:not(:disabled):not(:checked) + label:hover::before,
    .custom-checkbox:not(:disabled):checked + label:hover::before {
      cursor: pointer;
    }
  }
  .error {
    animation: shake 0.2s ease-in-out 0s 2;
    box-shadow: 0 0 0.5em red;
  }
  @keyframes shake {
    0% {
      margin-left: 0rem;
    }
    25% {
      margin-left: 0.5rem;
    }
    75% {
      margin-left: -0.5rem;
    }
    100% {
      margin-left: 0rem;
    }
  }
</style>
