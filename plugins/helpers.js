const faqContent = function (pageSlug, i18n) {
    const result = []
    const messages = i18n.t(pageSlug)
    const keys = Object.keys(messages).filter(item => item.indexOf('faq') >= 0)
    for (const key of keys) {
        const cnt = key.split('_')[1]
        result.push({
            id: parseInt(cnt),
            title: messages[key],
            content: messages['desc_' + cnt]
        })
    }
    return result
}

function helpers({ $axios, app, $t, $cookies })
{
    return {
        getCurrency: function () {
            return app.i18n.locale === 'en' ? '€' : '₽'
        },
        getLocale: function() {
            return app.i18n.locale
        },
        getPageMeta: function (pageSlug) {
            const lang = app.i18n.locale;
            return $axios.$get(`/content/${lang}/ContentPages/${pageSlug}`).then(data => {
                return data.content
            })
        },
        getFaqContent: function (pageSlug) {
            return faqContent(pageSlug, app.i18n)
        },
        formatPrice(val) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        // Вернет форму в зависимости от числителя
        wordDeclension(num) {
            let mod10 = num % 10, mod100 = num % 100;
            return mod100 >= 5 && mod100 <= 20 ? 2 : mod10 === 1 ? 0 : mod10 >= 2 && mod10 <= 4 ? 1 : 2;
        },
        formatUrls(path, params = {}) {
            return {
                name: path + '___' + app.i18n.locale,
                params: params
            }
        },
        customUrl(path) {
            if (app.i18n.locale === 'ru') {
                return path;
            }
            return `/${app.i18n.locale}${path}`;
        },
        parseCustomSlug(path) {
            path = path.replace(`/${app.i18n.locale}/`, '');
            return (path.substring(0, 1) === '/') ? path.substring(1) : path;
        },
        getUtmMarks() {
            const utm = Object.keys($cookies.getAll()).filter(item => item.startsWith("utm_"))
            return utm.map(item => item + "=" + $cookies.get(item)).join("\n");
        }
    }
}

export default (context, inject) => {
    inject('helpers', helpers(context))
}
