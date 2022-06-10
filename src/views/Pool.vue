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
      <h1>Pool</h1>
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="template">
      <div class="pool-display mt24 h-el">
        <router-link to="/product/pool" class="pool-btn-2 selected"
          ><div>Pool</div></router-link
        >
        <router-link to="/product/case" class="pool-btn-2"
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
        <div class="pool-mob-display">
          <div
            class="create-pump"
            style="margin-right: 16px !important"
            @click="visiblePump = true"
          >
            Pump
          </div>
          <Pump v-if="visiblePump" @closePump="closePump" v-miss="popupMiss" />
          <div
            class="create-pool"
            @click="visibleCreatePool = true"
            v-miss="popupMiss"
          >
            Create pool
          </div>
          <Create-pool
            v-if="visibleCreatePool"
            @closeCreatePool="closeCreatePool"
            v-miss="popupMiss"
          />
        </div>
      </div>
      <div class="title-template mt24">
        <div class="calendar-blck">
          <pogination
            :perPage="perPage"
            :currectPages="currectPages"
            :pageData="pageData"
            @numberPage="numberPage"
            @numberClient="numberClient"
          />
        </div>
        <div class="btn-blck">
          <div class="switch-cal">
            <div
              class="create-pump"
              style="margin-right: 16px !important"
              @click="visiblePump = true"
              v-miss="popupMiss"
            >
              Pump
            </div>
            <Pump
              v-if="visiblePump"
              @closePump="closePump"
              v-miss="popupMiss"
            />
            <div
              class="create-pool"
              @click="visibleCreatePool = true"
              v-miss="popupMiss"
            >
              Create pool
            </div>
            <Create-pool
              v-if="visibleCreatePool"
              @closeCreatePool="closeCreatePool"
              v-miss="popupMiss"
            />
          </div>
        </div>
      </div>
      <div class="pool">
        <clients-table
          :totalItem="totalItem"
          :reducedTable="reducedTable"
          :filterItems="filterItems"
          :tableBtn="tableBtn"
          @openEdit="openEdit"
          @openDelete="openDelete"
          @sortBy="sortBy"
          @searchBy="searchBy"
        />
        <EditPool
          v-if="visibleEditPool"
          @closeEditPool="closeEditPool"
          :moreData="moreData"
          :moreId="moreId"
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
  import { mapActions, mapGetters } from 'vuex';
  import Pogination from '../components/Pogination.vue';
  import ClientsTable from '../components/ClientsTable.vue';
  import EditProfilePopup from '../components/EditProfilePopup.vue';
  import EditProfile from '../components/EditProfile.vue';
  import CreatePool from '../components/CreatePool.vue';
  import Pump from '../components/Pump.vue';
  import EditPool from '../components/EditPool.vue';
  import Delete from '../components/Delete.vue';
  export default {
    components: {
      Pogination,
      ClientsTable,
      EditProfilePopup,
      EditProfile,
      CreatePool,
      Pump,
      EditPool,
      Delete,
    },
    data() {
      return {
        closePopup: false,
        callPool: {
          per_page: null,
          page: null,
          search_value: null,
          search_by: null,
          start: null,
          end: null,
          sort_direction: null,
          sort_by: null,
        },
        tableBtn: 'pool',
        popupEditProfile: false,
        openEditProfile: false,
        visibleCreatePool: false,
        visiblePump: false,
        visibleEditPool: false,
        moreData: null,
        moreId: null,
        visibleDelete: false,
        deleteId: null,
      };
    },
    computed: {
      ...mapGetters({
        perPage: 'pool/item_page',
        currectPages: 'pool/page_links',
        pageData: 'pool/page_data',
        statePage: 'pool/pages',
        totalItem: 'pool/page_data',
        reducedTable: 'pool/sorted_table',
        filterItems: 'pool/client_sorted',
      }),
    },
    methods: {
      ...mapActions({
        getInfo: 'pool/gettingPool',
        pushPages: 'pool/pushPage',
        pushCount: 'pool/pushCount',
        deleteItem: 'pool/deletePool',
        toggleMenu: 'toggleMenu',
      }),
      closePump() {
        this.visiblePump = false;
      },
      closeCreatePool() {
        this.visibleCreatePool = false;
      },
      closeEditPool() {
        this.visibleEditPool = false;
      },
      closeEditProfile() {
        this.openEditProfile = false;
      },
      editProfile() {
        this.popupEditProfile = false;
        this.openEditProfile = true;
      },
      numberClient(number) {
        let callPool = { item_page: number, pages: this.statePage };
        this.pushCount(callPool);
      },
      numberPage(item) {
        let callPool = { item_page: this.perPage, pages: item };
        this.pushPages(callPool);
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
        this.visibleCreatePool = false;
        this.visiblePump = false;
        this.visibleDelete = false;
      },
      openEdit(moreEdit, indexMore) {
        this.moreData = moreEdit;
        this.moreId = indexMore;
        this.visibleEditPool = true;
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
      this.getInfo(this.callPool);
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
<style scoped lang="scss">
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
