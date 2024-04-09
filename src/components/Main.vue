<script>
import { store } from '../data/store';
import Jumbotron from './partials/Jumbotron.vue';
  export default {
    components:{
      Jumbotron,
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
  </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss'
</style>