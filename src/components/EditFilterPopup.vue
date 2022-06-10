<template>
  <div class="edit-filter">
    <div
      class="edit-filter__items"
      v-for="(editItem, indexItem) in editFilterItems"
      :key="indexItem"
    >
      <div
        :class="{ 'tag-box': editItem.color }"
        :style="{ background: editItem.color }"
      ></div>
      {{ editItem.name }}
      <img
        src="../assets/img/remove-filters.svg"
        width="10"
        alt=""
        @click="deletFilter(indexItem)"
      />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        valueCountry: [],
        valueTag: [],
      };
    },
    props: {
      editFilterItems: { type: Array },
      filterItem: { type: String },
    },
    methods: {
      ...mapActions({
        pushCountry: 'filter/pushCountry',
        pushTag: 'filter/pushTag',
        get_info: 'clients/gettingClients',
      }),
      deletFilter(indexItem) {
        let newFilter = this.editFilterItems.filter((value, index) => {
          return index !== indexItem;
        });
        if (this.filterItem == 'Geo') {
          this.pushCountry(newFilter);
          newFilter.forEach((params) => {
            this.valueCountry.push(params.id);
          });
        } else {
          this.pushTag(newFilter);
          newFilter.forEach((params) => {
            this.valueTag.push(params.id);
          });
        }

        let filter = {
          country_ids: this.valueCountry,
          label_ids: this.valueTag,
        };
        this.get_info(filter);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .edit-filter {
    position: absolute;
    width: 158px;
    max-height: 252px;
    top: 50px;
    left: -30px;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    box-sizing: border-box;
    border-radius: 12px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    &__items {
      display: flex;
      justify-content: space-between;
      margin: 16px 16px 0 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #202020;
      color: #fff;
      text-align: center;
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .tag-box {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    margin: 16px;
  }
</style>
