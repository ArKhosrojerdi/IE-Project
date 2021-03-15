<template>
  <!-- Header of the website has implemented here -->
  <header class="rtl mb-3">
    <div class="container header-nav">
      <div class="header-logo text-right">
        <router-link to="/">
          <img src="../../public/images/svgs/header-icon.svg" alt="">
        </router-link>
      </div>

      <ul>
        <li class="mt-2">
          <a href="">
            <i class="fas fa-list"></i> لیست تخصص ها
          </a>
        </li>
        <li class="mt-2">
          <a href="">
            <i class="fas fa-wifi"></i> مشاوره آنلاین
          </a>
        </li>
        <li class="mt-2">
          <a href="">
            <i class="fas fa-book"></i> مجله پزشکی
          </a>
        </li>
        <li class="mt-2">
          <a href="">
            <i class="fas fa-user-plus"></i> عضویت پزشکان
          </a>
        </li>
        <li class="mt-2">
          <a href="">
            <i class="fas fa-box"></i> کرونا سازمانی
          </a>
        </li>
      </ul>

      <div class="login d-flex flex-column align-items-center justify-content-center">
        <router-link to="/login" class="link my-auto">
          ورود
          <i class="fas fa-sign-in-alt"></i>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
a {
  color: #3b4157;
}

a:hover {
  color: #fb815e;
}
</style>