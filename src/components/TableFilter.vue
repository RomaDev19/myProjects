<template>
  <thead>
    <tr>
      <th
        v-for="(filterItem, index) in filterItems"
        :key="filterItem.filter"
        class="table-filter"
        @click="
          sortValue = null;
          open(index);
        "
        v-miss="popupMiss"
      >
        <div class="table-filter__box">
          <div
            class="edit-filter"
            v-if="filterItem.filter == 'Geo'"
            v-miss="popupMiss"
          >
            <img
              src="../assets/img/edit-filter.svg"
              alt=""
              class="edit-filter__img"
              @click="openEditFilters(index)"
              :class="{
                'edit-filter__img-visible': editCountry.length !== 0,
              }"
            />
            <edit-filtersPopup
              v-if="
                editFilters &&
                editFiltersIndex == index &&
                editCountry.length !== 0
              "
              :editFilterItems="editCountry"
              :filterItem="filterItem.filter"
              v-miss="popupMiss"
            />
          </div>
          <div class="edit-filter" v-if="filterItem.filter == 'Tag'">
            <img
              src="../assets/img/edit-filter.svg"
              alt=""
              class="edit-filter__img"
              @click="openEditFilters(index)"
              :class="{
                'edit-filter__img-visible': editTag.length !== 0,
              }"
              v-miss="popupMiss"
            />
            <edit-filtersPopup
              v-if="
                editFilters && editFiltersIndex == index && editTag.length !== 0
              "
              :editFilterItems="editTag"
              v-miss="popupMiss"
            />
          </div>
          <p>{{ filterItem.filter }}</p>
          <img
            v-if="filterItem.isFilter"
            src="../assets/img/Vector.svg"
            alt=""
            :class="{
              'drop-arrow__img':
                visiblePopap && openPopap == index && filterItem.isFilter,
            }"
          />
          <table-filterPopup
            class="table-filter__popup"
            v-if="visiblePopap && filterItem.isFilter && openPopap == index"
            :filterItem="filterItem"
            v-miss="popupMiss"
            @sortBy="sortBy"
            @searchBy="searchBy"
          />
        </div>
      </th>
      <th
        v-if="tableBtn !== 'deposit' && tableBtn !== 'finance'"
        class="table-filter"
      ></th>

      <th v-if="tableBtn == 'withdrawarls'" class="table-filter"></th>
    </tr>
  </thead>
</template>

<script>
  import TableFilterPopup from './TableFilterPopup.vue';
  import EditFiltersPopup from './EditFilterPopup.vue';
  import { mapGetters } from 'vuex';
  export default {
    components: {
      TableFilterPopup,
      EditFiltersPopup,
    },
    props: {
      filterItems: Array,
      tableBtn: String,
    },
    data() {
      return {
        openPopap: -1,
        visiblePopap: false,
        editFilters: false,
        editFiltersIndex: -1,
      };
    },
    methods: {
      popupMiss() {
        this.visiblePopap = false;
        this.editFilters = false;
      },
      open(index) {
        this.openPopap = index;
        this.visiblePopap = !this.visiblePopap;
        this.editFilters = false;
      },
      searchBy(item, searchValue) {
        this.$emit('searchBy', item, searchValue);
      },
      sortBy(item, sortBy) {
        this.$emit('sortBy', item, sortBy);
      },
      openEditFilters(index) {
        this.editFiltersIndex = index;
        this.editFilters = !this.editFilters;
        this.visiblePopap = false;
      },
    },
    computed: {
      ...mapGetters({
        editCountry: 'filter/countryFilters',
        editTag: 'filter/tagFilters',
      }),
    },
    directives: {
      miss: {
        bind(el, binding) {
          el.addEventListener('click', (e) => e.stopPropagation());
          document.body.addEventListener('click', binding.value);
        },
        unbind(el, binding) {
          document.body.removeEventListener('click', binding.value);
        },
      },
    },
  };
</script>

<style lang="scss" scoped>
  thead {
    position: sticky;
    top: 0;
    background: #0f0f0f;
    z-index: 2;
  }
  .table-filter {
    padding: 16px 0;
    color: #b2b2b2;
    border-bottom: 1px solid #202020;
    box-sizing: border-box;
    position: relative;
    max-width: 90px;
    cursor: pointer;
    &:first-child {
      padding: 0 0 0 25px;
    }
    &:last-child {
      text-align: right;
    }
  }
  .table-filter__box {
    position: relative;
    display: flex;
    align-items: center;
  }

  .table-filter img {
    cursor: pointer;
  }
  .table-filter img {
    margin-left: 7px;
    margin-right: 7px;
  }

  .drop-arrow__img {
    transform: rotate(180deg);
  }
  .edit-filter {
    &__img {
      position: absolute;
      top: 20px;
      left: 30px;
      display: none;
      &-visible {
        display: block;
      }
    }
  }
  tr {
    width: 100%;
  }
  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: #d2d2d2;
    margin: none;
  }
  @media (max-width: 1200px) {
    p {
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      color: #d2d2d2;
      margin: none;
    }
  }
</style>
