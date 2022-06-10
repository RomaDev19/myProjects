<template>
  <div class="modal">
    <div class="modal-body">
      <div class="modal-header">
        <div class="dn-element"></div>
        <h1>Edit Percent</h1>
        <span class="close" @click="closeRankPercent()"
          ><img src="../assets/img/i-remove.svg" alt=""
        /></span>
        <div class="back-btn" @click="closeRankPercent()">
          <img src="../assets/img/eva_arrow-ios-back-fill.svg" alt="" />
        </div>
      </div>
      <template v-if="percent == 0"
        ><div class="no-percent">No Percent</div></template
      ><template v-else>
        <div class="modal-sec">
          <div class="info-tab">
            <div
              v-for="(percentInput, index) in percent"
              :key="index"
              class="present__percent"
            >
              <p>Level {{ percentInput.lvl }}:</p>
              <div>
                <input :id="index" type="text" v-model="percentInput.percent" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-btn">
          <button @click="editRankPercent(), closeRankPercent()">Save</button>
        </div></template
      >
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    props: {
      moreId: Number,
      moreData: Object,
    },
    data() {
      return { percent: null };
    },
    methods: {
      ...mapActions({
        percentEdit: 'settingRank/editPercent',
      }),
      closeRankPercent() {
        this.$emit('closeRankPercent');
      },
      editRankPercent() {
        if (this.percent.length !== 0) {
          let count = this.percent[0].id;
          let editPercent = {};
          this.percent.forEach(function (item) {
            editPercent[count] = {
              lvl: Number(item.lvl),
              percent: Number(item.percent),
            };
            count++;
          });

          let newPercent = {
            rank_id: this.moreId,
            percents: editPercent,
          };
          this.percentEdit(newPercent);
        }
      },
    },
    mounted() {
      this.percent = this.moreData.percent;
    },
  };
</script>

<style scoped>
  .no-percent {
    position: absolute;
    top: 50%;
    left: 30%;
    text-align: center;
    font-size: 38px;
    color: #b9b9b9;
  }
  .modal {
    visibility: visible;
    opacity: 1;
    z-index: 99;
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
    width: 520px;
    height: 100vh;
    overflow: auto;
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
  .modal-header__name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #202020;
  }
  .modal-header__tabs {
    padding: 24px 0;
    border-top: 1px solid #202020;
    border-bottom: 1px solid #202020;
    display: flex;
    justify-content: space-between;
  }

  .modal-header span {
    color: #36a503;
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
  .input__hidden {
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

  .edit-fake-info input {
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

  .modal-sec .data-range {
    width: 100%;
  }
  .modal-sec {
    justify-content: space-between;
    flex-wrap: wrap;
  }

  /* modalEditFake */

  .modal .modal-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #202020;
  }
  .modal .modal-tabs {
    border-bottom: 1px solid #202020;
  }
  .edit-fake-tabs {
    padding: 24px 0;

    display: flex;
  }
  .edit-fake-tabs .tab {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-right: 12px;
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

  .edit-fake-calendar {
    padding: 8px 0 24px;

    display: flex;
    overflow-x: scroll;
    width: 210%;
  }

  .edit-fake-calendar .tab {
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
  .edit-fake-tabs .info-tab {
    padding-top: 0;
    padding-bottom: 0;
    align-items: center;
  }
  .info-tab {
    display: block;
    width: 100%;
  }
  .input__img {
    display: flex;
    align-items: center;
    height: 56px;
    margin-left: 14px;
  }

  .input__down-vector {
    display: flex;
    align-items: center;
    height: 56px;
    border-left: 1px solid #202020;
    padding-left: 16px;
    margin-left: 225px;
    color: #fff;
  }

  .edit-fake-info .down-vector {
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
  .delete-btn {
    background: #d01e22;
    margin-right: 24px;
  }
  .tab-cal {
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
  .data-ranger {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */
    margin-top: 24px;

    /* State/Light */

    color: #808191;
  }
  .edit-fake-info {
    display: flex;
    justify-content: space-between;
  }

  .edit-fake__users-list {
    width: 100%;
  }
  .users-list__item {
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
  .users-list__item:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .users-list__item:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  .status-green {
    color: #36a503;
  }
  .status-red {
    color: #d01e22;
  }

  .present__percent {
    display: flex;
    justify-content: space-between;
  }
  .info__method input {
    padding-left: 48px;
  }
  .case__interval-fake > div {
    position: relative;
    height: 0;
    bottom: 57px;
    display: flex;
  }
  .pump__interval-fake > div {
    position: relative;
    height: 0;
    bottom: 57px;
    display: flex;
  }
  .pump__accessed {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #36a503;
  }
  .pump__accessed span {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  .pump__accessed img {
    margin: 0 12px;
    height: 24px;
  }

  .input__down-vector span {
    font-size: 14px;
    line-height: 24px;
    margin-right: 4px;
  }
  .pump__interval-fake .input__down-vector {
    margin-left: 190px;
  }

  .info-tab > div {
    flex-direction: inherit;
    width: 100%;
    margin-bottom: 24px;
  }
  .present__link {
    display: flex;
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    text-decoration: none;
    color: #36a503;
  }
  @media (max-width: 768px) {
    /* MODAL */
    .modal-body {
      width: 100%;
    }

    .input__down-vector {
      margin-left: 210px;
    }
    .pump__interval-fake .input__down-vector {
      margin-left: 170px;
    }
  }

  @media (max-width: 425px) {
    /* MODAL */
    .input__down-vector {
      margin-left: 340px;
    }
    .pump__interval-fake .input__down-vector {
      margin-left: 295px;
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
    .delete-btn {
      margin-right: 16px;
    }
    .edit-fake-tabs {
      display: none;
    }
    .modal-header__name {
      padding-bottom: 0;
      border-bottom: 0;
    }

    .info-tab > div {
      width: 100%;
      flex-direction: inherit;
      width: 100%;
      margin-bottom: 16px;
    }
    .input__hidden {
      display: none !important;
      /* da ia znayu tak nelzya */
    }
    .modal-btn {
      justify-content: center;
    }
  }
  @media (max-width: 375px) {
    .input__down-vector {
      margin-left: 280px;
    }
  }
</style>
