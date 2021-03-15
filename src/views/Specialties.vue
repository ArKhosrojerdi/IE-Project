<template>
  <div>
    <main role="main" class="bg-250">

      <!-- Nav image -->
      <section class="container pt-3">
        <div class="mt-3 slider rounded-10 d-flex flex-row">
          <img src="../../public/images/pngs/c00a048.png" alt="" class="w-100" :class="image===1 ? 'sr1' : ''">
          <img src="../../public/images/pngs/0804d04.png" alt="" class="w-100" :class="image===2 ? '' : 'sr2'">
        </div>
      </section>

      <!-- Main section of the webpage -->
      <div class="album">
        <div class="container py-3 rtl">
          <div class="row w-100 mx-auto">

            <!-- Side panel -->
            <div class="col-lg-3 text-light-gray position-static px-0">
              <aside class="w-100 border border-light-gray rounded-10 bg-white position-sticky fixed-top mb-3">

                <!-- Header of side panel -->
                <div class="d-flex flex-column align-items-start p-3 align-items-center border-bottom">
                  <div class="d-flex flex-row">
                    <i class="fas fa-align-right"></i>
                    <h5 class="mb-0 mr-3">همه تخصص ها</h5>
                  </div>
                  <p class="text-12 text-light-gray m-0">
                    (به ترتیب حروف الفبا)
                  </p>
                </div>

                <!-- List of specialties -->
                <div class="d-flex flex-column p-3 text-right sidebar">
                  <div>
                    <form action="" class="search-field">
                      <input type="text" class="w-100 border rounded-5 text-14 bg-250"
                             placeholder="تخصص مورد نظر خود را جستجو کنید">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"
                           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                           stroke-linejoin="round"
                           class="text-water-blue flip-horizontal dr-search__icon feather feather-search"
                           data-v-ab4dbc62="">
                        <circle cx="11" cy="11" r="8" data-v-ab4dbc62=""></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65" data-v-ab4dbc62=""></line>
                      </svg>

                      <ul class="mt-4">
                        <li class="mb-3">
                          <span class="bg-ice-blue px-3 py-1 rounded-5">ب</span>

                          <div class="mt-3 mb-1 categories">
                            <a href="" class="text-light-gray mt-1 pb-2">
                              بیماری های عفونی
                            </a>
                          </div>
                        </li>

                        <li class="mb-3">
                          <span class="bg-ice-blue px-3 py-1 rounded-5">پ</span>

                          <div class="mt-3 mb-1 categories">
                            <a href="" class="text-light-gray mt-1 pb-2">
                              پوست و مو
                            </a>
                          </div>
                        </li>

                        <li class="mb-3">
                          <span class="bg-ice-blue px-3 py-1 rounded-5">ر</span>

                          <div class="mt-3 mb-1 categories">
                            <a href="" class="text-light-gray mt-1 pb-2">
                              روانشناسی
                            </a>
                            <a href="" class="text-light-gray mt-1 pb-2">
                              روماتولوژی
                            </a>
                          </div>
                        </li>

                        <li class="mb-3">
                          <span class="bg-ice-blue px-3 py-1 rounded-5">ز</span>

                          <div class="mt-3 mb-1 categories">
                            <a href="" class="text-light-gray mt-1 pb-2">
                              زنان و زایمان
                            </a>
                          </div>
                        </li>

                        <li class="mb-3">
                          <span class="bg-ice-blue px-3 py-1 rounded-5">خ</span>

                          <div class="mt-3 mb-1 categories">
                            <a href="" class="text-light-gray mt-1 pb-2">
                              خون و آنکولوژی
                            </a>
                          </div>
                        </li>

                        <li class="mb-3">
                          <span class="bg-ice-blue px-3 py-1 rounded-5">گ</span>

                          <div class="mt-3 mb-1 categories">
                            <a href="" class="text-light-gray mt-1 pb-2">
                              کوارش و کبد
                            </a>
                            <a href="" class="text-light-gray mt-1 pb-2">
                              گوش، حلق و بینی
                            </a>
                          </div>
                        </li>

                        <li class="mb-3">
                          <span class="bg-ice-blue px-3 py-1 rounded-5">م</span>

                          <div class="mt-3 mb-1 categories">
                            <a href="" class="text-light-gray mt-1 pb-2">
                              مغز و اعصاب
                            </a>
                          </div>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>

                <!-- Scroll message-->
                <div
                    class="py-2 bg-ice-blue position-sticky fixed-bottom text-center rounded-bottom-10 text-water-blue">
                  اسکرول کنید
                  <i class="fas fa-angle-double-down mr-2"></i>
                </div>
              </aside>
            </div>

            <!-- All specialties thumbnails -->
            <div class="col-lg-9 px-0 pr-md-3 ltr">
              <div class="row w-100">

                <!-- Specialty no.1 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/f5ffb82.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3">
                          گوارش و کبد
                        </h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        متخصص گوارش، کبد و آندوسکوپی پزشکی که بر سلامت گوارش تمرکز دارد و در زمینه تشخیص، ارزیابی و
                        درمان اختلالا ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>


                <!-- Specialty no.2 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/fc2d2c0.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3">
                          روماتولوژی
                        </h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        روماتولوژیست یا متخصص روماتیسم متخصص داخلی و یا یک متخصص اطفال است که برای تشخیص و درمان غیر
                        جراحی بیماری ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>


                <!-- Specialty no.3 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/126376d.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3 m-0">گوش، حلق و بینی</h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        پزشکی که در زمینه تشخیص، مراقبت‌های پزشکی، جراحی و درمان بیمارانی که دچار اختلالات گوش، بینی،
                        دهان، گلو، ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>


                <!-- Specialty no.4 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/9a9e60b.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3">
                          مغز و اعصاب
                        </h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        سیستم عصبی انسان به دو دسته‌ی کلی اعصاب مرکزی (مغز و نخاع) و اعصاب محیطی (اعصاب و نورون‌های
                        عضلات) تقسیم ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>


                <!-- Specialty no.5 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/a2e96a5.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3">
                          خون و آنکولوژی
                        </h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        پزشکی که به پیشگیری، تشخیص، درمان و مطالعه بیماری های مربوط به خون و بافت های سازنده خون که شامل
                        اختلالات ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>


                <!-- Specialty no.6 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/911a4be.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3 m-0">
                          زنان و زایمان
                        </h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        متخصص زنان و زایمان یا دکتر زنان (obstetrician)، پزشکی است که در تشخیص و درمان بیماری‌های مربوط
                        به دستگاه ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>


                <!-- Specialty no.7 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/3264250.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3">
                          پوست و مو
                        </h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        پزشکی که به تشخیص، درمان و جلوگیری از بیماری‌های پوست، مو، ناخن، نواحی مایع مخاطی در بدن (داخل
                        دهان، بینی ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>


                <!-- Specialty no.8 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/5fe96a8.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3">
                          بیماری های عفونی
                        </h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        پزشکی که در پیشگیری، تشخیص و درمان بیماری های عفونی، تب دار و واگیردار که ناشی از عوامل میکروبی
                        مختلف از ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>


                <!-- Specialty no.9 -->
                <div class="col-lg-4 mb-3 rtl">
                  <router-link to="/doctors" class="hover-mellon">
                    <div class="card bg-white h-100 p-3 rounded-10 lh-26">
                      <div class="d-flex flex-row align-items-center mb-3">
                        <img src="../../public/images/svgs/specielties/c4fe319.svg" alt="" class="w-25">
                        <h5 class="m-0 text-18 pr-3">
                          روانشناسی
                        </h5>
                      </div>
                      <p class="text-12 text-justify lh-30 mb-3 text-light-gray">
                        روانشناسی که فرآیندهای ذهنی و رفتار انسان ها را از طریق مشاهده، تفسیر و ثبت نحوه ارتباط افراد با
                        یکدیگر و ...
                      </p>
                      <div class="d-flex flex-row">
                        <div class="d-flex flex-column w-50">
                          <div class="doctors text-right">
                            <img src="../../public/images/pngs/doctors/131897037648385673دکتر-بابک-جلالیان.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897053610136187دکتر-محمدرضا-عشقی.jpg" alt="">
                            <img src="../../public/images/pngs/doctors/131897123709183080دکتر-عبدالحمید-اسلامی.jpg"
                                 alt="">
                          </div>
                          <div>
                            <p class="text-center text-10 text-light-gray m-0 mt-1 w-70 text-bold">
                              + ۲۰۴ پزشک
                            </p>
                          </div>
                        </div>
                        <button class="btn btn-outline-primary btn-rounded text-14 w-50 border-w2">
                          مشاهده
                          <i class="fas fa-arrow-left mr-2"></i>
                        </button>
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 1,
      stop: false
    }
  },
  mounted() {
    setInterval(() => {
      if (this.image === 1)
        this.image = 2;
      else this.image = 1
    }, 3000);
  }
}
</script>