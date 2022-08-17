export default {
    props: {
        trainer: {
            type: Object,
        }
    },
    data() {
        return {
            showRateBar: false,
            estimateRating: null,
        }
    },
    methods: {
        rateOpen() {
            this.showRateBar = !this.showRateBar
        },
        async handleUpdateRating(val) {
            try {
                const newData = await this.$axios.$post(`/rating/${this.trainer.id}/vote`, {
                    'rating': val,
                    lang: this.$i18n.locale,
                })
                this.$emit('voted', newData.trainer)
                this.estimateRating = val
            } catch (e) {
                const {data} = e.response;
                if (data) {
                    alert(this.$t('errors.' + data.message ?? 'something_wrong'))
                }
            }
            this.showRateBar = false
        },
        closeRateBtn() {
            this.showRateBar = false
        }
    }
}
