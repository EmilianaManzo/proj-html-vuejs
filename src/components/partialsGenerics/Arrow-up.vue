<script>
  export default {
    
  }
</script>


<template>
  <div class="arrowup">
    <i class="fa-solid fa-arrow-up"></i>
  </div>
</template>

<!-- TODO:creare funzione che ci riporti al top della pagina per la arrow -->
<!-- TODO:aggiungere dinamicamente la classe alla arrow per farla comparire -->
<style lang="scss" scoped>
@use '../../assets/scss/main.scss' as *;
.arrowup{
  height: 40px;
  width: 40px;
  background-color: $bcg_button ;
  color: $white-text ;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  position: fixed;
  right: 10px;
  top: 90vh;
  z-index: 9999;
  i{
    font-size: .8rem;
  }
}
</style>