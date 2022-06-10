import axios from 'axios';

export default {
  namespaced: true,
  state: {
    filterItems: [
      {
        filter: 'Name',
        keys: 'full_name',
        isFilter: true,
        search: true,
        fromSort: true,
      },
      {
        filter: 'Geo',
        keys: 'country',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Method',
        keys: 'method',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Product',
        keys: 'type',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Open Dep.',
        keys: 'open-dep',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      {
        filter: 'Close Dep.',
        keys: 'close-dep',
        isFilter: true,
        search: false,
        fromSort: true,
      },
    ],
    callPage: {
      per_page: 25,
      page: 1,
      search_value: null,
      search_by: null,
      start: null,
      end: null,
      sort_direction: null,
      sort_by: null,
    },
    reducedTable: [],
    quantityPages: [],
    clientsData: null,
    pageData: null,

    types: { types: ['deposit'] },
  },
  actions: {
    async gettingClients({ dispatch, state }, callPage) {
      let response = await axios.get('/finance', state.types, {
        params: {
          per_page: callPage.item_page || state.callPage.per_page,
          page: callPage.pages || state.callPage.pages,
          search_value: callPage.search_value || null,
          search_by: callPage.search_by || null,
          start: callPage.start || null,
          end: callPage.end || null,
          sort_direction: callPage.sort_direction || null,
          sort_by: callPage.sort_by || null,
          country_ids: callPage.country_ids || null,
          label_ids: callPage.label_ids || null,
        },
      });
      return dispatch('getting', response.data);
    },
    getting({ commit }, formData) {
      commit('GET_CLIENTS', formData);
      commit('PUSH_PAGE_DATA', formData);
      commit('PAGE_LINKS', formData);
      commit('SORTED_TABLE', formData);
    },
    pushCount({ commit, dispatch }, payload) {
      commit('PUSH_COUNT', payload);
      dispatch('gettingClients', payload);
    },
    pushPage({ commit, dispatch }, payload) {
      commit('PUSH_PAGE', payload);
      dispatch('gettingClients', payload);
    },
  },
  mutations: {
    PAGE_LINKS(state, formData) {
      state.quantityPages = [];
      console.log(formData.links);
      formData.links.forEach((params) => {
        if (isNaN(params.label) === false || params.label == '...') {
          state.quantityPages.push(params.label);
        }
      });
    },
    SORTED_TABLE(state, formData) {
      state.reducedTable = formData.data.reduce((result, item) => {
        result.push({
          full_name: item.client.fname + '' + item.client.lname,
          country: item.client.country,
          method: item.currency.name,
          product: item.type,
          created_at: item.created_at,
          updated_at: item.updated_at,
        });
        return result;
      }, []);
    },
    GET_CLIENTS(state, formData) {
      state.clientsData = formData.data;
    },
    PUSH_COUNT(state, payload) {
      state.callPage.per_page = payload.item_page;
    },
    PUSH_PAGE(state, payload) {
      state.callPage.page = payload.pages;
    },
    PUSH_PAGE_DATA(state, formData) {
      state.pageData = formData;
    },
  },
  getters: {
    clientsData(state) {
      return state.clientsData;
    },
    item_page(state) {
      return state.callPage.per_page;
    },
    page_data(state) {
      return state.pageData;
    },
    pages(state) {
      return state.callPage.page;
    },
    page_links(state) {
      return state.quantityPages;
    },
    sorted_table(state) {
      return state.reducedTable;
    },
    client_sorted(state) {
      return state.filterItems;
    },
  },
};
