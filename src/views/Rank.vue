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
      <h1>Rank</h1>
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="template">
      <div class="pool-display mt24 h-el">
        <router-link to="/settings/award" class="pool-btn-2"
          ><div>Award</div></router-link
        >
        <router-link to="/settings/rank" class="pool-btn-2 selected"
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
          <div class="add-client" @click="visibleRankPercents = true">
            Percents
          </div>
        </div>
      </div>

      <div class="title-template"></div>
      <div class="rank">
        <Clients-table
          :reducedTable="reducedTable"
          :filterItems="filterItems"
          :tableBtn="tableBtn"
          @openEdit="openEdit"
          @openEditPercents="openEditPercents"
        />
        <Edit-rank
          v-if="visibleEdit"
          @closeEdit="closeEdit"
          :moreData="moreData"
          :moreId="moreId"
        />
        <Rank-percents
          v-if="visibleRankPercents"
          @closeRankPercent="closeRankPercent"
          :moreData="moreData"
          :moreId="moreId"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import ClientsTable from '../components/ClientsTable.vue';
  import EditRank from '../components/EditRank.vue';
  import RankPercents from '../components/RankPercents.vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    components: {
      ClientsTable,
      EditRank,
      RankPercents,
    },
    data() {
      return {
        closePopup: false,
        tableBtn: 'ranks',
        popupEdit: false,
        visibleEdit: false,
        moreData: null,
        moreId: null,
        visibleDelete: false,
        deleteId: null,
        visibleRankPercents: false,
      };
    },
    computed: {
      ...mapGetters({
        reducedTable: 'settingRank/sorted_table',
        filterItems: 'settingRank/client_sorted',
      }),
    },
    methods: {
      ...mapActions({
        get_info: 'settingRank/gettingRank',
        toggleMenu: 'toggleMenu',
      }),
      closeEdit() {
        this.visibleEdit = false;
      },
      closeRankPercent() {
        this.visibleRankPercents = false;
      },
      openEdit(moreEdit, indexMore) {
        this.moreData = moreEdit;
        this.moreId = indexMore;
        this.visibleEdit = true;
      },
      openEditPercents(moreEdit, indexMore) {
        this.moreData = moreEdit;
        this.moreId = indexMore;
        this.visibleRankPercents = true;
      },
      popupMiss() {
        this.visibleDelete = false;
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
<style lang="scss" scoped>
  .percent {
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
    &-button {
      background: #36a503;
      border: 1px solid #202020;
      box-sizing: border-box;
      border-radius: 12px;
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      padding: 6px 26px;
    }
  }
</style>
