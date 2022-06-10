<template>
  <div class="dashbord__item">
    <h3>{{ name }}</h3>
    <div class="d-flex">
      <img :src="require(`@/assets/img/${name}` + '_total.png')" :alt="name" />
      <div class="dashbord__item-count">{{ count }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .dashbord__item {
    position: relative;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    flex: 0 0 48%;
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 24px 24px 0 24px;
    margin-bottom: 24px;
    margin-right: 24px;
    &:nth-child(2n + 2) {
      margin-right: 0;
    }
    @media screen and (max-width: $desktop) {
      margin-right: 0;
      flex: 0 0 100%;
    }
    h3 {
      font-size: 18px;
      line-height: 28px;
      color: #ffffff;
      margin: 0 0 24px;
    }
    &-count {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      font-size: 48px;
      line-height: 58px;
      color: #36a503;
      padding-bottom: 12px;
    }
  }
</style>

<script>
  export default {
    name: 'dashbord-item',
    props: {
      name: String,
      count: Number,
      img: String,
    },
  };
</script>
