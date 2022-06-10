<template>
  <div>
    <div v-if="inputValue == 'countries'" class="drop-box">
      <div
        class="drop-box__items"
        v-for="(inputCountry, indexCountry) in clientsFilter.countries"
        :key="indexCountry"
      >
        <input
          type="checkbox"
          :id="indexCountry"
          :value="inputCountry"
          v-model="countryData"
          name="countryInput"
          class="drop-box__items-checkbox"
          @change="pushCountryData(countryData)"
        />
        <label class="drop-box__items-text" :for="indexCountry">{{
          inputCountry.name
        }}</label>
      </div>
    </div>
    <div v-if="inputValue == 'labels'" class="drop-box">
      <div
        class="drop-box__items"
        v-for="(inputTag, indexTag) in clientsFilter.labels"
        :key="indexTag"
      >
        <input
          type="checkbox"
          :id="indexTag"
          :value="inputTag"
          v-model="tagData"
          name="tagInput"
          class="drop-box__items-checkbox"
          @change="pushTagData(tagData)"
        />
        <label :for="indexTag" class="drop-box__items-text">
          <div
            class="table-client__colum-tag"
            :style="{ background: inputTag.color }"
          ></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        valueCountry: [],
        valueTag: [],
        tagData: [],
        countryData: [],
      };
    },
    props: {
      resetPopup: { type: Boolean },
      inputValue: { type: String },
      clientsFilter: { type: Object },
    },
    methods: {
      ...mapActions({
        getCountry: 'filter/pushCountry',
        getTag: 'filter/pushTag',
      }),
      pushCountryData(countryData) {
        this.$emit('pushCountryData', countryData);
      },
      pushTagData(tagData) {
        this.$emit('pushTagData', tagData);
      },
    },
    computed: {
      ...mapGetters({
        countryFilter: 'filter/countryFilters',
        tagFilter: 'filter/tagFilters',
      }),
    },
    mounted() {
      this.tagData = this.tagFilter;
      this.countryData = this.countryFilter;
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
  .drop-box__items-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .drop-box__items-checkbox + .drop-box__items-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    text-align: left;
    padding: 16px 5px 16px 16px;
    border-bottom: 1px solid #202020;
  }

  .drop-box__items-checkbox + .drop-box__items-text::after {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    background: #1b1b1b;
    border: 1px solid #202020;
    border-radius: 4px;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    border-radius: 2px;
  }

  .drop-box__items-checkbox:checked + .drop-box__items-text::after {
    background-size: 14px 18px;
    border: 1px solid #36a503;
    border-radius: 4px;
    background-image: url('../assets/img/checkbox_checked.svg');
  }

  .drop-box__items-checkbox:not(:disabled):not(:checked)
    + .drop-box__items-text:hover::after,
  .drop-box__items-checkbox:not(:disabled):checked
    + .drop-box__items-text:hover::after {
    cursor: pointer;
  }
</style>
