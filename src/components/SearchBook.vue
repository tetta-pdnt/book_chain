<template>
  <div class="serch_book">
    <v-col
      class="mx-auto"
      cols="12"
      sm="6"
      md="3">
      <v-text-field
        label="Search"
        placeholder="夏、アンドロイド、探偵、"
        rounded
        solo
        v-model="search"
        @keydown.enter="search ? get('title',search) : ''">
        <template v-slot:append>
              <v-btn icon @click="search ? get('title',search) : ''">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </template>
      </v-text-field>
      <!-- <v-btn fab  @click="get('title',book_inf.title)">
  <v-icon>mdi-book-open-variant</v-icon>
</v-btn> -->
    </v-col>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SearchBook',
  props: [],
  data: () => ({
      url: 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=',
      appid: '1036259511343410249',
      show:false,
      snackbar: false,
      search:""
  }),
  methods: {
    fetchSample: async function(param,query){
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
      // this.fetchSample()の実行が完了するまで待機
      let result = await this.fetchSample(param,query)
      if (result!==-1){
        const r_inf = {'title':result.title,
                      'author':result.author,
                      'publisherName':result.publisherName,
                      'largeImageUrl':result.largeImageUrl,
                      'itemCaption':result.itemCaption,
                      'itemUrl':result.itemUrl,
                      'isbn':result.isbn}
        this.$emit('r_inf',r_inf)
      }
    },
  },
  filters: {
    omittedText(text,n) {
     return text.length > n ? text.slice(0, n) + "…" : text;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



 