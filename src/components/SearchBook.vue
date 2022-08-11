<template>
  <div class="serch_book" style="z-index: 100;">
    <v-col
      class="mx-auto"
      cols="8"
      lg="4"
      md="5"
      sm="5"
    >
      <v-text-field
        label="Search"
        placeholder="夏、アンドロイド、探偵、"
        class="serch"
        rounded
        solo
        v-model="search"
        @keydown.enter="search ? get('title',search) : ''">
        <template v-slot:append>
          <v-btn icon @click="search ? get('title',search) : ''">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <MenuBar @delete_books="delete_books()"/>
        </template>
      </v-text-field>
    </v-col>
  </div>
</template>

<script>
import Mixin from './mixins/mixin'
import MenuBar from './MenuBar';

export default {
  name: 'SearchBook',
  props: [],
  mixins: [Mixin],
  components: {
    MenuBar
  },
  data: () => ({
      snackbar: false,
      search:""
  }),
  methods:{
    delete_books(){
      this.$emit('delete_books')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.serch_book {
  position: sticky;
  top: 1rem;
}
</style>



