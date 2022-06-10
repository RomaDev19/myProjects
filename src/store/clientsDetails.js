import axios from 'axios';

export default {
  namespaced: true,
  state: {
    infoDetails: [],
    balanceDetails: [],
    clientDetails: [],
    operationsDetails: [],
    investsPools: null,
    investsCases: null,
    idClients: null,
  },

  actions: {
    async getClientDetails({ dispatch, state }, callDetails) {
      state.idClients = callDetails.clientId;
      let response = await axios.get('/clients/' + callDetails.clientId);
      return dispatch('getClient', response);
    },
    getClient({ commit }, response) {
      commit('PUSH_CLIENT', response);
    },
    pushCount({ commit }, newCoins) {
      commit('PUSH_COUNT', newCoins);
    },
    async pushCoins({ dispatch, state }, newCoins) {
      await axios.post('/clients/' + state.idClients + '/balance', newCoins);
      return dispatch('getClientDetails');
    },
    async editClientProfile({ dispatch }, newProfileClietn) {
      await axios.patch(
        '/clients/' + newProfileClietn.id,
        newProfileClietn.profile
      );
      return dispatch('getClientDetails');
    },
  },

  mutations: {
    PUSH_CLIENT(state, response) {
      state.infoDetails = response.data.info;
      state.balanceDetails = response.data.balances;
      state.clientDetails = response.data;
      state.operationsDetails = response.data.operations;
      state.investsPools = response.data.invests.pools;
      state.investsCases = response.data.invests.cases;
    },
    PUSH_COUNT(state, newCoins) {
      for (var key in state.balanceDetails) {
        if (key == newCoins.name) {
          state.balanceDetails[key] += Number(newCoins.coins);
        }
      }
    },
  },
  getters: {
    infoData(state) {
      return state.infoDetails;
    },
    balanceData(state) {
      return state.balanceDetails;
    },
    clientData(state) {
      return state.clientDetails;
    },
    operationsData(state) {
      return state.operationsDetails;
    },
    investsPools(state) {
      return state.investsPools;
    },
    investsCases(state) {
      return state.investsCases;
    },
  },
};
