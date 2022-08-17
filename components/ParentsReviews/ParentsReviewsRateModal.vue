<template>
    <div class='modal-body__wrapper'>
        <div class='close-container'>
            <a style="visibility: hidden"><img src='~/assets/images/close.svg' alt=''></a>
        </div>
        <div class='content-wrapper flex'>
            <div class='left w-50'>

                <div class='profile-avatar'>
                    <img v-if="trainer.avatar" :src='trainer.avatar' alt=''>
                </div>
                <h2 class='profile-name' v-if="trainer.full_name">{{ trainer.full_name }}</h2>

                <div class='rating-control'>
                    <p class='rating-descr'>{{ $t('teamPage.rateTeacher') }}</p>

                    <div class='rating-container'>
                        <ReviewRating :trainer-id='trainer.id' @update-rating='handleRatingUpdate'/>
                        <small
                            class='error-text invalid'
                            v-if='$v.rating.$dirty && !$v.rating.required'
                        >
                            {{ $t('validationErrors.required') }}
                        </small>
                    </div>
                </div>

                <a @click.prevent='sendReview' class='submit'>{{ $t('teamPage.send') }}</a>
            </div>
            <div class='right w-50'>
                <div class='input-group mb-24'>
                    <p class='input-label'>{{ $t('order_name') }}</p>
                    <input v-model='clientName' type='text'>
                    <small
                        class='error-text invalid'
                        v-if='$v.clientName.$dirty && !$v.clientName.required'
                    >
                        {{ $t('validationErrors.required') }}
                    </small>
                </div>

                <div class='input-group mb-24'>
                    <p class='input-label'>{{ $t('teamPage.childAge') }}</p>
                    <input v-model='childAge' type='number' min='1'>
                    <small
                        class='error-text invalid'
                        v-if='$v.childAge.$dirty && !$v.childAge.required'
                    >
                        {{ $t('validationErrors.required') }}
                    </small>
                </div>

                <div class='input-group review'>
                    <p class='input-label'>{{ $t('teamPage.review') }}</p>
                    <div class='input-review-wrapper'>
                        <textarea v-model='review' class='input-review' maxlength='250'></textarea>
                    </div>
                    <small
                        class='error-text invalid'
                        v-if='$v.review.$dirty && !$v.review.required'
                    >
                        {{ $t('validationErrors.required') }}
                    </small>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
import StarRating from '../StarRating/StarRating';
import ReviewRating from '../StarRating/ReviewRating';
import { required } from 'vuelidate/lib/validators';

export default {
    name: 'ParentsReviewsRateModal',
    components: { ReviewRating, StarRating },
    props: {
        trainer: {
            type: Object,
            required: true,
        },
        updateDataFn: {
            type: Function,
            required: true
        },
        // trainerUpdateKey: {
        //     type: Number,
        //     required: true
        // }
    },
    data() {
        return {
            clientName: null,
            childAge: null,
            review: null,
            rating: null,
            validationErrors: {
                rating: false,
                review: false,
                childAge: false,
                clientName: false,
            }
        }
    },
    validations: {
        clientName: { required },
        rating: { required },
        review: { required },
        childAge: { required },
    },
    methods: {
        handleRatingUpdate(val) {
            console.log('handle');
            this.rating = val
        },
        async sendReview() {
            if (this.$v.$invalid) {
                this.$v.$touch();
                return;
            }
            try {
                const payload = {
                    vote: this.rating,
                    name: this.clientName,
                    child_age: this.childAge,
                    lang: this.$i18n.locale,
                    review: this.review
                }
                    const data = await this.$axios.$post(`/rating/${this.trainer.id}/vote`, payload)
                    if (data.success) {
                        this.updateDataFn
                        alert("Спасибо за ваш отзыв")
                        return true
                    }
            } catch (e) {
                const response = e.response;
                if (response.data && response.data.error) {
                    if (response.data.message === 'vote_error_time') {
                        alert('Вы недавно голосовали попробуйте позже')
                        this.updateDataFn
                    }
                }
            }
        }
    }
};
</script>

<style lang='scss' scoped>
.modal-body__wrapper {
    width: 765px;
    border-radius: 32px;
    background: #fff;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 100%;
    }
}

.frame {
    width: 100%;
    height: 100%;
}

.mb-24 {
    margin-bottom: 24px;
}

.close-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 20px 20px 0 20px;
}

.submit {
    margin-top: 28px;
    background: #498BDF;
    box-shadow: 0px 4.28603px 14.2868px rgba(39, 39, 39, 0.25);
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    display: block;
    padding: 16px;
    text-align: center;
    cursor: pointer;
}

.content-wrapper {
    padding: 0 48px 48px 48px;
}

.left {
    margin-right: 20px;
}

.right {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
}

.profile-avatar {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
        border-radius: 50%;
        width: 136px;
        height: 136px;
    }
}

.profile-name {
    text-align: center;
    margin-top: 12px;
    color: #1B3C66;
    font-weight: 800;
    margin-bottom: 24px;
    //width: 100%;
}

.rating-descr {
    font-size: 12px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 12px;
}
.rating-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.input-label {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 12px;
    color: #1B3C66;
    font-weight: 600;
}
.input-group {
    input {
        //height: 44px;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        border: 1px solid #D6E7F5;
        background: #F3F6FC;
        color: #1B3C66;
        font-weight: 600;
        width: 100%;
    }
    select {
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        outline: none;
        border: 1px solid #D6E7F5;
    }
    &.review {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
}
.input-review {
    &-wrapper {
        padding: 12px;
        height: 100%;
        background: #F3F6FC;
        border: 1px solid #D6E7F5;
        border-radius: 8px;
    }
    height: 100%;
    resize: none;
    padding: 0 4px 0 8px;
    background: #F3F6FC;
    border: none;
    width: 100%;
    color: #1B3C66;

    &::-webkit-scrollbar-track
    {
        //-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #D6E7F5;
    }

    &::-webkit-scrollbar
    {
        width: 8px;
        background-color: #F5F5F5;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        //-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #85B8E0;
    }
}
.input-group {
    .error-text {
        text-align: left;
    }
}

.error-text {
    text-align: center;
}
</style>
