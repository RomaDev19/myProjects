<template>
  <div class="pool-box">
    <div
      v-for="(pools, index) in sortedPool"
      :key="index"
      class="pool-item"
      @click="pushPool(pools)"
    >
      {{ pools.full_name }}
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        sortedPool: 'pool/sorted_table',
      }),
    },
    methods: {
      ...mapActions({
        getPool: 'pool/gettingPool',
      }),
      pushPool(pools) {
        this.$emit('pushPool', pools);
      },
    },
    mounted() {
      let data = { statuses: [pending] };
      this.getPool(data);
    },
  };
</script>

<style lang="scss" scoped>
  .pool {
    &-box {
      position: absolute;
      background: #141414;
      border: 1px solid #1d1d1d;
      box-sizing: border-box;
      border-radius: 0 0 8px 8px;
      padding: 16px;
      max-width: 277px;
      width: 100%;
      margin-top: 83px;
    }
    &-item {
      font-weight: 400;
      font-size: 14px;
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #1d1d1d;
      line-height: 24px;
      cursor: pointer;
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }
</style>
