<script>
import {store} from '../../data/store';
  export default {
    props:{
      type:Number,
      text: String
    },
    data(){
      return{
        store,
      }
    },  
  }
</script>

<template>
  <button class="btn" :class="(type == 1 ? 'dark' :'light')">{{ text }} <span v-show="text == 'View all courses' "><i class="fa-solid fa-arrow-right"></i></span></button>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;

.dark,
.light{
  background-color: $bcg_button !important ;
  font-size: .8rem;
  color: $white-text;
  padding: 15px 40px;
  font-weight: bold;
}

.dark:hover{
  background-color:#ffffff !important   ;
  color:#1fad96; 
}
.light:hover{
  background-color:#1f2154 !important;
  color: #ffffff ;
}

i{
  margin-left: 10px; 
}
</style>