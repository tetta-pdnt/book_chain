<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
      <HelloWorld v-for="p_q in p_qs" :key="p_q" :param="p_q.param" :query="p_q.query" v-on:r_inf="test($event)"/>
  <!-- <p>{{book_inf}}</p> -->
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    p_qs:[{param:'title',query:'テスト'},
            {param:'title',query:'太陽'}]
  }),
  methods: {
    test(ev){
      this.p_qs.push({param:'title',query:ev['title']})
      this.p_qs.push({param:'author',query:ev['author']})
      this.p_qs.push({param:'publisherName',query:ev['publisher']})
    }
  }
};
</script>
