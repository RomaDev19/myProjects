import axios from 'axios';

export default {
  namespaced: true,
  state: { filters: null, countryFilters: [], tagFilters: [] },
  actions: {
    async gettingFilter({ dispatch }, callFilters) {
      let filters = await axios.get('/filters', {
        params: {
          page: callFilters.item_page || null,
        },
      });

      return dispatch('getting', filters);
    },
    getting({ commit }, getFilters) {
      commit('GET_FILTERS', getFilters);
    },
    pushCountry({ commit }, valueFilter) {
      commit('PUSH_VALUE', valueFilter);
    },
    pushTag({ commit }, valueTag) {
      commit('PUSH_TAG', valueTag);
    },
    resetFilters({ commit }) {
      commit('RESET_FILTERS');
    },
  },
  mutations: {
    GET_FILTERS(state, getFilters) {
      state.filters = getFilters.data;
    },
    PUSH_VALUE(state, valueFilter) {
      state.countryFilters = valueFilter;
    },
    PUSH_TAG(state, valueTag) {
      state.tagFilters = valueTag;
    },
    RESET_FILTERS(state) {
      state.countryFilters = [];
      state.tagFilters = [];
    },
  },
  getters: {
    filtersTable(state) {
      return state.filters;
    },
    countryFilters(state) {
      return state.countryFilters;
    },
    tagFilters(state) {
      return state.tagFilters;
    },
  },
};
