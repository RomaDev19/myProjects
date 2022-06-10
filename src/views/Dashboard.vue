<template>
  <div class="dashbord">
    <div class="header">
      <h1>Dashboard</h1>
      <div class="menu-btn" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="dashbord__wrap">
      <h2 class="title_dashbord">Total</h2>
      <!-- <div class="calendar-blck calendar__wrap">
        <div class="switch-cal">
          <div class="btn">
            <img src="../assets/img/Next.svg" width="15" height="15" alt="" />
          </div>
          <div>
            {{ date }}
            <Calendar @v-model="date"> </Calendar>
          </div>
          <div class="btn">
            <img src="../assets/img/Next2.svg" width="15" height="15" alt="" />
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
    <div class="dashbord__total">
      <Dashboard-item
        v-for="(total, name, index) in items_deposit"
        :key="index"
        :name="name"
        :count="total"
      />
    </div>
    <h2 class="title_dashbord">Output amount</h2>
    <div class="dashbord__total">
      <Dashboard-item
        v-for="(total, name, index) in items_output"
        :key="index"
        :name="name"
        :count="total"
      />
    </div>
    <h2 class="title_dashbord">Total</h2>
    <div class="dashbord__total">
      <Dashboard-item name="Clients" :count="items_clients" />
    </div>
  </div>
</template>
<script>
  import DashboardItem from '../components/DashbordItem.vue';
  import Calendar from '../components/Calendar.vue';
  import axios from 'axios';
  import { mapActions } from 'vuex';
  export default {
    name: 'dashbord',
    components: {
      DashboardItem,
      Calendar,
    },
    data() {
      return {
        items_deposit: {},
        items_output: {},
        items_clients: null,
        date: null,
        openEditProfile: true,
      };
    },
    async mounted() {
      let response = await axios.get('dashboard/info');
      this.items_deposit = response.data.deposits_sum;
      this.items_output = response.data.withdraws_sum;
      this.items_clients = response.data.clients_count;
    },
    methods: {
      ...mapActions({
        toggleMenu: 'toggleMenu',
      }),
      dateFormat(classes, date) {
        if (!classes.disabled) {
          classes.disabled = date.getTime() < new Date();
        }
        return classes;
      },
      logChange(event) {
        console.log(event);
        this.date = event;
      },
    },
  };
</script>
<style lang="scss" scoped>
  .dashbord {
    position: relative;
    width: 100%;
    padding: 24px 22px;
    padding-bottom: 5vh;
    background: linear-gradient(
      51.09deg,
      #000000 -13.01%,
      #0d0d0d 45.52%,
      #181818 111.86%
    );
    &__total {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }
    &__wrap {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
    }
  }
  .title_dashbord {
    font-weight: 500;
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 17px;
    justify-content: space-between;
    display: flex;
    color: #ffffff;
  }
  .test {
    .reportrange-text {
      display: none;
    }
  }
</style>
