<template>
  <div class="editprofile__popup">
    <div class="editprofile__item" @click="editProfile()">
      <img
        src="../assets/img/EditProfile.svg"
        alt=""
        class="editprofile__item-img"
      />
      <p>Edit Profile</p>
    </div>
    <div class="editprofile__item">
      <img
        src="../assets/img/LogOut.svg"
        alt=""
        class="editprofile__item-img"
      />
      <p>Log out</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      editProfile() {
        this.$emit('editProfile');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .editprofile {
    &__popup {
      position: absolute;
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 12px;
      width: 218px;
      height: 110px;
      top: 70px;
      right: 0;
      z-index: 1;
    }
    &__item {
      display: flex;
      &-img {
        padding: 0 14px 0 18px;
      }
    }
  }
</style>
