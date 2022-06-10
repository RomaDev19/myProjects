import axios from 'axios';

export default {
  namespaced: true,

  state: {
    filterItems: [
      {
        filter: 'Full name',
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
        filter: 'Email',
        keys: 'email',
        isFilter: true,
        search: true,
        fromSort: false,
      },
      {
        filter: 'Phone',
        keys: 'phone',
        isFilter: true,
        search: true,
        fromSort: false,
      },
      {
        filter: 'Nickname',
        keys: 'username',
        isFilter: true,
        search: true,
        fromSort: true,
      },
      {
        filter: 'Date',
        keys: 'created_at',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      { filter: 'Tag', isFilter: false },
    ],
    reducedTable: [],
    quantityPages: [],
    clientsData: null,
    pageData: null,
    item_page: 25,
    pages: 1,
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
      is_fake: null,
    },
  },
  actions: {
    async gettingClients({ dispatch, state }, callPage) {
      let response = await axios.get('/clients', {
        params: {
          per_page: callPage.item_page || state.item_page,
          page: callPage.pages || state.pages,
          search_value: callPage.search_value || null,
          search_by: callPage.search_by || null,
          start: callPage.start || null,
          end: callPage.end || null,
          sort_direction: callPage.sort_direction || null,
          sort_by: callPage.sort_by || null,
          country_ids: callPage.country_ids || null,
          label_ids: callPage.label_ids || null,
          is_fake: callPage.is_fake || null,
        },
      });
      return dispatch('getting', response.data);
    },
    async createClient({ dispatch, state }, postClient) {
      try {
        await axios.post('/clients', postClient);

        return dispatch('gettingClients', state.callPage);
      } catch (error) {
        dispatch('loader/done', null, { root: true });
      }
    },
    async trunsfer({ dispatch, state }, trunsferId) {
      await axios.post('/clients/transfer', trunsferId);
      return dispatch('gettingClients', state.callPage);
    },

    getting({ commit }, formData) {
      commit('GET_CLIENTS', formData);
      commit('PUSH_PAGE_DATA', formData);
      commit('PAGE_LINKS', formData);
      commit('SORTED_TABLE', formData);
    },
    pushPage({ commit, dispatch }, payload) {
      commit('PUSH_PAGE', payload);
      dispatch('gettingClients', payload);
    },
    pushCount({ commit, dispatch }, payload) {
      commit('PUSH_COUNT', payload);
      dispatch('gettingClients', payload);
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
          full_name: item.full_name,
          country: item.country,
          email: item.email,
          phone: item.phone,
          username: item.username,
          created_at: item.created_at,
          label: item.label,
          idClient: item.id,
        });
        return result;
      }, []);
    },
    PUSH_PAGE_DATA(state, formData) {
      state.pageData = formData;
    },
    GET_CLIENTS(state, formData) {
      state.clientsData = formData.data;
    },
    PUSH_COUNT(state, payload) {
      state.callPage.per_page = payload.item_page;
    },
    PUSH_PAGE(state, payload) {
      state.callPage.pages = payload.pages;
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
