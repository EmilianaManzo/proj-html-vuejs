<script>
import { store } from '../data/store';
import Navigator from './partials/Navigator.vue';
import Searchbar from './partials/Searchbar.vue';
import Chart from './partials/Chart.vue';

  export default {
    components:{
      Navigator,
      Searchbar,
      Chart
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <header>
    <div class="container h-100 ">
      <div class="row h-100 align-items-center justify-content-center  ">
        <div class="col h-100 col-logo m-0 p-0 ">
          <div class="logo h-100 d-flex align-items-center justify-content-center">
            <img src="../assets/img/light-logo.png" alt="logo">
          </div>
        </div>

        <Navigator
        :nav="store.header_nav"
        />

        <div class="col col-right p-0 d-flex align-items-center">
          <Chart />

          <div class="user mx-2">
            <i class="fa-regular fa-circle-user"></i>
          </div>

          <Searchbar />
        </div>
      </div>
    </div>
  </header>
</template>


<!-- TODO: fix counter chart -->
<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
header{
  height: 80px;
  background-color: $bcgc-header;
  color: $white-text;
  
  .col-logo,.col-right{
    width: 25% !important;
  }
  .col-logo{
    img{
      width: 50%
    }
  }


  .col-right{
    height: 100%;
    
  }
}

</style>