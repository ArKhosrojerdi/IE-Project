<template>
  <div>
    <!-- Footer -->
    <footer>
      <div class="resp-container d-flex flex-row align-items-center justify-content-between rtl p-3 row">
        <div class="d-flex flex-column align-items-center container col-lg-4">
          <img src="../../public/images/svgs/footer-icon.svg" alt="" class="mt-2 ml-auto">

          <div class="mt-3 w-100">
            <p class="text-white text-14 lh-30 text-right rtl">
              درمانکده، ارائه دهنده خدمات آنلاین سلامت
              <br> (نوبت گیری اینترنتی، مشاوره آنلاین، آزمایش در محل و ...)
            </p>
          </div>
        </div>

        <div class="d-flex flex-row align-items-start py-0 container justify-content-between col-lg-4 row">
          <div class="px-3 col-lg-6">
            <ul class="text-center">
              <li class="w-100">
                <a href="">سؤالات متداول</a>
              </li>
              <li class="w-100">
                <a href="">قوانین و مقررات</a>
              </li>
              <li class="w-100">
                <a href="">شکایت</a>
              </li>
            </ul>
          </div>
          <div class="px-3 col-lg-6">
            <ul class="text-center">
              <li class="w-100">
                <a href="">درباره درمانکده</a>
              </li>
              <li class="w-100">
                <a href="">تماس با ما</a>
              </li>
              <li class="w-100">
                <a href="">مجله پزشکی</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column col-lg-4">
          <div class="d-flex flex-row justify-content-center mt-3">
<!--            <a href="" class="mx-3">-->
<!--              <img src="../../public/images/pngs/logo (1).aspx" alt="" class="e-namad rounded-20">-->
<!--            </a>-->
<!--            <a href="" class="mx-3">-->
<!--              <img src="../../public/images/pngs/logo.aspx" alt="" class="e-namad rounded-20">-->
<!--            </a>-->
          </div>

          <div class="w-50 mx-auto d-flex flex-row justify-content-between mt-3">
            <a href="" class="text-white"><i class="fab fa-2x fa-instagram"></i></a>
            <a href="" class="text-white"><i class="fab fa-2x fa-twitter"></i></a>
            <a href="" class="text-white"><i class="fab fa-2x fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright alert section -->
    <div class="container d-flex flex-row align-items-center justify-content-between rtl py-1">
      <p class="py-1 text-14 text-gray m-0">تمامی حقوق این سایت برای درمانکده محفوظ است</p>
      <p class="py-1 text-14 text-gray m-0">
        طراحی شده با
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-fill-red feather feather-heart" data-v-1c02d2dc=""><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" data-v-1c02d2dc=""></path></svg>            توسط تیم درمانکده
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniFooter"
}
</script>

<style scoped>

</style>