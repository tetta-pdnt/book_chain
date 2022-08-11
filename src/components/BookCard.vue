<template>
  <div class="book_card">
    <v-col>
      <v-img
        :src='book_inf.largeImageUrl'
        max-width="142.02"
        class="rounded"
      ></v-img>
    </v-col>
    <!-- <v-card
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
            :color="book_inf.like ? 'pink' : '' "
            @click="like()"
            >
            <v-icon>{{ book_inf.like ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
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
    </v-card> -->
  </div>
</template>

<script>

export default {
  name: 'BookCard',
  props: ['book_inf'],
  data: () => ({
      show: false,
      snackbar: false,
  }),
  filters: {
    omittedText(text,n) {
    return text.length > n ? text.slice(0, n) + "…" : text;
    }
  },
  methods: {
    like(){
      this.$emit('like',this.book_inf.title)
    }
  }
}
</script>
