import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import clients from './clients.js';
import deposit from './deposit.js';
import fake from './fake.js';
import pool from './pool.js';
import cases from './cases.js';
import filter from './filter.js';
import profile from './profile.js';
import clientsDetails from './clientsDetails.js';
import { loader } from './loader.js';
import settingAward from './settingAward.js';
import settingRank from './settingRank.js';
import finance from './finance.js';
import withdrawals from './withdrawals.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: false,
  },
  actions: {
    toggleMenu({ commit }) {
      commit('CHANGE_STATUS_MENU');
    },
  },
  getters: {
    stateMenu(state) {
      return state.menu;
    },
  },

  mutations: {
    CHANGE_STATUS_MENU(state) {
      state.menu = !state.menu;
    },
  },
  modules: {
    auth,
    clients,
    deposit,
    fake,
    pool,
    cases,
    filter,
    clientsDetails,
    loader,
    profile,
    settingAward,
    settingRank,
    finance,
    withdrawals,
  },
});
