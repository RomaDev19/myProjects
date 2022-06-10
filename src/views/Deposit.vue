<template>
  <div class="mainnav w100">
    <div class="header">
      <div class="btn-calendar">
        <img
          src="../assets/img/akar-icons_calendar.svg"
          width="20"
          height="20"
          alt=""
        />
      </div>
      <h1>Deposit</h1>
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
          <div class="btn-calendar">
            <img
              src="../assets/img/akar-icons_calendar.svg"
              width="20"
              height="20"
              alt=""
            />
          </div>
        </div> -->
      </div>
      <clients-table
        :totalItem="totalItem"
        :reducedTable="reducedTable"
        :filterItems="filterItems"
        :tableBtn="tableBtn"
        @sortBy="sortBy"
        @searchBy="searchBy"
      />
      <div class="table-footer">
        <p>{{ totalItem.to }} of {{ totalItem.total }} items</p>
      </div>
    </div>
  </div>
</template>
<script>
  import Pogination from '../components/Pogination.vue';
  import ClientsTable from '../components/ClientsTable.vue';
  import EditProfilePopup from '../components/EditProfilePopup.vue';
  import EditProfile from '../components/EditProfile.vue';
  import { mapGetters, mapActions } from 'vuex';

  export default {
    components: {
      Pogination,
      ClientsTable,
      EditProfilePopup,
      EditProfile,
    },
    data() {
      return {
        closePopup: false,
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
        popupEditProfile: false,
        openEditProfile: false,
        tableBtn: 'deposit',
      };
    },
    computed: {
      ...mapGetters({
        perPage: 'deposit/item_page',
        currectPages: 'deposit/page_links',
        pageData: 'deposit/page_data',
        statePage: 'deposit/pages',
        totalItem: 'deposit/page_data',
        reducedTable: 'deposit/sorted_table',
        filterItems: 'deposit/client_sorted',
      }),
    },
    methods: {
      ...mapActions({
        pushPages: 'deposit/pushPage',
        pushCount: 'deposit/pushCount',
        get_info: 'deposit/gettingClients',
        toggleMenu: 'toggleMenu',
      }),
      closeEditProfile() {
        this.openEditProfile = false;
      },
      editProfile() {
        this.popupEditProfile = false;
        this.openEditProfile = true;
      },
      numberClient(number) {
        let callPage = { item_page: number, pages: this.statePage };
        this.pushCount(callPage);
        this.get_info(callPage);
      },
      numberPage(item) {
        let callPage = { item_page: this.perPage, pages: item };
        this.pushPages(callPage);
        this.get_info(callPage);
      },
      sortBy(item, sortBy) {
        let sort = { sort_by: item, sort_direction: sortBy };
        this.get_info(sort);
      },
      searchBy(item, searchValue) {
        let search = { search_by: item, search_value: searchValue };
        this.get_info(search);
      },
      closeFilter() {
        this.closePopup = false;
      },
      popupMiss() {
        this.closePopup = false;
        this.popupEditProfile = false;
        this.openEditProfile = false;
      },
    },
    mounted() {
      this.get_info(this.callPage);
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
<style scoped>
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
