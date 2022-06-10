<template>
  <div
    class="table-mobile"
    :style="{ 'max-height': this.screenHeight - 150 + 'px' }"
  >
    <div
      class="table-mobile__box"
      v-for="(tableBody, index) in reducedTable"
      :key="index"
      ref="box"
    >
      <div class="table-mobile__box-title">
        <div class="coin-name" v-if="tableBtn == 'case'">
          <img
            src="../assets/img/btc.svg"
            alt=""
            width="20px"
            height="20px"
            v-if="tableBody.nameCoin == 'Bitcoin'"
          /><img
            src="../assets/img/leticoin.png"
            alt=""
            width="20px"
            height="20px"
            v-else-if="tableBody.nameCoin == 'Litecoin'"
          /><img
            src="../assets/img/Ethereum Classic (ETH).svg"
            width="20px"
            height="20px"
            alt=""
            v-else-if="tableBody.nameCoin == 'Ethereum'"
          /><img
            src="../assets/img/tron.png"
            alt=""
            width="20px"
            height="20px"
            v-else-if="tableBody.nameCoin == 'Tron'"
          />
          <h2>{{ tableBody.nameCoin }}</h2>
        </div>
        <h2
          class="title__full-name"
          v-else-if="tableBtn == 'award' || tableBtn == 'ranks'"
        >
          {{ tableBody.rank }}
        </h2>
        <h2 class="title__full-name" v-else-if="tableBtn !== 'withdrawarls'">
          {{ tableBody.full_name }}
        </h2>
        <div v-if="tableBtn == 'clients'">
          <button
            @click="openDetailsClients(tableBody)"
            v-miss="popupMiss"
            class="table-client__button"
          >
            Details
          </button>
        </div>
        <div
          v-else-if="
            tableBtn !== 'deposit' &&
            tableBtn !== 'finance' &&
            tableBtn !== 'realClients' &&
            tableBtn !== 'withdrawarls'
          "
        >
          <div
            class="teble-client__vertical-dots"
            @click="openMoreDots(index, tableBtn, tableBody)"
            v-miss="popupMiss"
          >
            <img src="../assets/img/vertical-three-dots.svg" alt="" />
          </div>
          <Table-more
            v-if="visibleMoreDots && index == indexMoreDots"
            v-miss="popupMiss"
            :moreEdit="moreEdit"
            :indexMore="indexMore"
            @openEdit="openEdit"
            @openDelete="openDelete"
            :tableBtn="tableBtn"
          />
        </div>
        <div v-if="tableBtn == 'realClients'">
          <button class="table-client__button" @click="openTranfer()">
            Tranfer
          </button>
        </div>
      </div>
      <div
        :class="{
          'table-mobile__box-position':
            tableBtn == 'clients' || tableBtn == 'realClients',
        }"
        v-miss="popupMiss"
        v-if="
          tableBtn == 'clients' ||
          tableBtn == 'realClients' ||
          tableBtn == 'fake'
        "
      >
        <div class="table-mobile__box-body" v-if="tableBtn == 'clients'">
          <div class="body__item">
            <p>Nickname:</p>
            <h4>{{ tableBody.username }}</h4>
          </div>
          <div class="body__item">
            <p>Number:</p>
            <h4>{{ tableBody.phone }}</h4>
          </div>
          <div
            class="body__item"
            v-if="(visibleMore && index == indexMoreArrow) || screenWidth > 660"
          >
            <p>Email:</p>
            <h4>{{ tableBody.email }}</h4>
          </div>
        </div>
        <div class="table-mobile__box-body" v-if="tableBtn == 'realClients'">
          <div class="body__item">
            <p>ID:</p>
            <h4>{{ tableBody.id }}</h4>
          </div>
          <div class="body__item">
            <p>Name:</p>
            <h4>{{ tableBody.full_name }}</h4>
          </div>
          <div
            class="body__item"
            v-if="screenWidth > 660 || (visibleMore && index == indexMoreArrow)"
          >
            <p>Active:</p>
            <h4>{{ tableBody.is_active }}</h4>
          </div>
        </div>
        <div class="table-mobile__box-body" v-if="tableBtn == 'fake'">
          <div class="body__item">
            <p>Active:</p>
            <h4>{{ tableBody.clients_count }}</h4>
          </div>
          <div
            v-if="screenWidth > 550 || (visibleMore && index == indexMoreArrow)"
          >
            <div class="footer__country" v-if="tableBtn == 'fake'">
              <p>Geo:</p>
              <div class="footer__country-item">
                <div v-for="(geoLocation, name, i) in tableBody.geos" :key="i">
                  <Country-flag :country="geoLocation.code" size="normal" />
                </div>
              </div>
              <img
                src="../assets/img/vertical-three-dots.svg"
                alt=""
                @click="openCountry()"
                class="info-country__btn"
              />
              <info-countrys
                v-if="visibleCountry"
                :geoLocation="tableBody.geos"
              />
            </div>
          </div>
          <div class="body__item" v-if="visibleMore !== true">
            <p>ID:</p>
            <h4>{{ tableBody.maintainer_id }}</h4>
          </div>
        </div>
        <div
          class="table-mobile__box-footer"
          v-if="visibleMore && index == indexMoreArrow"
        >
          <div class="footer__country" v-if="tableBtn && tableBtn !== 'fake'">
            <p>Geo:</p>
            <Country-flag :country="tableBody.country.code" size="normal" />
          </div>
          <div class="footer__tag" v-if="tableBtn == 'clients'">
            <p>Tag:</p>
            <div
              class="footer__tag-item"
              :style="{ background: tableBody.label.color }"
            ></div>
          </div>
          <div
            class="body__item"
            v-if="visibleMore == true && tableBtn == 'fake'"
          >
            <p>ID:</p>
            <h4>{{ tableBody.maintainer_id }}</h4>
          </div>
          <div class="footer__date" v-if="tableBtn == 'fake'">
            <p>Date:</p>
            {{ new Date(tableBody.date.created_at).toLocaleDateString() }} -
            {{ new Date(tableBody.date.updated_at).toLocaleDateString() }}
          </div>

          <div class="footer__date" v-else>
            <p>Date:</p>
            <h4>{{ new Date(tableBody.created_at).toLocaleDateString() }}</h4>
          </div>
        </div>
      </div>
      <div
        class="table-mobile__box-body"
        v-if="tableBtn == 'pool' || tableBtn == 'case'"
      >
        <div class="body__item">
          <p>Lifetime:</p>
          <h4>{{ tableBody.lifeTime }}</h4>
        </div>
        <div class="body__item">
          <p>Time left:</p>
          <h4>{{ new Date(tableBody.timeLeft).toLocaleDateString() }}</h4>
        </div>
        <div class="body__item">
          <p>Investors:</p>
          <h4>{{ tableBody.investors }}</h4>
        </div>
        <div class="body__item">
          <p>Total Amount:</p>
          <h4>{{ tableBody.totalAmount }}</h4>
        </div>
        <div class="body__item">
          <div class="metod">
            <p>Method:</p>
            <img
              src="../assets/img/btc.svg"
              alt=""
              width="20px"
              height="20px"
              v-if="tableBody.method == 'Bitcoin'"
            /><img
              src="../assets/img/leticoin.png"
              alt=""
              width="20px"
              height="20px"
              v-else-if="tableBody.method == 'Litecoin'"
            /><img
              src="../assets/img/Ethereum Classic (ETH).svg"
              width="20px"
              height="20px"
              alt=""
              v-else-if="tableBody.method == 'Ethereum'"
            /><img
              src="../assets/img/tron.png"
              alt=""
              width="20px"
              height="20px"
              v-else-if="tableBody.method == 'Tron'"
            />
            <h4>{{ tableBody.method }}</h4>
          </div>
        </div>
        <div class="body__item">
          <p>Percent:</p>
          <h4>{{ tableBody.percent }}</h4>
        </div>
      </div>
      <div class="table-mobile__box-body" v-if="tableBtn == 'award'">
        <div
          v-for="(tableFields, name, index) in tableBody.rewards"
          :key="index"
        >
          <div>
            <div class="body__item" v-if="name == 'BTC'">
              <p>Bitcoin:</p>
              <img
                src="../assets/img/btc.svg"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.BTC }}</p>
            </div>
            <div class="body__item" v-if="name == 'ETH'">
              <p>Ethereum:</p>
              <img
                src="../assets/img/Ethereum Classic (ETH).svg"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.ETH }}</p>
            </div>
            <div class="body__item" v-if="name == 'LTC'">
              <p>Leticoin:</p>
              <img
                src="../assets/img/leticoin.png"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.LTC }}</p>
            </div>
            <div class="body__item" v-if="name == 'TRX'">
              <p>Tron:</p>
              <img
                src="../assets/img/tron.png"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.TRX }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="table-mobile__box-body" v-if="tableBtn == 'ranks'">
        <div class="body__item">
          <p>Personal (USDT):</p>
          <h4>{{ tableBody.personal }}</h4>
        </div>
        <div class="body__item">
          <p>Structure amount:</p>
          <h4>{{ tableBody.amount }}</h4>
        </div>
        <div
          class="body__item"
          v-for="(percentItems, index) in tableBody.percents"
          :key="index"
        >
          <p>{{ index + 1 }}:</p>
          <h4>{{ percentItems.percent }}%</h4>
        </div>
      </div>
      <div class="table-mobile__box-body" v-if="tableBtn == 'deposit'">
        <div class="footer__country">
          <p>Geo:</p>
          <Country-flag :country="tableBody.country.code" size="normal" />
        </div>
        <div class="body__item">
          <p>Method:</p>
          <img
            src="../assets/img/btc.svg"
            alt=""
            width="20px"
            height="20px"
            v-if="tableBody.method == 'Bitcoin'"
          /><img
            src="../assets/img/leticoin.png"
            alt=""
            width="20px"
            height="20px"
            v-else-if="tableBody.method == 'Litecoin'"
          /><img
            src="../assets/img/Ethereum Classic (ETH).svg"
            width="20px"
            height="20px"
            alt=""
            v-else-if="tableBody.method == 'Ethereum'"
          /><img
            src="../assets/img/tron.png"
            alt=""
            width="20px"
            height="20px"
            v-else-if="tableBody.method == 'Tron'"
          />
          <h4>{{ tableBody.method }}</h4>
        </div>
        <div class="body__item">
          <p>Product:</p>
          <h4>{{ tableBody.product }}</h4>
        </div>
        <div class="body__item">
          <p>Open Dep.:</p>
          <h4>{{ new Date(tableBody.created_at).toLocaleDateString() }}</h4>
        </div>
        <div class="body__item">
          <p>Close Dep.:</p>
          <h4>{{ new Date(tableBody.updated_at).toLocaleDateString() }}</h4>
        </div>
      </div>
      <div class="table-mobile__box-body" v-if="tableBtn == 'finance'">
        <div class="body__item">
          <p>ID:</p>
          <h4>{{ tableBody.id }}</h4>
        </div>
        <div class="body__item">
          <p>Coin:</p>
          <img
            src="../assets/img/btc.svg"
            alt=""
            width="20px"
            height="20px"
            v-if="tableBody.nameCoin == 'Bitcoin'"
          /><img
            src="../assets/img/leticoin.png"
            alt=""
            width="20px"
            height="20px"
            v-else-if="tableBody.nameCoin == 'Litecoin'"
          /><img
            src="../assets/img/Ethereum Classic (ETH).svg"
            width="20px"
            height="20px"
            alt=""
            v-else-if="tableBody.nameCoin == 'Ethereum'"
          /><img
            src="../assets/img/tron.png"
            alt=""
            width="20px"
            height="20px"
            v-else-if="tableBody.nameCoin == 'Tron'"
          />
          <h4>{{ tableBody.nameCoin }}</h4>
        </div>
        <div class="body__item">
          <p>Amount:</p>
          <h4>{{ tableBody.amount }}</h4>
        </div>
        <div class="body__item">
          <p>Type:</p>
          <h4>{{ tableBody.type }}</h4>
        </div>
        <div class="body__item">
          <p>Date:</p>
          <h4>{{ new Date(tableBody.created_at).toLocaleDateString() }}</h4>
        </div>
      </div>
      <div class="table-mobile__box-body" v-if="tableBtn == 'withdrawarls'">
        <div class="body__item">
          <p>ID:</p>
          <h4>{{ tableBody.id }}</h4>
        </div>
        <div class="body__item">
          <p>Client id:</p>

          <h4>{{ tableBody.client_id }}</h4>
        </div>
        <div class="body__item">
          <p>External wallet:</p>
          <h4>{{ tableBody.external_wallet }}</h4>
        </div>
        <div class="body__item">
          <p>Amount:</p>
          <h4>{{ tableBody.amount }}</h4>
        </div>
        <div class="body__item">
          <p>Status:</p>
          <h4>{{ tableBody.status }}</h4>
        </div>
        <div class="body__item">
          <p>Payment tag:</p>
          <h4>{{ tableBody.payment_tag }}</h4>
        </div>
        <div class="body__item">
          <p>Open dep.:</p>
          <h4>
            <div class="body__item">
              <p>Date:</p>
              <h4>{{ new Date(tableBody.created_at).toLocaleDateString() }}</h4>
            </div>
          </h4>
        </div>
        <div class="body__item">
          <p>Close Dep.:</p>
          <h4>
            <h4>{{ new Date(tableBody.updated_at).toLocaleDateString() }}</h4>
          </h4>
        </div>
      </div>
      <div
        class="table-mobile__box-more"
        @click="openMore(index)"
        v-if="
          tableBtn == 'clients' ||
          tableBtn == 'realClients' ||
          tableBtn == 'fake'
        "
        v-miss="popupMiss"
      >
        <img
          src="../assets/img/table-mobile__arrow-more.svg"
          alt=""
          :class="{
            'drop-arrow__img': visibleMore && indexMoreArrow == index,
          }"
        />
      </div>
    </div>
    <!-- <div class="next-item"><button>Action</button></div> -->
  </div>
