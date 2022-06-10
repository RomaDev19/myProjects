<template>
  <div class="delete">
    <div class="delete-header">
      <div class="delete-header__title"><h2>Confirm action</h2></div>
      <div class="delete-header__close" @click="closeDelete()">
        <img src="../assets/img/i-remove.svg" alt="" />
      </div>
    </div>
    <div class="delete-body">
      <p>
        Are you sure you want to delete it?<br />
        Deletion will be irrevocable.
      </p>
    </div>
    <div class="delete-footer">
      <button @click="deletes()">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closeDelete() {
        this.$emit('closeDelete');
      },
      deletes() {
        this.$emit('deletes');
      },
    },
  };
</script>

<style lang="scss" scoped>
  .delete {
    position: absolute;
    top: 50%;
    left: 25%;
    max-width: 385px;
    width: 100%;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 24px;
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #202020;
      padding-bottom: 16px;
      &__close {
        & > img {
          border: 1px solid #202020;
          box-sizing: border-box;
          border-radius: 6px;
          color: #fff;
          float: right;
          font-size: 28px;
          cursor: pointer;
          padding: 12px;
        }
      }
    }
    &-body {
      text-align: center;
      font-size: 14px;
      & > p {
        color: #a9a9a9;
      }
    }
    &-footer > button {
      margin-top: 32px;
      max-width: 336px;
      width: 100%;
      height: 40px;
      color: #fff;
      background: #d01e22;
      border: none;
      border-radius: 12px;
      cursor: pointer;
    }
  }
</style>
