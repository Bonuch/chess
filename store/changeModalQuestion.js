export const state = () => ({
    step: null,
    isOpen: false,
});

export const getters = {
    getStep(state) {
        return state.step;
    },
    getActivity(state) {
        return state.isOpen;
    },
};

export const mutations = {
    changeStep(state, payload) {
        state.step = payload;
    },
    changeActivity(state, payload) {
        state.isOpen = payload;
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
