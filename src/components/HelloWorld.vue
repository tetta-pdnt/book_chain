<!--<template>
  <v-hover v-slot:default="{ hover }">
    <v-card
      :elevation="hover ? 12 : 2"

      class="mx-auto"
      max-width="344"
    >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="text-h5 mb-1">
              Headline 5
            </v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          ></v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
          >
            Button
          </v-btn>
        </v-card-actions>

    </v-card>
  </v-hover>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>-->


<template>
  <div class="hello">
    <v-btn elevation="2" @click="get()">{{param}}:{{query}}</v-btn><br>
      <v-hover v-slot:default="{ hover }" v-if="rakuten_book.length!==0">
    <v-card
      :elevation="hover ? 12 : 2"
      class="mx-auto"
      max-width="300"
    >
    <v-img
      :src='rakuten_book.largeImageUrl'
      max-width="150">
        <v-list-item three-line>
          <v-list-item-content>
            <v-row justify="end">
            <v-card-title class="text-h5 ml-1 text-end">
              {{rakuten_book.title}}
            </v-card-title>
            </v-row>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>


        </v-list-item>

        <v-card-actions>
          <v-btn
            outlined
            rounded
            text
          >
            Button
          </v-btn>
        </v-card-actions>
      </v-img>
    </v-card>
  </v-hover>   
    <p></p>
    <p>{{rakuten_book.author}}</p>
    <p>{{rakuten_book.publisherName}}</p>
    <p>{{rakuten_book.itemCaption}}</p>
    <!-- <p>{{dataa}}</p> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: ['param','query'],
  data: () => ({
      url: 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?applicationId=',
      appid: '1036259511343410249',
      rakuten_book: [],
  }),
  methods: {
      fetchSample: async function(){
      // 非同期処理を記述
      let self = this
      await axios.get(this.url + this.appid+
                      '&booksGenreId=001004008'+
                      '&'+self.param+'='+self.query)
        .then(function (response) {
          self.rakuten_book=response.data.Items[1].Item
        })
        .catch((error) => {
          this.errorMsg = 'Error! Could not reach the API. ' + error
          console.log(this.errorMsg)
        })
      return this.rakuten_book
    },
    get: async function(){
      // this.fetchSample()の実行が完了するまで待機
      let result = await this.fetchSample()
      const r_inf = {'title':result.title,
                    'author':result.author,
                    'publisher':result.publisherName,}
      this.$emit('r_inf',r_inf)
    },
  }
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



 