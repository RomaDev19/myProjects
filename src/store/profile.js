import axios from 'axios';

export default {
  namespaced: true,

  state: {
    showProfile: false,
  },
  getters: {
    stateProfile(state) {
      return state.showProfile;
    },
  },

  mutations: {
    CHANGE_STATUS_PROFILE(state) {
      state.showProfile = !state.showProfile;
    },
  },

  actions: {
    toggleProfile({ commit }) {
      commit('CHANGE_STATUS_PROFILE');
    },
  },
};
