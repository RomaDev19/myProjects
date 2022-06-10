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
        filter: 'Client id',
        keys: 'client_id',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'External wallet',
        keys: 'external_wallet',
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
        filter: 'Status',
        keys: 'status',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Payment tag',
        keys: 'payment_tag',
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
    reducedTable: [],
    pageData: null,
    item_page: 25,
    pages: 1,
    quantityPages: 1,
    callPage: {
      per_page: 25,
      page: 1,
      search_value: null,
      search_by: null,
      start: null,
      end: null,
      sort_direction: null,
      sort_by: null,
      country_ids: null,
      label_ids: null,
    },
  },
  actions: {
    async gettingWithdrawals({ dispatch, state }, callPage) {
      let response = await axios.get('/withdrawals', {
        params: {
          per_page: callPage.item_page || 25,
          page: callPage.pages || state.pages,
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
      commit('SORTED_TABLE', formData);
      commit('PUSH_PAGE_DATA', formData);
      commit('PAGE_LINKS', formData);
    },
    pushPage({ commit, dispatch }, payload) {
      commit('PUSH_PAGE', payload);
      dispatch('gettingWithdrawals', payload);
    },
    pushCount({ commit, dispatch }, payload) {
      commit('PUSH_COUNT', payload);
      dispatch('gettingWithdrawals', payload);
    },
    async editWithdrawarls({ dispatch, state }, withObj) {
      await axios.patch('/withdrawals/' + withObj.id, withObj.stat);
      return dispatch('gettingWithdrawals', state.callPage);
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
      console.log(state.quantityPages);
    },
    SORTED_TABLE(state, formData) {
      state.reducedTable = formData.data.reduce((result, item) => {
        result.push({
          id: item.id,
          client_id: item.client_id,
          external_wallet: item.external_wallet,
          amount: item.amount,
          status: item.status,
          payment_tag: item.payment_tag,
          created_at: item.created_at,
          updated_at: item.updated_at,
        });
        return result;
      }, []);
    },
    PUSH_COUNT(state, payload) {
      state.callPage.per_page = payload.item_page;
    },
    PUSH_PAGE(state, payload) {
      state.callPage.pages = payload.pages;
    },
    PUSH_PAGE_DATA(state, formData) {
      state.pageData = formData;
    },
  },
  getters: {
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
