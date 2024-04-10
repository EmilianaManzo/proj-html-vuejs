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
    <h6>Information</h6>
    <ul class=" p-0 ">
      <li class="mb-3" v-for="(item, i) in info" :key="`in-${i}`">{{ item }}</li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;
.col{
  width: 25% !important;

  h6{
    font-weight: bold;
    color: $dark-text;
    font-size: 0.9rem;
    margin-bottom: 20px;
  }

  li{
      color: $grey-text;
      font-weight: bold;
      font-size: 0.8rem;
    }  
}
</style>