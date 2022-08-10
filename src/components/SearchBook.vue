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
        class="serch"
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
import Mixin from './mixins/mixin'

export default {
  name: 'SearchBook',
  props: [],
  mixins: [Mixin],
  data: () => ({
      show:false,
      snackbar: false,
      search:""
  }),
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
.serch_book {
  position: sticky;
  top: 1rem;
  z-index: 1;
}
</style>



