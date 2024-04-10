<script>
import {store} from '../../data/store';
export default {
  props:{
    info:Array
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
    <h5>Information</h5>
    <ul class=" p-0 ">
      <li class="mb-3" v-for="(item, i) in info" :key="`in-${i}`">{{ item }}</li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;
.col{
  width: 25% !important;
}
</style>