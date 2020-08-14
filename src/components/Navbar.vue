<template>
  <div class="navbar-fixed">
    <nav>
      <div class="grey nav-wrapper">
        <div class="container">
          <!-- <a href="#" class="button-collapse"></a> -->
          <!--Меню в шапке-->
          <ul class="hide-on-med-and-down" id="nav-mobile">
            <li>
              <router-link to="/">
                <i class="material-icons">cloud</i>
              </router-link>
            </li>
            <li>
              <router-link to="/about">О нас</router-link>
            </li>
            <li>
              <router-link to="/catalog">Каталог</router-link>
            </li>
            <li>
              <router-link to="/">На заказ</router-link>
            </li>
            <li>
              <router-link to="/">Опт</router-link>
            </li>
            <li>
              <router-link to="/">Партнеры</router-link>
            </li>
          </ul>
          <ul class="shopping-cart hide-on-med-and-down" id="nav-mobile">
            <!-- <li>
              <router-link to="/">Войти</router-link>
            </li> -->
            <li>
              <router-link to="/cart">
                <i class="material-icons">shopping_cart</i>
              </router-link>
            </li>
          </ul>

          <!--Боковое меню-->
          <!-- <ul class="sidenav" id="slide-out">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>-->
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.shopping-cart {
  position: absolute;
  right: 0;
  margin-right: 20px;
}
</style>