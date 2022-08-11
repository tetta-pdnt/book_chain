<template>
  <v-main>
    <v-container>
      <v-row class="mt-16">
        <v-col class="mt-10">
          <v-img
            src="@/assets/img/logo.png"
            max-width=400
            class="mx-auto mb-n13 pt-n10"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <SearchBook @r_inf="push_new_inf($event)" @delete_books="delete_books()"
    class="mb-9"/>
    <BookShow v-for="b in books" :key="b.title" :book_inf="b" @r_inf="push_new_inf($event)" @like="like($event)"
    />
    <v-snackbar
    v-model="snackbar"
    :top="true">
    すでにCHAINされている本です
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >閉じる
        </v-btn>
      </template>
    </v-snackbar>
  </v-main>
</template>

<script>
import BookShow from './../components/BookShow';
import SearchBook from './../components/SearchBook';


export default {
  components: {
    BookShow,
    SearchBook,
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
  methods: {
    scroll() {
      const scrollY = window.scrollY || window.pageYOffset
      window.scrollTo({
        top: scrollY + document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    },
    push_new_inf(ev){
      if (this.books !== null && this.books.map(item => item.title).includes(ev.title)){
        this.snackbar = true
      }
      else{
        this.books.push(ev)
        localStorage.setItem('books', JSON.stringify(this.books))
        this.$nextTick(function() {
          this.scroll()
        })
      }
    },
    delete_books(){
      this.books = []
      localStorage.setItem('books', JSON.stringify(this.books))
      //booksはpushのために配列である必要がありremoveは使わない
    },
    like(ev){
      var index = this.books.map(item => item.title).indexOf(ev)
      this.books[index].like = !this.books[index].like
      localStorage.setItem('books', JSON.stringify(this.books))
    }
  }
};
</script>
