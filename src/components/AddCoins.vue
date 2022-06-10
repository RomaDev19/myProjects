<template>
  <div class="modal">
    <div class="modal-body">
      <div class="modal-header">
        <div class="dn-element"></div>
        <h1>Add {{ coinsName }}</h1>
        <span class="close" @click="closeAddCoins()"
          ><img src="../assets/img/i-remove.svg" alt=""
        /></span>
        <div class="back-btn">
          <img src="../assets/img/eva_arrow-ios-back-fill.svg" alt="" />
        </div>
      </div>

      <div class="modal-sec">
        <div class="investition-method">
          <label for="investition-method">Method</label>
          <input
            id="investition-method"
            type="text"
            :placeholder="coinsName"
            disabled
          />
          <div class="currency-logo">
            <img
              v-if="coinsName == 'BTC'"
              src="../assets/img/btc.png"
              width="25"
              height="25"
              alt=""
            /><img
              v-if="coinsName == 'ETH'"
              src="../assets/img/Ethereum Classic (ETH).png"
              width="25"
              height="25"
              alt=""
            /><img
              v-if="coinsName == 'LTC'"
              src="../assets/img/leticoin.png"
              width="25"
              height="25"
              alt=""
            /><img
              v-if="coinsName == 'TRX'"
              src="../assets/img/tron.png"
              width="25"
              height="25"
              alt=""
            /><img
              v-if="coinsName == 'USDT'"
              src="../assets/img/usd-balance.svg"
              width="25"
              height="25"
              alt=""
            /><img
              v-if="coinsName == 'WXN'"
              src="../assets/img/wxn.png"
              width="25"
              height="25"
              alt=""
            />
          </div>
        </div>
        <div class="investition-amount">
          <label for="investition-amount">Amount</label>
          <input id="investition-amount" type="text" v-model="amount" />
        </div>
      </div>
      <div class="modal-btn">
        <button @click="pushCoin()">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import axios from 'axios';
  export default {
    props: {
      coins: Number,
      coinsName: String,
    },
    data() {
      return {
        amount: 0,
      };
    },

    methods: {
      ...mapActions({ amountValue: 'clientsDetails/pushCoins' }),
      closeAddCoins() {
        this.$emit('closeAddCoins');
      },
      async pushCoin() {
        let newCoins = { currency: this.coinsName, balance: +this.amount };
        this.amountValue(newCoins);

        this.$emit('closeAddCoins');
      },
    },
  };
</script>

<style scoped>
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
    z-index: 3;
  }
  .modal .modal-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #202020;
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
  .modal .investition-method {
    display: flex;
    flex-direction: column;
    margin-right: 24px;
    width: 100%;
  }
  .modal .investition-method input {
    padding-left: 48px;
  }
  .modal .investition-amount {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .modal .currency-logo {
    position: relative;
    bottom: 43px;
    margin-left: 16px;
    height: 0;
  }
  .modal label {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #808191;
    margin-bottom: 16px;
    cursor: pointer;
  }
  .modal-sec {
    display: flex;
  }
  .modal input {
    background: #141414;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    line-height: 24px;
    color: #fff;
  }
  .modal input::placeholder {
    font-style: normal;
    font-weight: normal;

    font-size: 14px;
    line-height: 24px;

    color: #ffffff;
  }
  .dn-element {
    display: none;
  }
  .modal-btn button {
    padding: 12px 64px;
    line-height: 16px;
  }
  .modal-btn {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
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
  .back-btn {
    display: none;
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
    .modal-sec {
      flex-direction: column;
    }
    .modal .investition-method {
      margin-right: 0;
      margin-bottom: 16px;
    }

    .close {
      display: none;
    }
    .back-btn {
      display: flex;
      width: 40px;
    }
  }
</style>
