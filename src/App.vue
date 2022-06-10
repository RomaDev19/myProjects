<template>
  <div id="app">
    <sidebar v-if="authenticated && route" :namesLink="sidebarNames" />
    <loader
      v-if="loading"
      object="#36a503"
      color1="#ffffff"
      color2="#17fd3d"
      size="8"
      speed="1.0"
      bg="#343a40"
      objectbg="#999793"
      opacity="90"
      disableScrolling="false"
      name="circular"
    ></loader>
    <edit-profile v-if="openProfile" />
    <router-view />
  </div>
</template>

<script>
  import 'normalize.css';
  import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';
  import Sidebar from './components/Sidebar.vue';
  import { mapGetters, mapState } from 'vuex';
  import EditProfile from './components/EditProfile.vue';
  export default {
    components: {
      Sidebar,
      EditProfile,
    },
    data() {
      return {
        sidebarNames: [
          { name: 'Dashboard' },
          {
            name: 'Clients',
            children: [{ name: 'Client' }, { name: 'Fake Clients' }],
          },
          {
            name: 'Structure',
            children: [{ name: 'Real' }, { name: 'Fake' }],
          },
          // { name: 'Deposit' },
          {
            name: 'Products',
            children: [{ name: 'Pools' }, { name: 'Cases' }],
          },
          // { name: 'Coin' },
          {
            name: 'Ranks',
            children: [{ name: 'Rank' }, { name: 'Awards' }],
          },
          { name: 'Finance' },
          { name: 'Withdrawals' },
        ],
      };
    },
    computed: {
      ...mapGetters({
        authenticated: 'auth/authenticated',
        user: 'auth/user',
        openProfile: 'profile/stateProfile',
      }),
      ...mapState('loader', ['loading']),
      route() {
        return this.$route.name !== '404';
      },
    },
    mounted() {},
  };
