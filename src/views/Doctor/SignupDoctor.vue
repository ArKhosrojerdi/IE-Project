<template>
  <div class="d-flex flex-row rtl">
    <div class="d-flex flex-column align-items-center justify-content-center bg-blue vh-100 welcome">
      <div class="w-100 text-center my-3">
        <img src="../../../public/images/svgs/footer-icon.svg" alt="" class="h-100">
      </div>
      <div class="text-center">
        <h4 class="text-22 text-white m-0">به درمانکده خوش آمدید</h4>
        <h5 class="text-16 text-white mt-5 text-normal">نوبت دهی آنلاین مطب پزشکان</h5>
      </div>
    </div>

    <div class="login-panel w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div class="w-50 text-center mb-4">
        <div class="my-5">
          <h5 class="text-28 text-normal my-3">ثبت‌نام پزشک</h5>
          <h5 class="text-18 text-normal">برای ثبت‌نام اطلاعات خود را وارد کنید.</h5>
        </div>

        <div class="mt-4">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">شماره همراه</label>
          </div>
          <input type="text" placeholder="مثلا ۰۹۱۲۱۲۳۴۵۶۷" class="mb-0 text-12 w-100" v-model="cellphone">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">نام کاربری</label>
          </div>
          <input type="text" placeholder="مثلا علیرضا" class="mb-0 text-12 w-100" v-model="username">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">رمز عبور</label>
          </div>
          <input type="password" class="mb-0 text-12 w-100" v-model="password">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">نام</label>
          </div>
          <input type="text" class="mb-0 text-12 w-100" v-model="name">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">تخصص</label>
          </div>
          <input type="text" class="mb-0 text-12 w-100" v-model="spec">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">شماره نظام پزشکی</label>
          </div>
          <input type="text" class="mb-0 text-12 w-100" v-model="number">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">امکان پرداخت آنلاین</label>
          </div>
          <input type="text" class="mb-0 text-12 w-100" v-model="online_pay">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">میزان تجربه به سال</label>
          </div>
          <input type="text" class="mb-0 text-12 w-100" v-model="experience_years">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">آدرس</label>
          </div>
          <input type="text" class="mb-0 text-12 w-100" v-model="address">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">شماره تماس</label>
          </div>
          <input type="text" class="mb-0 text-12 w-100" v-model="phone">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">روز‌های حضور</label>
          </div>
          <input type="text" class="mb-0 text-12 w-100" v-model="week_days">
        </div>

        <div class="mt-3">
          <router-link to="doctor-profile">
            <button class="w-100 py-2 text-14">
              ثبت نام
              <i class="fas fa-angle-double-left mr-1"></i>
            </button>
          </router-link>

          <button class="w-25 py-2 text-14 mt-3">
            کد معرف دارید؟
          </button>

          <router-link to="login-doctor">
            <button class="w-25 py-2 text-14 mt-3 mr-2">
              اکانت دارید؟
            </button>
          </router-link>

          <router-link to="signup">
            <button class="w-25 py-2 text-14 mt-3 mr-2">
              مریضی؟
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SignupDoctor",
  data() {
    return {
      cellphone: '',
      username: '',
      password: '',
      phone: '',
      spec: '',
      name: '',
      number: '',
      experience_years: '',
      online_pay: '',
      address: '',
      week_days: ''
    }
  },
  methods: {
    ...mapGetters([
      "getUrl"
    ]),
    signup() {

      console.log()
      this.axios.post(this.getUrl() + "doctor/signup", {
        "cellphone": this.cellphone,
        "username": this.username,
        "password": this.password
      }).then((response) => {
        console.log(response)
      })
    }
  },
}
</script>

<style scoped>

</style>