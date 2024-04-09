<script>
import { store } from '../data/store';
import Jumbotron from './partials/Jumbotron.vue';
import Service from './partials/Service.vue';
  export default {
    components:{
      Jumbotron,
      Service
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <main>
    <Jumbotron />
    <Service />
    
  </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss'
</style>