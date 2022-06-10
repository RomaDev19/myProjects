<template>
  <div class="modal">
    <Add-coins
      v-if="visibleAddCoins"
      @closeAddCoins="closeAddCoins"
      :coins="coins"
      :coinsName="coinsName"
    />
    <div class="modal-body" v-else>
      <div class="modal-header">
        <div class="modal-header__name">
          <div class="back-btn" @click="closeClientsDetails()">
            <img src="../assets/img/eva_arrow-ios-back-fill.svg" alt="" />
          </div>
          <h1>{{ infoData.fname }} {{ infoData.lname }}</h1>

          <span class="close" @click="closeClientsDetails()"
            ><img src="../assets/img/i-remove.svg" alt=""
          /></span>
          <span class="btn-more"
            ><img src="../assets/img/clarity_window-close-line.svg" alt=""
          /></span>
        </div>

        <nav class="modal-header__tabs">
          <div
            class="tab"
            @click="active = 'Indicators'"
            :class="{ active: active == 'Indicators' }"
          >
            Indicators
          </div>
          <div
            class="tab"
            @click="active = 'Info'"
            :class="{ active: active == 'Info' }"
          >
            Info
          </div>
          <div
            class="tab"
            @click="active = 'History'"
            :class="{ active: active == 'History' }"
          >
            History
          </div>
          <div
            class="tab"
            @click="active = 'Investments'"
            :class="{ active: active == 'Investments' }"
          >
            Investments
          </div>
          <div
            class="tab"
            @click="active = 'Structure'"
            :class="{ active: active == 'Structure' }"
          >
            Structure
          </div>
        </nav>
      </div>
      <Clients-details-indicators
        v-if="active == 'Indicators'"
        @openAddCoins="openAddCoins"
      />
      <Clients-details-info v-else-if="active == 'Info'" />
      <Clients-details-history v-else-if="active == 'History'" />
      <Clients-details-investmens v-else-if="active == 'Investments'" />
      <Clients-details-structure
        @openTranfer="openTranfer"
        @refreshDatails="refreshDatails"
        v-else
      />
    </div>
  </div>
</template>

