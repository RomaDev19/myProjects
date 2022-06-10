<template>
  <tbody class="table-client">
    <template v-if="reducedTable == 0">
      <h2 class="not-found">Not Found</h2>
    </template>
    <tr
      v-for="(tableBody, i) in reducedTable"
      :key="i"
      class="table-client__colum"
    >
      <template v-if="tableBtn !== 'award' && tableBtn !== 'ranks'">
        <td v-for="(tableFields, name, index) in tableBody" :key="index">
          <template v-if="name == 'percent'">
            <div class="table-client__box">
              <p ref="fields">{{ tableFields }}%</p>
            </div>
          </template>
          <template v-if="name == 'totalAmount'">
            <div class="table-client__box">
              <p ref="fields">{{ tableFields }} {{ tableBody.method.key }}</p>
            </div>
          </template>
          <template v-if="name == 'lifeTime'">
            <div class="table-client__box">
              <p ref="fields">{{ tableFields }} d</p>
            </div>
          </template>
          <template v-if="name == 'idClient' && tableBtn !== 'clients'">
            <div
              class="teble-client__vertical-dots"
              @click="openMore(i, tableBody, tableBtn)"
              v-miss="popupMiss"
            >
              <img src="../assets/img/vertical-three-dots.svg" alt="" />
            </div>
            <Table-more
              v-if="visibleMore && i == indexMoreDots"
              v-miss="popupMiss"
              @openEdit="openEdit"
              @openDelete="openDelete"
              :moreEdit="moreEdit"
              :indexMore="indexMore"
              :tableBtn="tableBtn"
            />
          </template>
          <template
            v-if="
              name == 'created_at' || name == 'updated_at' || name == 'timeLeft'
            "
          >
            {{ new Date(tableFields).toLocaleDateString() }}
          </template>
          <template v-else-if="name == 'date'">
            {{ new Date(tableFields.created_at).toLocaleDateString() }} -
            {{ new Date(tableFields.updated_at).toLocaleDateString() }}
          </template>

          <template v-else-if="name == 'label'">
            <div
              class="table-client__colum-tag"
              :style="{ background: tableFields.color }"
            ></div>
          </template>
          <template v-else-if="name == 'country'">
            <country-flag :country="tableFields.code" size="normal" />
          </template>
          <template v-else-if="name == 'geos'"
            ><div class="country-box">
              <div class="country-box__item">
                <div v-for="(geoLocation, index) in tableFields" :key="index">
                  <country-flag :country="geoLocation.code" size="normal" />
                </div>
              </div>
              <img
                src="../assets/img/vertical-three-dots.svg"
                alt=""
                v-miss="popupMiss"
                class="info-country__btn"
                @click="openCountry()"
              />
              <info-countrys
                v-if="visibleCountry"
                :geoLocation="tableFields"
                v-miss="popupMiss"
              />
            </div>
          </template>
          <template v-else-if="name == 'nameCoin' || name == 'method'">
            <div class="coin-name">
              <img
                src="../assets/img/btc.svg"
                alt=""
                width="20px"
                height="20px"
                v-if="tableFields.name == 'Bitcoin' || tableFields == 'Bitcoin'"
              /><img
                src="../assets/img/leticoin.png"
                alt=""
                width="20px"
                height="20px"
                v-else-if="
                  tableFields.name == 'Litecoin' || tableFields == 'Litecoin'
                "
              /><img
                src="../assets/img/Ethereum Classic (ETH).svg"
                width="20px"
                height="20px"
                alt=""
                v-else-if="
                  tableFields.name == 'Ethereum' || tableFields == 'Ethereum'
                "
              /><img
                src="../assets/img/tron.png"
                alt=""
                width="20px"
                height="20px"
                v-else-if="tableFields.name == 'Tron' || tableFields == 'Tron'"
              /><img
                src="../assets/img/usdt.png"
                alt=""
                width="20px"
                height="20px"
                v-else-if="tableFields.key == 'USDT' || tableFields == 'USDT'"
              />{{ tableFields.name || tableFields }}
            </div>
          </template>
          <template v-else-if="name == 'idClient' && tableBtn == 'clients'"
            ><button
              @click="openDetailsClients(tableFields)"
              v-miss="popupMiss"
              class="table-client__button"
            >
              Details
            </button></template
          >

          <template
            v-else-if="
              name !== 'idClient' &&
              name !== 'percent' &&
              name !== 'lifeTime' &&
              name !== 'totalAmount'
            "
          >
            <div class="table-client__box" ref="div">
              <p ref="fields">
                {{ tableFields }}
              </p>
              <img
                :class="{
                  visible:
                    (sizeInfo[index] > 80 && sizeInfo[index] < 125) ||
                    (sizeInfo[index] < 100 && sizeInfo[index] > 50),
                }"
                class="table-client__img"
                src="../assets/img/alert-circle-green.svg"
                alt=""
              />
            </div>
          </template>
        </td>
      </template>
      <template v-else-if="tableBtn == 'ranks'">
        <td class="rank-table">{{ tableBody.rank }}</td>
        <td class="rank-table">{{ tableBody.personal }} USDT</td>
        <td class="rank-table">{{ tableBody.amount }}</td>
        <td>
          <div
            class="teble-client__vertical-dots"
            @click="openMore(i, tableBody, tableBtn)"
            v-miss="popupMiss"
          >
            <img src="../assets/img/vertical-three-dots.svg" alt="" />
          </div>
          <Table-more
            v-if="visibleMore && i == indexMoreDots"
            v-miss="popupMiss"
            @openEdit="openEdit"
            @openEditPercents="openEditPercents"
            @openDelete="openDelete"
            :moreEdit="moreEdit"
            :indexMore="indexMore"
            :tableBtn="tableBtn"
          /></td
      ></template>

      <template v-else-if="tableBtn == 'award'">
        <td>
          {{ tableBody.rank }}
        </td>
        <td
          v-for="(tableFields, name, index) in tableBody.rewards"
          :key="index"
        >
          <div>
            <div class="table-client__box" v-if="name == 'BTC'">
              <img
                src="../assets/img/btc.svg"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.BTC }}</p>
            </div>
            <div class="table-client__box" v-if="name == 'ETH'">
              <img
                src="../assets/img/Ethereum Classic (ETH).svg"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.ETH }}</p>
            </div>
            <div class="table-client__box" v-if="name == 'LTC'">
              <img
                src="../assets/img/leticoin.png"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.LTC }}</p>
            </div>
            <div class="table-client__box" v-if="name == 'TRX'">
              <img
                src="../assets/img/tron.png"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.TRX }}</p>
            </div>
            <div class="table-client__box" v-if="name == 'WXN'">
              <img
                src="../assets/img/wxn.png"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.WXN }}</p>
            </div>
            <div class="table-client__box" v-if="name == 'USDT'">
              <img
                src="../assets/img/usdt.png"
                alt=""
                width="24px"
                height="24px"
              />
              <p>{{ tableBody.rewards.USDT }}</p>
            </div>
          </div>
        </td>
        <td>
          <div
            class="teble-client__vertical-dots"
            @click="openMore(i, tableBody, tableBtn)"
            v-miss="popupMiss"
          >
            <img src="../assets/img/vertical-three-dots.svg" alt="" />
          </div>
          <Table-more
            v-if="visibleMore && i == indexMoreDots"
            v-miss="popupMiss"
            @openEdit="openEdit"
            @openDelete="openDelete"
            :moreEdit="moreEdit"
            :indexMore="indexMore"
            :tableBtn="tableBtn"
          />
        </td>
      </template>
      <td v-if="tableBtn == 'withdrawarls'">
        <button
          v-if="
            tableBtn == 'withdrawarls' &&
            tableBody.status !== 'rejected' &&
            tableBody.status !== 'confirmed'
          "
          class="withdrawarls-rejected"
          @click="openReject(tableBody)"
        >
          Rejected
        </button>
      </td>
      <td v-if="tableBtn == 'withdrawarls'">
        <button
          v-if="
            tableBtn == 'withdrawarls' &&
            tableBody.status !== 'rejected' &&
            tableBody.status !== 'confirmed'
          "
          class="withdrawarls-confirm"
          @click="openConfirm(tableBody)"
        >
          Confirm
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
  import CountryFlag from 'vue-country-flag';
  import InfoCountrys from './InfoCountrys.vue';
  import { mapActions } from 'vuex';
  import TableMore from './TableMore.vue';
  export default {
    components: { CountryFlag, InfoCountrys, TableMore },
    props: {
      reducedTable: { type: Array },
      filterItems: Array,
      tableBtn: String,
    },
    data() {
      return {
        tableItem: [],
        visibleCountry: false,
        sizeInfo: [],
        sizeDiv: [],
        visibleMore: false,
        indexMore: -1,
        indexMoreDots: -1,
        moreEdit: {},
      };
    },

    methods: {
      ...mapActions({
        get_clientDetails: 'clientsDetails/getClientDetails',
      }),
      resizeInfo() {
        this.sizeInfo = [];
        this.sizeDiv = [];
        this.$refs.fields.forEach((item) => {
          this.sizeInfo.push(item.clientWidth);
        });
        this.$refs.div.forEach((item) => {
          this.sizeDiv.push(item.clientWidth);
        });
      },
      openCountry() {
        this.visibleCountry = !this.visibleCountry;
      },
      popupMiss() {
        this.visibleCountry = false;
        this.visibleMore = false;
      },
      openDetailsClients(tableFields) {
        this.$emit('openDetailsClients');
        let callDetails = { clientId: tableFields };
        this.get_clientDetails(callDetails);
      },
      openMore(i, tableBody, tableBtn) {
        this.visibleMore = true;
        this.indexMore = tableBody.idClient;
        this.indexMoreDots = i;
        if (tableBtn == 'ranks') {
          this.moreEdit = {
            id: tableBody.idClient,
            name: tableBody.rank,
            personal: tableBody.personal,
            amount: tableBody.amount,
            percent: tableBody.percents,
            level: tableBody.level,
          };
        }
        if (tableBtn == 'award') {
          this.moreEdit = {
            id: tableBody.id,
            BTC: tableBody.rewards.BTC,
            ETH: tableBody.rewards.ETH,
            LTC: tableBody.rewards.LTC,
            TRX: tableBody.rewards.TRX,
            WXN: tableBody.rewards.WXN,
            USDT: tableBody.rewards.USDT,
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
        this.visibleMore = false;
      },
      openEditPercents(moreEdit, indexMore) {
        this.$emit('openEditPercents', moreEdit, indexMore);
      },
      openDelete(indexMore) {
        this.$emit('openDelete', indexMore);
        this.visibleMore = false;
      },
      openReject(tableBody) {
        let withdrawarlsData = { id: tableBody.id, status: 'rejected' };
        this.$emit('openReject', withdrawarlsData);
      },
      openConfirm(tableBody) {
        let withdrawarlsData = { id: tableBody.id, status: 'confirmed' };
        this.$emit('openConfirm', withdrawarlsData);
      },
    },
    created() {
      window.addEventListener('resize', this.resizeInfo);
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
  .withdrawarls {
    &-rejected {
      max-width: 80px;
      width: 100%;
      height: 28px;
      background: none;
      border-radius: 6px;
      border: 1px solid #e95743;
      color: #e95743;
      font-size: 14px;
      line-height: 140%;
      cursor: pointer;
    }
    &-confirm {
      max-width: 80px;
      width: 100%;
      height: 28px;
      background: #36a503;
      border-radius: 6px;
      border: 0;
      color: #fff;
      font-size: 14px;
      line-height: 140%;
      cursor: pointer;
    }
  }
  .table-client_text-size {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    box-shadow: -90px 0px 20px 0px rgb(0, 0, 0, 1);
  }
  .table-client__img {
    z-index: 1;
    display: none;
  }
  .table-client__box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 175px;

    & p {
      white-space: nowrap;
      overflow: hidden;
    }
    & img {
      margin-right: 8px;
    }
  }
  .table-client__colum {
    position: relative;
    font-size: 14px;
    line-height: 140%;
    border: 1px solid #202020;
    height: 64px;
    width: 100%;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
  }
  .table-client__colum td {
    box-sizing: border-box;
  }
  .table-client__colum td {
    border-bottom: 1px solid #202020;
    border-top: 1px solid #202020;
  }
  .table-client__colum td:first-child {
    border-left: 1px solid #202020;
    border-radius: 12px 0 0 12px;
    padding: 0 24px;
  }
  .table-client__colum td:last-child {
    border-right: 1px solid #202020;
    border-radius: 0 12px 12px 0;

    padding: 0 24px 0 0;
  }
  .table-client__colum-tag {
    max-width: 28px;
    height: 28px;
    border-radius: 6px;
    width: 100%;
  }
  .teble-client__vertical-dots {
    text-align: right;
    position: relative;
    cursor: pointer;
  }
  .table-client__button {
    max-width: 70px;
    width: 100%;
    height: 28px;
    background: #36a503;
    border-radius: 6px;
    border: 0;
    color: #fff;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;
  }
  .info-country__btn {
    position: relative;
  }
  .country-box,
  .country-box__item {
    display: flex;
    overflow: hidden;
  }
  .test {
    overflow: hidden;
  }
  .visible {
    display: block;
  }
  .coin-name {
    display: flex;
    align-items: center;
    & img {
      margin-left: -10px;
      margin-right: 5px;
    }
  }
  td {
    align-items: center;
    color: #fff;
  }

  .not-found {
    position: absolute;
    color: #b2b2b2;
    font-size: 40px;
    top: 200%;
    left: 48%;
    transform: translate(-50%, -50%);
  }
</style>
