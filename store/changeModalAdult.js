export const state = () => ({
  step: null,
  isOpen: false,
  formData: {
    "student_full_name": null,
    "experience": null,
    "student_age": null,
    "parent_phone": null,
    "parent_email": null,
    "parent_name": null,
    "notifications_way": null,
    "lesson_date": null,
    "lesson_time": null,
    "API_SECRET_KEY": null,
  },
});

export const getters = {
  getStep(state) {
    return state.step;
  },
  getActivity(state) {
    return state.isOpen;
  },
  getFormData(state) {
    return state.formData;
  },
  getPreparedFormData(state) {
    const formCopy = JSON.parse(JSON.stringify(state.formData));
    formCopy.parent_phone = formCopy.parent_phone.phone;

    return formCopy;
  }
};

export const mutations = {
  changeStep(state, payload) {
    state.step = payload;
  },
  changeActivity(state, payload) {
    state.isOpen = payload;
  },
  changeFormData(state, payload) {
    state.formData = payload;
  },
  updateFormData(state, payload) {
    state.formData = Object.assign({}, state.formData, payload);
  },
};

export const actions = {
  openModal(ctx, payload) {
    ctx.commit('changeActivity', true);
    ctx.commit('changeStep', payload);
  },
  closeModal(ctx) {
    ctx.commit('changeActivity', false);
    ctx.commit('changeStep', null);
  },
};
