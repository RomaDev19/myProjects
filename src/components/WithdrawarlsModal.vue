<template>
  <div class="trunsfer-box">
    <div class="trunsfer-box__title">
      <h2>Confirmation</h2>
      <img
        src="../assets/img/i-remove.svg"
        alt=""
        @click="closeWithdrawalsModal()"
      />
    </div>
    <div class="trunsfer-box__body">
      <p>
        Are you sure you want to {{ withdrawarlsObj.status }} the withdrawal
      </p>
      <button
        class="trunsfer-box__body-button"
        :class="{ rejected: withdrawarlsObj.status == 'rejected' }"
        @click="editWith(), closeWithdrawalsModal()"
      >
        {{ withdrawarlsObj.status }}
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      withdrawarlsObj: Object,
    },
    methods: {
      ...mapActions({
        editWithdrawls: 'withdrawals/editWithdrawarls',
      }),
      closeWithdrawalsModal() {
        this.$emit('closeWithdrawalsModal');
      },
      editWith() {
        let withObj = {
          id: this.withdrawarlsObj.id,
          stat: {
            status: this.withdrawarlsObj.status,
          },
        };
        this.editWithdrawls(withObj);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .trunsfer-box {
    position: absolute;
    width: 384px;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 24px;
    top: 50%;
    left: 50%;
    transform: translate(-70%, -50%);
    z-index: 4;
    &__title {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #202020;

      & h2 {
        font-weight: 500;
        font-size: 18px;
        line-height: 40px;
        color: #ffffff;
      }
      & img {
        padding: 14px;
        border: 1px solid #202020;
        border-radius: 6px;
        margin-bottom: 16px;
        cursor: pointer;
      }
    }
    &__body {
      text-align: center;
      & p {
        font-weight: 300;
        font-size: 18px;
        line-height: 28px;
        color: #ffffff;
      }
      &-button {
        color: #fff;
        width: 100%;
        height: 40px;
        background: #36a503;
        border-radius: 12px;
        border: none;
        cursor: pointer;
      }
    }
  }
  .rejected {
    border: 1px solid #e95743;
    color: #e95743;
    background: none;
  }
</style>
