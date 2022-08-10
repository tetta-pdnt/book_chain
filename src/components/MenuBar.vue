<template>
  <div class="menu_bar">
    <v-speed-dial
      v-model="show"
      direction="bottom"
      transition="slide-y-transition"
    >
      <template v-slot:activator>
        <v-btn
          v-if="show"
          icon
          color="blue-grey darken-4"
        >
          <v-icon >
            mdi-close
          </v-icon>
        </v-btn>
        <v-app-bar-nav-icon
          v-model="show"
          v-else
        ></v-app-bar-nav-icon>
      </template>
      <v-btn
        fab
        dark
        small
        color="blue-grey darken-4"
      >
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn
        fab
        small
        dark
        color="red"
        @click="delete_books()"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'MenuBar',
  data: () => ({
    show: false,
  }),
  methods: {
    delete_books(){
      this.$emit('delete_books')
    }
  }
}
</script>



