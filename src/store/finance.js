import axios from 'axios';

export default {
  namespaced: true,
  state: {
    filterItems: [
      {
        filter: 'ID',
        keys: 'id',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Name',
        keys: 'full_name',
        isFilter: false,
        search: false,
        fromSort: false,
      },

      {
        filter: 'Coin',
        keys: 'corency',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Amount',
        keys: 'amount',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Type',
        keys: 'type',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Date',
        keys: 'created_at',
        isFilter: false,
        search: false,
        fromSort: false,
      },
    ],
    reducedTable: [],
    quantityPages: [],
    clientsData: null,
    pageData: null,
    item_page: 25,
    pages: 1,
  },
  actions: {
    async gettingFinance({ dispatch, state }, financePage) {
      let response = await axios.get('/finance', {
        params: {
          per_page: financePage.item_page || state.item_page,
          page: financePage.pages || state.pages,
          search_value: financePage.search_value || null,
          search_by: financePage.search_by || null,
          start: financePage.start || null,
          end: financePage.end || null,
          sort_direction: financePage.sort_direction || null,
          sort_by: financePage.sort_by || null,
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
      dispatch('gettingFinance', payload);
    },
    pushPage({ commit, dispatch }, payload) {
      commit('PUSH_PAGE', payload);
      dispatch('gettingFinance', payload);
    },
  },
  mutations: {
    PAGE_LINKS(state, formData) {
      state.quantityPages = [];
      formData.links.forEach((params) => {
        if (isNaN(params.label) === false || params.label == '...') {
          state.quantityPages.push(params.label);
        }
      });
    },
    SORTED_TABLE(state, formData) {
      state.reducedTable = formData.data.reduce((result, item) => {
        result.push({
          id: item.id,
          full_name: item.client.fname + ' ' + item.client.lname,
          nameCoin: item.currency.name,
          amount: item.amount,
          type: item.type,
          created_at: item.created_at,
        });
        return result;
      }, []);
    },
    GET_CLIENTS(state, formData) {
      state.clientsData = formData.data;
    },
    PUSH_COUNT(state, payload) {
      state.item_page = payload.item_page;
    },
    PUSH_PAGE(state, payload) {
      state.pages = payload.pages;
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
      return state.item_page;
    },
    page_data(state) {
      return state.pageData;
    },
    pages(state) {
      return state.pages;
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
