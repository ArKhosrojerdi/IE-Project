<template>
  <div>
    <!-- Footer -->
    <footer class="d-flex flex-column align-items-center justify-content-center">
      <div class="d-flex flex-column align-items-center my-container">
        <img src="../../public/images/svgs/footer-icon.svg" alt="" class="mt-2">

        <div class="mt-3">
          <p class="text-white text-14 lh-30 text-center">
            درمانکده، ارائه دهنده خدمات آنلاین سلامت
            <br> (... نوبت گیری اینترنتی، مشاوره آنلاین، آزمایش در محل و)
          </p>
        </div>
      </div>

      <div class="d-flex flex-row align-items-start py-0 my-container justify-content-between rtl">
        <div class="px-3">
          <ul class="text-center">
            <li>
              <a href="">درباره درمانکده</a>
            </li>
            <li>
              <a href="">تماس با ما</a>
            </li>
            <li>
              <a href="">مجله پزشکی</a>
            </li>
          </ul>
        </div>
        <div class="w-100 d-flex flex-column align-items-center">
          <div class="w-50 mx-auto d-flex flex-row justify-content-between">
            <a href="" class="text-white"><i class="fab fa-2x fa-linkedin-in"></i></a>
            <a href="" class="text-white"><i class="fab fa-2x fa-twitter"></i></a>
            <a href="" class="text-white"><i class="fab fa-2x fa-instagram"></i></a>
          </div>

          <div class="vertical-line bg-white mt-4"></div>
        </div>
        <div class="px-3">
          <ul class="text-center">
            <li>
              <a href="">سؤالات متداول</a>
            </li>
            <li>
              <a href="">قوانین و مقررات</a>
            </li>
            <li>
              <a href="">شکایت</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="my-container pb-1 d-flex flex-column align-items-center">
        <div class="w-35">
          <div>
            <p class="text-white text-14 lh-30 text-center mx-auto mt-0">
              با ثبت‌نام در خبرنامه درمانکده، اولین نفری باشید که از جدیدترین خبرها، جشنواره‌ها و تخفیف های ویژه ما مطلع
              می‌شوید
            </p>
          </div>

          <div class="w-100">
            <div class="d-flex flex-column w-100">
              <div class="d-flex flex-row rtl">
                <input type="text" placeholder="نام" class="w-50 ml-1">
                <input type="text" placeholder="نام خانوادگی" class="w-50">
              </div>

              <div class="d-flex flex-row rtl mt-1">
                <input type="email" placeholder="ایمیل" class="w-100 m-0">
              </div>
            </div>

            <div class="send-link mt-2">
              <button class="w-100 text-18">عضو می شوم</button>
            </div>
          </div>

          <div class="d-flex flex-row justify-content-center mt-3">
            <!--            <a href="#" class="mx-2">-->
            <!--              <img src="../../public/images/pngs/logo.aspx" alt="" class="e-namad">-->
            <!--            </a>-->
            <!--            <a href="" class="mx-2">-->
            <!--              <img src="../../public/images/pngs/logo(1).aspx" alt="" class="e-namad">-->
            <!--            </a>-->
          </div>
        </div>
      </div>
    </footer>

    <!-- Copyright alert section -->
    <div class="my-container d-flex flex-row justify-content-between align-items-center rtl py-1">
      <p class="m-0 py-2 text-14 text-gray">تمامی حقوق این سایت برای درمانکده محفوظ است</p>
      <p class="m-0 py-2 text-14 text-gray">
        طراحی شده با
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="svg-fill-red feather feather-heart" data-v-1c02d2dc="">
          <path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              data-v-1c02d2dc=""></path>
        </svg>
        توسط تیم درمانکده
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter"
}
</script>

<style scoped>

</style>