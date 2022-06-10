<template>
  <div class="trunsfer-box">
    <div class="trunsfer-box__title">
      <h2>Confirmation</h2>
      <img
        src="../assets/img/i-remove.svg"
        alt=""
        @click="closeTrunsferModal()"
      />
    </div>
    <div class="trunsfer-box__body">
      <p>
        Are you sure you want to do a <br />
        Louch Marphin transfer?
      </p>
      <button @click="pushTrunsfer(), closeTrunsferModal(), closeTrunfer()">
        Transfer
      </button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      trunsferData: Object,
      upline_id: Number,
    },
    methods: {
      ...mapActions({
        trunsfer: 'clients/trunsfer',
      }),
      closeTrunsferModal() {
        this.$emit('closeTrunsferModal');
      },
      closeTrunfer() {
        this.$emit('closeTrunfer');
      },
      pushTrunsfer() {
        let trunsferId = {
          client_id: this.upline_id,
          upliner_id: this.trunsferData.idClient,
        };
        this.trunsfer(trunsferId);
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
      & button {
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
</style>
