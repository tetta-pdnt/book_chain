<template>
  <div class="book_show">
     <v-card
     elevation="2"
    class="mx-auto"
    max-width="450"
  >

  <v-row no-gutters>
    <v-col col="2">
    <v-img
      :src='book_inf.largeImageUrl'
      max-height="220"
      max-width="150"
      class="rounded-l"
    ></v-img>
    </v-col>
   
    <v-col cols="8">
    <v-card-title>
      {{ book_inf.title | omittedText(24) }}
    </v-card-title>
    <v-card-subtitle>
    <br>
      {{book_inf.author}}<br>
      {{book_inf.publisherName}}
    </v-card-subtitle>

    <v-card-actions class="pl-14">
    
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    </v-col>
    </v-row>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider> 

        <v-card-text>
          {{book_inf.itemCaption!=="" ? book_inf.itemCaption : "説明がありません。"}}
        </v-card-text>
        <v-row class="px-5 pb-2">
          <v-btn
          block
          color="#BE0000"
          outlined
          :href="book_inf.itemUrl"
          target="_blank">楽天で詳細をみる</v-btn>
          <p class="py-3"> </p>
          <v-btn
          block
          color="#f29100"
          style="text-transform: none"
          outlined
          :href="'https://www.amazon.co.jp/s?k='+book_inf.isbn"
          target="_blank">Amazonで詳細をみる</v-btn>
        </v-row>
      </div>
    </v-expand-transition>
  </v-card>
  <div class="text-center pt-4 pb-12">
  <v-btn fab large class="mx-4" @click="get('title',book_inf.title)">
    <v-icon>mdi-book-open-variant</v-icon>
  </v-btn>
  <v-btn fab large class="mx-4" @click="get('author',book_inf.author)">
    <v-icon>mdi-account</v-icon>
  </v-btn>
  <v-btn fab large class="mx-4" @click="get('publisherName',book_inf.publisherName)">
    <v-icon>mdi-office-building</v-icon>
  </v-btn>
  </div>
    <!-- <p>{{dataa}}</p> -->
  <v-snackbar 
      v-model="snackbar"
      top=true>
    本が見つかりませんでした
    <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          閉じる
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'BookShow',
  props: ['book_inf'],
  data: () => ({
      url: 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=',
      appid: '1036259511343410249',
      show:false,
      snackbar: false,
  }),
  methods: {
    fetchSample: async function(param,query){
      // 非同期処理を記述
      if (param==='title'){
        const r=/[一-龠]+|[ぁ-ん]+|[ァ-ヴー]+|[a-zA-Z0-9]+|[ａ-ｚＡ-Ｚ０-９]+/g
        let q_list = query.match(r)
        q_list = q_list.filter(function (element) {
          return element.length > 1;
        })
        query = q_list[Math.floor(Math.random() * q_list.length)]
      }
      let result = ''
      await axios.get(this.url + this.appid+
                      '&booksGenreId=001004008'+
                      '&sort=sales'+
                      '&'+param+'='+query)
        .then(function (response) {
          let result_datas = response.data.Items
          let rand = Math.floor(Math.random() * Object.keys(result_datas).length)
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



 