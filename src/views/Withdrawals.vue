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
      <h1>Withdrawals</h1>

      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="template">
      <div class="sort-search-2">
        <div>
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
      </div>
      <div class="title-template mt24">
        <Pogination
          :perPage="perPage"
          :currectPages="currectPages"
          :pageData="pageData"
          @numberPage="numberPage"
          @numberClient="numberClient"
        />
        <div class="calendar-blck"></div>
      </div>
      <div class="award">
        <Clients-table
          :reducedTable="reducedTable"
          :filterItems="filterItems"
          :tableBtn="tableBtn"
          @openReject="openReject"
          @openConfirm="openConfirm"
        />
      </div>
      <WithdrawarlsModal
        v-if="visibleWithdrawalsModal"
        @closeWithdrawalsModal="closeWithdrawalsModal"
        :withdrawarlsObj="withdrawarlsObj"
      />
    </div>
  </div>
</template>
<script>
  import ClientsTable from '../components/ClientsTable.vue';
  import Pogination from '../components/Pogination.vue';
  import WithdrawarlsModal from '../components/WithdrawarlsModal.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    components: {
      ClientsTable,
      Pogination,
      WithdrawarlsModal,
    },
    data() {
      return {
        tableBtn: 'withdrawarls',
        callPage: {
          per_page: 25,
          page: 1,
          search_value: null,
          search_by: null,
          start: null,
          end: null,
          sort_direction: null,
          sort_by: null,
        },
        withdrawarlsObj: null,
        visibleWithdrawalsModal: false,
      };
    },
    computed: {
      ...mapGetters({
        reducedTable: 'withdrawals/sorted_table',
        filterItems: 'withdrawals/client_sorted',
        perPage: 'withdrawals/item_page',
        currectPages: 'withdrawals/page_links',
        pageData: 'withdrawals/page_data',
        statePage: 'withdrawals/pages',
        totalItem: 'withdrawals/page_data',
      }),
    },
    methods: {
      ...mapActions({
        get_info: 'withdrawals/gettingWithdrawals',
        pushPages: 'withdrawals/pushPage',
        pushCount: 'withdrawals/pushCount',
        toggleMenu: 'toggleMenu',
      }),
      numberClient(number) {
        this.callPage = { item_page: number, pages: this.statePage };
        this.pushCount(this.callPage);
      },
      numberPage(item) {
        this.callPage = { item_page: this.perPage, pages: item };
        this.pushPages(this.callPage);
      },
      sortBy(item, sortBy) {
        let sort = { sort_by: item, sort_direction: sortBy };
        this.get_info(sort);
      },
      searchBy(item, searchValue) {
        let search = { search_by: item, search_value: searchValue };
        this.get_info(search);
      },
      openConfirm(withdrawarlsData) {
        this.withdrawarlsObj = withdrawarlsData;
        this.visibleWithdrawalsModal = true;
      },
      openReject(withdrawarlsData) {
        this.withdrawarlsObj = withdrawarlsData;
        this.visibleWithdrawalsModal = true;
      },
      closeWithdrawalsModal() {
        this.visibleWithdrawalsModal = false;
      },
    },
    mounted() {
      this.get_info(this.callPage);
    },
  };
</script>
