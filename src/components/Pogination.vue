<template>
  <div class="pagination__container">
    <div
      class="pagination__drop-box"
      v-miss="popupMiss"
      @click="popup = !popup"
    >
      <div class="pagination__drop-number">{{ perPage }}</div>
      <div class="pagination__drop-arrow">
        <img
          src="../assets/img/Next3.svg"
          alt=""
          width="20px"
          height="20px"
          :class="{ 'drop-arrow__img': popup }"
        />
      </div>
    </div>
    <div class="pagination-page">
      <pagination-page
        :perPage="perPage"
        :currectPages="currectPages"
        :pageData="pageData"
        @numberPage="numberPage"
      />
    </div>
    <div class="pagination__button"></div>
    <div class="pagination__button"></div>
    <pogination-popup
      v-if="popup"
      :poginationClients="poginationClients"
      @numberClient="numberClient"
      :popup="popup"
    />
  </div>
</template>

<script>
  import PoginationPopup from './PoginationPopup.vue';
  import PaginationPage from './PaginationPage.vue';
  export default {
    components: {
      PaginationPage,
      PoginationPopup,
      PaginationPage,
    },
    props: {
      perPage: Number,
      pageData: { type: [Array, Object] },
      currectPages: { type: [Array, Number] },
    },
    data() {
      return {
        popup: false,
        poginationClients: [
          { id: 1, number: 10 },
          { id: 2, number: 25 },
          { id: 3, number: 50 },
          { id: 4, number: 100 },
          { id: 5, number: 250 },
        ],
      };
    },
    methods: {
      popupMiss() {
        this.popup = false;
      },
      numberPage(item) {
        this.$emit('numberPage', item);
      },
      numberClient(numbers) {
        this.$emit('numberClient', numbers);
        console.log(numbers);
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
  };
</script>

<style lang="scss" scoped>
  .pagination {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 306px;
      width: 100%;
    }
    &-page {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
    }
    &__drop {
      &-box {
        display: flex;
        align-items: center;
        text-align: center;
        border: 1px solid #202020;
        border-radius: 12px 12px 0 0;
        position: relative;
        cursor: pointer;
      }
      &-number {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: #36a503;
        width: 40px;
        border-right: 1px solid #202020;
      }
      &-arrow {
        width: 40px;
        margin-top: 7px;
      }
    }
  }
  .drop-arrow__img {
    transform: rotate(180deg);
  }
</style>
