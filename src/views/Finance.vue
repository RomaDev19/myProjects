<template>
  <div class="mainnav w100">
    <div class="header">
      <div style="display: none" class="btn h-el">
        <img
          src="../assets/img/akar-icons_calendar.svg"
          width="20"
          height="20"
          alt=""
        />
      </div>
      <h1>Finance</h1>
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="template">
      <div class="sort-search">
        <div class="sort">
          Sort
          <a href="#"><img src="../assets/img/Vector.svg" alt="" /></a>
        </div>
        <div class="search">
          <a href="#"
            ><img src="../assets/img/akar-icons_search.svg" alt=""
          /></a>
        </div>
      </div>
      <div class="title-template">
        <pogination
          :perPage="perPage"
          :currectPages="currectPages"
          :pageData="pageData"
          @numberPage="numberPage"
          @numberClient="numberClient"
        />
        <!-- <div class="calendar-blck">
          <div class="switch-cal">
            <div class="btn">
              <img src="../assets/img/Next.svg" width="20" height="20" alt="" />
            </div>
            <div><span>4 September</span></div>
            <div class="btn">
              <img
                src="../assets/img/Next2.svg"
                width="20"
                height="20"
                alt=""
              />
            </div>
          </div>
          <div class="btn">
            <img
              src="../assets/img/akar-icons_calendar.svg"
              width="20"
              height="20"
              alt=""
            />
          </div>
        </div> -->
      </div>
      <div class="finance">
        <Clients-table
          :totalItem="totalItem"
          :reducedTable="reducedTable"
          :filterItems="filterItems"
          @sortBy="sortBy"
          @searchBy="searchBy"
          :tableBtn="tableBtn"
        />
        <div v-if="pageData !== null" class="table-footer">
          <p>{{ pageData.to }} of {{ pageData.total }} items</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Pogination from '../components/Pogination.vue';
  import ClientsTable from '../components/ClientsTable.vue';
  import Delete from '../components/Delete.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    components: {
      Pogination,
      ClientsTable,
      Delete,
    },
    data() {
      return {
        closePopup: false,
        financePage: {
          per_page: null,
          page: null,
          search_value: null,
          search_by: null,
          start: null,
          end: null,
          sort_direction: null,
          sort_by: null,
        },

        tableBtn: 'finance',
      };
    },
    computed: {
      ...mapGetters({
        perPage: 'finance/item_page',
        currectPages: 'finance/page_links',
        pageData: 'finance/page_data',
        statePage: 'finance/pages',
        totalItem: 'finance/page_data',
        reducedTable: 'finance/sorted_table',
        filterItems: 'finance/client_sorted',
      }),
    },
    methods: {
      ...mapActions({
        getInfo: 'finance/gettingFinance',
        pushPages: 'finance/pushPage',
        pushCount: 'finance/pushCount',
        toggleMenu: 'toggleMenu',
      }),

      numberClient(number) {
        let financePage = { item_page: number, pages: this.statePage };
        this.pushCount(financePage);
      },
      numberPage(item) {
        let financePage = { item_page: this.perPage, pages: item };
        this.pushPages(financePage);
      },
      sortBy(item, sortBy) {
        let sort = { sort_by: item, sort_direction: sortBy };
        this.getInfo(sort);
      },
      searchBy(item, searchValue) {
        let search = { search_by: item, search_value: searchValue };
        this.get_info(search);
      },
    },
    mounted() {
      this.getInfo(this.financePage);
    },
  };
</script>

<style>
  .table-footer {
    background: linear-gradient(
      103.5deg,
      rgba(0, 0, 0, 0.75) 7.5%,
      rgba(7, 10, 3, 0.75) 66.74%,
      rgba(0, 0, 0, 0.75) 112.06%
    );
    position: absolute;
    text-align: center;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
