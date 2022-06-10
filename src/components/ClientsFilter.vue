<template>
  <div class="filter-popup" @click="visibleDrop = false">
    <div class="filter-popup__title">
      <h2>Filter</h2>
      <div class="filter-popup__title-img" @click="closeFilter()">
        <img
          class="img-close"
          src="../assets/img/clients-filter__popup-close.svg"
          alt=""
        />
      </div>
    </div>
    <div class="filter-popup__body">
      <div
        class="body-sorted"
        v-for="(sortedClient, index) in clientsFilter"
        :key="index"
      >
        <template v-if="index == 'countries'">
          <div class="body-sorted__text">Countries</div>
          <div
            class="body-sorted__filter"
            @click="dropDown(index)"
            v-miss="popupMiss"
          >
            <div class="body-sorted__filter-input">
              <p v-for="valueFilter in inputCountry" :key="valueFilter.id">
                {{ valueFilter.name }},
              </p>
            </div>
            <div class="body-sorted__filter-dropdown">
              <img src="../assets/img/dropdown-arrow.svg" alt="" />
            </div>
            <clients-filterInput
              v-if="indexDrop == index && visibleDrop"
              class="drop-box"
              v-miss="popupMiss"
              :inputValue="index"
              :clientsFilter="clientsFilter"
              :resetPopup="resetPopup"
              @pushCountryData="pushCountryData"
            />
          </div>
        </template>
        <template v-else-if="index == 'labels'">
          <div class="body-sorted__text">Tag</div>
          <div
            class="body-sorted__filter"
            @click="dropDown(index)"
            v-miss="popupMiss"
          >
            <div class="body-sorted__filter-input">
              <div v-for="valueTag in inputTag" :key="valueTag.id">
                <div
                  class="table-client__colum-tag"
                  :style="{ background: valueTag.color }"
                ></div>
              </div>
            </div>
            <div class="body-sorted__filter-dropdown">
              <img src="../assets/img/dropdown-arrow.svg" alt="" />
            </div>
            <clients-filterInput
              v-if="indexDrop == index && visibleDrop"
              class="drop-box"
              v-miss="popupMiss"
              :inputValue="index"
              :clientsFilter="clientsFilter"
              @pushTagData="pushTagData"
            /></div
        ></template>
      </div>
    </div>
    <div class="filter-popup__footer">
      <button class="footer-btn__reset" @click="reserFilter()">Reset</button>
      <button class="footer-btn__accept" @click="callFilter()">Accept</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import ClientsFilterInput from './ClientsFilterInput.vue';
  export default {
    components: {
      ClientsFilterInput,
    },
    data() {
      return {
        valueCountry: [],
        valueTag: [],
        indexDrop: -1,
        visibleDrop: false,
        resetPopup: true,
        callPage: {
          per_page: null,
          page: null,
          search_value: null,
          search_by: null,
          start: null,
          end: null,
          sort_direction: null,
          sort_by: null,
          country_ids: null,
          label_ids: null,
        },
        inputCountry: [],
        inputTag: [],
      };
    },
    methods: {
      ...mapActions({
        get_info: 'clients/gettingClients',
        pushCountry: 'filter/pushCountry',
        pushTags: 'filter/pushTag',
        reset: 'filter/resetFilters',
      }),
      closeFilter() {
        this.visibleDrop = false;
        this.$emit('closeFilter');
      },
      dropDown(index) {
        this.resetPopup = true;
        this.indexDrop = index;
        this.visibleDrop = !this.visibleDrop;
      },
      reserFilter() {
        this.inputCountry = [];
        this.inputTag = [];
        this.resetPopup = false;
        this.reset();
        this.get_info(this.callPage);
      },
      callFilter() {
        this.$emit('closeFilter');
        this.pushCountry(this.inputCountry);
        this.pushTags(this.inputTag);
        this.inputCountry.forEach((params) => {
          this.valueCountry.push(params.id);
        });
        this.inputTag.forEach((params) => {
          this.valueTag.push(params.id);
        });
        let filter = {
          country_ids: this.valueCountry,
          label_ids: this.valueTag,
        };
        this.get_info(filter);
      },
      pushCountryData(countryData) {
        this.inputCountry = countryData;
      },
      pushTagData(tagData) {
        this.inputTag = tagData;
      },
    },
    computed: {
      ...mapGetters({
        clientsFilter: 'filter/filtersTable',
        countryFilter: 'filter/countryFilters',
        tagFilter: 'filter/tagFilters',
      }),
      popupMiss() {
        this.visibleDrop = false;
      },
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
    mounted() {
      this.inputTag = this.tagFilter;
      this.inputCountry = this.countryFilter;
    },
  };
</script>

<style lang="scss" scoped>
  .table-client__colum-tag {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    margin: 16px;
  }
  .filter-popup {
    position: relative;
    cursor: initial;
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #202020;
      margin: 24px 24px 0 24px;
      padding: 0 0 16px 0;
      & h2 {
        font-size: 18px;
      }
      &-img {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border: 1px solid #202020;
        box-sizing: border-box;
        border-radius: 6px;
      }
    }
    &__body {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 16px;
    }
    &__footer {
      position: absolute;
      bottom: 24px;
      right: 24px;
    }
  }
  .body-sorted {
    &__text {
      text-align: left;
      font-size: 12px;
      line-height: 16px;
      color: #808191;
      padding: 16px 0;
    }
    &__filter {
      display: flex;
      align-items: center;
      position: relative;
      &-input {
        display: flex;
        background: #141414;
        border: 1px solid #1d1d1d;
        width: 232px;
        height: 56px;
        padding: 0;
        box-sizing: border-box;
        border-radius: 8px 0 0 8px;
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        & p {
          padding-left: 16px;
          color: #fff;
        }
      }
      &-dropdown {
        background: #141414;
        padding: 7px 19px;
        border: 1px solid #1d1d1d;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
      }
    }
  }
  .footer-btn {
    &__accept {
      padding: 12px 64px;
      background: #36a503;
      border-radius: 12px;
      border: none;
      color: #fff;
      font-size: 16px;
      line-height: 16px;
      margin-left: 24px;
    }
    &__reset {
      padding: 12px 64px;
      background: none;
      border-radius: 12px;
      border: 1px solid #e8252a;
      color: #e8252a;
      font-size: 16px;
      line-height: 16px;
      margin-left: 24px;
    }
  }
  .drop-box {
    position: absolute;
    background: #141414;
    border: 1px solid #1d1d1d;
    box-sizing: border-box;
    border-radius: 0 0 8px 8px;
    top: 50px;
    width: 282px;
    z-index: 1;
    overflow-y: auto;
    max-height: 656px;
  }
  .drop-box::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .img-close {
    margin-left: 12px;
  }
  @media (max-width: 900px) {
    .body-sorted__filter-dropdown {
      padding: 18px 19px;
    }
    .filter-popup__title-img {
      padding-top: 12px;
    }
    .img-close {
      margin-left: 12px;
    }
  }
</style>
