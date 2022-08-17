<template>
    <div class='product-rate product-rate--with-hover'>
        <div class='product-rate__wrapper' v-for='(list, index) in starRating' :key='index'>
            <input type='radio'
                   :name='index'
                   @input='handleInput(list.value)'
                   v-model='rating'
                   :value='list.value'
                   :id='`${trainerId}-${list.value}`'
            >
            <label :for='`${trainerId}-${list.value}`' :class="{'active': list.value <= rating}"
                   class='product-rate-item' style='customStyle'>
                <svg :width='starSize ? starSize : 40' :height='starSize ? starSize : 40' viewBox='0 0 22 22'
                     fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M10.1373 1.47145C10.5237 0.812465 11.4763 0.812466 11.8627 1.47145L14.6723 6.26386C14.8133 6.50434 15.0483 6.67506 15.3206 6.73483L20.7467 7.92605C21.4928 8.08985 21.7872 8.99588 21.2798 9.56695L17.5902 13.72C17.4051 13.9284 17.3153 14.2047 17.3426 14.4821L17.8864 20.0107C17.9612 20.7709 17.1905 21.3309 16.4906 21.0248L11.4006 18.7992C11.1452 18.6875 10.8548 18.6875 10.5994 18.7992L5.50939 21.0248C4.80949 21.3309 4.03878 20.7709 4.11356 20.0107L4.6574 14.4821C4.68469 14.2047 4.59493 13.9284 4.40979 13.72L0.720172 9.56695C0.212829 8.99588 0.507217 8.08985 1.25333 7.92605L6.67942 6.73483C6.9517 6.67506 7.18667 6.50434 7.32766 6.26386L10.1373 1.47145Z'
                        fill='#C4C4C4' />
                </svg>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReviewRating',
    props: ['trainerId', 'starSize'],
    data() {
        return {
            rating: null,
            starRating: [
                { value: 5, idName: 5 },
                { value: 4, idName: 4 },
                { value: 3, idName: 3 },
                { value: 2, idName: 2 },
                { value: 1, idName: 1 },
            ],
            isSelected: false,
        };
    },
    computed: {
        customStyle() {
            return {
                width: this.starSize ? this.starSize + 'px' : 40 + 'px',
                height: this.starSize ? this.starSize + 'px' : 40 + 'px'
            }
        },
    },
    methods: {
        checkOccupancy(val) {
            if (typeof val === 'number' &&
                val <= this.rating &&
                val >= 0) {
                this.rating = this.rating === val ? val - 1 : val;
            }
        },
        handleInput(val) {
            // this.$emit('update-rating', {
            //   id: this.trainerId,
            //   val
            // });
            this.$emit('update-rating', val);
        },
    },
};
</script>

<style lang='scss' scoped>

.active {
    & path {
        fill: #FFCE38;
        @apply text-yellow-400 fill-current stroke-current;
    }
}

.product-rate {
    display: flex;
    align-items: center;

    &--with-hover {
        direction: rtl;
        justify-content: flex-end;

        input {
            display: none;

            &:checked + .product-rate-item,
            &:checked ~ .product-rate-item {
                path {
                    fill: #FFCE38;
                    @apply text-yellow-400 fill-current stroke-current;
                }
            }
        }

        .product-rate-item {
            margin: 0 4px;
            cursor: pointer;

            &:first-child {
                margin-right: 0;
            }

            &:last-child {
                margin: 0 4px;
            }

            &:hover,
            &:focus {
                path {
                    fill: #FFCE38;
                    @apply text-yellow-400 fill-current stroke-current;
                }

                & ~ .product-rate-item {
                    path {
                        fill: #FFCE38;
                        @apply text-yellow-400 fill-current stroke-current;
                    }
                }
            }
        }
    }

    &-item {
        z-index: 1;
        position: relative;
        display: block;
        //width: 40px;
        //height: 40px;
        margin-right: 1px;

        &:last-child {
            margin-right: 0;
        }

        svg {
            width: 100%;
            height: 100%;
        }

        path {
            transition: all 0.3s var(--custom-transition);
            @apply text-yellow-400 stroke-current;
        }
    }

    &-item--filled {
        path {
            @apply text-yellow-400 fill-current stroke-current;
        }
    }
}
</style>
