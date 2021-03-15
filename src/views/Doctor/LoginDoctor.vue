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
          <h5 class="text-28 text-normal my-3">ورود پزشک</h5>
          <h5 class="text-18 text-normal">برای ورود اطلاعات خود را وارد کنید.</h5>
        </div>

        <div class="mt-4">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">شماره همراه</label>
          </div>
          <input type="text" placeholder="مثلا ۰۹۱۲۱۲۳۴۵۶۷" class="mb-2 text-16 w-100" v-model="cellphone">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">نام کاربری</label>
          </div>
          <input type="text" placeholder="مثلا علیرضا" class="mb-2 text-16 w-100" v-model="username">
        </div>
        <div class="mt-3">
          <div class="text-light-gray h-0 text-right">
            <label class="text-16 m-0 ">رمز عبور</label>
          </div>
          <input type="password" class="mb-2 text-16 w-100" v-model="password">
        </div>

        <div class="mt-3">
          <router-link to="doctor-profile" @click="login">
            <button class="w-100 text-18">
              ورود
              <i class="fas fa-angle-double-left mr-1"></i>
            </button>
          </router-link>

          <button class="w-25 text-16 mt-3">
            کد معرف دارید؟
          </button>

          <router-link to="signup-doctor">
            <button class="w-25 text-16 mt-3 mr-2">
              اکانت ندارید؟
            </button>
          </router-link>

          <router-link to="login">
            <button class="w-25 text-16 mt-3 mr-2">
              بیماری؟
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
  name: "LoginDoctor",
  data() {
    return {
      cellphone: '',
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapGetters([
      "getUrl"
    ]),
    login() {
      this.axios.post("http://localhost/", {
        cellphone: this.cellphone,
        username: this.username,
        password: this.password
      })
    }
  },
  created() {
    console.log(this.getUrl())
  }
}
</script>

<style scoped>

</style>