</script>
<style lang="scss">
  * {
    font-family: $mainFont;
  }
  #app {
    display: flex;
    min-height: 100vh;
  }
  body {
    height: 100%;
    background-color: #000000;
  }
  .d-flex {
    display: flex;
  }
  .w100 {
    width: 100%;
  }
  .w554 {
    width: 554px;
  }
  .h77 {
    height: 77vh;
  }
  .mt24 {
    margin-top: 24px;
    display: flex;
    justify-content: center;
  }
  .mb24 {
    margin-bottom: 24px;
  }
  .mb16 {
    margin-bottom: 16px;
  }
  .mb8 {
    margin-bottom: 8px;
  }

  .modal-sec::-webkit-scrollbar {
    display: none;
  }
  #dashboard {
    overflow-y: scroll;
  }
  .modal-header .tabs::-webkit-scrollbar {
    display: none;
  }
  .template::-webkit-scrollbar {
    display: none;
  }
  .template .items-container {
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .template .items-container::-webkit-scrollbar {
    display: none;
  }

  .active {
    background: #36a503;
    border: 1px solid #202020;
    color: #ffffff !important;
    border-radius: 12px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .chart svg {
    border: 1px solid #202020;
    border-radius: 12px;
  }
  .chart2 svg {
    border: 1px solid #202020;
    border-radius: 12px;
  }
  .chart2 {
    overflow: hidden;
    width: 100%;

    text-align: center;
    display: flex;
  }
  input::placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    color: #ffffff;
  }
  .fix-header {
    position: fixed;
    background: transparent;
    top: 0;
    display: flex;
    margin-left: -21px;
  }
  .h-block {
    display: none;
  }

  .header-container {
    width: 1125px;
    margin: 0 auto;
    padding: 16px 25px;
    background: radial-gradient(
      20.18% 34.55% at 50% 18.27%,
      #000000 0%,
      #141414 100%
    );
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-container h1 {
    line-height: 38px;
  }
  #indicators-tab,
  #info-tab,
  #history-tab,
  #investments-tab,
  #case-tab,
  #structure-tab {
    display: none;
  }
  #structure-tab a {
    color: #36a503;
    text-decoration: none;
    cursor: pointer;
  }
  .selected {
    background: #36a503;
    border: 1px solid #202020;
    color: #ffffff !important;
    border-radius: 12px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  p {
    color: #ffffff;
  }
  .nav-menu a {
    width: 100%;
    padding: 12px 20px;
    color: #fff;
    text-decoration: none;
  }

  h1,
  .txt,
  p,
  .name,
  .value {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
  }

  span {
    font-size: 13px;
  }
  h1 {
    margin: 0;
    font-size: 24px;
    line-height: 48px;
    color: #ffffff;
  }
  h2 {
    margin: 0;
    font-size: 17px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin-right: 8px;
    color: #ffffff;
  }

  .green {
    color: #36a503;
  }
  .red {
    color: #d01e22 !important;
  }

  @font-face {
    font-family: 'Inter';
    src: url('./assets/fonts/Inter Regular.otf');
  }

  .container {
    background: linear-gradient(
      51.09deg,
      #000000 -13.01%,
      #0d0d0d 45.52%,
      #181818 111.86%
    );

    width: 1440px;
    margin: 0 auto;
  }

  .calendar-blck p {
    color: #36a503;
    font-size: 17px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  .calendar-blck {
    display: flex;
    flex-direction: row;
    float: right;

    top: 20px;
    color: #fff;
  }
  .btn-blck {
    display: flex;
    flex-direction: row;
    float: right;

    top: 20px;
    color: #fff;
  }
  .switch-cal {
    display: flex;
  }
  .switch-items {
    display: flex;
    align-items: center;
  }
  .switch-cal > div {
    margin-right: 24px;
  }
  .switch-cal > div:nth-child(3) {
    margin-right: 12px;
  }
  .switch-items > div:nth-child(4) {
    margin-right: 12px;
  }

  .switch-items > div:nth-child(2),
  .switch-items > div:nth-child(3) {
    margin-right: 16px;
    border-left: 0;
  }
  .switch-items > div:nth-child(3) {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    color: #ffffff;
  }
  .h-blck {
    min-width: 261px;
  }

  .r-b {
    border-radius: 6px 0px 0px 6px;
  }
  .l-b {
    border-radius: 0px 6px 6px 0px;
  }

  .btn {
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn2 {
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: 1px solid #202020;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .acc-btn {
    font-family: Inter;
    font-style: normal;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    background: #36a503;
    border: 2px solid #36a503;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 12px 24px;
    color: #fff;
  }
  .btn-calendar {
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    cursor: pointer;
    padding: 9px;
    border: 1px solid #202020;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .add-btn {
    width: 159px;
    position: absolute;
    right: 0;
    margin: 24px;
    bottom: 0;
  }

  .create-pool,
  .create-pump,
  .create-case,
  .add-new-fakes,
  .add-client,
  .create-present,
  .create-price,
  .add-btn,
  .add-client-mob,
  .delete-client-mob {
    height: 40px;
    font-family: Inter;
    font-style: normal;
    background: #36a503;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    text-align: center;
    padding: 8px 16px;
    margin-right: 0 !important;
  }

  .create-present {
    margin-right: 0 !important;
  }
  .header .btn-calendar {
    display: none;
  }
  .pool-btn {
    height: 40px;
    font-family: Inter;
    font-style: normal;
    background: #36a503;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    text-align: center;
    padding: 8px 24px;
  }
  .pool-btn-2 {
    max-width: 300px;
    width: 100%;
    text-decoration: none;
    display: block;
    height: 40px;
    color: #b9b9b9;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding: 8px 0;
    text-align: center;
  }
  .pool-mob-display > div {
    font-size: 14px;
    line-height: 24px;
    padding-left: 6px;
    padding-right: 6px;
  }
  .blck-btn {
    font-family: Inter;
    font-style: normal;
    color: #d01e22;
    width: 103px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    box-sizing: border-box;
    border: 2px solid #d01e22;
    border-radius: 12px;
    text-align: center;
    padding: 12px 24px;
  }

  .transfer-btn {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    cursor: pointer;
    font-size: 14px;
    background: #36a503;
    border-radius: 6px;
    width: 70px;
    text-align: center;
    padding: 6px 12px;
    width: 72px;
  }

  .responsive-menu {
    padding: 24px;
    border-right: 1px solid #343434;
    background: #000000;
    position: fixed;
    height: 100%;
    width: 213px;
  }
  .responsive-menu .item-menu {
    display: flex;
    cursor: pointer;
    margin-bottom: 8px;
    mix-blend-mode: normal;
    border-radius: 12px;
  }
  .responsive-menu .coin {
    padding-bottom: 0;
  }
  .responsive-menu .item-menu:hover {
    background: #36a503;
  }
  .responsive-menu .item-menu .txt {
    width: 74px;
    height: 24px;

    margin-left: 16px;
    font-size: 14px;
    line-height: 26px;
  }
  .responsive-menu h2 {
    width: 188px;
    margin: 0 auto;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 48px;

    align-items: center;
    justify-content: center;
    letter-spacing: 0.43em;

    /* Defolt color */

    color: #36a503;
  }
  .responsive-menu .nav-menu {
    color: #fff;
    list-style: none;
    padding-left: 0;
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 32px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;

    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #2b2b2b;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    width: 24px;
    height: 24px;
    left: 4px;
    bottom: 4px;
    background: #34a509;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .responsive-menu a {
    text-decoration: none;
  }

  #product-hide-submenu {
    padding-left: 40px;
  }

  #product-hide-submenu a:first-child {
    border-bottom: 1px solid #343434;
  }
  #product-hide-submenu a {
    padding: 12px 20px;
    display: flex;
    cursor: pointer;
    mix-blend-mode: normal;

    font-size: 14px;
    line-height: 26px;
  }

  #setting-hide-submenu {
    padding-left: 40px;
  }

  #setting-hide-submenu a:first-child {
    border-bottom: 1px solid #343434;
  }
  #setting-hide-submenu a {
    padding: 12px 20px;
    display: flex;
    cursor: pointer;
    mix-blend-mode: normal;
    font-size: 14px;
    line-height: 26px;
  }

  input:checked + .slider {
    background-color: #2b2b2b;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2b2b2b;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  .country {
    align-items: center;
  }
  .mainnav {
    position: relative;
    padding: 24px 22px;
    padding-bottom: 5vh;
    background: #0f0f0f;
  }

  .mainnav .user-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(
      180deg,
      #f1ffe3 0%,
      rgba(54, 165, 3, 0.15) 100%
    );
    border-radius: 250px;
    text-align: center;
    line-height: 69px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .profile p {
    font-size: 14px;
    line-height: 24px;
  }
  .profile a {
    display: flex;
    margin-left: 12px;
    align-items: center;
  }
  .user-select {
    display: flex;
    align-items: center;
  }
  .profile a .user-select {
    margin-left: 13px;
  }
  .temp-container .item {
    box-sizing: border-box;
    height: 172px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 24px;
    padding: 24px;
    padding-bottom: 12px;
    border: 1px solid #202020;
    box-sizing: border-box;
  }
  .temp-container .item a {
    padding-left: 10px;
  }
  .temp-container .item:nth-child(1) {
    background-repeat: no-repeat;
    background-position: 3% 100%;
  }
  .temp-container .item:nth-child(2) {
    background-repeat: no-repeat;
    background-position: 5% 100%;
  }
  .temp-container .item:nth-child(3) {
    background-repeat: no-repeat;
    background-position: 6% 100%;
  }
  .temp-container .item:nth-child(4) {
    background-repeat: no-repeat;
    background-position: 5% 100%;
  }
  .template .title-template {
    align-items: baseline;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 17px;

    justify-content: space-between;
    display: flex;
    color: #ffffff;
  }

  .temp-container {
    display: flex;
    color: #fff;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .template .temp-container .name {
    font-size: 18px;
    line-height: 28px;
    display: flex;
    color: #ffffff;
    align-items: center;
  }
  .template .temp-container .value {
    text-align: right;

    font-size: 48px;
    line-height: 58px;
    color: #36a503;
  }

  /* burger Menu */
  header {
    display: flex;
    justify-content: flex-end;
  }

  /* Гамбургер иконка */
  .menu-btn {
    display: none;
    width: 30px;

    height: 30px;
    position: relative;
    z-index: 2;
    overflow: hidden;
  }

  .menu-btn span {
    width: 18px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #36a503;
    transition: all 0.5s;
  }

  .menu-btn span:nth-of-type(2) {
    top: calc(50% - 7px);
  }
  .menu-btn span:nth-of-type(3) {
    top: calc(50% + 7px);
  }

  /* Меняем гамбургер иконку, когда меню открыто */
  .menu-btn.active span:nth-of-type(1) {
    display: none;
  }
  .menu-btn.active span:nth-of-type(2) {
    top: 50%;
    transform: translate(-50%, 0%) rotate(45deg);
  }
  .menu-btn.active span:nth-of-type(3) {
    top: 50%;
    transform: translate(-50%, 0%) rotate(-45deg);
  }

  /* Меню, которое будет появляться */
  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    padding: 15px;
    /* background: #FFEFBA; */
    transform: translateX(-100%);
    transition: transform 0.5s;
  }

  .menu.active {
    transform: translateX(0);
  }

  /* //client */
  .clients {
    color: #fff;
  }

  /* //pool */

  .pool {
    color: #fff;
  }

  .pool .title-block img {
    margin-left: 7px;
  }

  .pool .title-block > div {
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }

  .pool .item > div {
    flex-grow: 1;
  }
  .pool .item > div:nth-child(1) {
    flex-grow: 0.8;
  }
  .pool .item > div:nth-child(2) {
    flex-grow: 1.5;
  }
  .pool .item > div:nth-child(3) {
    flex-grow: 1.7;
  }
  .pool .item > div:nth-child(4) {
    flex-grow: 2;
  }
  .pool .item > div:nth-child(5) {
    flex-grow: 1.5;
    display: flex;
  }
  .pool .item > div:nth-child(6) {
    flex-grow: 1.6;
    display: flex;
  }
  .pool .item > div:nth-child(7) {
    flex-grow: 1.5;
    align-items: center;
    display: flex;
  }
  .pool .item > div:nth-child(7) img {
    padding-right: 8px;
  }
  .pool .item > div:nth-child(8) {
    flex-grow: 0.5;
  }

  .pool .position,
  .pool .email {
    display: flex;
    align-items: center;
  }

  .pool .position p,
  .pool .email p {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    margin: 0;
    text-overflow: ellipsis;
    width: 120px;
  }
  .pool .tag {
    cursor: pointer;
  }

  /* //case */

  .case {
    color: #fff;
  }

  .case .title-block img {
    margin-left: 7px;
  }

  .case .title-block > div {
    flex-grow: 1;
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }

  .case .title-block > div:nth-child(1) {
    flex-grow: 2.6;
  }
  .case .title-block > div:nth-child(2) {
    flex-grow: 1.6;
  }
  .case .title-block > div:nth-child(3) {
    flex-grow: 1.4;
  }
  .case .title-block > div:nth-child(4) {
    flex-grow: 1;
  }
  .case .title-block > div:nth-child(5) {
    flex-grow: 1.5;
  }
  .case .title-block > div:nth-child(6) {
    flex-grow: 1.5;
  }
  .case .title-block > div:nth-child(7) {
    flex-grow: 0.5;
  }

  .case .item > div {
    flex-grow: 1;
  }
  .case .item > div:nth-child(7) {
    flex-grow: 0.3;
  }

  .case .position,
  .case .email {
    display: flex;
    align-items: center;
  }
  .case .position p,
  .case .email p {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    margin: 0;
    text-overflow: ellipsis;
    width: 120px;
  }
  .case .tag {
    cursor: pointer;
  }

  /* //finance */

  .finance {
    color: #fff;
  }

  .finance .title-block img {
    margin-left: 7px;
  }

  .finance .title-block > div {
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }

  .finance .item > div:nth-child(1) {
    flex-grow: 1.7;
  }
  .finance .item > div:nth-child(2) {
    flex-grow: 1.7;
  }
  .finance .item > div:nth-child(3) {
    flex-grow: 2;
  }

  .finance .position,
  .finance.email {
    display: flex;
    align-items: center;
  }
  .finance .position p,
  .finance .email p {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    margin: 0;
    text-overflow: ellipsis;
    width: 120px;
  }
  .finance .tag {
    cursor: pointer;
  }

  /* //coin */

  .coin {
    padding-bottom: 10%;
    display: flex;
    color: #fff;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .coin .title-block {
    padding: 16px 20px;
    display: flex;
    border-bottom: 1px solid #202020;
    width: 100%;
    justify-content: space-between;
  }

  .coin .title-block img {
    margin-left: 7px;
  }

  .coin .title-block > div {
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }
  .coin .list {
    width: 550px;
  }
  .coin > div {
    width: 50%;
  }
  .coin .item {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    padding: 22px;
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
    height: 64px;
  }
  .coin .item:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .coin .item:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .coin .position,
  .coin .email {
    display: flex;
    align-items: center;
  }
  .coin .position p,
  .coin .email p {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    margin: 0;
    text-overflow: ellipsis;
    width: 120px;
  }
  .coin .tag {
    cursor: pointer;
  }

  /* //fake */
  .fake {
    color: #fff;
  }

  .fake .title-block img {
    margin-left: 7px;
  }
  .fake .title-block > div:nth-child(1) {
    flex-grow: 2.5;
  }
  .fake .title-block > div:nth-child(2) {
    flex-grow: 1.7;
  }
  .fake .title-block > div:nth-child(3) {
    flex-grow: 1.4;
  }

  .fake .title-block > div:nth-child(4) {
    flex-grow: 3.3;
  }
  .fake .title-block > div:nth-child(5) {
    flex-grow: 1.1;
  }
  .fake .title-block > div:nth-child(6) {
    flex-grow: 2.4;
  }
  .fake .title-block > div {
    flex-grow: 1;
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }
  .fake .item {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    justify-content: inherit;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 22px;
    font-size: 14px;
    margin-top: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
  }

  .fake .item .active-fake {
    display: flex;
  }
  .fake .item .active-fake span {
    margin-right: 4px;
  }
  .fake .item .active-fake > div {
    display: flex;
    align-items: center;
  }
  .fake .item .amount span {
    color: #b2b2b2;
    margin-right: 4px;
  }
  .fake .item .active-fake > div:first-child p {
    margin-left: 4px;
    color: #36a503;
    margin-right: 16px;
  }
  .fake .item .active-fake > div:last-child p {
    margin-left: 4px;
    color: #d01e22;
  }
  .fake .item .country {
    display: flex;
  }
  .fake .item .country > div {
    display: flex;
    align-items: center;
  }
  .fake .item .country a {
    margin-right: 4px;
  }

  .fake .item > div:nth-child(1) {
    flex-grow: 4;
  }
  .fake .item > div:nth-child(2) {
    flex-grow: 2;
  }
  .fake .item > div:nth-child(3),
  .fake .item > div:nth-child(4) {
    flex-grow: 2;
  }

  .fake .item > div:nth-child(5) {
    flex-grow: 1;
  }
  .fake .item > div:nth-child(6) {
    flex-grow: 1;
  }

  /* //deposit */

  .deposit {
    display: flex;
    color: #fff;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .deposit .title-block img {
    margin-left: 7px;
  }

  .deposit .title-block > div {
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }
  .deposit .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    justify-content: inherit;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 22px;
    font-size: 14px;
    margin-top: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
    height: 64px;
  }
  .deposit .item > div {
    flex-grow: 1;
  }
  .deposit .item > div:nth-child(1) {
    flex-grow: 5;
  }
  .deposit .item > div:nth-child(2) {
    flex-grow: 6;
  }
  .deposit .item > div:nth-child(3) {
    flex-grow: 5;
  }
  .deposit .item > div:nth-child(4) {
    flex-grow: 8;
  }
  .deposit .item > div:nth-child(5) {
    flex-grow: 1;
    display: flex;
  }

  .deposit .position,
  .deposit .email {
    display: flex;
    align-items: center;
  }
  .deposit .position p,
  .deposit .email p {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    margin: 0;
    text-overflow: ellipsis;
    width: 120px;
  }
  .deposit .tag {
    cursor: pointer;
  }

  /* //real */
  .real {
    color: #fff;
  }

  .real .title-block img {
    margin-left: 7px;
  }
  .real .title-block > div:nth-child(1) {
    flex-grow: 2.1;
  }
  .real .title-block > div:nth-child(2) {
    flex-grow: 2.4;
  }
  .real .title-block > div:nth-child(3) {
    flex-grow: 2.2;
  }

  .real .title-block > div:nth-child(4) {
    flex-grow: 2.3;
  }
  .real .title-block > div:nth-child(5) {
    flex-grow: 1.5;
  }
  .real .title-block > div:nth-child(6) {
    flex-grow: 3.6;
  }
  .real .title-block > div:nth-child(7) {
    flex-grow: 2.9;
  }

  .real .title-block > div {
    flex-grow: 1;
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }
  .real .item {
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    justify-content: inherit;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 22px;
    font-size: 14px;
    margin-top: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
  }

  .real .item .active-fake {
    display: flex;
    align-items: center;
  }
  .real .item .active-fake > div {
    display: flex;
  }
  .real .item .amount span {
    font-size: 14px;
    color: #b2b2b2;
    margin-right: 4px;
  }
  .real .item .active-fake > div:first-child p {
    margin-left: 4px;
    color: #36a503;
    margin-right: 16px;
  }
  .real .item .active-fake > div:last-child p {
    margin-left: 4px;
    color: #d01e22;
  }
  .real .item .country {
    display: flex;
  }
  .real .item .country > div {
    display: flex;
  }
  .real .item .country a {
    margin-right: 4px;
  }

  .real .item > div:nth-child(1) {
    flex-grow: 1.5;
  }
  .real .item > div:nth-child(2) {
    flex-grow: 1.5;
  }
  .real .item > div:nth-child(3),
  .real .item > div:nth-child(4) {
    flex-grow: 1.9;
  }
  .real .item > div:nth-child(5) {
    flex-grow: 1.4;
  }
  .real .item > div:nth-child(6),
  .real .item > div:nth-child(7) {
    flex-grow: 0.5;
  }

  /* //award */

  .award {
    color: #fff;
  }

  .award .title-block img {
    margin-left: 7px;
  }

  .award .title-block > div {
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }
  .award .item {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 22px;
    font-size: 14px;
    margin-top: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
    height: 64px;
  }

  .award .item > div:nth-child(1) {
    flex-grow: 1.1;
  }
  .award .item > div:nth-child(2) {
    flex-grow: 0.9;
  }
  .award .item > div:nth-child(3) {
    flex-grow: 1;
  }
  .award .item > div:nth-child(4) {
    flex-grow: 0.8;
  }
  .award .item > div:nth-child(5) {
    flex-grow: 1;
  }
  .award .item > div:nth-child(6) {
    flex-grow: 0.2;
  }
  .award .position,
  .award.email {
    display: flex;
    align-items: center;
  }
  .award .position p,
  .award .email p {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    margin: 0;
    text-overflow: ellipsis;
    width: 120px;
  }
  .award .tag {
    cursor: pointer;
  }
  .award .title-block > div:nth-child(1) {
    flex-grow: 1.1;
  }
  .award .title-block > div:nth-child(2) {
    flex-grow: 1.1;
  }
  .award .title-block > div:nth-child(3) {
    flex-grow: 1.1;
  }
  .award .title-block > div:nth-child(4) {
    flex-grow: 1.1;
  }
  .award .title-block > div:nth-child(5) {
    flex-grow: 1.2;
  }
  .award .title-block > div:nth-child(6) {
    flex-grow: 0.7;
  }
  /* //rank */

  .rank {
    color: #fff;
  }

  .rank .title-block img {
    margin-left: 7px;
  }

  .rank .title-block > div {
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }
  .rank .item {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 22px;
    font-size: 14px;
    margin-top: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
    height: 64px;
  }

  .rank .item > div:nth-child(1) {
    flex-grow: 0.7;
  }
  .rank .item > div:nth-child(2) {
    flex-grow: 1;
  }
  .rank .item > div:nth-child(3) {
    flex-grow: 1;
  }
  .rank .item > div:nth-child(4) {
    flex-grow: 1;
  }
  .rank .position,
  .rank.email {
    display: flex;
    align-items: center;
  }
  .rank .position p,
  .rank .email p {
    white-space: nowrap; /* Запрещаем перенос строк */
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    margin: 0;
    text-overflow: ellipsis;
    width: 120px;
  }
  .rank .tag {
    cursor: pointer;
  }
  .rank .title-block > div:nth-child(1) {
    flex-grow: 2.5;
  }
  .rank .title-block > div:nth-child(2) {
    flex-grow: 1;
  }
  .rank .title-block > div:nth-child(3) {
    flex-grow: 2.3;
  }
  .rank .title-block > div:nth-child(4) {
    flex-grow: 0.1;
  }
  .rank .title-block > div:nth-child(5) {
    flex-grow: 1;
  }
  .rank .scroll-title-list {
    max-width: 460px;
    margin-right: 64px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    height: 30px;
  }
  .rank .scroll-item-list {
    max-width: 460px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: scroll;
    height: 50px;
    display: flex;
    margin-right: 33px;
  }
  .rank .scroll-item-list::-webkit-scrollbar {
    display: none;
  }
  .rank .scroll-title-list::-webkit-scrollbar {
    display: none;
  }
  .rank .scroll-title-list > div {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 34px;
    text-decoration: none;
  }
  .rank .scroll-item-list > div {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 17px 28px;
    text-decoration: none;
  }
  #main-scroll::-webkit-scrollbar {
    display: none;
  }
  #NewPercent + label {
    visibility: hidden;
  }
  #NewPercent {
    border: 1px dashed #36a503;
    text-align: center;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    text-align: center;
  }
  .NewPercent {
    visibility: hidden;
  }
  #NewPercent::placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #36a503;
  }
  #main-scroll {
    width: 100%;
    height: 4px;
    background: rgba(54, 165, 3, 0.25);
    border-radius: 1px;
  }
  #main-scroll > div {
    width: 876px;
    height: 4px;
    background: #36a503;
    border-radius: 1px;
  }
  .rank .btn-more {
    display: flex;
  }
  /* The Modal (background) */

  /* Modal Content/Box */
  .modal-content {
    width: 628px;
    height: 100%;
    min-height: 1000px;
    float: right;

    padding: 24px;
    border: 1px solid #888;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
  }

  /* The Close Button */
  .close {
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 6px;
    color: #fff;
    float: right;
    font-size: 28px;
    font-weight: bold;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .close:hover,
  .close:focus {
    color: #aaa;
    text-decoration: none;
    cursor: pointer;
  }

  .modal-header .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-header h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    /* identical to box height, or 222% */

    color: #ffffff;
  }
  #modalProfile .modal-header > div:nth-child(2) {
    align-items: center;
    border-bottom: 1px solid #202020;
  }
  .modal-header > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #202020;
  }
  .modal-header > div:nth-child(2) > div:nth-child(1) {
    margin-right: 24px;
  }
  .modal-header > div:nth-child(2) {
    display: flex;
    padding: 24px 0;
    align-items: flex-start;
  }
  .modal-header .btn-blck > div:nth-child(1) {
    margin-right: 16px;
  }
  .modal-header .title {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 12px;
    /* identical to box height, or 20px */

    /* Defolt color */

    color: #36a503;
  }
  .modal-header .btn-blck {
    display: flex;
  }
  .modal-header .tabs {
    padding: 24px 0;
    border-top: 1px solid #202020;
    border-bottom: 1px solid #202020;
    display: flex;
    justify-content: space-between;
  }
  .modal-header .tab:nth-child(4) {
    border: 0;
    padding: 0;
  }
  .modal-header .tab:nth-child(4) > div:nth-child(1) {
    padding: 8px 16px;
    padding-right: 8px;
    border-radius: 12px;
    border: 1px solid #202020;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 80px;
  }
  .modal-header .tab:nth-child(4) > div:nth-child(2) {
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    line-height: 24px;
    padding: 8px 10px 8px 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .modal-header .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
    height: 40px;
  }
  .tab-cal {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
    height: auto;
  }
  .modal .crypto .item {
    position: relative;
    border: 1px solid #202020;
    box-sizing: border-box;
    filter: drop-shadow(2px 2px 10px #171717);
    border-radius: 12px;
    height: 72px;
    padding: 16px;
    display: flex;
    flex: 1 1 278px;
    margin-right: 24px;
    margin-bottom: 24px;
  }
  .investition {
    background: url(./assets/img/investition.svg);
    width: 20px;
    height: 72px;
    position: absolute;
    left: 256px;
    top: -1px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    cursor: pointer;
  }

  .modal .operation .item {
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    margin-bottom: 24px;
    padding: 24px;
    padding-bottom: 12px;
    position: relative;
  }
  .modal .operation .item:nth-child(1) {
    background: url(./assets/img/bg1.png);

    background-repeat: no-repeat;
    background-position: 5% 100%;
  }
  .modal .operation .item:nth-child(2) {
    background: url(./assets/img/bg2.png);

    background-repeat: no-repeat;
    background-position: 5% 100%;
  }
  .modal .operation .name {
    display: flex;
    color: #fff;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    justify-content: space-between;
    align-items: center;
  }
  .modal .operation .name > div {
    display: flex;
    align-items: center;
  }
  .modal .operation .name div:first-child img {
    margin-left: 10px;
  }
  .modal .crypto {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .modal .crypto .data {
    margin-left: 8px;
  }
  .modal .operation .value {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 75px;
    color: #36a503;
    text-align: right;
    margin-top: 18px;
  }
  .modal .crypto .data > div:nth-child(1) img {
    margin-left: 8px;
  }
  .modal .crypto .data > div:nth-child(1) {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #b3b3b3;
    display: flex;
  }
  .modal .crypto .data > div:nth-child(2) {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }
  #modalCreatePool .pool-btn {
    width: 179px;
    position: absolute;
    right: 25px;
    bottom: 10%;
  }

  #modalCreatePump .pool-btn {
    width: 179px;
    position: absolute;
    right: 25px;
    bottom: 10%;
  }
  #modalCreatePump .accessed {
    display: flex;
    align-items: center;
    width: 100%;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #36a503;
    margin: 24px 0 0;
  }
  #modalCreatePump .accessed span {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  #modalCreatePump .accessed img {
    margin: 0 12px;
  }
  #modalCreateCase .pool-btn {
    margin-top: 70%;
    width: 179px;
    float: right;
  }
  #modalEditCase .pool-btn {
    margin-top: 70%;
    width: 179px;
    float: right;
  }
  #structure1 .pool-btn {
    width: 179px;
    float: right;
    position: absolute;
    bottom: 100px;
    right: 20px;
  }
  .modal .info {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .modal .info .item {
    display: flex;
    position: relative;
    width: 48%;
    flex-direction: column;
  }
  .modal .info label {
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #808191;
  }
  .modal .info input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    color: #ffffff;
  }
  .present-switch {
    display: flex;
    cursor: pointer;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    width: 78px;
    height: 47px;
    color: #ffffff;
    align-items: center;
    border-left: 1px solid #1d1d1d;
    padding-left: 16px;
    position: absolute;
    top: 2px;
    right: 0;
    z-index: 9;
  }
  .modal .info select {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    padding-right: 15px;
    width: 100%;
    padding-left: 48px;
    color: #ffffff;
  }

  #modalCreatePresent .item img {
    position: static;
    margin: 0;
    margin-left: 7px;
  }

  .modal .description input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    color: #ffffff;
  }

  .modal .history .item {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 16px;
    justify-content: space-between;
  }
  .modal .history .item > div {
    display: flex;
    margin-right: 16px;
  }
  .modal .history .item > div:nth-child(1) > div {
    font-family: Inter;
    font-style: normal;
    font-size: 14px;
    line-height: 32px;
  }
  .modal .history .item > div:nth-child(1) > div:nth-child(2) {
    color: #ffffff;
    font-weight: 600;
    margin-left: 16px;
  }
  .modal .history .item > div:nth-child(1) > div:nth-child(3) {
    color: #9b9b9b;
    font-weight: normal;
    margin-left: 4px;
  }
  .modal .history .item > div:nth-child(2) {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #808191;
  }
  .modal .history .item > div:nth-child(3) {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  #investments-tab .modal .investments {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #investments-tab .investments .item {
    background: url('./assets/img/bg3.png') no-repeat 50% 50%;
    border: 1px solid #202020;
    box-sizing: border-box;
    filter: drop-shadow(2px 2px 10px #171717);
    border-radius: 12px;
    width: 100%;
    padding: 16px;
    display: flex;
    margin-bottom: 24px;
    height: 256px;
  }
  #investments-tab .investments .item .section {
    display: flex;
    width: 100%;
  }
  #investments-tab .rating-scale {
    padding-right: 24px;
  }
  #investments-tab .investments .info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
  }
  #investments-tab .investments .info .title {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 72px;
    color: #ffffff;
    border-bottom: none;
    padding-bottom: 0;
  }
  #investments-tab .investments .info .inv {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 48px;
    color: #ffffff;
  }
  #investments-tab .investments .info .profit {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: #b2b2b2;
  }
  #investments-tab .investments .info .profit span {
    color: #36a503;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
  }
  #investments-tab .date {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 34px;
    color: #ffffff;
    margin-bottom: 34px;
    text-align: center;
    align-items: center;
  }
  #investments-tab .date span {
    color: #36a503;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    padding-right: 10px;
  }
  .modal .investments .title {
    display: flex;
    padding-bottom: 16px;
    border-bottom: 1px solid #202020;
    justify-content: space-between;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #36a503;
    align-items: center;
  }
  .modal .investments .data {
    margin: 16px 0;
  }
  .modal .investments .data > div:nth-child(1) {
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #a7a7a7;
  }
  .modal .investments .data > div:nth-child(2) {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
    display: flex;
    align-items: baseline;
  }
  .modal .investments .data > div:nth-child(2) > div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #c5c5c5;
    margin-left: 8px;
  }

  #case-tab .first-row {
    display: flex;
    justify-content: space-between;
  }
  #case-tab .first-row > div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    background: #36a503;
    border-radius: 12px;
    height: 28px;
    padding: 2px 12px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  #case-tab .second-row {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }
  #case-tab .second-row .info {
    display: flex;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #b2b2b2;
    flex-direction: column;
  }
  #case-tab .second-row .info > div:nth-child(2) {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 72px;
    color: #ffffff;
  }
  #case-tab .second-row .count {
    display: flex;
    margin-top: 10px;
  }
  #case-tab .second-row .count > div:first-child {
    margin-right: 24px;
  }
  #case-tab .second-row .count > div:first-child > div:last-child {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
  }
  #case-tab .second-row .count > div:last-child > div:last-child {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #36a503;
  }
  #case-tab .second-row .date {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    display: flex;
    align-items: center;
  }
  #case-tab .second-row .date span {
    color: #36a503;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding-right: 6px;
  }
  .modal .case-tab-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .modal .case-tab-content .item {
    width: 580px;
    height: auto;

    border-radius: 12px;
    padding: 24px;
  }
  .modal .case .title {
    display: flex;
    padding-bottom: 16px;

    justify-content: space-between;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #36a503;
    align-items: center;
  }
  .modal .case .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    color: #b9b9b9;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    border: 0;
    box-sizing: border-box;
    border-radius: 12px;
    text-align: center;
    padding: 0;
    height: 40px;
    width: 160px;
  }
  .modal .case .tab > div:nth-child(1) {
    padding: 8px 16px;
    width: 100%;
    padding-right: 8px;
    border-radius: 12px;
    border: 1px solid #202020;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .modal .case .tab > div:nth-child(2) {
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    line-height: 24px;
    padding: 8px 10px 8px 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .modal .case .data {
    margin: 16px 0;
  }
  .modal .case .data > div:nth-child(1) {
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;
    color: #a7a7a7;
  }
  .modal .case .data > div:nth-child(2) {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    color: #ffffff;
    display: flex;
    align-items: baseline;
  }
  .modal .case .data > div:nth-child(2) > div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #c5c5c5;
    margin-left: 8px;
  }

  .modal .structure .item {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 16px 0;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .modal .structure .item > div:nth-child(2) {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    /* identical to box height, or 250% */

    color: #b9b9b9;
  }

  .modal .structure .item > div:nth-child(1),
  .modal .structure .item > div:nth-child(3) {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    /* identical to box height, or 250% */

    color: #ffffff;
  }

  /* POPUP  */

  .popup-pagination .tag-btn p {
    color: #ffffff;
  }
  .popup-pagination .popup-container {
    padding-top: 0;
    width: 80px;
    padding-bottom: 0;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
  }
  .popup-pagination {
    transition: opacity 1s ease 0s;
    visibility: hidden;
    position: absolute;
    z-index: 0;
    opacity: 0;
    overflow: auto;
    top: 138px;
    padding-left: 40px;
  }
  .popup-rank {
    width: 132px;
    transition: opacity 1s ease 0s;
    visibility: hidden;
    position: absolute;
    z-index: 0;
    opacity: 0;
    overflow: auto;

    top: 200px;
  }
  .popup-rank .popup-container {
    margin: 0 auto;
    padding: 16px;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .popup-rank .popup-container div:last-child div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    color: #ffffff;
  }
  #popup-title {
    width: 232px;
  }
  #popup-description {
    width: 532px;
  }
  .popup-client {
    transition: opacity 1s ease 0s;
    visibility: hidden;
    position: absolute;
    z-index: 0;
    opacity: 0;
    overflow: auto;

    top: 200px;
  }
  .popup-client .popup-container div:last-child div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    color: #ffffff;
  }
  .popup-client .popup-container {
    margin: 0 auto;
    padding: 16px;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .popup-rank input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #808191;
    padding: 16px;
    width: 100%;
  }
  .popup-client input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #808191;
    padding: 16px;
  }

  .popup-tag {
    transition: opacity 1s ease 0s;
    visibility: hidden;
    position: absolute;
    z-index: 0;
    opacity: 0;
    overflow: auto;

    top: 200px;
  }
  .switch-tab {
    transition: opacity 1s ease 0s;
    visibility: hidden;
    position: absolute;
    z-index: 0;
    opacity: 0;
    overflow: auto;
    top: 293px;
  }
  #popup-switch-tab > div {
    width: 142px;
    background: #36a503;
    justify-content: center;
    color: #ffffff;
  }
  .popup-container {
    margin: 0 auto;
    padding: 16px;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .popup-tag .popup-container img {
    margin-left: 0;
  }
  .popup-tag .popup-container div {
    margin-bottom: 24px;
  }
  .popup-tag .popup-container div:last-child {
    margin-bottom: 0;
  }
  /* The Calendar (background) */
  .calendar {
    display: none;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  /* Modal Content/Box */
  .calendar-content {
    width: 580px;
    height: 358px;
    margin: 0 auto;
    margin-top: 10%;
    padding: 24px;
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #202020;
    padding-bottom: 24px;
  }
  .calendar-header > div {
    display: flex;
  }

  .calendar-panel {
    padding: 12px 0;
  }
  .calendar-panel .title {
    display: flex;
    justify-content: space-between;
  }
  .calendar-panel .title > div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    width: 37px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .calendar-panel .panel > div {
    display: flex;
    justify-content: space-between;
  }
  .calendar-panel .panel > div > div {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
    color: #555555;
    width: 37px;
    height: 37px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sort-search {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 24px 8px 6px;
    border-bottom: 1px solid #343434;
    margin-bottom: 8px;
  }
  .sort-search .sort {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #b2b2b2;
  }
  .sort-search .sort a {
    margin-left: 5px;
  }

  .pool-display {
    display: flex;
  }
  .pool-display a {
    width: 50%;
  }
  .pool-display a:first-child {
    margin-right: 12px;
  }

  .sort-search-2 {
    display: none;
    justify-content: space-between;
    align-items: center;
    padding: 24px 8px 14px;
  }
  .sort-search-2 > div:first-child {
    width: 100%;
    border-bottom: 1px solid #343434;
    justify-content: space-between;
  }
  .sort-search-2 > div:nth-child(2) > div:first-child {
    margin: 0 16px;
    width: 100px;
  }

  .sort-search-2 > div {
    display: flex;
  }
  .sort-search-2 .sort {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #b2b2b2;
  }
  .sort-search-2 .sort a {
    margin-left: 5px;
  }
  .icon-cl {
    display: none;
    margin-right: 5px;
  }

  .modal-more {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
  }
  .more-content {
    width: 100%;
    position: fixed;
    bottom: 0;
    height: 212px;
    margin: 0 auto;
    padding: 24px;
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
  }
  .more-header {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #202020;
    padding-bottom: 24px;
  }
  .more-display .account {
    border-bottom: 1px solid #202020;
  }
  .more-display .account img,
  .more-display .blocked img {
    margin-right: 15px;
  }
  .more-display .account,
  .more-display .blocked {
    display: flex;
    cursor: pointer;
    padding: 16px 0;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  .back-btn {
    display: none;
    border: none;
  }
  #modalCreateTransfer .modal-header {
    padding: 0;
    border-bottom: 1px solid #343434;
  }

  #modalCreateTransfer h1 {
    display: flex;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
  }
  #modalCreateTransfer p {
    color: #36a503;
    margin: 0;
    margin-right: 5px;
  }
  #product-hide-submenu a {
    width: auto;
  }
  #setting-hide-submenu a {
    width: auto;
  }
  #modalCreateTransfer p:last-child {
    color: #fff;
  }
  #modalCreateTransfer2 p:last-child {
    color: #fff;
  }
  #modalCreateTransfer input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;

    width: 100%;
    color: #808191;
  }
  #modalCreateTransfer .item {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    padding: 16px;
  }
  #modalCreateTransfer .item .top-sec {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    padding-bottom: 16px;
    border-bottom: 1px solid #1d1d1d;
  }
  #modalCreateTransfer .item .bottom-sec {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    padding-top: 8px;
  }
  #modalCreateTransfer .bottom-sec .active-fake {
    display: flex;
    align-items: center;
  }
  #modalCreateTransfer .bottom-sec .active-fake > div {
    display: flex;
  }
  #modalCreateTransfer .bottom-sec .active-fake > div:first-child p {
    margin-left: 4px;
    color: #36a503;
    margin-right: 16px;
  }
  #modalCreateTransfer .bottom-sec .active-fake > div:last-child p {
    margin-left: 4px;
    color: #d01e22;
  }
  #modalCreateTransfer .bottom-sec .amount span {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    margin-right: 5px;
    color: #b2b2b2;
  }

  #modalCreateTransfer2 .modal-header {
    padding: 0;
    border-bottom: 1px solid #343434;
  }

  #modalCreateTransfer2 h1 {
    display: flex;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
  }
  #modalCreateTransfer2 p {
    color: #36a503;
    margin: 0;
    margin-right: 5px;
  }
  #modalCreateTransfer2 input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;

    width: 100%;
    color: #808191;
  }
  #modalCreateTransfer2 .item {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    padding: 16px;
  }
  #modalCreateTransfer2 .item .top-sec {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    padding-bottom: 16px;
    border-bottom: 1px solid #1d1d1d;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #modalCreateTransfer2 .item .bottom-sec {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    padding-top: 16px;
  }
  #modalCreateTransfer2 .item .bottom-sec > div {
    width: 33.3%;
    display: flex;
    align-items: center;
  }
  #modalCreateTransfer2 .item .country > div {
    display: flex;
  }
  #modalCreateTransfer2 .item .country a {
    width: 30px;
  }

  #modalCreateTransfer2 .item .bottom-sec span {
    font-family: Inter;
    font-style: normal;
    margin-right: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    /* identical to box height, or 167% */

    display: flex;
    align-items: center;

    color: #b2b2b2;
  }

  #modalCreateTransfer2 .bottom-sec .active-fake {
    display: flex;
    align-items: center;
  }
  #modalCreateTransfer2 .bottom-sec .active-fake > div {
    display: flex;
    align-items: center;
  }
  #modalCreateTransfer2 .bottom-sec .active-fake > div img {
    margin-right: 4px;
  }
  #modalCreateTransfer2 .bottom-sec .active-fake > div:first-child p {
    margin-left: 4px;
    color: #36a503;
  }
  #modalCreateTransfer2 .bottom-sec .active-fake > div:last-child p {
    margin-left: 4px;
    color: #d01e22;
  }

  #modalInvestition .modal-header {
    padding: 0;
  }

  #modalInvestition h1 {
    display: flex;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
  }
  #modalInvestition input::placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    color: #ffffff;
  }
  #modalInvestition input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    color: #808191;
    height: 56px;
  }
  #modalInvestition .item .top-sec {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    padding-bottom: 16px;
    border-bottom: 1px solid #1d1d1d;
  }
  #modalInvestition .item .bottom-sec {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    padding-top: 8px;
  }
  #modalInvestition .bottom-sec .active-fake {
    display: flex;
    align-items: center;
  }
  #modalInvestition .bottom-sec .active-fake > div {
    display: flex;
  }
  #modalInvestition .bottom-sec .active-fake > div:first-child p {
    margin-left: 4px;
    color: #36a503;
    margin-right: 16px;
  }
  #modalInvestition .bottom-sec .active-fake > div:last-child p {
    margin-left: 4px;
    color: #d01e22;
  }
  #modalInvestition .bottom-sec .amount span {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    margin-right: 5px;
    color: #b2b2b2;
  }
  .modal .info .item .input-img {
    position: absolute;
    margin: 13px 15px;
    top: 32px;
  }
  .modal .info .item img {
    position: relative;
    margin: 13px 15px;
  }

  .modal .info .item select {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    padding-right: 15px;
    padding-left: 53px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    -webkit-appearance: none;
    color: #ffffff;
    height: 56px;
  }

  #modalAddClient .modal-header {
    padding: 0;
    border-bottom: 1px solid #202020;
  }

  #modalAddClient h1 {
    display: flex;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
  }
  #modalAddClient input::placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    color: #ffffff;
  }
  #modalAddClient input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    color: #808191;
    height: 56px;
  }
  #modalAddClient .item .top-sec {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
    padding-bottom: 16px;
    border-bottom: 1px solid #1d1d1d;
  }
  #modalAddClient .item .bottom-sec {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #ffffff;
    padding-top: 8px;
  }
  #modalAddClient .bottom-sec .active-fake {
    display: flex;
    align-items: center;
  }
  #modalAddClient .bottom-sec .active-fake > div {
    display: flex;
  }
  #modalAddClient .bottom-sec .active-fake > div:first-child p {
    margin-left: 4px;
    color: #36a503;
    margin-right: 16px;
  }
  #modalAddClient .bottom-sec .active-fake > div:last-child p {
    margin-left: 4px;
    color: #d01e22;
  }
  #modalAddClient .bottom-sec .amount span {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 140%;
    margin-right: 5px;
    color: #b2b2b2;
  }
  .btn-more {
    display: none;
  }
  .add-client-mob {
    width: 179px;
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
  .delete-client-mob {
    width: 179px;
    position: absolute;
    bottom: 24px;
    right: 224px;
    background: #d01e22;
  }
  #modalEditPresent .item:nth-child(4) {
    visibility: hidden;
  }
  .btn-edit-present {
    cursor: pointer;
    margin-right: -20px;
  }
  .popup-edit-present {
    margin-left: -97px;
    margin-top: 11px;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    padding: 16px;
    width: 137px;
    height: 96px;
    position: absolute;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    box-shadow: 4px 4px 90px #171717;
    border-radius: 12px;
  }
  .popup-edit-present a {
    align-items: center;
    text-decoration: none;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
  }
  .popup-edit-present .pump {
    color: #36a503;
    margin-top: 16px;
  }
  .icon-change {
    display: none;
  }
  .popup-edit-present a:first-child {
    color: #ffffff;
  }
  .popup-edit-present a:last-child {
    color: #f5282d;
    margin-top: 16px;
  }
  .popup-profile {
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    padding: 16px;
    width: 218px;
    height: 96px;
    margin-top: 50px;
    margin-left: -18px;
    position: absolute;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    box-shadow: 4px 4px 90px #171717;
    border-radius: 12px;
  }
  .popup-profile a {
    align-items: center;
    text-decoration: none;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    /* identical to box height, or 20px */

    margin-left: 0;
    color: #ffffff;
  }
  .popup-profile .pump {
    color: #36a503;
    margin-top: 16px;
  }
  .icon-change {
    display: none;
  }
  .popup-profile a:first-child {
    color: #ffffff;
  }
  .popup-profile a:last-child {
    margin-top: 16px;
  }
  .popup-profile a div {
    margin-left: 12px;
  }

  .btn-flag {
    cursor: pointer;
  }
  .popup-flag {
    margin-left: -176px;
    margin-top: 383px;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    padding: 16px;
    width: 180px;
    height: auto;
    position: absolute;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    box-shadow: 4px 4px 90px #171717;
    border-radius: 12px;
  }
  #popup-lifetime,
  #popup-timeleft {
    width: auto;
  }
  .flag-item {
    display: flex;
    align-items: center;
  }
  .flag-item img {
    margin-right: 12px;
  }
  .modal-sec {
    margin-top: 20px;
  }
  #modalEditFake .modal-sec {
    margin-top: 20px;
  }
  #modalEditFake2 .modal-sec {
    margin-top: 20px;
  }
  #modalEditFake3 .modal-sec {
    margin-top: 20px;
  }
  #modalCreateFake .modal-sec {
    margin-top: 20px;
  }
  #modalEditFake .modal-header {
    border-bottom: 1px solid #202020;
  }
  #modalEditFake .modal-tabs {
    border-bottom: 1px solid #202020;
  }
  #modalEditFake .edit-fake-tabs {
    padding: 24px 0;

    width: 197px;
    display: flex;
    justify-content: space-between;
  }
  #modalEditFake .edit-fake-tabs .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
    height: 40px;
  }

  #modalEditFake .edit-fake-calendar {
    padding: 24px 0;

    display: flex;
    justify-content: space-between;
  }

  #modalEditFake .edit-fake-calendar .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
  }
  #modalEditFake .edit-fake-tabs div:last-child {
    width: 127px;
  }
  #modalEditFake .edit-fake-tabs div:last-child .down-vector {
    border-left: 1px solid #202020;
    position: absolute;
    width: 38px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 115px;
    margin-left: 70px;
  }
  #modalEditFake .info .item .down-vector {
    border-left: 1px solid #202020;
    position: absolute;
    width: 38px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 33px;
    margin-left: 236px;
  }
  #modalEditFake2 .modal-header {
    border-bottom: 1px solid #202020;
  }
  #modalEditFake2 .modal-tabs {
    border-bottom: 1px solid #202020;
  }
  #modalEditFake2 .edit-fake-tabs {
    padding: 24px 0;

    width: 197px;
    display: flex;
    justify-content: space-between;
  }
  #modalEditFake2 .edit-fake-tabs .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
    height: 40px;
  }
  #modalEditFake2 .edit-fake-calendar {
    padding: 24px 0;

    display: flex;
    justify-content: space-between;
  }

  #modalEditFake2 .edit-fake-calendar .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
    height: 40px;
  }
  #modalEditFake2 .edit-fake-tabs div:last-child {
    width: 127px;
  }
  #modalEditFake2 .edit-fake-tabs div:last-child .down-vector {
    border-left: 1px solid #202020;
    position: absolute;
    width: 38px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 116px;
    margin-left: 70px;
  }
  #modalEditFake2 .info .item .down-vector {
    border-left: 1px solid #202020;
    position: absolute;
    width: 38px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 269px;
    margin-left: 236px;
  }

  #modalEditFake2 .list .item {
    color: #fff;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    padding: 22px;
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
    height: 64px;
  }
  #modalEditFake2 .list .item:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  #modalEditFake3 .modal-header {
    border-bottom: 1px solid #202020;
  }

  #modalEditFake3 .edit-fake-tabs {
    padding: 24px 0;

    width: 197px;
    display: flex;
    justify-content: space-between;
  }
  #modalEditFake3 .edit-fake-tabs .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
    height: 40px;
  }
  #modalEditFake3 .edit-fake-calendar {
    padding: 24px 0;

    display: flex;
    justify-content: space-between;
  }

  #modalEditFake3 .edit-fake-calendar .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
    height: 40px;
  }
  #modalEditFake3 .edit-fake-tabs div:last-child {
    width: 127px;
  }
  #modalEditFake3 .edit-fake-tabs div:last-child .down-vector {
    border-left: 1px solid #202020;
    position: absolute;
    width: 38px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 116px;
    margin-left: 70px;
  }
  #modalEditFake3 .info .item .down-vector {
    border-left: 1px solid #202020;
    position: absolute;
    width: 38px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 269px;
    margin-left: 236px;
  }

  #modalEditFake3 .list .item {
    color: #fff;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    padding: 22px;
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 200;
    height: 64px;
  }
  #modalEditFake3 .list .item:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  #modalCreatePrice .modal-header {
    border-bottom: 1px solid #202020;
  }
  #modalCreatePrice .modal-tabs {
    border-bottom: 1px solid #202020;
  }
  #modalCreatePrice .edit-fake-tabs {
    padding: 24px 0;

    width: 197px;
    display: flex;
    justify-content: space-between;
  }
  #modalCreatePrice .edit-fake-tabs .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
    height: 40px;
  }

  #modalCreatePrice .edit-fake-calendar {
    padding: 24px 0;

    display: flex;
    justify-content: space-between;
  }

  #modalCreatePrice .edit-fake-calendar .tab {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
  }
  #modalCreatePrice .edit-fake-tabs div:last-child {
    width: 127px;
  }
  #modalCreatePrice .edit-fake-tabs div:last-child .down-vector {
    border-left: 1px solid #202020;
    position: absolute;
    width: 38px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 147px;
    margin-left: 70px;
  }
  #modalCreatePrice .info .item .down-vector {
    border-left: 1px solid #202020;
    position: absolute;
    width: 38px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 269px;
    margin-left: 236px;
  }

  .data-ranger {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    /* State/Light */

    color: #808191;
  }

  .ui-datepicker .selected-start:not(.selected-end) a,
  .ui-datepicker .selected-end:not(.selected-start) a {
    background: #f3fdd5;
  }

  .ui-datepicker .selected.first-of-month:not(.selected-start) a {
    border-left: 2px dotted #d4e7f6;
    padding-left: 1px;
  }

  .ui-datepicker .selected.last-of-month:not(.selected-end) a {
    border-right: 2px dotted #d4e7f6;
    padding-right: 1px;
  }

  #chart2 {
    display: none;
  }

  .deposit .title-block > div:nth-child(1) {
    flex-grow: 1.3;
  }
  .deposit .title-block > div:nth-child(2) {
    flex-grow: 1.4;
  }
  .deposit .title-block > div:nth-child(3) {
    flex-grow: 1.5;
  }

  .deposit .title-block > div:nth-child(4) {
    flex-grow: 1.45;
  }
  .deposit .title-block > div:nth-child(5) {
    flex-grow: 0.15;
  }

  .pool .title-block > div:nth-child(1) {
    flex-grow: 1.5;
  }
  .pool .title-block > div:nth-child(2) {
    flex-grow: 1.4;
  }
  .pool .title-block > div:nth-child(3) {
    flex-grow: 1.3;
  }

  .pool .title-block > div:nth-child(4) {
    flex-grow: 1.2;
  }
  .pool .title-block > div:nth-child(5) {
    flex-grow: 1.2;
  }
  .pool .title-block > div:nth-child(6) {
    flex-grow: 1.3;
  }
  .pool .title-block > div:nth-child(7) {
    flex-grow: 1.3;
  }
  .pool .title-block > div:nth-child(8) {
    flex-grow: 0.6;
  }

  #modalCreatePresent .item > div {
    position: relative;
  }

  .finance .title-block > div:nth-child(1) {
    flex-grow: 2.4;
  }
  .finance .title-block > div:nth-child(2) {
    flex-grow: 2.4;
  }
  .finance .title-block > div:nth-child(3) {
    flex-grow: 2.3;
  }
  .finance .title-block > div:nth-child(4) {
    flex-grow: 0.2;
  }
  .pool-display {
    display: none;
  }
  .sort-search-2 > div:first-child {
    max-width: 900px;
    width: 100%;
  }

  @media (max-width: 900px) {
    .pool-display {
      display: flex;
      justify-content: center;
    }
    .create-pool {
      width: 92px;
    }
    #modalCreateTransfer2 .modal-content,
    #modalCreateTransfer .modal-content {
      background: linear-gradient(
        51.09deg,
        #000000 -13.01%,
        #121212 45.52%,
        #181818 111.86%
      );
    }
    #modalCreateTransfer2 .item .bottom-sec > div:nth-child(1),
    #modalCreateTransfer2 .item .bottom-sec > div:nth-child(2) {
      margin-bottom: 14px;
    }
    #modalCreateTransfer2 .bottom-sec .active-fake > div img {
      margin-left: 8px;
    }
    #modalCreateTransfer2 .item .bottom-sec > div {
      width: 50%;
    }

    #modalCreateTransfer2 input {
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
    }
    #modalCreateTransfer2 .item {
      padding-bottom: 0;
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
    }
    #modalCreateTransfer input {
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
    }
    .delete-client-mob {
      position: relative;
      bottom: -16px;
      right: 1px;
      width: 45%;
    }
    #modalEditPool .add-client-mob {
      width: 45%;
      margin: 0;
      right: -187px;
    }
    #indicators-tab,
    #info-tab,
    #history-tab,
    #investments-tab,
    #case-tab,
    #structure-tab {
      padding-top: 0;
    }
    .modal-header > div:nth-child(1) {
      border: 0;
      padding-bottom: 0;
    }
    #investments-tab .amount-scale img:last-child {
      width: 160px;
      height: auto;
    }
    #investments-tab .rating-scale {
      padding-right: 0;
    }

    .sort-search-2 {
      padding-left: 0;
      padding-right: 0;
    }
    #modalCreatePresent .info > div:nth-child(2) {
      display: none;
    }
    #modalCreatePresent .info > div:nth-child(3) .present-switch {
      top: 279px !important;
    }
    #modalCreatePresent .info > div:nth-child(5) .present-switch {
      top: 489px !important;
    }
    #modalCreatePresent .info > div:nth-child(6) .present-switch {
      top: 594px !important;
    }
    #modalCreatePresent .info > div:nth-child(7) .present-switch {
      top: 699px !important;
    }
    #dashboard {
      height: 190vw;
    }
    .template .items-container .w100 {
      height: 170vw;
    }
    .h-block {
      height: 30px;
      width: 30px;
      visibility: hidden;
      display: flex;
    }
    #chart2 {
      display: flex;
    }
    .coin .list {
      overflow-y: scroll;
      width: 100%;
      height: 100vw;
    }

    .tab-cal {
      font-family: Inter;
      margin-right: 12px;
      font-style: normal;
      display: flex;
      color: #b9b9b9;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 12px;
      text-align: center;
      padding: 8px 16px;
    }
    #modalEditFake .info .item .down-vector {
      top: 264px;
      margin-left: 346px;
    }
    .edit-fake-calendar {
      overflow-x: scroll;
    }
    #modalEditFake .edit-fake-tabs div:last-child .down-vector {
      top: 138px;
    }
    #modalEditFake2 .edit-fake-tabs div:last-child .down-vector {
      top: 138px;
    }
    #modalEditFake3 .edit-fake-tabs div:last-child .down-vector {
      top: 138px;
    }
    .add-new-fakes {
      width: 123px !important;
      border-radius: 6px;
    }
    .pool .item span {
      margin-right: 0;
    }
    .pool section span {
      padding-right: 10px;
    }

    #modalEditCase .add-client-mob {
      width: 45%;
      margin: 0;
      right: -188px;
    }
    #investments-tab .date span {
      font-size: 24px;
    }
    #investments-tab .investments .item .section {
      margin-top: 26px;
    }
    #investments-tab .investments .info {
      margin-top: 0px;
    }
    #investments-tab .investments .info .title {
      font-size: 32px;
      line-height: 48px;
      padding-bottom: 0;
    }
    #investments-tab .investments .info .inv {
      font-size: 16px;
    }
    #investments-tab .investments .item {
      flex-direction: column;
      height: 290px;
    }
    #case-tab .second-row .date {
      align-items: flex-start;
      padding-top: 50px;
    }
    .d-n {
      display: none !important;
    }
    .modal .case-tab-content .item {
      padding: 12px;
    }
    #case-tab .second-row .info {
      font-size: 12px;
    }
    #case-tab .second-row .count > div:first-child > div:last-child,
    #case-tab .second-row .count > div:last-child > div:last-child {
      font-size: 16px;
    }
    #case-tab .second-row {
      margin-top: 0;
    }

    .add-client-mob {
      width: 100%;
      margin: 48px 0;
      right: 0;
      position: relative;
    }
    .btn-more {
      display: none;
    }
    .modal .info {
      margin-top: 17px;
    }
    .add-client {
      border-radius: 6px;
    }
    .header-container {
      width: 100%;
    }
    .fix-header {
      width: 100%;
      left: 0;
      margin-left: 0;
    }
    .fix-header .h-block {
      display: flex;
    }
    .header .btn-calendar {
      display: flex;
    }
    #modalCreatePool .pool-btn {
      width: 100%;
    }

    #modalCreateCase .pool-btn {
      width: 100%;
    }
    #modalPump .pool-btn {
      width: 100%;
    }
    .sort-search {
      display: flex;
    }
    .sort-search-2 {
      display: flex;
    }
    .h-blck {
      display: none;
    }
    .back-btn {
      display: none;
    }

    .header {
      justify-content: normal;
    }
    .header h1 {
      flex-grow: 1;
      text-align: center;
    }
    .template .title-template {
      display: none;
    }
    #dashboard .temp-container .item a {
      display: none;
    }

    .clients .title-block {
      display: none;
    }
    .clients .tag {
      margin-right: 40px;
      width: 80px;
    }
    .clients .nick {
      margin-right: -40px;
    }
    .clients .id {
      margin-right: -40px;
    }
    .item:first-child {
      margin-top: 0;
    }
    .clients .item {
      flex: 1 1 47%;
      margin-right: 16px;
      background: url(./assets/img/Line.png) no-repeat 50% 27%,
        linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);
      flex-wrap: wrap;
      height: 212px;
      padding: 10px;
      background-size: contain;
    }
    .clients .position p {
      overflow: visible;
    }

    .clients .item > div {
      display: none;
    }
    .clients .item > div:nth-child(4) {
      justify-content: end;
    }
    .clients .item > div:nth-child(5),
    .clients .item > div:nth-child(6),
    .clients .item > div:nth-child(8) {
      display: none;
    }
    .clients .client-mob {
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .clients section {
      flex-wrap: wrap;
    }
    .clients section > div {
      width: 50%;
      display: flex;
      margin-top: 16px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;

      color: #ffffff;
    }
    .clients section > div span {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      margin-right: 4px;

      color: #b2b2b2;
    }
    .clients section {
      width: 100%;
      font-size: 12px;
      line-height: 20px;
    }

    .pool .title-block {
      display: none;
    }
    .pool .item {
      background: url(./assets/img/Line.png) no-repeat 50% 32%,
        linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);
      flex-wrap: wrap;
      height: 172px;
      padding: 10px;
      background-size: contain;
    }
    .pool .item > div {
      display: none;
    }
    .pool .item > div:nth-child(4) {
      justify-content: end;
    }
    .pool .item > div:nth-child(5),
    .pool .item > div:nth-child(6),
    .pool .item > div:nth-child(7),
    .pool .item > div:nth-child(8) {
      display: none;
    }
    .pool .client-mob {
      justify-content: space-between;
      align-items: center;
    }
    .pool section {
      flex-wrap: wrap;
      width: 100%;
    }
    .pool section > div {
      width: 50%;
      display: flex;
      align-items: center;
      margin-top: 16px;
    }
    .pool section > div span {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      /* identical to box height, or 167% */

      display: flex;
      align-items: center;
      margin-right: 4px;
      color: #b2b2b2;
    }
    .pool section .tag {
      justify-content: end;
    }
    .pool section {
      font-size: 12px;
      line-height: 20px;
    }

    .case .title-block {
      display: none;
    }
    .case .item {
      background: url(./assets/img/Line.png) no-repeat 50% 33%,
        linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);
      flex-wrap: wrap;
      height: 176px;
      padding: 10px;
      background-size: contain;
    }
    .case .item > div {
      display: none;
    }
    .case .item > div:nth-child(4) {
      justify-content: end;
    }
    .case .item > div:nth-child(5),
    .case .item > div:nth-child(6),
    .case .item > div:nth-child(8) {
      display: none;
    }
    .case .client-mob {
      justify-content: space-between;
      align-items: center;
    }
    .case section {
      flex-wrap: wrap;
      width: 100%;
    }
    .case section > div {
      width: 50%;
      display: flex;
      align-items: center;
      margin-top: 16px;
    }
    .case section > div span {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      /* identical to box height, or 167% */

      display: flex;
      align-items: center;
      margin-right: 4px;
      color: #b2b2b2;
    }
    .case section .tag {
      justify-content: end;
    }
    .case section {
      font-size: 12px;
      line-height: 20px;
    }

    .finance .title-block {
      display: none;
    }
    .finance .item {
      background: url(./assets/img/Line.png) no-repeat 50% 50%,
        linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);
      flex-wrap: wrap;
      height: 172px;
      padding: 10px;
      background-size: contain;
      height: 104px;
    }

    .finance .item > div {
      display: none;
    }
    .finance .item > div:nth-child(4) {
      justify-content: end;
    }
    .finance .item > div:nth-child(5),
    .finance .item > div:nth-child(6),
    .finance .item > div:nth-child(8) {
      display: none;
    }
    .finance .client-mob {
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
    .finance section {
      flex-wrap: wrap;
      width: 100%;
    }
    .finance section > div {
      width: 50%;
      display: flex;
      margin-top: 16px;
    }
    .finance section .tag {
      justify-content: end;
    }
    .finance section {
      font-size: 12px;
      line-height: 20px;
    }
    .finance section > div span {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      /* identical to box height, or 167% */

      display: flex;
      align-items: center;
      margin-right: 4px;
      color: #b2b2b2;
    }

    .coin {
      flex-wrap: wrap-reverse;
    }
    .coin > div {
      width: 100%;
      margin-top: 16px;
    }

    .coin .title-block {
      display: none;
    }
    .coin .item {
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
      flex-wrap: wrap;
      height: 148px;
      padding: 10px;
      background-size: contain;
      height: 52px;
    }

    .fake .title-block {
      display: none;
    }
    .fake .item {
      background: url(./assets/img/Line.png) no-repeat 50% 30%,
        linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);
      flex-wrap: wrap;
      height: 176px;
      padding: 10px;
    }

    .fake .item span {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      /* identical to box height, or 167% */

      display: flex;
      align-items: center;
      margin-right: 4px;
      color: #b2b2b2;
    }
    .fake .item > div {
      display: none;
    }
    .fake .item > div:nth-child(4) {
      justify-content: end;
    }
    .fake .item > div:nth-child(2),
    .fake .item > div:nth-child(4),
    .fake .item > div:nth-child(5),
    .fake .item > div:nth-child(6) {
      display: none;
    }
    .fake .client-mob {
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .fake section {
      flex-wrap: wrap;
      width: 100%;
    }
    .fake .name {
      font-size: 16px;
    }
    .fake section > div {
      width: 50%;
      font-size: 14px;
      display: flex;
      margin-top: 8px;
    }
    .fake section .tag {
      justify-content: end;
    }
    .fake section {
      font-size: 12px;
      line-height: 20px;
    }

    .deposit .title-block {
      display: none;
    }
    .deposit .item {
      background: url(./assets/img/Line.png) no-repeat 50% 42%,
        linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);
      flex-wrap: wrap;
      height: 148px;
      padding: 10px;
      background-size: contain;
    }
    .deposit .item > div {
      display: none;
    }
    .deposit .item > div:nth-child(4) {
      justify-content: end;
    }
    .deposit .item > div:nth-child(5),
    .deposit .item > div:nth-child(6),
    .deposit .item > div:nth-child(8) {
      display: none;
    }
    .deposit .client-mob {
      justify-content: space-between;
      align-items: center;
    }
    .deposit section {
      flex-wrap: wrap;
      width: 100%;
    }
    .deposit section > div {
      width: 50%;
      display: flex;
      align-items: center;
      margin-top: 16px;
    }
    .deposit section > div span {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      /* identical to box height, or 167% */

      display: flex;
      align-items: center;
      margin-right: 4px;
      color: #b2b2b2;
    }
    .deposit section .tag {
      justify-content: end;
    }
    .deposit section {
      font-size: 12px;
      line-height: 20px;
    }

    .real .title-block {
      display: none;
    }
    .real .item {
      background: url(./assets/img/Line.png) no-repeat 50% 32%,
        linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);
      flex-wrap: wrap;
      height: 176px;
      padding: 10px;
    }
    .real .client-mob {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 140%;
      /* identical to box height, or 20px */

      color: #ffffff;
    }
    .real .client-mob span {
      margin-right: 3px;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      /* identical to box height, or 167% */

      display: flex;
      align-items: center;

      color: #b2b2b2;
    }

    .real .item > div {
      display: none;
      margin-bottom: 25px;
    }
    .real .item > div:nth-child(4) {
      justify-content: end;
    }
    .real .item > div:nth-child(2),
    .real .item > div:nth-child(4),
    .real .item > div:nth-child(5),
    .real .item > div:nth-child(6) {
      display: none;
    }
    .real .client-mob {
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .real section {
      flex-wrap: wrap;
      width: 100%;
    }
    .real section > div {
      width: 50%;
      display: flex;
    }
    .real section .tag {
      justify-content: end;
    }
    .real section {
      font-size: 12px;
      line-height: 20px;
    }
    .real .item .active-fake span {
      display: flex;
      align-items: center;
      margin-right: 4px;
    }

    .real .item .country {
      align-items: center;
    }

    .award .title-block {
      display: none;
    }
    .award .item {
      background: url('./assets/img/Line.png') no-repeat 50% 31%,
        linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);
      flex-wrap: wrap;

      padding: 10px;
      background-size: contain;
      height: 190px;
    }

    .award .item > div {
      display: none;
    }
    .award .item > div:nth-child(4) {
      justify-content: end;
    }
    .award .item > div:nth-child(5),
    .award .item > div:nth-child(6),
    .award .item > div:nth-child(8) {
      display: none;
    }
    .award .client-mob {
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
    .award section {
      flex-wrap: wrap;
      width: 100%;
    }
    .award section > div {
      width: 50%;
      display: flex;
      margin-top: 16px;
    }
    .award section > div:last-child {
      width: 100%;
      align-items: flex-start;
    }
    .award section .tag {
      justify-content: end;
    }
    .award section {
      font-size: 12px;
      line-height: 20px;
    }
    .award section > div span {
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
      /* identical to box height, or 167% */

      display: flex;
      align-items: center;
      margin-right: 4px;
      color: #b2b2b2;
    }

    .modal-content {
      width: 100%;
      padding: 16px;
      position: relative;
    }
    .modal-header > div:nth-child(2) {
      display: none;
    }
    .modal-header .tabs {
      overflow-x: scroll;
      border: none;
      padding-bottom: 0;
    }
    .modal-header .tabs .tab {
      margin-right: 12px;
      font-size: 16px;
      align-items: center;
    }

    .modal .investments .item {
      width: 100%;
    }

    .modal .structure .item {
      padding: 0;
    }
    .modal .case .item {
      padding: 12px;
    }
    .modal .info .item {
      width: 100%;
    }
    .modal .info .item:nth-child(1) {
      margin-top: -20px;
    }
    .modal .history .item {
      padding: 8px 12px;
      height: 64px;
    }
    .modal .history .item > div:nth-child(3) {
      display: none;
    }
    .modal .history .item > div:nth-child(2) {
      flex-direction: column;
      align-items: end;
    }
    .modal .history .item .h-el {
      height: 18px;
      font-family: Inter;
      font-style: normal;
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;
      align-items: normal;
      color: #ffffff;
    }
    .modal .history .item > div:nth-child(1) > div:nth-child(2) {
      font-size: 14px;
      line-height: 32px;
    }
    .modal .crypto .data > div:nth-child(2) {
      font-size: 16px;
      line-height: 24px;
    }
    .modal .crypto .item {
      flex: 1 1 160px;
    }
    .modal .operation .name {
      font-size: 16px;
      line-height: 28px;
    }
    .modal .operation .item {
      padding: 16px;
    }
    .modal .operation .value {
      font-size: 40px;
      line-height: 44px;
      display: flex;
      align-items: center;
      justify-content: end !important;
    }
    .modal .operation .value img {
      display: none;
    }
    .modal .operation .item:nth-child(1),
    .modal .operation .item:nth-child(2) {
      background-position: 5% 100%;
      background-size: 30%;
    }
    .calendar-content {
      width: 100%;
      position: fixed;
      bottom: 0;
      margin: 0 auto;
    }

    #structure1 .calendar-content {
      width: 100%;
      margin: 0 auto;
      position: static;
    }
    #structure1 .pool-btn {
      display: none;
    }
    .container {
      width: 100%;
    }

    .mainnav {
      width: 100%;
      padding: 12px 16px;
      margin: 0 auto;
    }
    .temp-container .item {
      width: auto;
    }
    .switch-cal {
      display: none;
    }
    .temp-container .item {
      padding: 16px;
    }
    .template .temp-container .value {
      font-size: 40px;
    }
    .template .temp-container .name {
      font-size: 16px;
    }
    .temp-container .item {
      width: 48%;
    }
    #modalInvestition .info {
      margin-top: 40px;
    }
    #modalAddClient .modal-header {
      border-bottom: 0;
    }
    #modalAddClient h1 {
      font-size: 24px;
    }
    .modal-header h1 {
      font-size: 24px;
    }
    #modalInvestition h1 {
      font-size: 24px;
    }
    .modal-header {
      border-bottom: 0 !important;
    }
  }
  @media (max-width: 500px) {
    #investments-tab .amount-scale img:last-child {
      width: 120px;
      height: auto;
    }
    .modal .crypto .data div a {
      display: none;
    }
    .modal .crypto .item {
      margin-right: 9px;
    }
    .investition {
      left: 163px;
    }
    .clients .item {
      flex: 1 100%;
      margin-right: 0;
    }
  }

  @media (max-width: 400px) {
    .investition {
      left: 150px;
    }
  }
  @media (max-width: 376px) {
    #investments-tab .amount-scale img:last-child {
      width: 110px;
      height: auto;
    }
    .modal .crypto .item {
      flex: 1 1 140px;
    }
    .investition {
      left: 151px;
    }
  }
  @media (max-width: 321px) {
    .modal-content {
      padding: 16px 8px;
    }
    #investments-tab .investments .item {
      padding: 8px;
    }
    #investments-tab .amount-scale img:last-child {
      width: 85px;
      height: auto;
    }
    .mainnav {
      padding: 12px 6px;
      padding-top: 70px;
    }
    .responsive-menu h2 {
      margin-left: -10px;
    }
    .modal .crypto .item {
      flex: 1 100%;
    }
    .investition {
      left: 266px;
    }
  }
  @media screen and (max-width: 450px) {
    .menu-btn {
      display: block;
      z-index: 1;
    }
  }
</style>
