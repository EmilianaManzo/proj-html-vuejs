<script>
import {store} from '../../data/store';
  export default {
    props:{
      nav:Array
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <nav class="col col-nav p-0 d-flex align-items-center justify-content-center">
      <ul class="ul-nav m-0">
        <li v-for="(element, indice) in nav" :key="indice"><a  :href="element.url">{{ element.title }} </a> <i class="fa-solid fa-chevron-down"></i>
          <ul class="dropdown d-none">
            <li v-for="(link, i) in element.navlink" :key="i">{{ link }}</li>
          </ul>
        </li>
      </ul>
  </nav>
</template>

<!-- TODO: fix dropdow -->
<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

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

</style>