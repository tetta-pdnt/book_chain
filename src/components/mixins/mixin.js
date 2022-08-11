import axios from 'axios';

export default {
  data: () => ({
    url: 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=',
    appid: '1036259511343410249',
  }),
  methods: {
    fetch: async function(param,query){
      // 非同期処理を記述
      let result = ''

      await axios.get(this.url + this.appid+
                      '&booksGenreId=001004008'+
                      '&sort=sales'+
                      '&'+param+'='+query)
        .then(function (response) {
          let result_datas = response.data.Items
          let rand
          rand = Math.floor(Math.random() * Object.keys(result_datas).length)
          result = result_datas[rand].Item
        })
        .catch(() => {
          this.snackbar = true
          result = -1
        })
          return result
    },
    get: async function(param,query){
      // this.fetch()の実行が完了するまで待機
      let result = await this.fetch(param,query)
      if (result!==-1){
        const r_inf = {'isbn':result.isbn,
                      'title':result.title,
                      'author':result.author,
                      'publisherName':result.publisherName,
                      'largeImageUrl':result.largeImageUrl,
                      'itemCaption':result.itemCaption,
                      'itemUrl':result.itemUrl,
                      'like':false
                      }
        this.$emit('r_inf',r_inf)
      }
    },
  },
}