<script>
  import AddCoins from './AddCoins.vue';
  import ClientsDetailsIndicators from './ClientsDetailsIndicators.vue';
  import ClientsDetailsInfo from './ClientsDatailsInfo.vue';
  import ClientsDetailsHistory from './ClientsDetailsHistory.vue';
  import ClientsDetailsInvestmens from './ClientsDetailsInvestmens.vue';
  import ClientsDetailsStructure from './ClientsDetailsStructure.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    components: {
      ClientsDetailsIndicators,
      ClientsDetailsInfo,
      ClientsDetailsHistory,
      ClientsDetailsInvestmens,
      ClientsDetailsStructure,
      AddCoins,
    },
    data() {
      return {
        active: 'Indicators',
        popupValue: 'Investments',
        visiblePopup: false,
        visibleAddCoins: false,
        coins: '',
        coinsName: '',
      };
    },
    methods: {
      ...mapActions({ refresh: 'clientsDetails/getClientDetails' }),
      refreshDatails() {
        this.active = 'Indicators';
      },
      openAddCoins(cryptocurrency, name) {
        this.visibleAddCoins = true;
        this.coins = cryptocurrency;
        this.coinsName = name;
      },
      openTranfer(infoData) {
        this.$emit('openTranfer', infoData);
      },
      closeAddCoins() {
        this.visibleAddCoins = false;
        let callDetails = { clientId: this.infoData.id };
        this.refresh(callDetails);
      },
      closeClientsDetails() {
        this.$emit('closeClientsDetails');
      },
      tabsActive(navDateils) {
        this.active = navDateils.name;
      },
    },
    computed: {
      ...mapGetters({
        infoData: 'clientsDetails/infoData',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .modal-body {
    overflow-y: auto;
    width: 628px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    padding: 24px 24px 0 24px;

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
  .modal-body::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  /* The Close Button */
  .close {
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 6px;
    color: #fff;
    float: right;
    font-size: 28px;
    cursor: pointer;
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

  .modal-header h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    /* identical to box height, or 222% */

    color: #ffffff;
  }

  .modal-header__name {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-header__acount {
    display: flex;
    padding: 24px 0;
    align-items: flex-start;
  }
  .modal-header__tabs {
    padding: 24px 0;

    border-bottom: 1px solid #202020;
    display: flex;
    justify-content: space-between;
  }
  .modal-header__acount .acount-img {
    margin-right: 24px;
  }
  .acount-display__subscription {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    margin-bottom: 12px;
    /* identical to box height, or 20px */

    /* Defolt color */

    color: #36a503;
  }
  .acount-display__btns {
    display: flex;
  }
  .acount-display__btns .acc-btn {
    margin-right: 16px;
  }
  .acc-btn {
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
  .blck-btn {
    font-style: normal;
    color: #d01e22;

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
  .modal-header .tab {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    display: flex;
    color: #b9b9b9;

    cursor: pointer;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;

    text-align: center;
    padding: 8px 16px;
  }
  .crypto {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .crypto .balance__price:nth-child(2n) {
    margin-right: 0;
  }
  .balance__price {
    width: 47%;
    justify-content: space-between;
    margin-right: 24px;
    margin-bottom: 24px;
    background: #0b0b0b;
    border: 1px solid #202020;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px #171717;
    border-radius: 12px;
    display: flex;
  }
  .balance__price > div {
    margin: 16px;
    display: flex;
  }
  .balance__price button {
    border: 0;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    display: flex;
    width: 20px;
    justify-content: center;
    align-items: center;
    background: #34a608;
    cursor: pointer;
  }
  .balance__price-info {
    margin-left: 16px;
  }
  .balance__price span {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #b3b3b3;
  }
  .balance__price .price {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }
  .balance__price span a {
    margin-left: 8px;
  }

  .personal-funds,
  .structure-funds {
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    margin-bottom: 24px;
    padding: 24px;
    padding-bottom: 12px;
    position: relative;
  }
  .personal-funds {
    background: url('../assets/img/personal-funds.png'),
      linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);

    background-repeat: no-repeat;
    background-position: 5% 100%;
  }
  .structure-funds {
    background: url('../assets/img/structure-funds.png'),
      linear-gradient(103.5deg, #000000 7.5%, #070a03 66.74%, #000000 112.06%);

    background-repeat: no-repeat;
    background-position: 5% 100%;
  }
  .operation .title-row {
    display: flex;

    justify-content: space-between;
    align-items: center;
  }
  .operation .title {
    color: #fff;

    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
  }
  .operation .title-img {
    margin-left: 10px;
    display: flex;
    align-items: center;
  }

  .operation .value {
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 75px;
    color: #36a503;
    text-align: right;
    margin-top: 18px;
  }
  .info-tab > div {
    display: flex;

    width: 48%;
    margin-bottom: 24px;
    flex-direction: column;
  }
  .info-tab {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .info-tab label {
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #808191;
    margin-bottom: 16px;
  }
  .info-tab input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    color: #ffffff;
    line-height: 24px;
  }
  .history__item {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 16px;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .history__currency,
  .history__date,
  .history__date {
    display: flex;
  }

  .history__date {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #808191;
  }
  .history__sum {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .history__currency div {
    color: #ffffff;
    font-weight: 600;
    margin-left: 16px;

    font-style: normal;
    font-size: 14px;
    line-height: 32px;
  }
  .history__currency span {
    color: #9b9b9b;
    font-weight: normal;
    margin-left: 4px;

    font-style: normal;
    font-size: 14px;
    line-height: 32px;
  }
  .investment__item {
    background: url('../assets/img/investment-bg-1.png') no-repeat 50% 50%,
      radial-gradient(103.03% 103.03% at 0% 0%, #242424 0%, #000000 63.02%);
    border: 1px solid #202020;
    box-sizing: border-box;
    filter: drop-shadow(2px 2px 10px #171717);
    border-radius: 12px;
    width: 100%;
    padding: 16px;
    display: flex;
    margin-bottom: 24px;
  }

  .investments {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .investment__item-section {
    display: flex;
    width: 100%;
  }
  .investment__rating-scale {
    padding-right: 24px;
  }
  .rating-scale__img {
    height: 100%;
  }
  .rating-scale__img__hidden {
    height: 10px;
    width: 100%;
  }
  .investment__info {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
  }
  .investment__info .title {
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 72px;
    color: #ffffff;
    border-bottom: none;
    padding-bottom: 0;
  }
  .investment__info .inv {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 48px;
    color: #ffffff;
  }
  .investment__info .profit {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: #b2b2b2;
  }

  .investment__info .profit span {
    color: #36a503;

    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
  }
  .amount-scale__date {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 34px;
    color: #ffffff;
    margin-bottom: 34px;
    text-align: center;
    align-items: center;
  }
  .amount-scale__date span {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    margin-right: 4px;

    /* Color 1 \ Promary Color */

    color: #36a503;
  }

  .investment__item .date span {
    color: #36a503;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    padding-right: 10px;
  }

  /* .modal .investments .data {
          margin: 16px 0;
        }
        .modal .investments .data > div:nth-child(1) {

          font-style: normal;
          font-weight: 300;
          font-size: 12px;
          line-height: 16px;
          color: #a7a7a7;
        }
        .modal .investments .data > div:nth-child(2) {

          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          color: #ffffff;
          display: flex;
          align-items: baseline;
        }
        .modal .investments .data > div:nth-child(2) > div {

          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 24px;
          color: #c5c5c5;
          margin-left: 8px;
        } */

  .case__item {
    width: 100%;
    height: auto;
    background: url('../assets/img/case_bg.svg') no-repeat 100% 100%,
      radial-gradient(103.03% 103.03% at 0% 0%, #242424 0%, #000000 63.02%);
    border-radius: 12px;
    padding: 24px;
  }
  .case__top-row {
    display: flex;
    justify-content: space-between;
  }
  .case__bottom-row {
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
  }
  .case__top-row > div {
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

  .case__info {
    display: flex;
    color: #b2b2b2;
    flex-direction: column;
    width: 100%;
  }
  .case__currency {
    justify-content: space-between;
    display: flex;
  }
  .case__currency h4 {
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 72px;
    color: #ffffff;
  }
  .case__count {
    display: flex;
    margin-top: 10px;
  }
  .min-investment {
    margin-right: 24px;
  }
  .min-investment span {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
  }
  .total-percent span {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 140%;
    color: #36a503;
  }
  .case__date {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    display: flex;
    align-items: center;
  }
  .case__date span {
    color: #36a503;

    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding-right: 6px;
  }

  .structure__item {
    display: flex;
    width: 100%;
    align-items: center;

    justify-content: space-between;
    margin-bottom: 12px;
  }

  .structure__item span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    /* identical to box height, or 250% */

    color: #b9b9b9;
  }

  .structure__item div {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    /* identical to box height, or 250% */

    color: #ffffff;
  }
  .upliner-link {
    color: #36a503;
    text-decoration: none;
    cursor: pointer;
  }

  .expired-investment-btn {
    background: #36a503;
    opacity: 0.75;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 12px 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #ffffff;
  }
  .case__investition-btn {
    background: #36a503;

    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 12px 16px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: #ffffff;
  }
  .case__investition {
    margin-top: 38px;
  }

  @media (max-width: 768px) {
    .modal-header__tabs {
      overflow-x: scroll;
      border: none;
      padding-bottom: 0;
    }
    .modal-header__tabs .tab {
      margin-right: 12px;
    }
    .balance__price {
      margin-bottom: 16px;
      margin-right: 16px;
    }
    .personal-funds,
    .structure-funds {
      padding: 16px;
    }
    .operation .value {
      margin-top: 24px;
      font-size: 40px;
      line-height: 44px;
      display: flex;
      align-items: center;
      justify-content: end;
    }
    .operation .title {
      font-size: 16px;
    }
    .operation .title-row {
      height: 32px;
    }

    .operation .value-img__hidden {
      display: flex;
      margin-right: 8px;
    }
  }
  @media (max-width: 625px) {
    .btn-more {
      display: block;
    }
    .modal input {
      border: 1px solid #202020;
      border-radius: 12px;
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
    }

    .modal-body {
      width: 100%;
      padding: 16px;
      background: linear-gradient(
        51.09deg,
        #000000 -13.01%,
        #121212 45.52%,
        #181818 111.86%
      );
    }

    .modal h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
    }
    .dn-element {
      display: block;
      width: 40px;
    }

    .history__sum__hidden {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 32px;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
    .history__date {
      display: flex;
      flex-direction: column;
      line-height: 16px;
      align-items: end;
    }
    .history__item {
      padding: 8px 12px;
      background: #000000;
      border-radius: 12px;
    }
    .amount-scale__img__hidden {
      width: 120px;
      height: auto;
      display: flex;
    }
    .investment__item {
      flex-direction: column;
      padding: 16px 12px;
      background: url('../assets/img/investment-bg-2.svg') no-repeat 0% 0%,
        radial-gradient(103.03% 103.03% at 0% 0%, #242424 0%, #000000 63.02%);
    }
    .investment__info .inv {
      font-size: 16px;
      line-height: 32px;
      margin-bottom: 22px;
    }
    .investment__info .title {
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 48px;
      margin-bottom: 16px;
    }

    .investment__info .date {
      display: flex;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 34px;
      color: #ffffff;
      align-items: center;
    }
    .investment__info .date i {
      font-style: inherit;
      font-weight: 100;
      margin-right: 4px;
      font-family: sans-serif;
    }

    .expired-investment {
      display: flex;
      margin-top: 24px;
    }
    .info-tab input {
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
    }
    .investment__rating-scale {
      padding-right: 0;
      margin-bottom: 24px;
    }
    .rating-scale__img__hidden {
      display: flex;
    }

    .info-tab > div {
      width: 100%;
      margin-bottom: 16px;
    }

    .case__investition {
      display: flex;
      margin-top: 26px;
    }
    .case__item {
      padding: 16px 12px;
    }
    .case__bottom-row {
      margin-top: 24px;
    }
    .case__currency h4 {
      line-height: 48px;
    }
    .case__count {
      margin-top: 24px;
    }
    .total-percent div,
    .min-investment div {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;
    }
    .min-investment span,
    .total-percent span {
      font-size: 16px;
    }
    .close {
      display: none;
    }
  }
  .active {
    background: #36a503;
    color: #fff;
  }
  .popup {
    display: flex;
    position: relative;
    max-width: 155px;
    width: 100%;
  }
  .popup-input {
    line-height: 24px;
    color: #b9b9b9;
    cursor: pointer;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px 0 0 12px;
    text-align: center;
    padding: 8px 16px;
    max-width: 125px;
    width: 100%;
  }
  .popup-arrow {
    width: 30px;
    border: 1px solid #202020;
    text-align: center;
    border-radius: 0 12px 12px 0;
  }
  .popup-arrow img {
    margin-top: 18px;
  }
  .popup-box {
    width: 156px;
    position: absolute;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    border-radius: 0 0 12px 12px;
    top: 33px;
  }
  .popup-box__item {
    padding: 16px;
    color: #b9b9b9;
  }

  @media (max-width: 425px) {
    .back-btn {
      display: flex;
      width: 40px;
    }
  }
</style>
