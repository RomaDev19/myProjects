<template>
  <div class="logo-box">
    <img src="../assets/img/logo_sidebar.png" alt="Logo Waxeen" />
  </div>
</template>
<style lang="scss" scoped>
  .logo-box {
    position: relative;
    overflow: hidden;
    justify-content: center;
    img {
      height: 200px;
      margin-top: -100px;
      transform: translate(0, 50%);
      -o-object-fit: cover;
      object-fit: cover;

      @media screen and (max-width: $desktop) {
        filter: brightness(200%);
        margin-top: 0;
        transform: translate(0);
        -o-object-fit: inherit;
        object-fit: inherit;
        width: 72px;
        height: 67px;
      }
      // @media screen and (max-width: $table) {
      //   height: 200px;
      //   margin-top: -100px;
      //   transform: translate(0, 50%);
      //   -o-object-fit: cover;
      //   object-fit: cover;
      //   width: 210px;
      // }
    }
  }
</style>
