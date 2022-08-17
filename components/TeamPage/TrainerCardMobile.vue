<template>
    <div class="trainers-mobile__content-wrapper">
        <img :src="trainer.avatar" alt="" class="trainers-mobile__content-img">
        <h4 class="trainers-mobile__content-name">{{ trainer.full_name }}</h4>
        <div class="trainers-mobile__content-rate">{{ $t('teamPage.' + trainer.degree) }}</div>
        <Rating :rating="trainer.rating.average" :votes="trainer.rating.votes" hideCounter/>
        <button class="trainers-mobile__content-more"
                @click.prevent="$emit('showTrainerCard', {type: 'trainer', data: {
              trainer: trainer
            }})">{{ $t('team_btn_more') }}
        </button>
    </div>
</template>

<script>
import Rating from "./Rating";

export default {
    name: "TrainerCardMobile",
    components: {Rating},
    props: {
        trainer: {
            Type: Object
        }
    },
    methods: {
        async handleVoted(data) {
            await this.$emit('update:trainer', data)
        },
    }
}
</script>

<style lang="scss" scoped>
h4, p {
    margin: 0;
}

.trainers-team__content-btn {
    background-color: #498BDF;
    box-shadow: 0 4.28603px 14.2868px rgba(39, 39, 39, 0.25);
    border-radius: 12px;
    padding: 18px 60px;
    border: none;
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    cursor: pointer;
}

.trainers-mobile {
    display: block;
    background: linear-gradient(0deg, #D5FAFC, #D5FAFC), #C4C4C4;
    //@media(max-width: 767px) {
    //    display: block;
    //    padding-bottom: 85px;
    //}

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;

        & span {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px 5px;
            padding: 40px 15px;
            max-width: 375px;
            margin: 0 auto;
        }

        &-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: #FFFFFF;
            border-radius: 12px;
            padding: 40px 25px;
            max-width: 170px;
        }

        &-img {
            object-fit: cover;
            max-width: 80px;
            margin-bottom: 16px;
            border-radius: 50%;
        }

        &-name {
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            line-height: 140%;
            text-align: center;
        }

        &-rate {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 140%;
            margin-bottom: 21px;
            text-align: center;
        }

        &-stars {
            display: flex;
            justify-content: center;
            gap: 5px;
            margin-bottom: 21px;

            &__img {
                width: 20px;
            }
        }

        &-more {
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 140%;
            text-decoration-line: underline;
            border: none;
            background-color: transparent;
            color: #1B3C66;
        }
    }
}

.container_invisible {
    animation: containerInvis .3s forwards;
}

.group-visible-enter-active {
    animation: bounce-in .3s;
}

.group-visible-leave-active {
    animation: bounce-in .3s reverse;
}

@keyframes bounce-in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }

}

@keyframes containerInvis {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}
</style>
