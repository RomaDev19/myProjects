import axios from 'axios';

export default {
  namespaced: true,
  state: {
    filterItems: [
      {
        filter: 'Name',
        keys: 'name',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Active',
        keys: 'clients_count',
        isFilter: true,
        search: false,
        fromSort: true,
      },

      {
        filter: 'Country',
        keys: 'geos',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'ID',
        keys: 'maintainer_id',
        isFilter: true,
        search: true,
        fromSort: false,
      },
      {
        filter: 'Deta range',
        keys: 'created_at',
        isFilter: true,
        search: false,
        fromSort: true,
      },
    ],
    reducedTable: [],
    quantityPages: [],
    clientsData: null,
    pageData: null,
    item_page: 25,
    pages: 1,
    fakePage: {
      per_page: null,
      page: null,
      search_value: null,
      search_by: null,
      start: null,
      end: null,
      sort_direction: null,
      sort_by: null,
      is_fake: null,
    },
  },
  actions: {
    async gettingFake({ dispatch, getters }, fakePage) {
      try {
        let response = await axios.get('/structures', {
          params: {
            per_page: fakePage.item_page || getters.item_page,
            page: fakePage.pages || getters.pages,
            search_value: fakePage.search_value || null,
            search_by: fakePage.search_by || null,
            start: fakePage.start || null,
            end: fakePage.end || null,
            sort_direction: fakePage.sort_direction || null,
            sort_by: fakePage.sort_by || null,
            is_fake: fakePage.is_fake,
          },
        });

        return dispatch('getting', response.data);
      } catch {
        let response = await axios.get('/structures', {
          is_fake: 1,
        });
        return dispatch('getting', response.data);
      }
    },
    async deleteFake({ dispatch, state }, deleteId) {
      await axios.delete('/structures/' + deleteId);
      return dispatch('gettingFake', state.fakePage);
    },
    getting({ commit }, formData) {
      commit('GET_CLIENTS', formData);
      commit('PUSH_PAGE_DATA', formData);
      commit('PAGE_LINKS', formData);
      commit('SORTED_TABLE', formData);
    },
    pushCount({ commit, dispatch }, payload) {
      commit('PUSH_COUNT', payload);
      dispatch('gettingFake', payload);
    },
    pushPage({ commit, dispatch }, payload) {
      commit('PUSH_PAGE', payload);
      dispatch('gettingFake', payload);
    },
  },
  mutations: {
    PAGE_LINKS(state, formData) {
      state.quantityPages = [];
      console.log(formData);
      formData.links.forEach((params) => {
        if (isNaN(params.label) === false || params.label == '...') {
          state.quantityPages.push(params.label);
        }
      });
    },
    SORTED_TABLE(state, formData) {
      state.reducedTable = formData.data.reduce((result, item) => {
        if (item.is_fake == 1) {
          result.push({
            full_name: item.name,
            clients_count: item.clients_count,
            geos: item.geos,
            maintainer_id: item.maintainer_id,
            date: { created_at: item.created_at, updated_at: item.updated_at },
            idClient: item.id,
          });
          return result;
        }
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
