<template>
  <div class="modal-sec">
    <div class="no-history" v-if="operationsDateils == 0">No History</div>
    <div class="history" v-else>
      <div
        class="history__item"
        v-for="(operationsClient, index) in operationsDateils"
        :key="index"
      >
        <div class="history__currency">
          <img
            v-if="operationsClient.type == 'pool_invest'"
            src="../assets/img/invest.png"
            alt=""
          />
          <img
            v-if="
              operationsClient.type == 'pool_reinvest' ||
              operationsClient.type == 'case_reinvest'
            "
            src="../assets/img/reinvest.png"
            alt=""
          />
          <img
            v-if="operationsClient.type == 'deposit'"
            src="../assets/img/deposit-details.png"
            alt=""
          />
          <img
            v-else-if="operationsClient.type == 'case_invest'"
            src="../assets/img/case-invest.png"
            alt="123"
          />

          <div v-if="operationsClient.type == 'deposit'">Deposit</div>
          <div v-if="operationsClient.type == 'pool_witdrawal'">
            Pool Dividents
          </div>
          <div v-if="operationsClient.type == 'pool_reinvest'">
            Pool Reinvest
          </div>
          <div v-if="operationsClient.type == 'pool_invest'">Pool Invest</div>
          <div v-if="operationsClient.type == 'case_withdrawal'">
            Case Dividents
          </div>
          <div v-if="operationsClient.type == 'referal_payment'">
            Referal Earning
          </div>
          <div v-if="operationsClient.type == 'rank_reward'">Rank Reward</div>
          <div v-if="operationsClient.type == 'convertation'">Convertation</div>
          <div v-if="operationsClient.type == 'case_invest'">Case Invest</div>
          <div v-if="operationsClient.type == 'case_reinvest'">
            Case Reinvest
          </div>
        </div>
        <div class="history__date">
          <span>{{
            operationsClient.updated_at
              | moment('dddd, MMMM Do YYYY, h:mm:ss a')
          }}</span>
        </div>
        <div class="history__sum">
          {{ operationsClient.amount }} {{ operationsClient.currency.key }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({ operationsDateils: 'clientsDetails/operationsData' }),
    },
  };
</script>

<style lang="scss" scoped>
  .no-history {
    position: absolute;
    top: 50%;
    left: 35%;
    text-align: center;
    font-size: 38px;
    color: #b9b9b9;
  }
  .history {
    max-height: 690px;
    height: 100%;
    overflow-y: auto;
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
