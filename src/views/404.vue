<template>
  <div class="pageNotFound">
    <img
      @click="goToMain"
      src="../assets/img/404.svg"
      alt="Click and go to the main page"
    />
  </div>
</template>
<script>
  export default {
    methods: {
      goToMain() {
        this.$router.replace({
          name: 'Dashboard',
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .pageNotFound {
    display: flex;
    background: $mainGradient;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    img {
      max-width: 100%;
      height: auto;
      cursor: pointer;
    }
  }
</style>
