const authModule = {
  namespaced: true,
  state: {
    isLoggedIn: false,
  },
  mutations: {
    changeIsLoggedIn(state, payload) {
      state.isLoggedIn = payload.state;
    },
  },
  actions: {
    login(context) {
      context.commit('changeIsLoggedIn', { state: true });
    },
    logout(context) {
      context.commit('changeIsLoggedIn', { state: false });
    },
  },
  getters: {
    authentication(state) {
      return state.isLoggedIn;
    },
  },
};

export default authModule;
