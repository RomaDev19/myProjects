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
      <h1>Fake</h1>
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="template">
      <div class="pool-display mt24 h-el">
        <router-link to="/structure/real-client" class="pool-btn-2"
          ><div>Real Clients</div></router-link
        >
        <router-link to="/structure/fake" class="pool-btn-2 selected"
          ><div>Fake</div></router-link
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
        <div class="pool-mob-display">
          <div
            style="margin-right: 0"
            class="add-new-fakes"
            @click="visibleAddFakes = !visibleAddFakes"
            v-miss="popupMiss"
          >
            Add fake structure
          </div>
          <Add-fakes
            v-if="visibleAddFakes"
            v-miss="popupMiss"
            @closeAddFakes="closeAddFakes"
          />
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
        <div class="btn-blck">
          <div class="switch-cal">
            <div
              class="add-new-fakes"
              @click="visibleAddFakes = !visibleAddFakes"
              v-miss="popupMiss"
            >
              Add new fakes
            </div>
            <Add-fakes
              v-if="visibleAddFakes"
              v-miss="popupMiss"
              @closeAddFakes="closeAddFakes"
            />
            <Edit-fake v-if="visibleEditFake" @closeEdit="closeEdit" />
          </div>
        </div>
      </div>
      <div class="fake">
        <clients-table
          :totalItem="totalItem"
          :reducedTable="reducedTable"
          :filterItems="filterItems"
          @sortBy="sortBy"
          @searchBy="searchBy"
          :tableBtn="tableBtn"
          @openEdit="openEdit"
          @openDelete="openDelete"
        />
        <div v-if="pageData !== null" class="table-footer">
          <p>{{ pageData.to }} of {{ pageData.total }} items</p>
        </div>
      </div>
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
  import Pogination from '../components/Pogination.vue';
  import ClientsTable from '../components/ClientsTable.vue';
  import EditProfilePopup from '../components/EditProfilePopup.vue';
  import EditProfile from '../components/EditProfile.vue';
  import AddFakes from '../components/AddFakes.vue';
  import { mapGetters, mapActions } from 'vuex';
  import EditFake from '../components/EditFake.vue';
  import Delete from '../components/Delete.vue';
  export default {
    components: {
      Pogination,
      ClientsTable,
      EditProfilePopup,
      EditProfile,
      AddFakes,
      EditFake,
      Delete,
    },
    data() {
      return {
        closePopup: false,
        fakePage: {
          per_page: null,
          page: null,
          search_value: null,
          search_by: null,
          start: null,
          end: null,
          sort_direction: null,
          sort_by: null,is_fake:0
        },
        callFilters: {
          item_page: 'fake',
        },
        tableBtn: 'fake',
        popupEditProfile: false,
        openEditProfile: false,
        visibleAddFakes: false,
        visibleEditFake: false,
        moreData: null,
        moreId: null,
        visibleDelete: false,
        deleteId: null,
      };
    },
    computed: {
      ...mapGetters({
        perPage: 'fake/item_page',
        currectPages: 'fake/page_links',
        pageData: 'fake/page_data',
        statePage: 'fake/pages',
        totalItem: 'fake/page_data',
        reducedTable: 'fake/sorted_table',
        filterItems: 'fake/client_sorted',
      }),
    },
    methods: {
      ...mapActions({
        getInfo: 'fake/gettingFake',
        pushPages: 'fake/pushPage',
        pushCount: 'fake/pushCount',
        deleteItem: 'fake/deleteFake',
        toggleMenu: 'toggleMenu',
      }),
      closeAddFakes() {
        this.visibleAddFakes = false;
      },
      closeEditProfile() {
        this.openEditProfile = false;
      },
      editProfile() {
        this.popupEditProfile = false;
        this.openEditProfile = true;
      },
      numberClient(number) {
        let fakePage = { item_page: number, pages: this.statePage };
        this.pushCount(fakePage);
      },
      numberPage(item) {
        let fakePage = { item_page: this.perPage, pages: item };
        this.pushPages(fakePage);
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
        this.visibleAddFakes = false;
        this.closePopup = false;
        this.popupEditProfile = false;
        this.openEditProfile = false;
        this.visibleDelete = false;
      },
      openEdit() {
        this.visibleEditFake = true;
      },
      closeEdit() {
        this.visibleEditFake = false;
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
      this.getInfo(this.fakePage);
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
