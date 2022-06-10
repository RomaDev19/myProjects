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
      <h1>Award</h1>

      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="template">
      <div class="pool-display mt24 h-el">
        <router-link to="/settings/award" class="pool-btn-2 selected"
          ><div>Award</div></router-link
        >
        <router-link to="/settings/rank" class="pool-btn-2"
          ><div>Rank</div></router-link
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
      </div>
      <div class="title-template mt24">
        <div class="calendar-blck"></div>
      </div>
      <div class="award">
        <Clients-table
          :reducedTable="reducedTable"
          :filterItems="filterItems"
          :tableBtn="tableBtn"
          @openEdit="openEdit"
          @openDelete="openDelete"
        />
        <Edit-award
          v-if="visibleEdit"
          :editData="editData"
          @closeEdit="closeEdit"
        />
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
  import EditAward from '../components/EditAward.vue';
  import Delete from '../components/Delete.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    components: {
      Pogination,
      ClientsTable,
      EditAward,
      Delete,
    },
    data() {
      return {
        closePopup: false,
        tableBtn: 'award',
        visibleEdit: false,
        editData: {},
        moreData: null,
        moreId: null,
        visibleDelete: false,
        deleteId: null,
      };
    },
    computed: {
      ...mapGetters({
        reducedTable: 'settingAward/sorted_table',
        filterItems: 'settingAward/client_sorted',
      }),
    },
    methods: {
      ...mapActions({
        get_info: 'settingAward/gettingAward',
        toggleMenu: 'toggleMenu',
      }),
      popupMiss() {
        this.visibleDelete = false;
      },
      closeEditProfile() {
        this.openEditProfile = false;
      },
      openEdit(moreEdit) {
        this.visibleEdit = true;
        this.editData = moreEdit;
      },
      closeEdit() {
        this.visibleEdit = false;
      },
      openDelete(indexMore) {
        this.deleteId = indexMore + 1;
        this.visibleDelete = true;
      },
      closeDelete() {
        this.visibleDelete = false;
      },
      deletes() {
        this.visibleDelete = false;
        // this.deleteItem(this.deleteId);
      },
    },
    mounted() {
      this.get_info();
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
