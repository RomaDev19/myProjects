<template>
  <div class="modal-sec">
    <div class="history">
      <h2>Pools:</h2>
      <template v-if="investsPools == 0"
        ><div class="no-pools">No Pools</div></template
      >
      <template v-else>
        <div
          class="history__item"
          v-for="pools in investsPools"
          :key="pools.id"
        >
          <div class="history__item-data">
            <p>Id:</p>
            <h4>{{ pools.id }}</h4>
          </div>
          <div class="history__item-data">
            <p>Pool id:</p>
            <h4>{{ pools.pool_id }}</h4>
          </div>
          <div class="history__item-data">
            <p>Amount:</p>
            <h4>{{ pools.amount }}</h4>
          </div>
          <div class="history__item-data">
            <p>Profit:</p>
            <h4>{{ pools.profit }}</h4>
          </div>
          <div class="history__item-data">
            <p>Status:</p>
            <h4>{{ pools.status }}</h4>
          </div>
          <div class="history__item-data">
            <p>Payments:</p>
            <h4>{{ pools.payments }}</h4>
          </div>
          <div class="history__item-data">
            <p>Create date:</p>
            <h4>
              <span>{{
                pools.created_at | moment('dddd, MMMM Do YYYY, h:mm:ss a')
              }}</span>
            </h4>
          </div>
          <div class="history__item-data">
            <p>Close date:</p>
            <h4>
              <span>{{
                pools.updated_at | moment('dddd, MMMM Do YYYY, h:mm:ss a')
              }}</span>
            </h4>
          </div>
        </div></template
      >
      <h2>Cases:</h2>
      <template v-if="investsCases == 0"
        ><div class="no-pools">No Cases</div></template
      >
      <template v-else>
        <div
          class="history__item"
          v-for="cases in investsCases"
          :key="cases.id"
        >
          <div class="history__item-data">
            <p>Id:</p>
            <h4>{{ cases.id }}</h4>
          </div>
          <div class="history__item-data">
            <p>Box id:</p>
            <h4>{{ cases.box_id }}</h4>
          </div>
          <div class="history__item-data">
            <p>Amount:</p>
            <h4>{{ cases.amount }}</h4>
          </div>
          <div class="history__item-data">
            <p>Profit:</p>
            <h4>{{ cases.profit }}</h4>
          </div>
          <div class="history__item-data">
            <p>Status:</p>
            <h4>{{ cases.status }}</h4>
          </div>
          <div class="history__item-data">
            <p>Payments:</p>
            <h4>{{ cases.payments }}</h4>
          </div>
          <div class="history__item-data">
            <p>Create date:</p>
            <h4>
              <span>{{
                cases.created_at | moment('dddd, MMMM Do YYYY, h:mm:ss a')
              }}</span>
            </h4>
          </div>
          <div class="history__item-data">
            <p>Close date:</p>
            <h4>
              <span>{{
                cases.updated_at | moment('dddd, MMMM Do YYYY, h:mm:ss a')
              }}</span>
            </h4>
          </div>
        </div></template
      >
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        investsPools: 'clientsDetails/investsPools',
        investsCases: 'clientsDetails/investsCases',
      }),
    },
  };
</script>

<style lang="scss" scoped>
  .no-pools {
    margin-top: 50px;
    margin-left: 10px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 38px;
    color: #b9b9b9;
  }
  .history {
    max-height: 690px;
    height: 100%;
    overflow-y: auto;
    h2 {
      margin-bottom: 16px;
      font-weight: 600;
      font-size: 18px;
      position: relative;
    }
    &__item {
      flex-wrap: wrap;
      &-data {
        display: flex;
        align-items: center;
        & p {
          margin-right: 7px;
          font-weight: 500;
          font-size: 12px;
          color: #b2b2b2;
        }
        & h4 {
          font-weight: 400;
          font-size: 14px;
        }
      }
    }
    &__currency {
      align-items: center;
      max-width: 164px;
      width: 100%;
      & p {
        color: #9b9b9b;
        font-weight: 400;
        font-size: 14px;
        margin: 0;
      }
      & div {
        margin-right: 7px;
      }
    }
    &__sum {
      max-width: 104px;
      width: 100%;
      justify-content: end;
    }
  }
  .history::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
