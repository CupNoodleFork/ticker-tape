const state = {
  userInfo: null
};

const mutations = {
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo;
  }
};

export default {
  namespaced: true,
  state,
  mutations
}
