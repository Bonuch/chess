export const state = () => ({
    activeCertSlide: null,
    windowWidth: 0,
    clientLocation: null,
    degreeList: null,
    modalTrainer: null,
});

export const getters = {
    getModalTrainer(state) {
        return state.modalTrainer;
    },
    getActiveCertSlide(state) {
        return state.activeCertSlide;
    },
    isMobile(state) {
        if (process.browser) {
            return state.windowWidth <= 950;
        }
        return false;
    },
    getClientLocation(state) {
        return state.clientLocation;
    },
};

export const mutations = {
    setActiveCertSlide(state, payload) {
        state.activeCertSlide = payload;
    },
    setWindowWidth(state, payload) {
        state.windowWidth = payload;
    },
    setClientLocation(state, payload) {
        state.clientLocation = payload;
    },
    setModalTrainer(state, payload) {
        state.modalTrainer = payload;
    },
};

export const actions = {
    async nuxtServerInit({ getters, dispatch, commit, state }, { app, route }) {
        // console.log('------', axios);
        fetch(process.env.API_BASE_URL + '/degree').then(async (data) => {
            state.degreeList = await data.json();
        });

        // console.log(data);
        // запоминаем UTM метки в кукисы для дальнейшего учета в заказе
        try {
        } catch (e) {
            console.log(e);
        }
        if (route.query) {
            for (const key of Object.keys(route.query)) {
                if (key.substr(0, 4) === 'utm_') {
                    app.$cookies.set(key, route.query[key]);
                }
            }
        }

        try {
            const res = await app.$axios.$get('/getlocation');
            commit('setClientLocation', res);
        } catch (e) {
            commit('setClientLocation', {
                iso: 'RU',
                country: 'Russia',
            });
        }
    },
};
