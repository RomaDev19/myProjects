<template>
  <div class="mainnav w100">
    <div class="header">
      <div style="display: none" class="btn-calendar h-el">
        <img
          class="btn-calendar"
          src="../assets/img/akar-icons_calendar.svg"
          width="20px"
          height="20px"
          alt=""
        />
      </div>
      <h1>Real Clients</h1>
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
        <div>
          <!-- <img
            class="btn-calendar"
            src="../assets/img/akar-icons_calendar.svg"
            width="20px"
            height="20px"
            alt=""
          /> -->
        </div>
        <div @click="getFilter()" v-miss="popupMiss">
          <img
            src="../assets/img/filters.svg"
            alt=""
            class="clients-filter"
            width="18px"
            height="14px"
          />
          <clients-filter
            v-if="closePopup"
            class="clients-filter__popup"
            v-miss="popupMiss"
            @closeFilter="closeFilter"
          />
        </div>
        <div class="pool-mob-display">
          <div
            class="add-client"
            @click="(openAddClient = true), getFilterClient()"
            v-miss="popupMiss"
          >
            Add client
          </div>
          <add-client
            v-if="openAddClient"
            @closeAddClient="closeAddClient"
            v-miss="popupMiss"
          />
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
        <div class="calendar-blck">
          <!-- <div class="switch-cal">
            <div class="btn">
              <img src="../assets/img/Next.svg" width="15" height="15" alt="" />
            </div>
            <div><span>4 September</span></div>
            <div class="btn">
              <img
                src="../assets/img/Next2.svg"
                width="15"
                height="15"
                alt=""
              />
            </div>
          </div>
          <div>
            <img
              class="btn-calendar"
              src="../assets/img/akar-icons_calendar.svg"
              width="20px"
              height="20px"
              alt=""
            />
          </div> -->
          <div @click="getFilter()" v-miss="popupMiss">
            <img
              src="../assets/img/filters.svg"
              alt=""
              class="clients-filter"
              width="18px"
              height="14px"
            />
            <clients-filter
              v-if="closePopup"
              class="clients-filter__popup"
              v-miss="popupMiss"
              @closeFilter="closeFilter"
            />
          </div>
          <div class="btn-blck">
            <div class="switch-cal">
              <div
                class="add-client"
                @click="(openAddClient = true), getFilterClient()"
                v-miss="popupMiss"
              >
                Add client
              </div>
              <Add-client
                v-if="openAddClient"
                @closeAddClient="closeAddClient"
                v-miss="popupMiss"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="clients">
        <Clients-table
          :totalItem="totalItem"
          :reducedTable="reducedTable"
          :filterItems="filterItems"
          :tableBtn="tableBtn"
          @sortBy="sortBy"
          @searchBy="searchBy"
          @openDetailsClients="openDetailsClients"
        />
        <Clients-details
          v-if="visibleClientsDetails"
          v-miss="popupMiss"
          @closeClientsDetails="closeClientsDetails"
          @openTranfer="openTranfer"
        />
        <div v-if="pageData !== null" class="table-footer">
          <p>{{ pageData.to }} of {{ pageData.total }} items</p>
        </div>
        <Transfer
          v-if="visibleTranfer"
          @closeTrunfer="closeTrunfer"
          @openTrunsferModal="openTrunsferModal"
        />
      </div>
      <TrunsferModal
        v-if="visibleTransferModal"
        @closeTrunsferModal="closeTrunsferModal"
        @closeTrunfer="closeTrunfer"
        :trunsferData="trunsferData"
        :upline_id="upline_id"
      />
    </div>
  </div>
</template>
<script>
  import ClientsTable from '../components/ClientsTable.vue';
  import Pogination from '../components/Pogination.vue';
  import ClientsFilter from '../components/ClientsFilter.vue';
  import EditProfilePopup from '../components/EditProfilePopup.vue';
  import EditProfile from '../components/EditProfile.vue';
  import AddClient from '../components/AddClients.vue';
  import ClientsDetails from '../components/ClientsDetails.vue';
  import Transfer from '../components/Transfer.vue';
  import TrunsferModal from '../components/TrunsferModal.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'Clients',
    components: {
      ClientsTable,
      Pogination,
      ClientsFilter,
      EditProfilePopup,
      EditProfile,
      AddClient,
      ClientsDetails,
      Transfer,
      TrunsferModal,
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
          is_fake: 0,
        },
        callFilters: {
          item_page: 'clients',
        },
        tableBtn: 'clients',
        popupEditProfile: false,
        openEditProfile: false,
        openAddClient: false,
        visibleClientsDetails: false,
        visibleTranfer: false,
        visibleTransferModal: false,
        trunsferData: {},
        upline_id: null,
      };
    },
    computed: {
      ...mapGetters({
        perPage: 'clients/item_page',
        currectPages: 'clients/page_links',
        pageData: 'clients/page_data',
        statePage: 'clients/pages',
        totalItem: 'clients/page_data',
        reducedTable: 'clients/sorted_table',
        filterItems: 'clients/client_sorted',
      }),
    },
    methods: {
      ...mapActions({
        pushPages: 'clients/pushPage',
        pushCount: 'clients/pushCount',
        get_info: 'clients/gettingClients',
        get_filter: 'filter/gettingFilter',
        get_clientDetails: 'clientsDetails/getClientDetails',
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
      closeFilter() {
        this.closePopup = false;
      },
      openTranfer(infoData) {
        this.upline_id = infoData.id;
        this.visibleTranfer = true;
      },
      closeTrunfer() {
        this.visibleTranfer = false;
      },
      openTrunsferModal(tableBody) {
        this.trunsferData = tableBody;
        this.visibleTransferModal = true;
      },
      closeTrunsferModal() {
        this.visibleTransferModal = false;
      },
      popupMiss() {
        this.closePopup = false;
        this.popupEditProfile = false;
        this.openEditProfile = false;
        this.openAddClient = false;
        this.visibleClientsDetails = false;
      },
      getFilter() {
        this.closePopup = true;
        this.get_filter(this.callFilters);
      },
      getFilterClient() {
        this.get_filter(this.callFilters);
      },
      closeAddClient() {
        this.openAddClient = false;
      },
      openDetailsClients() {
        this.visibleClientsDetails = true;
      },
      closeClientsDetails() {
        this.visibleClientsDetails = false;
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
      console.log(this.totalItem);
      this.get_info(this.callPage);
    },
  };
</script>
<style lang="scss" scoped>
  .clients-filter {
    cursor: pointer;
    position: relative;
    background: linear-gradient(
      103.5deg,
      #000000 7.5%,
      #070a03 66.74%,
      #000000 112.06%
    );
    border: 1px solid #202020;
    padding: 12px 10px 12px 10px;
    border-radius: 6px;
    text-align: center;
    margin: 0 12px 0 12px;
    &__btn {
      padding: 10px 0 0 0;
    }
    &__popup {
      position: fixed;
      right: 0;
      z-index: 3;
      width: 628px;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        103.5deg,
        #000000 7.5%,
        #070a03 66.74%,
        #000000 112.06%
      );
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 12px;
    }
  }
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
  @media (max-width: 900px) {
    .btn-calendar {
      margin-left: 12px;
    }
  }
  @media (max-width: 630px) {
    .clients-filter__popup {
      width: 100%;
    }
  }
  .add-client {
    width: 120px;
  }
</style>
