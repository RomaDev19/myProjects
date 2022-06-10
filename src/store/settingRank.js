import axios from 'axios';

export default {
  namespaced: true,
  state: {
    filterItems: [
      {
        filter: 'Rank',
        keys: 'rank',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Personal Turnover Need',
        keys: 'personal',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Structure Turnover Need',
        keys: 'amount',
        isFilter: false,
        search: false,
        fromSort: false,
      },
    ],
    reducedTable: [],
  },
  actions: {
    async gettingRank({ dispatch }) {
      let response = await axios.get('/ranks');

      return dispatch('getting', response.data);
    },
    getting({ commit }, formData) {
      commit('SORTED_TABLE', formData);
    },
    async editPercent({ dispatch }, newPercent) {
      axios.post('/ranks/updatePercent', newPercent, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return dispatch('gettingRank');
    },
    async editRank({ dispatch }, newRank) {
      axios.post('/ranks/update', newRank);
      return dispatch('gettingRank');
    },
  },
  mutations: {
    SORTED_TABLE(state, formData) {
      state.reducedTable = formData.reduce((result, item) => {
        result.push({
          rank: item.name,
          personal: item.personal_invest,
          amount: item.structure_invest,
          percents: item.percents,
          idClient: item.id,
          level: item.level,
        });
        return result;
      }, []);
    },
  },
  getters: {
    sorted_table(state) {
      return state.reducedTable;
    },
    client_sorted(state) {
      return state.filterItems;
    },
  },
};
