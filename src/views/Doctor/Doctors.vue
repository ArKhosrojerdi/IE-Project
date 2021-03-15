<template>
  <div>
    <main role="main" class="bg-250">
      <section class="container bg-250">
        <nav class="py-3">
          <ol class="row rtl p-0 m-0">
            <li class="breadcrumb-item">
              <a href="#" class="text-water-blue">
                درمانکده
                <i class="fas fa-angle-left mr-2"></i>
              </a>
            </li>
            <li class="text-light-gray mr-2" aria-current="page">مشاوره آنلاین</li>
          </ol>
        </nav>
      </section>

      <section class="container">
        <div class="bg-water-blue rounded-10 text-right p-3">
          <h1 class="text-28 text-white text-bold pb-1">
            لیست و اطلاعات پزشک‌ها و متخصصین ارائه دهنده مشاوره آنلاین
          </h1>
          <p class="text-14 text-white mb-0 mt-3">
            اگر امکان حضور در مطب ندارید و یا قصد دارید در سریع‌ترین زمان بیماری و درمان آن را پیدا کنید، میتوانید از
            طریق مشاوره آنلاین درمانکده، به صورت متنی٬ صوتی یا تصویری با متخصصین ارتباط برقرار کنید
          </p>
        </div>
      </section>

      <section class="container py-3 mt-2 rtl">
        <div class="row w-100 mx-auto">

          <!-- Sidebar section -->
          <div class="col-lg-3 text-light-gray px-0 position-static">
            <aside class="w-100 position-sticky fixed-top">
              <!-- Image -->
              <div>
                <img src="../../../public/images/pngs/65c8ef8.png" alt="" class="img-fluid">
              </div>

              <!-- Search Box -->
              <div class="rounded-10 border border-light-gray p-3 rtl mt-3 bg-white">
                <h5 class="text-bold text-16 text-right pb-2 text-dark-gray">
                  جستجو در نتایج
                </h5>
                <div class="d-flex flex-column justify-content-center text-right py-3 mt-1 border-top">
                  <div action="" class="search-field w-100">
                    <input type="text" class="w-100 border-0 rounded-5 text-14 bg-250 text-right"
                           placeholder="نام و یا نام خانوادگی پزشک را بنویسید.">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="flip-horizontal dr-search__icon feather feather-search" data-v-ab4dbc62="">
                      <circle cx="11" cy="11" r="8" data-v-ab4dbc62=""></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65" data-v-ab4dbc62=""></line>
                    </svg>
                  </div>
                </div>
              </div>

              <!-- Specialty list -->
              <div class="rounded-10 border border-light-gray px-3 py-2 rtl mt-3 bg-white">
                <a href="">
                  <div class="d-flex flex-row align-items-center pb-2">
                    <h5 class="text-normal text-18 text-right text-dark-gray m-0">
                      تخصص
                    </h5>
                    <i class="fas fa-angle-up mr-auto text-water-blue"></i>
                  </div>
                </a>
                <div class="d-flex flex-column text-right py-3 mt-1 border-top">
                  <ul class="m-0 p-0 rtl text-right">
                    <li>
                      <i class="far fa-circle text-orange ml-3"></i> متخصص پوست و مو
                    </li>
                    <li class="mt-3">
                      <i class="far fa-circle text-orange ml-3"></i> متخصص گوش، حلق و بینی
                    </li>
                    <li class="mt-3">
                      <i class="far fa-circle text-orange ml-3"></i> متخصص روانشناسی
                    </li>
                    <li class="mt-3">
                      <i class="far fa-circle text-orange ml-3"></i> متخصص زنان و زایمان
                    </li>
                    <li class="mt-3">
                      <i class="far fa-circle text-orange ml-3"></i> متخصص خون و آنکولوژی
                    </li>
                    <li class="mt-3">
                      <i class="far fa-circle text-orange ml-3"></i> متخصص روماتولوژی
                    </li>
                    <li class="mt-3">
                      <i class="far fa-circle text-orange ml-3"></i> متخصص بیماری‌های عفونی
                    </li>
                    <li class="mt-3">
                      <i class="far fa-circle text-orange ml-3"></i> متخصص گوارش و کبد
                    </li>
                    <li class="mt-3">
                      <i class="far fa-circle text-orange ml-3"></i> متخصص مغز و اعصاب
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Appointment -->
              <div class="rounded-10 border border-light-gray px-3 py-2 rtl mt-3 bg-white">
                <a href="">
                  <div class="d-flex flex-row align-items-center">
                    <h5 class="text-normal text-18 text-right text-dark-gray m-0">
                      زمان نوبت
                    </h5>
                    <i class="fas fa-angle-down mr-auto text-water-blue"></i>
                  </div>
                </a>
                <!-- <div class="d-flex flex-column text-right py-3 mt-1 border-top">
                    <ul class="m-0 p-0 rtl text-right">
                        <li>
                            <i class="far fa-circle text-orange ml-3"></i> متخصص پوست و مو
                        </li>
                        <li class="mt-3">
                            <i class="far fa-circle text-orange ml-3"></i> متخصص گوش، حلق و بینی
                        </li>
                        <li class="mt-3">
                            <i class="far fa-circle text-orange ml-3"></i> متخصص روانشناسی
                        </li>
                        <li class="mt-3">
                            <i class="far fa-circle text-orange ml-3"></i> متخصص زنان و زایمان
                        </li>
                        <li class="mt-3">
                            <i class="far fa-circle text-orange ml-3"></i> متخصص خون و آنکولوژی
                        </li>
                        <li class="mt-3">
                            <i class="far fa-circle text-orange ml-3"></i> متخصص روماتولوژی
                        </li>
                        <li class="mt-3">
                            <i class="far fa-circle text-orange ml-3"></i> متخصص بیماری‌های عفونی
                        </li>
                        <li class="mt-3">
                            <i class="far fa-circle text-orange ml-3"></i> متخصص گوارش و کبد
                        </li>
                        <li class="mt-3">
                            <i class="far fa-circle text-orange ml-3"></i> متخصص مغز و اعصاب
                        </li>
                    </ul>
                </div> -->
              </div>

              <!-- Sex -->
              <div class="rounded-10 border border-light-gray px-3 py-2 rtl mt-3 bg-white">
                <a href="">
                  <div class="d-flex flex-row align-items-center">
                    <h5 class="text-normal text-18 text-right text-dark-gray m-0">
                      جنسیت
                    </h5>
                    <i class="fas fa-angle-down mr-auto text-water-blue"></i>
                  </div>
                </a>
              </div>

              <!-- Show available online consultants -->
              <div class="rounded-10 border border-light-gray px-3 py-2 rtl mt-3 bg-white">
                <a href="">
                  <div class="d-flex flex-row align-items-center">
                    <h5 class="text-normal text-16 text-right text-dark-gray m-0">
                      نمایش پزشکان دارای مشاوره آنلاین
                    </h5>
                    <i class="fas fa-toggle-off mr-auto text-water-blue"></i>
                  </div>
                </a>
              </div>
            </aside>
          </div>

          <div class="mx-auto col-lg-9 pl-0">
            <div class="row w-100 m-0">
              <!-- Sort nav -->
              <div class="w-100 border-light-gray rounded-10 bg-white text-right mb-3">
                <div class="p-3 row m-auto align-items-center">
                  <h5 class="text-18 text-dark-gray m-0">
                    <i class="fas fa-sort-amount-down ml-2"></i> مرتب سازی بر اساس:
                  </h5>

                  <a @click.prevent="sort_recommended" href="" class="py-1 px-2 text-14 mx-3 rounded-10"
                     :class="!satisfy ? 'bg-water-blue text-white' : 'text-light-gray'">منتخب</a>
                  <a @click.prevent="sort_satisfy" href="" class="py-1 px-2 text-14 mx-3 text-light-gray rounded-10"
                     :class="satisfy ? 'bg-water-blue text-white' : 'text-light-gray'">بیشترین رضایتمندی</a>
                  <a href="" class="py-1 px-2 text-14 mx-3 text-light-gray">زودترین نوبت</a>
                </div>
              </div>


              <!-- myAPI -->
              <div class="d-flex flex-column align-items-center w-100">
                <Doctor v-for="(doctor, index) in myDoctors" :key="index" :profile="doctor"/>
              </div>

              <!-- Doctors and consultants list -->
              <div class="d-flex flex-column align-items-center w-100">
                <Doctor v-for="(doctor, index) in doctors" :key="index" :profile="doctor"/>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section class="container">
        <div class="bg-ice-blue rtl text-right p-3 rounded-10 text-dark-gray">
          <h5 class="mb-4 text-22">
            هر آنچه که باید از
            <span class="text-water-blue">متخصص روانپزشک (اعصاب و روان)</span> بدانید!
          </h5>

          <p class="text-light-gray text-justify text-14 lh-30">
            پزشکی که در ارزیابی، تشخیص و درمان اختلالات رفتاری، عاطفی، روانی و ذهنی تخصص دارد، متخصص اعصاب و روان یا
            روانپزشک نامیده می شود. متخصص اعصاب و روان از طریق انجام تست های مختلف به تشخیص بیماری پرداخته و با تجویز
            دارو و برگزاری جلسات درمانی لازم تا بهبودی
            بیمار، روند درمانی را اد
          </p>

          <div class="w-100 text-left">
            <button class="btn bg-orange text-white rounded-10 text-12 mt-3">بیشتر بخوانید
              <i class="fas fa-angle-down mr-2"></i>
            </button>
          </div>
        </div>
      </section>


      <section class="container">
        <div class="bg-white rtl text-right px-4 py-3 rounded-20 text-dark-gray mt-5 border">
          <h5 class="mb-3 text-bold text-22">
            متخصص روانپزشک (اعصاب و روان)
          </h5>

          <div class="mt-4">
            <div class="border-bottom py-3">
              <a href="" class="d-flex flex-row mb-2">
                <i class="fas fa-plus p-1 rounded-bottom rounded-left bg-water-blue text-white ml-2"></i>
                <p class="text-gray m-0">⭐️تفاوت های اصلی روانپزشک و روانشناس چیست؟</p>
              </a>
            </div>

            <div class="border-bottom py-3">
              <a href="" class="d-flex flex-row mb-2">
                <i class="fas fa-plus p-1 rounded-bottom rounded-left bg-water-blue text-white ml-2"></i>
                <p class="text-gray m-0">⭐️سوالاتی که در مورد وضعیت سلامت خود میبایستی از روانپزشک بپرسید؟</p>
              </a>
            </div>

            <div class="border-bottom py-3">
              <a href="" class="d-flex flex-row mb-2">
                <i class="fas fa-plus p-1 rounded-bottom rounded-left bg-water-blue text-white ml-2"></i>
                <p class="text-gray m-0">⭐️مواردی که باید به روانپزشک خود بگویید؟</p>
              </a>
            </div>

            <div class="border-bottom py-3">
              <a href="" class="d-flex flex-row mb-2">
                <i class="fas fa-plus p-1 rounded-bottom rounded-left bg-water-blue text-white ml-2"></i>
                <p class="text-gray m-0">⭐️سوالاتی که در مورد دارو ها باید از روانپزشک خود بپرسید؟</p>
              </a>
            </div>
          </div>
        </div>
      </section>


      <!-- Don't worry about Corona section -->
      <section class="special w-100 rtl">
        <div class="py-3">
          <h5 class="my-4">
            نگران کرونا نباشید
          </h5>
        </div>

        <div class="body d-flex flex-row justify-content-center mt-2">
          <div class="my-card ml-5">
            <a href="">
              <img src="../../../public/images/pngs/994ebdc.png" alt="" class="mb-2">
            </a>
            <a href="">
              <h4 class="my-3 text-bold">
                تست PCR و آنتی بادی در محل
              </h4>
              <p class="text-normal text-14 lh-30">
                اگر در شهرهای تهران، اصفهان، کرج، شیراز و اهواز هستید، می‌‌توانید بدون مراجعه به آزمایشکاه و در محل
                مدنظر خود آزمایش کرونا بدهید.
              </p>
            </a>
            <button class="w-100 p-3 mt-1">
              درخواست آزمایش
              <i class="fas fa-angle-left mr-3"></i>
            </button>
          </div>
          <div class="my-card mr-5">
            <a href="">
              <img src="../../../public/images/pngs/4126cda.png" alt="" class="mb-2">
            </a>
            <a href="">
              <h4 class="my-3 text-bold">
                مشاوره آنلاین فوری
              </h4>
              <p class="text-normal text-14 lh-30">
                با تست آنلاین کرونا علائم خود را بررسی کنید و اگر مشکوک بودید میتوانید به صورت فوری با پزشکان عمومی
                مشاوره آنلاین داشته باشید.
              </p>
            </a>
            <button class="w-100 p-3 mt-1">
              درخواست مشاوره فوری
              <i class="fas fa-angle-left mr-3"></i>
            </button>
          </div>
        </div>
      </section>

      <Application/>
    </main>
  </div>
</template>

<script>
import Doctor from "@/components/Doctor";
import Application from "@/components/Application";
import {mapGetters} from "vuex";

export default {
  name: "Doctors",
  data() {
    return {
      doctors: '',
      satisfy: false,
      myDoctors: ''
    }
  },
  components: {
    Doctor,
    Application
  },
  methods: {
    compare_user_percent(a, b) {
      if (a.user_percent > b.user_percent)
        return -1;
      if (a.user_percent < b.user_percent)
        return 1;
      return 0;
    },
    compare_id(a, b) {
      if (a.id < b.id)
        return -1;
      if (a.id > b.id)
        return 1;
      return 0;
    },
    sort_satisfy() {
      this.satisfy = true;
      this.doctors.sort(this.compare_user_percent);
    },
    sort_recommended() {
      this.satisfy = false;
      this.doctors.sort(this.compare_id);
    },
    ...mapGetters(['getUrl'])
  },
  mounted() {
    this.axios.get('https://intense-ravine-40625.herokuapp.com/doctors').then((response) => {
      this.doctors = response.data;
    })

    this.axios.get(this.getUrl() + "doctors").then((response) => {
      this.myDoctors = response.data;
      console.log(this.myDoctors)
    });
  }
}
</script>

<style scoped>

</style>