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
  <div class="search">
    <input type="text" class="form-control w-75 ">
    <i class="fa-solid fa-magnifying-glass"></i>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

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

</style>