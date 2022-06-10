<template>
  <div class="modal">
    <!-- Modal content -->
    <div class="modal-body">
      <div class="modal-header">
        <div class="dn-element"></div>
        <h1>
          <span>Transfer</span>
        </h1>
        <span class="close" @click="closeTrunfer()"
          ><img src="../assets/img/i-remove.svg" alt=""
        /></span>
        <div class="back-btn">
          <img src="../assets/img/eva_arrow-ios-back-fill.svg" alt="" />
        </div>
      </div>

      <div class="modal-sec">
        <div class="info">
          <input
            class="transfer-btn-2"
            type="text"
            placeholder="Who you wont to replace (ID)"
            v-model="client"
            @change="filterClient()"
          />
        </div>
      </div>
      <div
        class="table-mobile__box"
        v-for="(tableBody, index) in clientTransfer"
        :key="index"
        ref="box"
      >
        <div class="table-mobile__box-title">
          <h2 class="title__full-name">{{ tableBody.full_name }}</h2>

          <div>
            <button
              class="table-client__button"
              @click="openTrunsferModal(tableBody)"
            >
              Transfer
            </button>
          </div>
        </div>
        <div
          :class="{
            'table-mobile__box-position': true,
          }"
        >
          <div class="table-mobile__box-body">
            <div class="body__item">
              <p>Structure id:</p>
              <h4>{{ tableBody.structure_id }}</h4>
            </div>
            <div class="body__item">
              <p>Rank:</p>
              <h4 v-if="tableBody.rank !== null">{{ tableBody.rank.name }}</h4>
              <h4 v-else>No rank</h4>
            </div>
            <div class="body__item">
              <p>Email:</p>
              <h4>{{ tableBody.email }}</h4>
            </div>
            <div class="body__item">
              <p>Geo:</p>
              <Country-flag :country="tableBody.country.code" size="normal" />
            </div>
            <div class="body__item">
              <p>Register date:</p>
              <h4>{{ new Date(tableBody.created_at).toLocaleDateString() }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CountryFlag from 'vue-country-flag';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      CountryFlag,
    },
    data() {
      return {
        client: '',
        clientTransfer: [],
      };
    },
    methods: {
      closeTrunfer() {
        this.$emit('closeTrunfer');
      },
      filterClient() {
        this.realClient.forEach((item) => {
          if (this.client == item.id) {
            this.clientTransfer = [];
            this.clientTransfer.push(item);
          }
        });
      },
      openTrunsferModal(tableBody) {
        this.$emit('openTrunsferModal', tableBody);
      },
    },
    computed: {
      ...mapGetters({
        realClient: 'clients/clientsData',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .modal {
    visibility: visible;
    opacity: 1;
    z-index: 3;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    width: 628px;
    height: 100%;
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
  .modal .modal-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #202020;
  }
  .modal-header span {
    color: #36a503;
    margin-right: 6px;
  }

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
  .modal h1 {
    display: flex;
    align-items: center;
    margin: 0;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;
    color: #fff;
  }

  .dn-element {
    display: none;
  }
  .modal-btn button {
    padding: 12px 64px;
    line-height: 16px;
  }
  .modal-btn {
    height: 76vh;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .info__number {
    visibility: hidden;
  }

  button {
    border: 0;
    border-radius: 12px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #ffffff;
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    background: #34a608;
    cursor: pointer;
  }

  .info input {
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;

    width: 100%;
    color: #fff;
    line-height: 24px;
  }
  .info input::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    color: #808191;
  }

  @media (max-width: 768px) {
    /* MODAL */
    .modal-body {
      width: 100%;
    }
  }
  @media (max-width: 425px) {
    /* MODAL */

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
    .modal .modal-header {
      border-bottom: none;
      padding-bottom: 0;
      flex-direction: row-reverse;
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
    .modal-btn button {
      width: 100%;
    }

    .close {
      display: none;
    }
    .back-btn {
      display: flex;
      width: 40px;
    }

    .modal-header span {
      display: none;
    }
  }
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
      background: #141414;
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 12px;
      padding: 16px;
      margin: 16px 0 16px 0;
      &-title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #202020;
        align-items: center;

        h2 {
          margin-bottom: 16px;
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
        }
        button {
          margin-bottom: 16px;
          padding: 2px 12px;
          font-size: 14px;
          background: #36a503;
          border-radius: 6px;
          color: #fff;
          border: none;
        }
      }
      &-body {
        display: flex;
        justify-content: space-between;
        margin: 16px 0 0 0;
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
