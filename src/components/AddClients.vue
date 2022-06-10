<template>
  <div>
    <div class="modal">
      <div class="modal-body">
        <div class="modal-header">
          <div class="modal-header__name">
            <div class="back-btn" @click="closeAddClient()">
              <img src="../assets/img/eva_arrow-ios-back-fill.svg" alt="" />
            </div>
            <h1>Add client</h1>
            <div class="dn-element"></div>
            <span class="close" @click="closeAddClient()"
              ><img src="../assets/img/i-remove.svg" alt=""
            /></span>
          </div>
        </div>
        <div class="info-tab">
          <div class="info__name">
            <label for="name">Full name</label>
            <input id="name" type="text" v-model="fullName" />
          </div>
          <div class="info__name">
            <label for="phone">Phone</label>
            <input id="email" type="text" v-model="phone" />
            <!-- <VuePhoneNumberInput
              id="phone"
              v-model="phone"
              :default-country-code="country"
            /> -->
          </div>
          <div class="info__email">
            <label for="email">Email</label>
            <input id="email" type="text" v-model="email" />
          </div>
          <div class="info__password">
            <label for="nickname">Nickname</label>
            <input id="nickname" type="text" v-model="username" />
          </div>
          <div class="info__password">
            <label for="password">Password</label>
            <input id="password" type="text" v-model="password" />
          </div>
          <div class="country-popup">
            <label>tag</label>
            <div
              class="country-popup__input-tag"
              @click="(visibleTag = !visibleTag), (visibleCountry = false)"
            >
              <div class="country-popup__label">
                <div
                  class="country-popup__box-tag"
                  :style="{ background: tagClient.color }"
                ></div>
              </div>
              <div class="country-popup__arrow">
                <img src="../assets/img/dropdown-arrow.svg" alt="" />
              </div>
            </div>
            <div class="country-popup__tag" v-if="visibleTag">
              <div
                class="country-popup__box-items"
                v-for="(tagItems, index) in countryData.labels"
                :key="index"
                @click="pushTagClient(tagItems)"
              >
                <div
                  class="country-popup__box-tag"
                  :style="{ background: tagItems.color }"
                ></div>
              </div>
            </div>
          </div>
          <div class="country-popup">
            <label>Country</label>
            <div
              class="country-popup__input"
              @click="(visibleCountry = !visibleCountry), (visibleTag = false)"
            >
              <div class="country-popup__label">{{ countryClient.name }}</div>
              <div class="country-popup__arrow">
                <img src="../assets/img/dropdown-arrow.svg" alt="" />
              </div>
            </div>
            <div class="country-popup__box" v-if="visibleCountry">
              <div
                class="country-popup__box-items"
                v-for="(countryItems, index) in countryData.countries"
                :key="index"
                @click="pushCountryClient(countryItems)"
                v-miss="popupMiss"
              >
                {{ countryItems.name }}
              </div>
            </div>
          </div>
          <div class="modal-btn">
            <button
              class="modal__addClient-btn"
              @click="splitName(), createClient(postClients)"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';

  export default {
    components: {
      VuePhoneNumberInput,
    },
    data() {
      return {
        visibleCountry: false,
        visibleTag: false,
        postClients: {
          country_id: null,
          label_id: null,
          fname: null,
          lname: null,
          email: null,
          username: null,
          phone: null,
          password: null,
        },
        countryClient: [],
        tagClient: [],
        fullName: '',
        name: [],
        email: '',
        username: '',
        phone: '',
        password: '',
        country: '',
      };
    },
    methods: {
      ...mapActions({ creates: 'clients/createClient' }),
      closeAddClient() {
        this.$emit('closeAddClient');
      },
      pushCountryClient(countryItems) {
        this.countryClient = countryItems;
        this.visibleCountry = false;
      },
      pushTagClient(tagItems) {
        this.tagClient = tagItems;
        this.visibleTag = false;
      },
      popupMiss() {
        this.visibleTag = false;
        this.visibleCountry = false;
      },
      splitName() {
        this.name = this.fullName.split(' ');
      },
      createClient() {
        this.postClients = {
          country_id: this.countryClient.id,
          label_id: this.tagClient.id,
          fname: this.name[0],
          lname: this.name[1],
          email: this.email,
          username: this.username,
          phone: this.phone,
          password: this.password,
        };
        this.creates(this.postClients);
        this.$emit('closeAddClient');
      },
    },
    computed: {
      ...mapGetters({
        countryData: 'filter/filtersTable',
      }),
    },
    directives: {
      miss: {
        bind(el, binding) {
          el.addEventListener('click', (e) => e.stopPropagation());
          document.body.addEventListener('click', binding.value);
        },
        unbind(el, binding) {
          document.body.removeEventListener('click', binding.value);
        },
      },
    },
    beforeMount() {
      try {
        axios.get('http://ip-api.com/json').then((res) => {
          this.reqistration.country = res.data.countryCode;
        });
      } catch (error) {
        console.error(error);
      }
    },
  };
