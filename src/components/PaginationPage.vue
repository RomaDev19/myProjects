<template>
  <div class="pogination-page">
    <div class="pagination-page__container">
      <ul class="pagination">
        <li
          v-for="item in currectPages"
          :key="item.current_page"
          class="pagination__item"
        >
          <template v-if="currectPages.length">
            <a
              class="page-link"
              :class="{
                'page-link-current': item == pageData.current_page,
              }"
              href="#"
              @click="numberPage(item)"
              >{{ item }}</a
            >
          </template>
          <template v-else>
            <a class="page-link" href="#" @click="numberPage(item)">{{
              item
            }}</a>
          </template>
        </li>
        <li
          class="pagination__button pagination-prev"
          :class="{
            'pagination__button-disabled': prevPage,
          }"
          @click="numberPage(pageData.current_page - 1)"
        >
          <a class="pagination__link" href="#"
            ><img src="../assets/img/Next.svg" width="40" height="15" alt=""
          /></a>
        </li>
        <li
          class="pagination__button pagination-next"
          :class="{
            'pagination__button-disabled': nextPage,
          }"
          @click="numberPage(pageData.current_page + 1)"
        >
          <a class="pagination__link" href="#"
            ><img src="../assets/img/Next2.svg" width="40" height="15" alt=""
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },

    props: {
      perPage: { type: Number },
      pageData: { type: [Array, Object] },
      currectPages: { type: [Array, Number] },
    },
    computed: {
      prevPage(pageData) {
        return pageData.prev_page_url == null;
      },
      nextPage(pageData) {
        return pageData.next_page_url == null;
      },
    },
    methods: {
      numberPage(item) {
        this.$emit('numberPage', item);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .pagination-page {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
  }
  .pagination-page__container {
    display: flex;
    justify-content: space-between;
  }
  .page {
    &-link {
      color: #fff;
      &-current {
        color: #36a503;
      }
      &:hover {
        color: #36a503;
        transition: 0.5s;
      }
    }
  }
  .pagination {
    display: flex;
    padding-inline-start: 0;
    &-prev {
      border: 1px solid #202020;
      border-radius: 12px;
    }
    &-next {
      border: 1px solid #202020;
      border-radius: 12px;
    }
    li {
      margin: 10px;
      list-style: none;
    }
    a {
      width: 40px;
      height: 15px;
      text-decoration: none;
    }

    &__item {
      width: 24px;
      text-align: center;
    }
    &__button {
      &-disabled {
        pointer-events: none;
        opacity: 0.25;
      }
    }
  }
</style>
