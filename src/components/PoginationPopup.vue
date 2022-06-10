<template>
  <div class="pogination__popup-box">
    <div
      class="pogination__popup-count"
      v-for="poginationClient in poginationClients"
      :key="poginationClient.id"
      @click="numberClient(poginationClient.number)"
    >
      {{ poginationClient.number }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      poginationClients: Array,
    },
    methods: {
      numberClient(numbers) {
        this.$emit('numberClient', numbers);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pogination__popup {
    &-box {
      position: absolute;
      top: 161px;
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
      z-index: 3;
      padding: 0 12px;
      border: 1px solid #202020;
      border-radius: 0 0 12px 12px;
      cursor: pointer;
    }
    &-count {
      border-bottom: 1px solid #202020;
      padding: 16px 0;
      width: 57px;
      &:last-child {
        border: none;
      }
    }
  }
</style>
