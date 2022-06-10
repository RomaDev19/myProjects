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
      <h1>Case</h1>
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="template">
      <div class="pool-display h-el">
        <router-link to="/product/pool" class="pool-btn-2"
          ><div>Pool</div></router-link
        >
        <router-link to="/product/case" class="pool-btn-2 selected"
          ><div>Case</div></router-link
        >
      </div>
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
        <div
          class="pool-mob-display"
          @click="openCreateCase()"
          v-miss="popupMiss"
        >
          <div class="create-case" style="margin-right: 0">Create сase</div>
        </div>
        <Create-case
          v-if="visibleCreateCase"
          @closeCreateCase="closeCreateCase"
          v-miss="popupMiss"
        />
      </div>
      <div class="title-template mt24">
        <div class="btn-blck">
          <div class="switch-cal">
            <div
              class="create-case"
              @click="openCreateCase()"
              v-miss="popupMiss"
            >
              Create case
            </div>
          </div>
          <Create-case
            v-if="visibleCreateCase"
            @closeCreateCase="closeCreateCase"
            v-miss="popupMiss"
          />
        </div>
      </div>
      <div class="case">
        <Clients-table
          :totalItem="totalItem"
          :reducedTable="reducedTable"
          :filterItems="filterItems"
          :tableBtn="tableBtn"
          @openEdit="openEdit"
          @openDelete="openDelete"
          @sortBy="sortBy"
          @searchBy="searchBy"
        />
      </div>
      <EditCase
        v-if="visibleEditCase"
        @closeEditCase="closeEditCase"
        :moreData="moreData"
        :moreId="moreId"
      />
    </div>
    <Delete
      @closeDelete="closeDelete"
      @deletes="deletes"
      v-if="visibleDelete"
      v-miss="popupMiss"
    />
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';
  import ClientsTable from '../components/ClientsTable.vue';
  import EditProfilePopup from '../components/EditProfilePopup.vue';
  import EditProfile from '../components/EditProfile.vue';
  import CreateCase from '../components/CreateCase.vue';
  import EditCase from '../components/EditCase.vue';
  import Delete from '../components/Delete.vue';

  export default {
    components: {
      ClientsTable,
      EditProfilePopup,
      EditProfile,
      CreateCase,
      EditCase,
      Delete,
    },
    data() {
      return {
        closePopup: false,
        callCases: {
          per_page: null,
          page: null,
          search_value: null,
          search_by: null,
          start: null,
          end: null,
          sort_direction: null,
          sort_by: null,
        },
        tableBtn: 'case',
        popupEditProfile: false,
        openEditProfile: false,
        visibleCreateCase: false,
        visibleEditCase: false,
        moreData: null,
        moreId: null,
        visibleDelete: false,
        deleteId: null,
      };
    },
    computed: {
      ...mapGetters({
        perPage: 'cases/item_page',
        currectPages: 'cases/page_links',
        pageData: 'cases/page_data',
        statePage: 'cases/pages',
        totalItem: 'cases/page_data',
        reducedTable: 'cases/sorted_table',
        filterItems: 'cases/client_sorted',
      }),
    },
    methods: {
      ...mapActions({
        getInfo: 'cases/gettingCases',
        pushPages: 'cases/pushPage',
        pushCount: 'cases/pushCount',
        deleteItem: 'cases/deleteCase',
        toggleMenu: 'toggleMenu',
      }),
      openCreateCase() {
        this.visibleCreateCase = true;
      },
      closeCreateCase() {
        this.visibleCreateCase = false;
      },
      closeEditProfile() {
        this.openEditProfile = false;
      },
      editProfile() {
        this.popupEditProfile = false;
        this.openEditProfile = true;
      },
      numberClient(number) {
        let callCases = { item_page: number, pages: this.statePage };
        this.pushCount(callCases);
      },
      numberPage(item) {
        let callCases = { item_page: this.perPage, pages: item };
        this.pushPages(callCases);
      },
      sortBy(item, sortBy) {
        let sort = { sort_by: item, sort_direction: sortBy };
        this.getInfo(sort);
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
        this.visibleCreateCase = false;
        this.visibleDelete = false;
      },
      openEdit(moreEdit, indexMore) {
        this.moreData = moreEdit;
        this.moreId = indexMore ;
        this.visibleEditCase = true;
      },
      closeEditCase() {
        this.visibleEditCase = false;
      },
      openDelete(indexMore) {
        this.deleteId = indexMore;
        this.visibleDelete = true;
      },
      closeDelete() {
        this.visibleDelete = false;
      },
      deletes() {
        this.visibleDelete = false;
        this.deleteItem(this.deleteId);
      },
    },
    mounted() {
      this.getInfo(this.callCases);
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
  .pool-display {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .btn-blck {
    margin-left: auto;
  }
</style>
