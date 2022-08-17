export const state = () => ({
  title: '',
});

export const getters = {
  returnNameVacancies(state) {
    return state.title
  },
};

export const mutations = {
  getNameVacancies(state,obj) {
    for(let key in obj){
      state.title=obj[key]
    }
  }
};

export const actions = {
  gettingNameVacancies(ctx,obj) {
    ctx.commit('getNameVacancies',obj)
  }
};
