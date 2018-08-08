import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

export default new vuex.Store({
  state: {
    isLoading: false
  },
  mutations: {
    isLoading (state, isLoading) {
      state.isLoading = isLoading
    }
  }
})
