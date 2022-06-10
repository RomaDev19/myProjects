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
        filter: 'Lifetime',
        keys: 'days',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      {
        filter: 'Time left',
        keys: 'updated_at',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      {
        filter: 'Investors',
        keys: 'min_invest',
        isFilter: true,
        search: false,
        fromSort: true,
      },
      {
        filter: 'Fakes',
        keys: 'Fakes',
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
        keys: 'percent',
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
    callCases: {
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
    async gettingCases({ dispatch, getters }, callCases) {
      let response = await axios.get('/cases', {
        params: {
          per_page: callCases.item_page || getters.item_page,
          page: callCases.pages || getters.pages,
          search_value: callCases.search_value || null,
          search_by: callCases.search_by || null,
          start: callCases.start || null,
          end: callCases.end || null,
          sort_direction: callCases.sort_direction || null,
          sort_by: callCases.sort_by || null,
        },
      });
      return dispatch('getting', response.data);
    },
    async createCase({ dispatch, state }, newCase) {
      await axios.post('/cases', newCase, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return dispatch('gettingCases', state.callCases);
    },
    async editCase({ dispatch, state }, caseEditObj) {
      console.log(caseEditObj);
      await axios.put('/cases/' + caseEditObj.id, caseEditObj.newEditCase);
      return dispatch('gettingCases', state.callCases);
    },
    async deleteCase({ dispatch, state }, deleteId) {
      await axios.delete('/cases/' + deleteId);
      return dispatch('gettingCases', state.callCases);
    },
    getting({ commit }, formData) {
      commit('GET_CLIENTS', formData);
      commit('PUSH_PAGE_DATA', formData);
      commit('PAGE_LINKS', formData);
      commit('SORTED_TABLE', formData);
    },
    pushCount({ commit, dispatch }, payload) {
      commit('PUSH_COUNT', payload);
      dispatch('gettingCases', payload);
    },
    pushPage({ commit, dispatch }, payload) {
      commit('PUSH_PAGE', payload);
      dispatch('gettingCases', payload);
    },
  },
  mutations: {
    PAGE_LINKS(state, formData) {
      state.quantityPages = [];
      // formData.links.forEach((params) => {
      //   if (isNaN(params.label) === false || params.label == '...') {
      //     state.quantityPages.push(params.label);
      //   }
      // });
    },
    SORTED_TABLE(state, formData) {
      state.reducedTable = formData.reduce((result, item) => {
        result.push({
          nameCoin: item.name,
          lifeTime: item.days,
          timeLeft: item.updated_at,
          investors: item.min_invest,
          fakes: 0,
          totalAmount: 1,
          method: item.name,
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
