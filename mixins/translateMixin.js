export default {
  methods: {
    formatTranslates(translates, reqs) {
      const result = [];
      let cnt = 1;
      const translatesInner = {};
      Object.keys(translates).forEach(item => {
        const seps = item.split("_")
        if (seps[seps.length - 1] === 'list') {
          seps.pop();
          translatesInner[seps.join('_')] = translates[item];
        }
      })

      for (const key in translatesInner) {
        if (reqs.includes(key)) {
          result.push(
            {
              id: cnt,
              title: translates[key],
              content: translatesInner[key]
            }
          )
          cnt++;
        }
      }
      return result;
    },
  }
}
