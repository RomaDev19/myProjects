<template>
  <div class="info-country">
    <div v-for="(countsCountry, name, index) in geoLocation" :key="index">
      <div class="info-country__items">
        <country-flag
          :country="countsCountry.code"
          size="normal"
          v-if="countsCountry.code"
        />
        <div class="info-country__items-text">
          {{ countsCountry.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CountryFlag from 'vue-country-flag';
  export default {
    components: {
      CountryFlag,
    },
    props: {
      geoLocation: { type: Array | Object },
    },
  };
</script>

<style lang="scss" scoped>
  .info-country {
    position: absolute;
    z-index: 1;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    top: 144px;
    &__items {
      margin: 0 16px 0 16px;
      padding: 16px 16px 16px 0;
      border-bottom: 1px solid #202020;
      display: flex;
      align-items: center;
      &-text {
        padding: 10px 0 0 16px;
      }
      &:last-child {
        border: none;
      }
    }
  }
</style>
