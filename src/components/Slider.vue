<template>
  <div class="carousel carousel-slider center">
    <SliderItem
    v-for="product in products"
    :key="product.id"
    :product_data="product"
    />
    <a @click="instance.next()" id="arrow_forward"></a>
     <a @click="instance.prev()" id="arrow_back"></a>
  </div>
  
</template>


<script>
import M from "materialize-css";
import SliderItem from "@/components/SliderItem.vue";

export default {
  name: "Slider",
  components: {
    SliderItem
  },
  data() {
    return {
      products: [
        {
          id: 1,
          image: "http://localhost:8000/media/products/58411011_365617980716052_2498513130430006403_n.jpg",
          link: "#"
        },
        {
          id: 2,
          image: "2.jpg",
          link: "#"
        },
        {
          id: 3,
          image: "3.jpg",
          link: "#"
        },
        {
          id: 4,
          image: "4.jpg",
          link: "#"
        }
      ],
      instance: null
    };
  },
  mounted() {
    var elems = document.querySelector(".carousel");
    // eslint-disable-next-line
    new M.Carousel(elems, {
      fullWidth: true,
      indicators: true
    });
    this.instance = M.Carousel.getInstance(elems);
  },
};
</script>

<style>

#arrow_forward , #arrow_back{
  z-index: 100;
  position: absolute;
  display: flex;
  top: 50%;
}
#arrow_back{
  left: 0;
}
#arrow_forward{
  right: 0;
}
#arrow_forward::after{
   content: "arrow_forward";
   font-family: 'Material Icons';
   font-weight: normal;
   font-style: normal;
   font-size: 2em;
   line-height: 50px;
   color: #fff; 
}
#arrow_back::after{
   content: "arrow_back";
   font-family: 'Material Icons';
   font-weight: normal;
   font-style: normal;
   font-size: 2em;
   line-height: 50px;
   color: #fff; 
}
  
</style>

