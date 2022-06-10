<template>
  <div class="pool-method__box">
    <div
      v-for="coins in method"
      :key="coins.coin"
      class="pool-method__box-item"
      @click="pushMethod(coins)"
    >
      {{ coins.name }}
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        method: [
          { name: 'Bitcoin', coin: 'BTC', id: '1' },
          { name: 'Ethereum', coin: 'ETH', id: '2' },
          { name: 'Litecoin', coin: 'LTC', id: '3' },
          { name: 'Tron', coin: 'TRX', id: '4' },
        ],
      };
    },
    methods: {
      pushMethod(coins) {
        this.$emit('pushMethod', coins);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pool-method__box {
    border-radius: 0 0 12px 12px;
    position: absolute;
    max-width: 275px;
    border: 1px solid #1d1d1d;
    width: 100%;
    background: #141414;
    margin-top: 75px;
    &-item {
      padding: 16px;
      border-bottom: 1px solid #202020;
      &:last-child {
        border: none;
      }
    }
  }
</style>
