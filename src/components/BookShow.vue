<template>
  <div class="book_show">
    <v-card
    elevation="2"
    class="mx-auto"
    max-width="450"
  >

  <v-row no-gutters>
    <v-img
      :src='book_inf.largeImageUrl'
      width="142.02"
      height="220"
      class="rounded-l"
    ></v-img>

    <v-col cols="7">
      <v-card-title>
        {{ book_inf.title | omittedText(32) }}
      </v-card-title>
      <v-card-subtitle>
      <br>
        {{book_inf.author}}<br>
        {{book_inf.publisherName}}
      </v-card-subtitle>
    </v-col>

    <v-col cols="1" class="mr-2">
      <v-btn
        icon
        class="mt-3"
        :retain-focus-on-click="false"
        :color="show_love ? 'red' : '' "
        @click="show_love = !show_love"
        >
        <v-icon>mdi-heart</v-icon>
      </v-btn>

    <v-card-actions style="position: relative z-index: 1">
      <v-btn
        icon
        @click="show = !show"
        absolute left
        style="margin: 270px 0px 0px 250px"
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
import Mixin from './mixins/mixin'

export default {
  name: 'BookShow',
  props: ['book_inf'],
  mixins: [Mixin],
  data: () => ({
      show:false,
      snackbar: false,
      show_love:false,
  }),
  methods: {
    filters: {
      omittedText(text,n) {
      return text.length > n ? text.slice(0, n) + "…" : text;
      }
    },
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



