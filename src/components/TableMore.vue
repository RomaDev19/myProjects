<template>
  <div class="more-box" :class="{ right_position: tableBtn !== 'ranks' }">
    <div class="more-box__item" @click="openEdit(moreEdit, indexMore)">
      <img src="../assets/img/edit-popup.svg" alt="" />
      <p class="more-box__item-edit">Edit</p>
    </div>
    <div
      class="more-box__item"
      @click="openEditPercents(moreEdit, indexMore)"
      v-if="tableBtn == 'ranks'"
    >
      <img src="../assets/img/edit-popup.svg" alt="" />
      <p class="more-box__item-edit">Edit Percent</p>
    </div>
    <div
      v-if="tableBtn !== 'award' && tableBtn !== 'ranks'"
      class="more-box__item"
      @click="openDelete(indexMore)"
    >
      <img src="../assets/img/delete-popup.svg" alt="" />
      <p class="more-box__item-delete">Delete</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      moreEdit: Object,
      indexMore: Number,
      tableBtn: String,
    },
    methods: {
      openEdit(moreEdit, indexMore) {
        this.$emit('openEdit', moreEdit, indexMore);
      },
      openEditPercents(moreEdit, indexMore) {
        this.$emit('openEditPercents', moreEdit, indexMore);
      },
      openDelete(indexMore) {
        this.$emit('openDelete', indexMore);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .right_position {
    right: 0;
  }
  .more-box {
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
    width: 137px;

    &__item {
      display: flex;
      padding: 0 0 0 12px;
      cursor: pointer;

      & p {
        margin-left: 10px;
      }
      &-delete {
        color: #f5282d;
      }
    }
  }
</style>
