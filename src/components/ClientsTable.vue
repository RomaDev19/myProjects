<template>
  <div class="text">
    <div :class="{ ranks: tableBtn == 'ranks' && screenWidth > 900 }">
      <div class="container-client" v-if="screenWidth > 900">
        <table class="client__table">
          <Table-filter
            @searchBy="searchBy"
            :filterItems="filterItems"
            :tableBtn="tableBtn"
            @sortBy="sortBy"
          />
          <Table-body
            :reducedTable="reducedTable"
            :tableBtn="tableBtn"
            :filterItems="filterItems"
            @openDetailsClients="openDetailsClients"
            @openEdit="openEdit"
            @openEditPercents="openEditPercents"
            @openDelete="openDelete"
            @openConfirm="openConfirm"
            @openReject="openReject"
          />
        </table>
      </div>
      <Mobile-table
        v-else
        :reducedTable="reducedTable"
        :tableBtn="tableBtn"
        @openDetailsClients="openDetailsClients"
        @openEdit="openEdit"
        @openDelete="openDelete"
      />
    </div>
  </div>
</template>

<script>
  import TableFilter from './TableFilter.vue';
  import TableBody from './TableBody.vue';
  import MobileTable from './MobileTable.vue';

  export default {
    components: {
      TableFilter,
      TableBody,
      MobileTable,
    },
    props: {
      tableBtn: String,
      filterItems: Array,
      reducedTable: Array,
      totalItem: { type: [Array, Object] },
    },
    data() {
      return {
        screenWidth: null,
        screenHeight: null,
      };
    },
    methods: {
      searchBy(item, searchValue) {
        this.$emit('searchBy', item, searchValue);
      },
      sortBy(item, sortBy) {
        this.$emit('sortBy', item, sortBy);
      },
      openDetailsClients() {
        this.$emit('openDetailsClients');
      },
      updateWidth() {
        this.screenWidth = window.screen.width;
      },
      updateHeight() {
        this.screenHeight = document.documentElement.clientHeight;
      },
      openTranfer(tableBody) {
        this.$emit('openTranfer', tableBody);
      },
      openEdit(moreEdit, indexMore) {
        this.$emit('openEdit', moreEdit, indexMore);
      },
      openEditPercents(moreEdit, indexMore) {
        this.$emit('openEditPercents', moreEdit, indexMore);
      },
      openDelete(indexMore) {
        this.$emit('openDelete', indexMore);
      },
      openConfirm(withdrawarlsData) {
        this.$emit('openConfirm', withdrawarlsData);
      },
      openReject(withdrawarlsData) {
        this.$emit('openReject', withdrawarlsData);
      },
    },
    created() {
      this.screenWidth = window.screen.width;
      this.screenHeight = document.documentElement.clientHeight;
      window.addEventListener('resize', this.updateWidth);
      window.addEventListener('resize', this.updateHeight);
    },
  };
</script>

<style scoped>
  .text {
    position: relative;
  }

  .container-client {
    overflow-y: scroll;
    max-height: 74vh;
  }
  .client__table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
    text-align: left;
    table-layout: fixed;
  }
  .ranks {
    overflow-x: scroll;
    max-width: 75vw;
  }

  .table__ranks {
    width: 150vw;
  }
  .ranks::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  .container-client::-webkit-scrollbar {
    width: 0;
    height: 4px;
    background: rgba(54, 165, 3, 0.25);
  }
  .container-client::-webkit-scrollbar-thumb {
    background: #36a503;
  }
</style>
