import axios from 'axios';

export default {
  namespaced: true,
  state: {
    filterItems: [
      {
        filter: 'Name',
        keys: 'name',
        isFilter: true,
        search: true,
        fromSort: true,
      },
      {
        filter: 'Duration',
        keys: 'lifetime',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      {
        filter: 'Expiration Date',
        keys: 'updated_at',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      {
        filter: 'Investors',
        keys: 'investors_count',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      {
        filter: 'Total Amount',
        keys: 'totalAmount',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      {
        filter: 'Method',
        keys: 'name',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Percent',
        keys: 'Method',
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
    callPool: {
      per_page: null,
      page: null,
      search_value: null,
      search_by: null,
      start: null,
      end: null,
      sort_direction: null,
      sort_by: null,
    },
  },
  actions: {
    async gettingPool({ dispatch, getters }, callPool) {
      try {
        let response = await axios.get('/pools', {
          params: {
            per_page: callPool.item_page || getters.item_page,
            page: callPool.pages || getters.pages,
            search_value: callPool.search_value || null,
            search_by: callPool.search_by || null,
            start: callPool.start || null,
            end: callPool.end || null,
            sort_direction: callPool.sort_direction || null,
            sort_by: callPool.sort_by || null,
            statuses: callPool.statuses || null,
          },
        });
        return dispatch('getting', response.data);
      } catch {
        let response = await axios.get('/pools');
        return dispatch('getting', response.data);
      }
    },
    async createPool({ dispatch, state }, poolData) {
      await axios.post('/pools', poolData);
      return dispatch('gettingPool', state.callPool);
    },
    async editPool({ dispatch, state }, poolEditObj) {
      await axios.put('/pools/' + poolEditObj.id, poolEditObj.poolEdit);
      return dispatch('gettingPool', state.callPool);
    },
    async deletePool({ dispatch, state }, deleteId) {
      await axios.delete('/pools/' + deleteId);
      return dispatch('gettingPool', state.callPool);
    },
    async pump({ dispatch, state }, objPump) {
      await axios.post('/pump', objPump).catch(function (error) {});
      return dispatch('gettingPool', state.callPool);
    },
    getting({ commit }, formData) {
      commit('GET_CLIENTS', formData);
      commit('PUSH_PAGE_DATA', formData);
      commit('PAGE_LINKS', formData);
      commit('SORTED_TABLE', formData);
    },
    pushCount({ commit, dispatch }, payload) {
      commit('PUSH_COUNT', payload);
      dispatch('gettingPool', payload);
    },
    pushPage({ commit, dispatch }, payload) {
      commit('PUSH_PAGE', payload);
      dispatch('gettingPool', payload);
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
      console.log(formData);
      state.reducedTable = formData.data.reduce((result, item) => {
        result.push({
          full_name: item.name,
          lifeTime: item.lifetime,
          timeLeft: item.exp_time,
          investors: item.investors_count,
          totalAmount: item.amount,
          method: item.currency,
          percent: item.percent,
          idClient: item.id,
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
