<template>
  <div>
    <!-- Search box -->
    <section class="container">
      <div class="search d-flex flex-column justify-content-center align-items-center">
        <div>
          <h1>
            درمانکده - رزرو حضوری مطب و مشاوره آنلاین با پزشکان
          </h1>
        </div>

        <div class="search-input rtl">
          <input type="text" placeholder="نام پزشک یا تخصصی که میخواهید را بنویسید و کلیک کنید"
                 v-model="searchField">

          <div class="search-dropdown d-flex flex-row align-items-center">
            <div>
              <i class="fas fa-map-marker-alt pin-icon"></i>
            </div>
            <div class="select-city">
              <button type="button" id="city" name="city" class="city">تهران</button>
              <ul id="cities">
                <li><a href="#">تهران</a></li>
                <li><a href="#">پاکدشت</a></li>
                <li><a href="#">شهر قدس</a></li>
                <li><a href="#">رودهن</a></li>
                <li><a href="#">مشهد</a></li>
              </ul>
            </div>
            <div>
              <i class="fas fa-angle-down angle-icon"></i>
            </div>
          </div>

          <button @click="search">
            جستجو
          </button>

          <ul class="position-absolute d-flex flex-column text-right mt-1" style="top: 170px; right: 300px">
            <router-link :to="'/profile/' + item.id" tag="li" v-for="(item, index) in searchResult" :key="index"
                         class="bg-250 shadow-sm text-water-blue mb-1 py-1 px-2">
              {{ item.name }}
            </router-link>
          </ul>
        </div>


      </div>
    </section>

    <!-- Best specialities -->
    <section class="container bests">
      <div class="header d-flex flex-row rtl mt-4">
        <h5 class="m-0 text-gray text-normal">بهترین تخصص های درمانکده</h5>
        <router-link to="/specialties" class="my-auto mr-auto link">مشاهده همه<i class="fas fa-angle-left mr-2"></i>
        </router-link>
      </div>

      <div class="d-flex flex-row align-items-center justify-content-between cats">
        <router-link to="/doctors" class="cat d-flex flex-column">
          <div class="icon bg-light-orange d-flex align-items-center justify-content-center">
            <img src="../../public/images/pngs/bests/brain.png" alt="" class="">
          </div>
          <div class="mt-auto">
            <p class="m-0 text-center">مغز و اعصاب</p>
          </div>
        </router-link>

        <router-link to="/doctors" class="cat d-flex flex-column">
          <div class="icon bg-light-blue d-flex align-items-center justify-content-center">
            <img src="../../public/images/pngs/bests/e125f7c.png" alt="" class="">
          </div>
          <div class="mt-auto">
            <p class="m-0 text-center">گوش، حلق و بینی</p>
          </div>
        </router-link>

        <router-link to="/doctors" class="cat d-flex flex-column">
          <div class="icon bg-light-pink d-flex align-items-center justify-content-center">
            <img src="../../public/images/pngs/bests/f05550d.png" alt="" class="">
          </div>
          <div class="mt-auto">
            <p class="m-0 text-center">داخلی</p>
          </div>
        </router-link>

        <router-link to="/doctors" class="cat d-flex flex-column">
          <div class="icon bg-dark-blue d-flex align-items-center justify-content-center">
            <img src="../../public/images/pngs/bests/embryo.png" alt="" class="">
          </div>
          <div class="mt-auto">
            <p class="m-0 text-center">زنان و زایمان</p>
          </div>
        </router-link>

        <router-link to="/doctors" class="cat d-flex flex-column">
          <div class="icon bg-light-green d-flex align-items-center justify-content-center">
            <img src="../../public/images/pngs/bests/8a932a4.png" alt="" class="">
          </div>
          <div class="mt-auto">
            <p class="m-0 text-center">پوست و مو</p>
          </div>
        </router-link>

        <router-link to="/doctors" class="cat d-flex flex-column">
          <div class="icon bg-light-red d-flex align-items-center justify-content-center">
            <img src="../../public/images/pngs/bests/kidney.png" alt="" class="">
          </div>
          <div class="mt-auto">
            <p class="m-0 text-center">اورولوژی</p>
          </div>
        </router-link>

        <router-link to="/doctors" class="cat d-flex flex-column">
          <div class="icon bg-light-purple d-flex align-items-center justify-content-center">
            <img src="../../public/images/pngs/bests/d3ab6b5.png" alt="" class="">
          </div>
          <div class="mt-auto">
            <p class="m-0 text-center">ارتوپدی</p>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Comments of users and customers -->
    <section class="container comments d-flex flex-row rtl py-5 my-5">
      <div class="d-flex flex-column w-50 px-2 mt-5 text-right">
        <h4 class="mt-5 mb-2">نظرات و روند درمانی بیماران</h4>
        <p class="w-75 pl-5">
          شما می توانید تجربه مراجعه کاربران دیگر به پزشکان را بخوانید و از علت مراجعه سایر بیماران و روند درمانی آن ها
          آگاهی یابید.
        </p>
      </div>

      <div class="w-50 h-100 px-2 outer-carousel">

        <div class="inner-carousel">
          <img src="../../public/images/pngs/55d4056.png" alt="" class="icon-comment">
          <div class="carousel-item d-flex flex-column align-items-between">
            <div class="text-right mt-3">
              <p class="py-3 px-3">
                بسیار دکتر خوبی هستن. عالیه اصن.
              </p>
            </div>

            <div class="doctor mt-auto">
              <div class="body px-2 pt-3 d-flex flex-row align-items-center w-100">
                <div class="px-3">
                  <img src="../../public/images/pngs/doctors/d44355.jpg" alt="" class="">
                </div>

                <div class="d-flex flex-column justify-content-center w-50 text-right">
                  <p class="p-0 m-1">
                    دکتر قمرتاج خانبابایی
                  </p>
                  <p class="p-0 m-1">
                    فوق تخصص ریه کودکان
                  </p>
                </div>

                <button class="ml-2 mr-auto">
                  مشاهده سایر نظرات
                </button>

                <div class="comment-owner mt-3">
                  <p class="m-0">نظر سمیرا</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex flex-row align-items-center justify-content-center">
          <div class="dot active"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>

    </section>

    <SpecialServices/>
    <Application/>
  </div>
</template>

<script>
import SpecialServices from "@/components/SpecialServices";
import Application from "@/components/Application";
import {mapGetters} from "vuex";

export default {
  name: 'Home',
  components: {
    SpecialServices,
    Application
  },
  data() {
    return {
      searchField: '',
      doctor_name: '',
      searchResult: {}
    }
  },
  methods: {
    search() {
      this.axios.get(this.getUrl() + "search?q=" + this.searchField)
          .then((response) => {
                if (response.status === 200 && response.data.length > 0)
                  this.searchResult = response.data
                else this.searchResult = [{name: "موردی یافت نشد"}]
              }
          )
    },
    ...mapGetters([
      'getUrl'
    ])
  }
}
</script>

<style scoped>
a {
  color: #495057;
}

a:hover {
  color: inherit;
}
</style>