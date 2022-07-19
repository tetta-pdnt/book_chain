<template>
  <v-app>
    <v-main><v-row align-content="center" class="mt-16">
      <v-col class="mt-10">
        <v-img
          src="@/assets/img/logo.png"
          max-width=400
          class="mx-auto mb-n13 pt-n10"
        ></v-img></v-col></v-row>
      <SearchBook v-on:r_inf="push_new_inf($event)"/>
      <BookShow v-for="b in books" :key="b.title" :book_inf="b" v-on:r_inf="push_new_inf($event)"/>
      <v-snackbar 
      v-model="snackbar"
      top=true>
    すでにCHAINされている本です
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
  <!-- <p>{{book_inf}}</p> -->
    </v-main>
  </v-app>
</template>

<script>
import BookShow from './components/BookShow';
import SearchBook from './components/SearchBook';

export default {
  name: 'App',

  components: {
    BookShow,
    SearchBook
  },

  data: () => ({
    snackbar:false,
    books:[]
  }),
  methods: {
    scroll() {
      const scrollY = window.scrollY || window.pageYOffset
      window.scrollTo({
        top: scrollY + 1000,
        behavior: 'smooth'
      })
    },
    push_new_inf(ev){
      if (this.books.map(item => item.title).includes(ev.title)){
        this.snackbar = true
      }
      else{
        this.books.push(ev)
        this.$nextTick(function() {
          this.scroll();
        });
      }
    }
  }
};
</script>
