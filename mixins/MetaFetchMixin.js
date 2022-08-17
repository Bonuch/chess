export default {
  head() {
    return {
      title: this.content.page_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.content.content_description
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: this.content.content_keywords
        }
      ]
    }
  },
  data() {
    return {
      content: null,
      pageSlug: 'pay',
      contentFetchError: false,
    }
  },
  async asyncData({$axios, app}) {
    const lang = app.i18n.locale
    try {
      const [pricesRu, pricesEn, content] = await Promise.all([
        $axios.$get(`/content/${lang}/ContentPages/${pageSlug}`)
      ])
      return {content: content.content}
    } catch (e) {
      return {contentFetchError: true}
    }
  }
}
