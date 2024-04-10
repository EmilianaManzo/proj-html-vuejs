<script>
  import axios from 'axios';
  import { store } from './data/store';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import Utilities from './components/partialsGenerics/Utilities.vue';

  export default {
      components:{
        Header,
        Main,
        Footer,
        Utilities
      },
      data(){
        return{
          axios,
          store
        }
      }
  }
</script>


<template>
  <Utilities />
  <Header />
  <Main />
  <Footer />
</template>


<style lang="scss">
@use './assets/scss/main.scss'

</style>