<script>
import { store } from '../data/store';
import FooterInfo from './partials/FooterInfo.vue';
import FooterExplore from './partials/FooterExplore.vue';
import FooterRightInfo from './partials/Footer-right-info.vue';
  export default {
    data(){
      return{
        store
      }
    },
    components:{
      FooterInfo,
      FooterExplore,
      FooterRightInfo
    }
  }
</script>
<!-- TODO:fix fpnt-size e distanze -->
<template>
  <footer>
    <div class="container h-100">
      <div class="row row-upper h-75 flex-wrap align-content-center ">
        <div class="col">
          <FooterInfo
          :address="store.footernav.address" 
          :icons="store.footernav.icons"/>
        </div>
        <div class="col">
          <div class="row align-content-center ">
            <FooterExplore 
            :explore="store.footernav.explore"/>
            <FooterRightInfo
            :info="store.footernav.information" />
          </div>
        </div>
      </div>
      <div class="row row-bottom h-25">
        <div class="col">

        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

footer{
  height: 400px;
  background-color:$block-bcg ;
}
</style>