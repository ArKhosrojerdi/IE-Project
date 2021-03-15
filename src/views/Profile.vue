<template>
  <div>
    <!-- Directory of webpage or the breadcrumb -->
    <nav class="w-100 bg-250">
      <div class="container pt-2">
        <div class="py-3">
          <ol class="row rtl p-0 m-0">
            <li class="breadcrumb-item">
              <router-link to="/" exact class="text-water-blue text-normal">
                درمانکده
                <i class="fas fa-angle-left mr-2"></i>
              </router-link>

              <a href="#" class="text-water-blue text-normal mr-2">
                {{ doctor.spec }}
                <i class="fas fa-angle-left mr-2"></i>
              </a>
            </li>
            <li class="text-light-gray mr-2" aria-current="page">
              {{ doctor.name }}
            </li>
          </ol>
        </div>
      </div>
    </nav>

    <main role="main" class="bg-250">

      <!-- Information about the doctor or the specialist -->
      <section class="container py-0 rtl">
        <div class="row w-100 mx-auto">

          <!-- Sidebar section -->
          <div class="col-md-4 text-light-gray px-0 position-static">
            <aside class="w-100 position-sticky fixed-top">
              <div class="px-2 py-3 bg-water-blue rounded-10">

                <!-- Avatar of doctor and buttons at corners -->
                <div class="row mx-auto justify-content-between mt-2">
                  <svg data-v-58d4bfc9="" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" class="hover-p text-white feather feather-share-2 mx-3">
                    <circle data-v-58d4bfc9="" cx="18" cy="5" r="3"></circle>
                    <circle data-v-58d4bfc9="" cx="6" cy="12" r="3"></circle>
                    <circle data-v-58d4bfc9="" cx="18" cy="19" r="3"></circle>
                    <line data-v-58d4bfc9="" x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line data-v-58d4bfc9="" x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>

                  <div>
                    <img :src="doctor.avatar" alt=""
                         class="rounded-circle" style="height: 105px;">
                  </div>

                  <svg data-v-390d7861="" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" class="hover-p feather feather-heart text-white mx-3">
                    <path data-v-390d7861=""
                          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>

                <!-- Full name of doctor and his/her specialty -->
                <div class="d-flex flex-column align-items-center justify-content-center mt-3 mb-5">
                  <h5 class="text-white">
                    {{ doctor.name }}
                  </h5>
                  <h6 class="text-14 text-white lh-30 mb-0">
                    {{ doctor.spec }}
                  </h6>
                  <h6 class="text-14 text-white lh-30 mb-0">شماره نظام پزشکی : {{ doctor.number }}</h6>
                </div>

                <!-- Availability features -->
                <div class="w-100 rounded-10 bg-light-cyan p-3 text-center">
                  <h5 class="text-14 text-normal m-0">
                    <svg data-v-543f147a="" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="#20c997" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round" class="text-cyan ml-2 feather feather-wifi">
                      <path data-v-543f147a="" d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                      <path data-v-543f147a="" d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                      <path data-v-543f147a="" d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                      <line data-v-543f147a="" x1="12" y1="20" x2="12" y2="20"></line>
                    </svg>
                    امکان دریافت مشاوره تصویری ، صوتی ، متنی
                  </h5>
                </div>

                <!-- Experience and ... -->
                <div class="bg-white rounded-10 mx-auto p-2 row mt-3">
                  <div class="col-4 d-flex flex-column text-center">
                    <div class="mb-1">
                      <i class="fas text-20 fa-book text-light-gray"></i>
                    </div>
                    <h5 class="text-12 text-light-gray">
                      تجربه
                    </h5>
                    <h5 class="text-bold text-14">
                      {{ doctor.experience_years }} سال
                    </h5>
                  </div>
                  <div class="col-4 d-flex flex-column text-center">
                    <div class="mb-1">
                      <i class="fas text-20 fa-clock"></i>
                    </div>
                    <h5 class="text-12 text-light-gray">
                      اولین نوبت آزاد
                    </h5>
                    <h5 class="text-bold text-14">
                      {{ doctor.first_empty_date }}
                    </h5>
                  </div>
                  <div class="col-4 d-flex flex-column text-center">
                    <div class="mb-1">
                      <i class="fas text-20 fa-credit-card text-light-gray"></i>
                    </div>
                    <h5 class="text-12 text-light-gray">
                      پرداخت آنلاین
                    </h5>
                    <h5 v-if="doctor.online_pay" class="text-bold text-14">
                      دارد
                    </h5>
                    <h5 v-else class="text-bold text-14">
                      ندارد
                    </h5>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <!-- Left panel section -->
          <div class="mx-auto col-md-8 pl-0">
            <div class="row w-100 m-0">
              <!-- Visit time section -->
              <div class="w-100 border-light-gray rounded-10 bg-white mb-3">

                <!-- Header -->
                <div
                    class="bg-water-blue p-3 d-flex flex-row justify-content-between align-items-center rounded-top-10">
                  <div class="d-flex flex-row">
                    <div class="py-2 px-3 bg-light-blue rounded">
                      <i class="fas fa-2x fa-walking text-water-blue"></i>
                    </div>

                    <div class="text-right text-white mr-3 align-items-center">
                      <h5>رزرو نوبت مراجعه حضوری</h5>
                      <h6 class="mb-0">لطفا روز و ساعت دلخواه برای مراجعه به مطب را انتخاب کنید.</h6>
                    </div>
                  </div>
                  <div class="">
                    <button class="btn btn-light text-water-blue">مطب چهار راه پونک
                      <i class="fas fa-caret-down mr-2"></i>
                    </button>
                  </div>
                </div>

                <!-- Slider and times -->
                <div class="p-3">

                  <!-- Days of availablity -->
                  <div class="mt-2 mb-3 d-flex flex-row align-items-center justify-content-center">
                    <button class="btn btn-outline-primary rounded-circle"><i class="fas fa-angle-right pl-1"></i>
                    </button>

                    <div class="date-slider w-100">
                      <div class="day-container">
                        <button class="day">
                          <h6 class="text-normal text-16 mb-0 mt-2">
                            یک‌شنبه
                          </h6>
                          <h5 class="text-bold text-20 m-0 py-2">
                            ۱۶
                          </h5>
                          <h6 class="text-12 text-normal">آذر</h6>
                        </button>
                      </div>
                      <div class="day-container">
                        <button class="day active">
                          <h6 class="text-normal text-16 mb-0 mt-2">
                            دوشنبه
                          </h6>
                          <h5 class="text-bold text-20 m-0 py-2">
                            ۱۷
                          </h5>
                          <h6 class="text-12 text-normal">آذر</h6>
                        </button>
                      </div>
                      <div class="day-container">
                        <button class="day">
                          <h6 class="text-normal text-16 mb-0 mt-2">
                            سه‌شنبه
                          </h6>
                          <h5 class="text-bold text-20 m-0 py-2">
                            ۱۸
                          </h5>
                          <h6 class="text-12 text-normal">آذر</h6>
                        </button>
                      </div>
                      <div class="day-container">
                        <button class="day" disabled>
                          <h6 class="text-normal text-16 mb-0 mt-2">
                            چهارشنبه
                          </h6>
                          <h5 class="text-bold text-20 m-0 py-2">
                            ۱۸
                          </h5>
                          <h6 class="text-12 text-normal">آذر</h6>
                        </button>
                      </div>
                      <div class="day-container">
                        <button class="day" disabled>
                          <h6 class="text-normal text-16 mb-0 mt-2">
                            پنج‌شنبه
                          </h6>
                          <h5 class="text-bold text-20 m-0 py-2">
                            ۲۰
                          </h5>
                          <h6 class="text-12 text-normal">آذر</h6>
                        </button>
                      </div>
                      <div class="day-container">
                        <button class="day" disabled>
                          <h6 class="text-normal text-16 mb-0 mt-2">
                            جمعه
                          </h6>
                          <h5 class="text-bold text-20 m-0 py-2">
                            ۲۱
                          </h5>
                          <h6 class="text-12 text-normal">آذر</h6>
                        </button>
                      </div>
                    </div>

                    <button class="btn btn-outline-primary rounded-circle"><i class="fas fa-angle-left pr-1"></i>
                    </button>
                  </div>

                  <!-- Hours of availablity -->
                  <div class="border border-light-gray rounded-10 p-3">
                    <div class="text-right">
                      <h5 class="text-light-gray text-16">
                        <i class="fas fa-clock ml-2"></i> ساعت های نوبت ۲ دی
                      </h5>

                      <div class="mt-2 d-flex flex-row mt-3">
                        <button class="btn text-light-gray text-16 ml-4 px-3 py-2 bg-ed rounded-5" disabled><s>۱۷:۰۰</s>
                        </button>
                        <button class="btn btn-primary text-16 ml-4 px-3 py-2 rounded-5">۱۹:۰۰</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Comments with score box -->
              <div class="w-100 border-light-gray rounded-10 bg-white text-right mb-3">
                <div class="p-3 row mx-auto justify-content-between">

                  <!-- Score box -->
                  <div class="col-2 text-water-blue score-box rounded p-2 text-center">
                    <h1 class="text-bold">
                      <!--                      {{ doctor.rate }}-->
                      4.7
                    </h1>
                    <span class="m-0">
                                        <i class="fas fa-star text-water-blue text-12" style="overflow: hidden;"></i>
                                        <i class="fas fa-star text-water-blue text-12"></i>
                                        <i class="fas fa-star text-water-blue text-12"></i>
                                        <i class="fas fa-star text-water-blue text-12"></i>
                                        <i class="fas fa-star text-water-blue text-12"></i>
                                    </span>
                    <h5 class="mt-1 mb-0 text-12 text-light-gray">از {{ doctor.comments }} نظر</h5>
                  </div>


                  <!-- Comments of people slider -->
                  <div class="col-10">
                    <div class="text-right">
                      <h5 class="text-light-gray text-14 mb-3">
                        <i class="fas fa-comment-alt ml-2 text-18"></i> نظر {{ doctor.commenter }}:
                      </h5>
                      <p class="text-gray text-justify">
                        {{ doctor.comment_text }}
                      </p>
                    </div>
                    <div class="d-flex flex-row justify-content-center">
                      <div class="dot bg-orange ml-1"></div>
                      <div class="dot ml-1"></div>
                      <div class="dot ml-1"></div>
                      <div class="dot ml-1"></div>
                    </div>

                    <!-- Arrow down button -->
                    <button class="btn rounded-circle bg-250 text-water-blue go-to-comments"><i
                        class="fas fa-arrow-down"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Address and days of visits -->
              <div class="w-100 border-light-gray rounded-10 bg-white">

                <!-- Tabs -->
                <div class="card-header text-right p-0">
                  <button class="my-btn p-3 tab rounded-top-right-10" @click="clinic_data = true"
                          :class="clinic_data ? 'active' : 'bg-transparent'">
                    <i class="fas fa-map ml-2"></i>
                    اطلاعات مطب
                  </button>
                  <button class="hover-orange tab my-btn p-3 hover-orange"
                          @click="clinic_data = false" :class="!clinic_data ? 'active' : 'bg-transparent'">
                    <i class="fas fa-calendar ml-2"></i>
                    روزهای حضور
                  </button>
                </div>

                <!-- Map and address -->
                <div class="p-3">
                  <div v-if="clinic_data" class="row">
                    <!-- Map -->
                    <div class="col-4">
                      <a href="">
                        <img src="../../public/images/pngs/locations/205image.png" alt="" class="w-100 rounded-10">
                      </a>
                    </div>


                    <!-- Address -->
                    <div class="col-8 text-right">
                      <h5 class="text-gray text-18 mb-3">
                        آدرس مطب ۱ :
                      </h5>
                      <p class="text-gray text-14 mb-3">
                        {{ doctor.address }}
                      </p>
                      <h5 class="text-dark-gray text-14 mb-0">
                        <b>
                          تلفن گویا :
                        </b>
                        <a href="" class="hover-orange">{{ doctor.phone }}</a>
                      </h5>
                    </div>
                  </div>

                  <div v-else class="d-flex flex-column">
                    <h5 class="text-right text-gray w-100 text-16 mb-3">
                      مطب چهارراه پونک
                    </h5>

                    <div class="d-flex flex-row align-items-center justify-content-between w-100 text-center">
                      <div v-for="index in doctor.week_days.length" :key="index"
                           :class="index%2 ? 'bg-250' : 'bg-white'"
                           class="d-flex flex-column w-10 rounded-5">
                        <h6 class="text-light-gray mb-4 mt-3">
                          {{ days[index - 1] }}
                        </h6>

                        <h5 class="text-20" :class="doctor.week_days[index - 1] ? 'text-dark-mint' : 'text-orange'">
                          <i class="fas " :class="doctor.week_days[index - 1] ? 'fa-check' : 'fa-times'"></i>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <!-- Comments  -->
              <div class="w-100 border-light-gray rounded-10 bg-white text-right mt-3">

                <!-- Header -->
                <div class="card-header d-flex flex-row">
                  <div class="ml-3">
                    <i class="fas fa-comment-alt text-gray"></i>
                  </div>
                  <div>
                    <h5 class="text-gray mb-1">
                      نظرات کاربران (تعداد کل نظرات :{{ doctor.comments }})
                    </h5>
                    <p class="text-black-50 m-0 text-12">
                      در این قسمت شما می توانید تجربه مراجعه کاربران دیگر به مطب آقای دکتر محمدرضا عشقی را بخوانید.
                    </p>
                  </div>
                </div>


                <!-- Body -->
                <div class="p-3">

                  <!-- Doctor's score and percentage of stars -->
                  <div class="row px-2">
                    <div class="col-6">
                      <h5 class="text-gray text-16">
                        <i class="fas fa-star"></i> امتیاز به پزشک
                      </h5>

                      <div class="w-100">
                        <div class="d-flex flex-row mt-2 align-items-center">
                          <div class="w-90 d-flex flex-row align-items-center">
                            <div class="w-25">
                              <h5 class="text-black-50 text-16 m-0">۵ ستاره</h5>
                            </div>
                            <div class="progress w-75">
                              <div class="progress-bar" role="progressbar" aria-valuenow="64" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 64%;"></div>
                            </div>
                          </div>
                          <div class="w-10">
                            <p class="text-black-50 m-0 text-center">۱۶</p>
                          </div>
                        </div>

                        <div class="d-flex flex-row mt-2 align-items-center justify-content-between">
                          <div class="w-90 d-flex flex-row align-items-center">
                            <div class="w-25">
                              <h5 class="text-black-50 text-16 m-0">۴ ستاره</h5>
                            </div>
                            <div class="progress w-75">
                              <div class="progress-bar" role="progressbar" aria-valuenow="64" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 16%;"></div>
                            </div>
                          </div>
                          <div class="w-10">
                            <p class="text-black-50 m-0 text-center">۴</p>
                          </div>
                        </div>

                        <div class="d-flex flex-row mt-2 align-items-center justify-content-between">
                          <div class="w-90 d-flex flex-row align-items-center">
                            <div class="w-25">
                              <h5 class="text-black-50 text-16 m-0">۳ ستاره</h5>
                            </div>
                            <div class="progress w-75">
                              <div class="progress-bar" role="progressbar" aria-valuenow="64" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 20%;"></div>
                            </div>
                          </div>
                          <div class="w-10">
                            <p class="text-black-50 m-0 text-center">۵</p>
                          </div>
                        </div>

                        <div class="d-flex flex-row mt-2 align-items-center justify-content-between">
                          <div class="w-90 d-flex flex-row align-items-center">
                            <div class="w-25">
                              <h5 class="text-black-50 text-16 m-0">۲ ستاره</h5>
                            </div>
                            <div class="progress w-75">
                              <div class="progress-bar" role="progressbar" aria-valuenow="64" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 0%;"></div>
                            </div>
                          </div>
                          <div class="w-10">
                            <p class="text-black-50 m-0 text-center">۰</p>
                          </div>
                        </div>

                        <div class="d-flex flex-row mt-2 align-items-center justify-content-between">
                          <div class="w-90 d-flex flex-row align-items-center">
                            <div class="w-25">
                              <h5 class="text-black-50 text-16 m-0">۱ ستاره</h5>
                            </div>
                            <div class="progress w-75">
                              <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                                   aria-valuemax="100" style="width: 0%;"></div>
                            </div>
                          </div>
                          <div class="w-10">
                            <p class="text-black-50 m-0 text-center">۰</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <h5 class="text-gray text-16">
                        <i class="fas fa-stopwatch"></i> میانگین زمان انتظار برای ویزیت
                      </h5>
                      <h5 class="text-gray text-14 mr-3 pr-1">۴۵ دقیقه</h5>
                    </div>
                  </div>


                  <!-- Sort -->
                  <div class="border-light-gray rounded-10 bg-white text-right mt-3">
                    <div class="p-2 row m-auto align-items-center">
                      <h5 class="text-16 text-dark-gray m-0">
                        <i class="fas fa-sort-amount-down ml-2"></i> مرتب سازی بر اساس:
                      </h5>

                      <a href="" class="py-1 px-2 text-14 mx-3 text-light-gray">جدیدترین</a>
                      <a href="" class="py-1 px-2 text-14 mx-3 text-light-gray">بیشترین امتیاز</a>
                      <a href="" class="py-1 px-2 text-14 mx-3 bg-water-blue text-white rounded-10">مفیدترین نظرات</a>
                    </div>
                  </div>

                  <!-- Leave comment -->
                  <div class="w-100 rounded-10 bg-white border-light-gray mt-3">
                    <div class="card-header py-1 px-3">
                      <div class="d-flex flex-row align-items-center justify-content-between">
                        <div class="h-100">
                          <h5 class="m-0 text-light-gray text-14">
                            <i class="fas fa-comment text-gray text-20 ml-3"></i>
                            {{}}
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div class="p-3">
                      <div class="row text-right">
                        <div class="col-5 d-flex flex-column">
                          <div class="d-flex flex-row align-items-center">
                            <b class="w-50 text-16">علت مراجعه</b>
                            <h5 class="w-50 text-16 text-light-gray m-0">پیگیری روند درمان</h5>
                          </div>
                          <div class="d-flex flex-row align-items-center mt-2">
                            <b class="w-50 text-16">امتیاز به پزشک</b>
                            <h5 class="w-50 text-16 text-light-gray m-0 rtl">
                              <i v-for="index in 5" :key="index" class="fas fa-star comment-star"
                                 @click="user_cm_star = index"
                                 :class="index <= user_cm_star ? 'text-water-blue' : 'text-250'"></i>
                            </h5>
                          </div>
                        </div>
                        <div class="col-7">
                          <textarea class="form-control" v-model="commentText"></textarea>
                        </div>
                      </div>
                    </div>

                    <div class="text-center mb-2">
                      <button class="btn btn-success" @click="submitComment">
                        ثبت
                      </button>
                    </div>
                  </div>

                  <!-- Comments -->
                  <div v-for="data in comments" :key="data"
                       class="w-100 rounded-10 bg-white border-light-gray mt-3">
                    <div class="card-header py-1 px-3">
                      <div class="d-flex flex-row align-items-center justify-content-between">
                        <div>
                          <h5 class="m-0 text-light-gray text-14">
                            <i class="fas fa-user text-gray text-20 ml-3"></i> نظر
                            {{ data.user.username }}
                            در تاریخ ۲۲ آبان ۱۳۹۷
                          </h5>
                        </div>

                        <div class="h-100 text-center">
                          <button class="my-btn bg-transparent text-dark-mint text-12">
                            <i class="fas fa-thumbs-up"></i>
                            <p class="m-0">۲</p>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="p-3">
                      <div class="row text-right">
                        <div class="col-5 d-flex flex-column">
                          <div class="d-flex flex-row align-items-center">
                            <b class="w-50 text-16">علت مراجعه</b>
                            <h5 class="w-50 text-16 text-light-gray m-0">پیگیری روند درمان</h5>
                          </div>
                          <div class="d-flex flex-row align-items-center mt-2">
                            <b class="w-50 text-16">امتیاز به پزشک</b>
                            <h5 class="w-50 text-16 text-light-gray m-0">
                              <i v-for="index in data.stars" :key="index" class="fas fa-star text-water-blue"></i>
                              <i v-for="index in 5 - data.stars" :key="index" class="fas fa-star text-250"></i>
                            </h5>
                          </div>
                        </div>
                        <div class="col-7">
                          <p class="m-0 lh-30 text-light-gray text-justify">
                            {{ data.text }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SpecialServices/>
      <Application/>
    </main>
  </div>
</template>

<script>
import Application from "@/components/Application";
import SpecialServices from "@/components/SpecialServices";
import {mapGetters} from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      doctor: '',
      id: 0,
      clinic_data: true,
      days: ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'],
      user_cm_star: 0,
      comments: '',
      commentText: ''
    }
  },
  components: {
    Application,
    SpecialServices
  },
  mounted() {
    this.id = this.$route.params.id;
    this.axios.get('https://intense-ravine-40625.herokuapp.com/doctors/' + this.id)
        .then((response) => {
          this.doctor = response.data;
        });

    // this.axios.get(this.getUrl() + 'user')
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    this.axios.get(this.getUrl() + 'comment?doctor_id=' + this.id)
        .then((response) => {
          this.comments = response.data;
          // console.log(this.comments)
        })
  },
  methods: {
    ...mapGetters([
      'getUrl'
    ]),
    submitComment() {
      this.axios.post(this.getUrl() + "comment", {
        doctor_id: this.id,
        text: this.commentText,
        stars: this.user_cm_star,
        user_id: 1
      })
          .then((response) => {
            console.log(response)
          })
    }
  }
}
</script>

<style scoped>
.fas.fa-star.comment-star:hover {
  cursor: pointer;
}
</style>