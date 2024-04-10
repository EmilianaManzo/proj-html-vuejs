<script>
import { store } from '../data/store';
import Jumbotron from './partialsMain/Jumbotron.vue';
import Service from './partialsMain/Service.vue';
import Courses from './partialsMain/Courses.vue';
import Sponsor from './partialsMain/Sponsor.vue';
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