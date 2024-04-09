<script>
import { store } from '../data/store';
import Jumbotron from './partials/Jumbotron.vue';
import Service from './partials/Service.vue';
import Courses from './partials/Courses.vue';
import Sponsor from './partials/Sponsor.vue';
  export default {
    components:{
      Jumbotron,
      Service,
      Courses,
      Sponsor
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
    <Courses />
    <Sponsor />


  </main>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss'
</style>