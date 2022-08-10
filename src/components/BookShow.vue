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
      max-width="142.02"
      height="220"
      class="rounded-l"
    ></v-img>

    <v-col cols="7">
      <v-card-title>
        {{ book_inf.title | omittedText(31) }}
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
        :color="show_like ? 'pink' : '' "
        @click="show_like = !show_like"
        >
        <v-icon>{{ show_like ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
      </v-btn>

    <v-card-actions>
      <v-btn
        icon
        @click="show = !show"
        style="margin: 120px 0px 0px -145px;"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    </v-col>

  </v-row>
  <v-expand-transition>
    <div v-show="show">
      <v-divider></v-divider>
      <div class="mx-2">
        <v-card-text style="text-align: justify;">
          {{book_inf.itemCaption!=="" ? book_inf.itemCaption : "説明がありません。"}}
        </v-card-text>
        <center class="pb-5">
          <v-btn
          color="#BE0000"
          outlined
          width="92%"
          class="mb-2"
          :href="book_inf.itemUrl"
          target="_blank">楽天で詳細をみる</v-btn>
          <v-btn
          color="#f29100"
          style="text-transform: none"
          outlined
          width="92%"
          :href="'https://www.amazon.co.jp/s?k='+book_inf.isbn"
          target="_blank">Amazonで詳細をみる</v-btn>
        </center>
      </div>
    </div>
  </v-expand-transition>
  </v-card>
  <div class="text-center pt-4 pb-12">
  <v-btn fab large class="white mx-4" @click="get('title',book_inf.title)">
    <v-icon color="blue-grey darken-4">mdi-book-open-variant</v-icon>
  </v-btn>
  <v-btn fab large class="white mx-4" @click="get('author',book_inf.author)">
    <v-icon color="blue-grey darken-4">mdi-account</v-icon>
  </v-btn>
  <v-btn fab large class="white mx-4" @click="get('publisherName',book_inf.publisherName)">
    <v-icon color="blue-grey darken-4">mdi-office-building</v-icon>
  </v-btn>
  </div>
  <v-snackbar
      v-model="snackbar"
      :top="true">
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
      show_like:false,
  }),
  filters: {
    omittedText(text,n) {
    return text.length > n ? text.slice(0, n) + "…" : text;
    }
  },
}
</script>
