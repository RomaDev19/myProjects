<template>
  <div class="table-filter__popup">
    <input
      v-if="filterItem.search"
      type="search"
      class="table-filter__popup-search"
      placeholder="Search"
      @change="searchBy(filterItem.keys)"
      v-model="searchValue"
    />
    <div class="table-filter__popup-text" v-if="filterItem.fromSort">
      <p @click="sortBy(filterItem.keys, 'ASC')">From A-Z</p>
      <p @click="sortBy(filterItem.keys, 'DESC')">From Z-A</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: null,
      };
    },
    props: {
      filterItem: { type: Object },
    },
    methods: {
      searchBy(item) {
        this.$emit('searchBy', item, this.searchValue);
      },
      sortBy(item, sortBy) {
        this.$emit('sortBy', item, sortBy);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .table-filter__popup {
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    max-width: 202px;
    text-align: center;
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    margin-top: 8px;
    margin-left: -16px;
    position: absolute;
    z-index: 1;
    top: 50px;

    &-search {
      background: #141414;
      border: 1px solid #1d1d1d;
      box-sizing: border-box;
      border-radius: 8px;
      max-width: 202px;
      width: 100%;
      height: 56px;
      color: #fff;
      font-size: 14px;

      &::placeholder {
        color: #808191;
        padding: 0 12px;
      }
    }
    &-text p {
      text-align: left;
      padding: 12px 0 12px 0;
      font-size: 14px;
      margin: 0;
    }
  }
</style>