</template>

<script>
  import CountryFlag from 'vue-country-flag';
  import InfoCountrys from './InfoCountrys.vue';
  import { mapActions } from 'vuex';
  import TableMore from './TableMore.vue';
  export default {
    components: {
      CountryFlag,
      InfoCountrys,
      TableMore,
    },
    props: {
      reducedTable: { type: Array },
      tableBtn: { type: String },
    },
    data() {
      return {
        visibleMore: false,
        visibleMoreDots: false,
        indexMoreArrow: -1,
        indexMore: -1,
        indexMoreDots: -1,
        visibleCountry: false,
        screenWidth: 1366,
        screenHeight: 580,
        moreEdit: {},
      };
    },
    methods: {
      ...mapActions({
        get_clientDetails: 'clientsDetails/getClientDetails',
      }),
      openDetailsClients(tableBody) {
        this.$emit('openDetailsClients');
        let callDetails = { clientId: tableBody.idClient };
        this.get_clientDetails(callDetails);
      },
      popupMiss() {
        this.visibleCountry = false;
        this.visibleMore = false;
        this.visibleMoreDots = false;
      },
      openCountry() {
        this.visibleCountry = !this.visibleCountry;
      },
      openMore(index) {
        this.indexMoreArrow = index;
        this.visibleMore = !this.visibleMore;
      },
      updateWidth() {
        this.screenWidth = window.screen.width;
      },
      updateHeight() {
        this.screenHeight = window.screen.height;
      },
      openMoreDots(index, tableBtn, tableBody) {
        this.visibleMoreDots = !this.visibleMoreDots;
        this.indexMore = tableBody.idClient;
        this.indexMoreDots = index;
        if (tableBtn == 'award') {
          this.moreEdit = {
            id: tableBody.id,
            BTC: tableBody.rewards.BTC,
            ETH: tableBody.rewards.ETH,
            LTC: tableBody.rewards.LTC,
            TRX: tableBody.rewards.TRX,
          };
        } else if (tableBtn == 'case') {
          this.moreEdit = {
            name: tableBody.nameCoin,
            lifeTime: tableBody.lifeTime,
            percents: tableBody.percent,
          };
        } else if (tableBtn == 'pool') {
          this.moreEdit = {
            name: tableBody.full_name,
            lifetime: tableBody.lifeTime,
            percent: tableBody.percent,
            amount: tableBody.totalAmount,
          };
        }
      },
      openEdit(moreEdit, indexMore) {
        this.$emit('openEdit', moreEdit, indexMore);
        this.visibleMoreDots = false;
      },
      openDelete(indexMore) {
        this.$emit('openDelete', indexMore);
        this.visibleMoreDots = false;
      },
      openTranfer() {
        this.$emit('openTranfer');
      },
    },
    created() {
      this.screenWidth = window.screen.width;
      this.screenHight = window.screen.height;
      window.addEventListener('resize', this.updateWidth);
      window.addEventListener('resize', this.updateHeight);
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
  };
</script>

<style lang="scss" scoped>
  .next-item {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background: #080808;
    width: 100%;
    padding: 16px 32px 16px 16px;
    & > button {
      max-width: 500px;
      width: 100%;
      background: #36a503;
      border-radius: 12px;
      border: none;
      color: #fff;
      height: 48px;
    }
  }
  .table-mobile {
    overflow-y: auto;
    position: relative;
    &__box {
      position: relative;
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 12px;
      padding: 16px;
      margin: 16px 0 16px 0;
      &-title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #202020;

        h2 {
          margin-bottom: 16px;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
        }
        button {
          margin-bottom: 16px;
          padding: 4px 12px;
          background: #36a503;
          border-radius: 6px;
          color: #fff;
          border: none;
        }
      }
      &-body {
        display: flex;
        justify-content: space-between;
        margin: 16px 0 20px 0;
        flex-wrap: wrap;
      }
      &-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }
      &-more {
        position: absolute;
        text-align: center;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
        background: #060903;
        border-radius: 0px 0px 12px 12px;
      }
    }
  }
  .body__item {
    display: flex;
    align-items: center;
    margin: 0 5px;
  }
  .footer {
    &__tag {
      display: flex;
      align-items: center;
      &-item {
        width: 28px;
        height: 28px;
        border-radius: 6px;
      }
    }
    &__date {
      display: flex;
      align-items: center;
    }
    &__country {
      display: flex;
    }
  }
  p {
    color: #b2b2b2;
    font-size: 12px;
    margin-right: 5px;
  }
  h4 {
    color: #fff;
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }
  .drop-arrow__img {
    transform: rotate(180deg);
  }
  .table-mobile__box-position {
    display: block;
  }
  .footer__country-item {
    display: flex;
  }
  @media (max-width: 520px) {
    .table-mobile__box {
      &-position {
        display: flex;
      }
    }
    .footer {
      &__tag {
        margin: 6px 0 6px 0;
      }
      &__date {
        margin: 6px 0 4px 0;
      }
      &__country {
        margin: 16px 0 4px 0;
      }
    }
  }
  .coin-name {
    display: flex;
    align-items: center;
    & img {
      margin-bottom: 16px;
      margin-right: 5px;
    }
  }
  .metod {
    display: flex;
    align-items: center;
    & img {
      margin-right: 5px;
    }
  }
  @media (max-height: 580px) {
    .table-mobile {
      height: 100vh;
    }
  }
</style>
