<template>
  <div>
    <div class="no-trunsfer" v-if="infoData.upliner == null">No Transfer</div>
    <div class="structure" v-else>
      <h2 @click="pushDetails()" class="structure-invited">
        {{ infoData.upliner.fname }} {{ infoData.upliner.lname }}
      </h2>
    </div>
    <div
      class="account-action"
      style="width: 100%; flex-direction: inherit; position: relative"
    >
      <button class="account-action__go" @click="openTranfer(infoData)">
        Trunsfer
      </button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapGetters({ infoData: 'clientsDetails/infoData' }),
    },
    methods: {
      ...mapActions({ getDetails: 'clientsDetails/getClientDetails' }),
      pushDetails() {
        let callDetails = { clientId: this.infoData.upliner.id };
        this.getDetails(callDetails);
        this.$emit('refreshDatails');
      },
      openTranfer(infoData) {
        this.$emit('openTranfer', infoData);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .account-action {
    margin-top: 16px;
    text-align: center;
    padding: 16px 0 16px 0;
    width: 100%;
    background: none;
  }
  .no-trunsfer {
    position: absolute;
    top: 50%;
    left: 35%;
    text-align: center;
    font-size: 38px;
    color: #b9b9b9;
  }
  .structure {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    &-invited {
      color: #36a503;
    }
    & h2 {
      font-weight: 500;
      font-size: 36px;
      margin-top: 16px;
      cursor: pointer;
    }
  }
</style>
