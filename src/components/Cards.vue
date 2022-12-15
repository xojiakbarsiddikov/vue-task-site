<template>
 <div style="margin-top: 70px">
   <h1>Cards</h1>
   <div class="grid">
     <div v-for="card in cards" :key="card.id">
       <v-card
           :loading="loading"
           class="mx-auto my-12"
           max-width="374"
       >
         <template slot="progress">
           <v-progress-linear
               color="deep-purple"
               height="10"
               indeterminate
           ></v-progress-linear>
         </template>

         <v-img
             height="250"
             src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
         ></v-img>

         <v-card-title>{{ card.title }}</v-card-title>

         <v-card-text>
           <v-row
               align="center"
               class="mx-0"
           >

           </v-row>

           <div class="my-4 text-subtitle-1">
             {{ card.stock }}
           </div>

           <div>{{ card.description }}</div>
         </v-card-text>

         <v-divider class="mx-4"></v-divider>

         <v-card-title>{{ card.id }}</v-card-title>

         <v-card-text>
           <v-chip-group
               v-model="selection"
               active-class="deep-purple accent-4 white--text"
               column
           >
             <v-chip>5:30PM</v-chip>

             <v-chip>7:30PM</v-chip>

             <v-chip>8:00PM</v-chip>

             <v-chip>9:00PM</v-chip>
           </v-chip-group>
         </v-card-text>

         <v-card-actions>
           <v-btn
               color="deep-purple lighten-2"
               text
               @click="reserve"
           >
             Reserve
           </v-btn>
         </v-card-actions>
       </v-card>
     </div>

   </div>
 </div>
</template>

<script>
import axios from "axios";

export default {
  name: "vCards",
  data: () => ({
    loading: false,
    selection: 1,
    cards: []
  }),
  mounted() {
    axios.get('https://dummyjson.com/products', {
      params: {
        limit: 10
      }
    })
        .then(res => {
          this.cards = res.data.products
          console.log(this.cards)
        })
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 30px auto;
    max-width: 83%;
    gap: 40px;
  }
  @media(max-width: 800px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media(max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>