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
  <button class="btn btn-getstartedfree">Get started for free</button>
</template>

<!-- TODO: FARE HOVER DIFFERENTI CON MIXIN -->
<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.btn-getstartedfree{
  background-color: $bcg_button !important;
  font-size: .8rem;
  color: $white-text;
  padding: 15px 40px;
  font-weight: bold;
}
</style>