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
  <div class="chart mx-2 ">
    <i class="fa-solid fa-cart-shopping"></i>
    <div class=" d-inline-block counter">1</div>
  </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

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
</style>