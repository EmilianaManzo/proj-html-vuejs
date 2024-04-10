<script>
import {store} from '../../data/store';
  export default {
    props:{
      explore:Array
    },
    data(){
      return{
        store
      }
    }
  }
</script>
<template>
  <div class="col w-50 h-100">
      <h6>Explore</h6>
      <ul class=" p-0 ">
        <li class="mb-3" v-for="(item, i) in explore" :key="`e-${i}`">{{ item }}</li>

      </ul>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;
.col{
  width: 50% !important;
  ul{
    columns: 2; 
    li{
      color: $grey-text;
      font-weight: bold;
      font-size: 0.8rem;
    }  
  }
  h6{
    font-weight: bold;
    color: $dark-text;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }
}
</style>