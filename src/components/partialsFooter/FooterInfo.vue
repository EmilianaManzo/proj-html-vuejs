<script>
import {store} from '../../data/store';
export default {
  props:{
    address: Array,
    icons: Array,
  },
    data(){
      return{
        store
      }
    }
  }
</script>
<template>
    <h5>Address</h5>
    <p v-for="(item, i) in address" :key="`a-${i}`">{{ item}}</p>
    <div class="social">
      <span v-for="(item, i) in icons" :key="`i-${i}`"> 
        <a :href="item.href" target="_blank"><i :class="item.name"></i></a>
      </span>
    </div>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;
i{
  font-size: 1.3rem;
  margin-right: 20px;
  color: $grey-text;
}
</style>