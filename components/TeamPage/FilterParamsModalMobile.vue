<template>
    <div class='modal-body__wrapper'>
        <div class='close-container'>
            <a @click.prevent='closeFn'><img src='~/assets/images/close.svg' alt=''></a>
        </div>
        <div class='content-wrapper'>
            <h2 class='text'>Выберите парамеры</h2>
            <div class='input-group mb-24'>
                <p class='input-label'>Пол тренера</p>
                <div class='input-switcher'>
                    <a @click.prevent='gender = 1' class='switcher' :class='{"active": gender === 1}'>муж</a>
                    <a @click.prevent='gender = 2' class='switcher'
                       :class='{"active": gender === 2}'>жен</a>
                </div>
            </div>

            <div class='flex second-block mb-24'>
                <div class='input-group flex flex-column'>
                    <p class='input-label'>Возраст ребенка</p>
                    <input v-model='childrenAge' type='number' min='1'>
                </div>
                <div class='input-group second-block flex flex-column'>
                    <p class='input-label'>Разряд тренера</p>
                    <CustomDropDown :defaultVal='pickedDegree ? pickedDegree.value : "Нет" '
                                    :list='degreeList'
                                    @dropdownPick='pickedDegree = $event' />
                </div>
            </div>


            <!--            <div class='input-group mb-24'>-->
            <!--                <p class='input-label'>Время занятий (минуты)</p>-->
            <!--                <div class='input-lesson-time'>-->
            <!--                    <a @click.prevent='lessonLang = 25' :class='{active: }' class='l-time'>25</a>-->
            <!--                    <a @click.prevent='lessonLang = 45' class='l-time'>45</a>-->
            <!--                    <a @click.prevent='lessonLang = 60' class='l-time'>60</a>-->
            <!--                    <a @click.prevent='lessonLang = 75' class='l-time'>75</a>-->
            <!--                </div>-->
            <!--            </div>-->

            <div class='input-group mb-24'>
                <p class='input-label'>Язык преподования</p>
                <div class='lang-radios'>
                    <BaseRadio class='radio-item' v-model='pickedLanguage' name='lang' val='1' label='Русский'
                               id='russian'></BaseRadio>
                    <BaseRadio class='radio-item' v-model='pickedLanguage' name='lang' val='2' label='Английский'
                               id='english'></BaseRadio>
                </div>
            </div>

            <a @click.prevent='submit' class='submit'>Применить</a>
        </div>

    </div>
</template>

<script>
import CustomDropDown from '../CustomDropDown';
import BaseRadio from './BaseRadio';
import {mapState} from 'vuex';

export default {
    name: 'FilterParamsModalMobile',
    components: { CustomDropDown, BaseRadio },
    props: {
        closeFn: {
            type: Function,
            required: true,
        },
    },
    data() {
        return {
            pickedDegree: null,
            childrenAge: null,
            gender: null,
            pickedLanguage: null,
        };
    },
    computed: {
      ...mapState({degree: state => state.degreeList}),
      degreeList() {
          const out = [];
          for (let i = 0; i < this.degree.length; i++) {
              out.push({
                  id: i,
                  value: this.degree[i]
              })
          }
          return out;
      },
    },
    created() {
        if (this.$route.query.degree) {
            this.pickedDegree = this.degreeList.find(element => {
                return element.id === parseInt(this.$route.query.degree)
            })
        }
        if (this.$route.query.child_age) {
            this.childrenAge = parseInt(this.$route.query.child_age)
        }

        if (this.$route.query.gender) {
            this.gender = parseInt(this.$route.query.gender)
        }

        if (this.$route.query.lesson_lang) {
            this.pickedLanguage = this.$route.query.lesson_lang
        }
        // this.pickedDegree = parseInt(this.$route.query.degree) ?? null,
    },
    methods: {
        submit() {
            // this.$emit('acceptFilterModal', )
            const query = {
                degree: this.pickedDegree?.id,
                child_age: this.childrenAge,
                gender: this.gender,
                lesson_lang: this.pickedLanguage,
            }

            this.$router.push({
                query,
            });
            this.closeFn();
        },
    },
};
</script>

<style lang='scss' scoped>
.lang-radios {
    padding: 10px 18px;
    background: #F3F6FC;
    border-radius: 16px;
}

.radio-item {
    padding: 6px 0;
}

.modal-body__wrapper {
    position: absolute;
    bottom: 0;
    width: 411px;
    border-radius: 32px 32px 0 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        //height: 100%;
        width: 100%;
    }
}

.frame {
    width: 100%;
    height: 100%;
}

.close-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 20px;
}

.content-wrapper {
    padding: 0 30px 30px 30px;

    .text {
        margin: 0 0 24px 0;
    }
}

.input-label {
    margin-bottom: 12px;
    font-size: 12px;
    color: #1B3C66;
    font-weight: 600;
}

.input-switcher {
    display: flex;
    width: 100%;
    background: #F3F6FC;
    border-radius: 8px;

    .switcher {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 44px;
        color: #B2BECF;
        font-weight: 600;
        text-transform: capitalize;

        &.active {
            color: #1B3C66;
            border-radius: 8px;
            background: #D6E7F5;
        }
    }
}

.mb-24 {
    margin-bottom: 24px;
}

.second-block {
    .input-group {
        width: 49%;

        input {
            //height: 44px;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            border: 1px solid #D6E7F5;
        }

        select {
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            border: 1px solid #D6E7F5;
        }
    }

    justify-content: space-between;
}

.input-lesson-time {
    display: flex;
    justify-content: space-between;
}

.l-time {
    width: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;

    border-radius: 8px;
    font-size: 14px;
    color: #B2BECF;
    font-weight: 600;
    background: #F3F6FC;
    text-transform: capitalize;

    &.active {
        color: #1B3C66;
        background: #D6E7F5;
    }
}

.submit {
    margin-top: 40px;
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
</style>
