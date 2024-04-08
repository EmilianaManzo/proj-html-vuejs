<script>
import { store } from '../data/store';
  export default {
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
        <nav class="col col-nav p-0 d-flex align-items-center justify-content-center">
            <ul class="ul-nav m-0">
              <li v-for="(element, indice) in store.nav" :key="indice"><a :href="element.url">{{ element.title }} </a> <i class="fa-solid fa-chevron-down"></i>
                <ul class="dropdown d-none">
                  <li v-for="(link, i) in element.navlink" :key="i">{{ link }}</li>
                </ul>
              </li>
            </ul>
        </nav>
        <div class="col col-right p-0 d-flex align-items-center">
          <div class="chart mx-2 ">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class=" d-inline-block counter">1</div>
          </div>
          <div class="user mx-2">
            <i class="fa-regular fa-circle-user"></i>
          </div>
          <div class="search">
            <input type="text" class="form-control w-75 ">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<!-- TODO: fix dropdow -->
<!-- TODO: fix counter chart -->
<!-- TODO: fix searchbar -->
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
  .ul-nav{
    @include centerFlex();
    padding: 0;
    li{
      @include centerFlex('both');
      font-size: .9rem;
      margin: 20px;
      position: relative;
      a{
        color: $white-text;
        margin-right:4px ;
      }
      i{
        font-size: .5rem;
      }
      .dropdown{
        position: absolute;
        left: 0;
        top:50px ;
      }

      &:hover .dropdown{
        display: inline !important;
      }
    } 
    :first-child{
      margin-left: 0px !important;
    }
    :last-child{
      margin-right: 10px !important;
    }
  }

  .col-right{
    height: 100%;
    i{
      font-size: 1rem;
    }
    .chart{
      @include centerFlex('vertical');
      position: relative;
      height: 100%;

      .counter{
        position: absolute !important;
        top:30%;
        left: 50%;
        background-color: $white-text ;
        color: $dark-text;
        font-size: .6rem;
        border-radius: 50%;
        padding: 0 4px;
      }
    }
    .search{
      @include centerFlex('vertical');
      background-color: $white-text;
      padding: 0 15px;
      border-radius: 5px ;
      input{
        border: none !important;
      }
      i{
        color: $green-text;
      }
    }
  }
}

</style>