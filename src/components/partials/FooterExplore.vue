<script>
import {store} from '../../data/store';
  export default {
    data(){
      return{
        store
      }
    }
  }
</script>
<template>
  <div class="col w-50 h-100">
      <h5>Explore</h5>
      <ul class=" p-0 ">
        <li class="mb-3" v-for="(item, i) in store.footernav.explore" :key="`e-${i}`">{{ item }}</li>
      </ul>
  </div>
</template>


<style lang="scss" scoped>
.col{
  width: 50% !important;
  ul{
    columns: 2;   
  }
}
</style>