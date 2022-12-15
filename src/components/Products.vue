<template>
 <div>
   <template>
     <v-data-table
         :headers="headers"
         :items="products"
         :items-per-page="5"
         class="elevation-1"
     ></v-data-table>
   </template>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios";

export default Vue.extend({
  name: 'vProducts',
  data: () => ({
    products: [],
    headers: [
      {
        text: 'Id',
        value: 'id',
      },
      { text: 'Title', value: 'title' },
      { text: 'Description', value: 'body' },
      { text: 'UserId', value: 'userId' },
      { text: 'Reactions', value: 'reactions' },
      { text: 'Tags', value: 'tags' },
    ],
  }),
  mounted() {
    axios.get('https://dummyjson.com/posts', {
      params: {
        per_page: 10
      }
    })
    .then(res => {
      this.products = res.data.posts
    })
  }
})
</script>

<style scoped>

</style>