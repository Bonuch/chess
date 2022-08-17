export const state = () => ({
    isMenuActive: false,
    isActive: false,
    // TODO я просто не понял как можно описать структуру меню в рамках текущей верстки
    menuAbout: [
        {
            title: 'nav_about_page',
            dropdown: 'news',
            element: 'span',
            new_section: false,
        },
    ],
    subMenuItemsAbout: [
        {
            to: 'about',
            img: '/img/Header/school2.png',
            title: 'nav_school_page',
            descr: 'nav_school_page_descr'
        },
        {
            to: 'team',
            img: '/img/Header/team2.png',
            title: 'nav_team_page',
            descr: 'nav_team_page_descr'
        },
        {
            to: 'coach',
            img: '/img/Header/coach2.png',
            title: 'nav_hr_page',
            descr: 'nav_hr_page_descr'
        },
        {
            to: 'in-english',
            img: '/img/Header/flag2.png',
            title: 'nav_english_page',
            descr: 'nav_english_page_descr'
        }
    ],
    menuItems: [
        {
            to: 'pay',
            title: 'nav_payments_page'
        },
        {
            to: 'certs',
            title: 'nav_certs_page'
        },
        {
            to: 'grand-prix',
            title: 'nav_turn_page'
        }
    ]
});

export const getters = {
    returnActiveMenu(state) {
        return state.isMenuActive;
    },
    menuItems(state) {
        return state.menuItems;
    },
    subMenuItemsAbout(state) {
        return state.subMenuItemsAbout;
    },
    menuAbout(state) {
        return state.menuAbout;
    }
};

export const mutations = {
    toggleMenuActive(state) {
        state.isMenuActive = !state.isMenuActive
        if (process.client) {
            if (state.isMenuActive) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = 'visible'
            }
        }
    },
};

export const actions = {
    togglingMenuActive(ctx) {
        ctx.commit('toggleMenuActive')
    },
};
