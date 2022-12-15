<template>
 <div>
   <Products />
   <Cards />
 </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Products from './components/Products.vue';
import Cards from './components/Cards.vue'

export default Vue.extend({
  name: 'App',

  components: {
    Products,
    Cards
  },

  data: () => ({

  }),
});
</script>


<style>
@import '~vuetify/dist/vuetify.min.css';
* {
  font-family: "Roboto", sans-serif;
}
</style>