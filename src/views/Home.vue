<template>
  <div class="home">
    <Navbar/>
    <div class="content">
      <Slider/>
      <CategoriesHome/>
    </div>
    
    <Footer/>
    
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Slider from '@/components/Slider.vue'
import CategoriesHome from '@/components/CategoriesHome.vue'

export default {
  name: 'Home',
  components:{
    Navbar, Footer, Slider, CategoriesHome
  }
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  min-height: calc(100vh);
}
</style>

