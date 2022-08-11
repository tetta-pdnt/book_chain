<template>
  <v-main>
    <router-link to="/">ホームへ</router-link>
    <!-- <v-row align-content="center" class="mt-16">
      <v-col class="mt-10">
        <v-img
          src="@/assets/img/logo.png"
          max-width=400
          class="mx-auto mb-n13 pt-n10"
        ></v-img>
      </v-col>
    </v-row> -->
    <v-container class="grey lighten-5">
      <v-row dense>
        <BookCard v-for="b in like_books" :key="b.title" :book_inf="b" />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import BookCard from './../components/BookCard';


export default {
  components: {
    BookCard,
  },

  data: () => ({
    snackbar:false,
    books:[]
  }),
  mounted : function(){
    this.books = JSON.parse(localStorage.getItem('books'));
    if (this.books == null){
      this.books = []
    }
  },
  computed: {
    like_books: function(){
      return this.books.filter(function(books){
        return books.like === true
      })
    }
  },
};
</script>
