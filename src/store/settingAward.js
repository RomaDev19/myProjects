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
        filter: 'Bitcoin',
        keys: 'bitcoin',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Ethereum',
        keys: 'ethereum',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Litecoin',
        keys: 'litecoin',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'Tron',
        keys: 'tron',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'WXN',
        keys: 'wxn',
        isFilter: false,
        search: false,
        fromSort: false,
      },
      {
        filter: 'USDT',
        keys: 'USDT',
        isFilter: false,
        search: false,
        fromSort: false,
      },
    ],
    reducedTable: [],
  },
  actions: {
    async gettingAward({ dispatch }) {
      let response = await axios.get('/ranks');
      return dispatch('getting', response.data);
    },
    async editAward({ dispatch }, newAward) {
      await axios.post('/ranks/updateReward', newAward);
      return dispatch('gettingAward');
    },
    getting({ commit }, formData) {
      commit('SORTED_TABLE', formData);
    },
  },
  mutations: {
    SORTED_TABLE(state, formData) {
      state.reducedTable = formData.reduce((result, item) => {
        let rew = JSON.parse(item.rewards);
        result.push({
          id: item.id,
          rank: item.name,
          rewards: {
            BTC: rew.BTC,
            ETH: rew.ETH,
            LTC: rew.LTC,
            TRX: rew.TRX,
            WXN: rew.WXN,
            USDT: rew.USDT,
          },
          idClient: item.id,
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
