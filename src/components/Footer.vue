<script>
import { store } from '../data/store';
import FooterInfo from './partialsFooter/FooterInfo.vue';
import FooterExplore from './partialsFooter/FooterExplore.vue';
import FooterRightInfo from './partialsFooter/Footer-right-info.vue';
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

<template>
  <footer>
    <div class="container h-100">
      <div class="row row-upper h-75 flex-wrap align-content-center justify-content-center  ">
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
      <div class="row row-bottom justify-content-center align-items-center">
        <div class="col py-5  text-center">
          <p><i class="fa-regular fa-copyright"></i> 2020 Maxcoach. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

footer{
  background-color:$block-bcg ;
  padding: 95px 0;

  .row-bottom{
    p{
      font-size: 0.7rem;
      color: $grey-text;
    }
  }
}
</style>