</script>
<style lang="scss">
  .input-tel__label {
    display: none;
  }
  .country-selector__input {
    color: #747474 !important;
  }
  .input-tel__input,
  .country-selector__input {
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    background: #141414;
    background-color: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    color: #ffffff;
    line-height: 24px;
  }
  .modal-body {
    overflow-y: auto;

    height: 100%;
    display: flex;
    flex-direction: column;
    width: 628px;
    height: 100%;
    z-index: 3;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    padding: 24px;

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

  .modal-header .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    border-top: 1px solid #202020;
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
    z-index: 1;
  }
  .balance__price > div {
    margin: 16px;
    display: flex;
    align-items: center;
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
  .value-img__hidden {
    display: none;
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
    flex-direction: column;
  }
  .info-tab {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
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
  .history__sum__hidden {
    display: none;
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
    display: none;
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
  .investment__info .date {
    display: none;
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
  .amount-scale__img__hidden {
    display: none;
  }
  .expired-investment {
    display: none;
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
    display: none;
    margin-top: 38px;
  }
  .modal__addClient-btn {
    background: #36a503;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 12px 64px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
    cursor: pointer;
  }
  .modal-btn {
    position: absolute;
    z-index: 1;
    right: 16px;
    bottom: -80px;
    padding-bottom: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
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
    .operation .value-img {
      display: none;
    }
    .operation .value-img__hidden {
      display: flex;
      margin-right: 8px;
    }
    .info-tab > div {
      width: 100%;
      margin-bottom: 16px;
    }
    .modal .info .item:nth-child(1) {
      margin-top: -20px;
    }
  }
  @media (max-width: 625px) {
    .close {
      display: none;
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

    .history__sum {
      display: none;
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
    .amount-scale__date {
      display: none;
    }
    .amount-scale__img {
      display: none;
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
    .investment__info .profit {
      display: none;
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
    .rating-scale__img {
      display: none;
    }
    .case__title {
      display: none;
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
    .modal-btn {
      align-items: center;
      right: 0;
    }
  }
  .country-popup__input {
    display: flex;
    position: relative;
  }
  .country-popup__input-tag {
    display: flex;
    position: relative;
  }
  .country-popup__label {
    width: 278px;
    height: 42px;
    background: #141414;
    border: 1px solid #1d1d1d;
    border-radius: 8px 0 0 8px;
    padding: 8px 16px;
  }
  .country-popup__arrow {
    width: 30px;
    height: 58px;
    background: #141414;
    border: 1px solid #1d1d1d;
    text-align: center;
    border-radius: 0 8px 8px 0;
  }
  .country-popup__arrow img {
    margin-top: 26px;
  }
  .country-popup__box {
    position: absolute;
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px 8px 0 0;
    top: 209px;
    max-width: 277px;
    max-height: 175px;
    height: 100%;
    overflow: scroll;
  }
  .country-popup__tag {
    position: absolute;
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 0 0 8px 8px;
    top: 313px;
    max-width: 277px;
    width: 100%;
    max-height: 175px;
    height: 100%;
    overflow: scroll;
    z-index: 2;
  }
  .country-popup__box-items {
    padding: 8px 16px;
  }
  .country-popup__box-tag {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    margin: 8px;
  }
  .country-popup__box::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .country-popup__tag::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media (max-width: 425px) {
    .back-btn {
      display: flex;
      width: 40px;
    }
  }
</style>
