<template>
  <div>
    <Navbar />
    
    <Loader v-if="loading" />
    <div class="container" v-else>
      <form name="filter" class="filter">
   
      <div class="row">
        <div class="input-field col s3 m3">
          <Select
          :options="CATEGORIES"
          :name="'Категория'"
          @select="sortByCategories"
          @change="toggleHeader"
          />
           <p>Какой то текст {{selected}}</p>
        </div>
        
        
         <div class="input-field col s3 m3">
          <Select
          :options="SUBJECTS"
          :name="'Тематика'"
          @select="sortByCategories"
          @change="toggleHeader"
          />
          
        </div>
         <div class="input-field col s3 m3">
          <Select/>
        </div>
         <div class="input-field col s3 m3">
          <Select/>
        </div>
        <!-- <div class="input-field col s3 m3">
          <select ref="select_subjects" v-model="subjects">
            <option value disabled selected>Тематика</option>
            <option v-for="category in categories" :key="category.id">{{category.title}}</option>
          </select>
        </div>
        <div class="input-field col s3 m3">
          <select ref="select_size" v-model="size">
            <option value disabled selected>Размер</option>
            <option v-for="category in categories" :key="category.id">{{category.title}}</option>
          </select>
        </div>
        <div class="input-field col s3 m3">
          <select class="col s3 m3" ref="select_material" v-model="material">
            <option value disabled selected>Материал</option>
            <option v-for="category in categories" :key="category.id">{{category.title}}</option>
          </select>
        </div> -->
      </div>
      <div class="row">
        <div class="container">
          <label class="col s3 m3">
            <input type="checkbox" />
            <span>Новое</span>
          </label>

          <label class="col s3 m3">
            <input type="checkbox" />
            <span>Топ продаж</span>
          </label>

          <label class="col s3 m3">
            <input type="checkbox" />
            <span>Акции</span>
          </label>

          <label class="col s3 m3">
            <input type="checkbox"  />
            <span>Коллекции</span>
          </label>
     
        </div>
      </div>
      <div class="row">

        <a class="btn col s2 m2 offset-s5 offset-m5"
        @click="getFormFilter">Показать</a>
      
      </div>

      <div class="row"></div>
  
 
    </form>
    
    <div class="catalog" >
      <div class="row">
        <div class="col s6 m6">
          <span class="sort">Сортировка</span>
        <a class="sort" href="#">По популярности</a>
        <a class="sort" href="#">По новизне</a>
        </div>
      </div>

      <div class="row">
        <CatalogItem v-for="item in items" :key="item.id" :product_data="item" />
      </div>
      <div class="row">
        <div class="col s2 m2 offset s5 m5"></div>
        <Paginate center
          v-model="page"
          :page-count="pageCount"
          :click-handler="pageChangeHandler"
          :prev-text="'1'"
          :next-text="'2'"
          :container-class="'pagination'"
          :page-class="'waves-effect'"
        />
      </div>
    </div>
    </div>
     <Footer/>
    <a v-scroll="handleScroll" @click="clickArrowUp" id="button"></a>
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem";
import paginationMixin from "@/mixins/pagination.mixin.js";
import { mapActions, mapGetters } from "vuex";
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue';
import Loader from '@/components/Loader.vue';
import Select from '@/components/Select.vue'
import Vue from "vue";

Vue.directive("scroll", {
  inserted(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

export default {
  name: "catalog",
  mixins: [paginationMixin],
  components: { CatalogItem, Navbar, Footer, Loader, Select },
  data() {
    return {
      loading: true,
      products: [],
      category: null,
      size: null,
      subjects: null,
      material: null,
      sortedProducts: [],
      selected: ''
    };
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CATEGORIES", "SUBJECTS"]),
    filteredProducts(){
      if (this.sortedProducts.length){
        return this.sortedProducts
      }
      else{
        return this.PRODUCTS
      }
    }
  },
  async mounted() {
    await this.GET_PRODUCTS_FROM_API();
    await this.GET_CATEGORIES_FROM_API();
    await this.GET_SUBJECTS_FROM_API();
    this.setupPagination(this.PRODUCTS);
    this.loading = false
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "GET_CATEGORIES_FROM_API", "GET_SUBJECTS_FROM_API"]),
    handleScroll(evt, el) {
      if (window.scrollY > 50) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, -10px, 0)"
        );
      }
      if (window.scrollY < 50) {
        el.setAttribute(
          "style",
          "opacity: 0; transform: translate3d(0, -10px, 0)"
        );
      }
    },
    clickArrowUp() {
      window.scroll(0, 0);
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    getFormFilter(){
      
    },
    toggleHeader(categoryName){
      console.log('toggle', categoryName)
      this.selected = categoryName;
    },
    sortByCategories(category){
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item){
        if (item.category === category.id){
          vm.sortedProducts.push(item);
        }
      }) 
    }
  }
};
</script>

<style scoped>
.filter {
  background-color: orange;
  margin-top: 20px;
}

label {
  position: relative;
}
.sort{
  margin-right: 20px;
}

#button {
  display: inline-block;
  background-color: #ff9800;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  margin: 30px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
}
#button:hover {
  cursor: pointer;
  background-color: #333;
}
#button:active {
  background-color: #555;
}
#button::after {
  content: "arrow_upward";
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}
</style>