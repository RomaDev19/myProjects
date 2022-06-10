<template>
  <div class="modal">
    <div class="modal-body">
      <div class="modal-header">
        <div class="dn-element"></div>
        <h1>Add new fakes</h1>
        <span class="close" @click="closeAddFakes()"
          ><img src="../assets/img/i-remove.svg" alt=""
        /></span>
        <div class="back-btn">
          <img src="../assets/img/eva_arrow-ios-back-fill.svg" alt="" />
        </div>
      </div>

      <div class="modal-sec">
        <div class="name-structure">
          <label for="name-structure">Name Structure</label>
          <input id="name-structure" type="text" placeholder="Structure 1" />
        </div>
        <div class="amount-usdt">
          <label for="amount-usdt">Amount USDT</label>
          <input id="amount-usdt" type="text" placeholder="1900" />
        </div>
        <div class="input-active">
          <label for="input-active">Active</label>
          <input id="input-active" type="text" placeholder="163" />
        </div>
        <div class="input-inactive">
          <label for="input-inactive">Inactive</label>
          <input id="input-inactive" type="text" placeholder="273" />
        </div>
        <div class="data-range">
          <label for="">Data range</label>
        </div>
      </div>
      <div class="modal-btn">
        <button>Add</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closeAddFakes() {
        this.$emit('closeAddFakes');
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
    z-index: 3;
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
  .modal-sec {
    display: flex;
    margin-top: 24px;
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
    height: 100%;
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
  }
  .info input::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    color: #808191;
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
  .modal input {
    background: #141414;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 16px;
    line-height: 24px;
  }

  /* Add new fakes */
  .modal-sec > div {
    width: 48%;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
  }
  .modal-sec {
    justify-content: space-between;
    flex-wrap: wrap;
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
    .modal-sec > div {
      width: 100%;
      margin-bottom: 16px;
    }
  }
</style>
