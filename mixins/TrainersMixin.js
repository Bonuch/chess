export default {
    props: {
        trainerList: {
            type: Array,
            required: true,
        },
        nextPageUrl: {
            type: Object,
        },
    },
    data() {
        return {
            nextFetch: this.nextPageUrl,
            animationQueue: [],
        };
    },
    methods: {
        handleUpdateTrainer(trainer, idx) {
            this.$set(this.trainerList, idx, trainer);
        },
        async fetchNewTrainers() {
            try {
                const params = {
                    page: this.nextFetch ? this.nextFetch.current_page + 1 : null,
                    lang: this.$i18n.locale,
                    ...this.$route.query,

                }
                const data = await this.$axios.$get('/rating', {
                    params: {
                        page: Object.keys(this.nextFetch).length ? this.nextFetch.current_page + 1 : undefined,
                        lang: this.$i18n.locale,
                        ...this.$route.query,

                    },
                });

                this.nextFetch = data.meta.current_page < data.meta.last_page ? data.meta : null;

                return data.data;
            } catch (e) {
                console.log(e);
                alert('Sorry error on fetching data');
            }
        },
        async startAnimation() {
            console.log('start anima');
            const elem = this.animationQueue.shift();
            if (elem) {
                this.trainerList.push(elem);
                // this.handleUpdateTrainer(elem, this.trainerList.length);
            }
            return setTimeout(async () => {
                if (!elem) {
                    return;
                }
                return await this.startAnimation();
            }, 200);
        },
        async showMore() {
            const trainers = await this.fetchNewTrainers();
            for (const trainer of trainers) {
                this.animationQueue.push(trainer);
            }
            await this.startAnimation();
        },
        clearTeacherList() {
            this.nextFetch = null;
            // this.trainerList = this.trainerList.splice(0, this.trainerList.length);
            this.trainerList = [];
        },
    },
};
