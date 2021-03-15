<template>
  <div class="my-5">
    <UserProfileField :field="{title: 'شماره همراه', data: cellphone}"/>
    <UserProfileField :field="{title: 'نام کاربری', data: username}"/>
    <UserProfileField :field="{title: 'رمزعبور', data: password}"/>
    <UserProfileField :field="{title: 'سن', data: name}"/>
    <UserProfileField :field="{title: 'قد', data: spec}"/>
    <UserProfileField :field="{title: 'وزن', data: number}"/>
    <UserProfileField :field="{title: 'پرداخت آنلاین', data: online_pay}"/>
    <UserProfileField :field="{title: 'تجربه', data: experience_years}"/>
    <UserProfileField :field="{title: 'آدرس', data: address}"/>
    <UserProfileField :field="{title: 'شماره تماس', data: phone}"/>
    <UserProfileField :field="{title: 'روز‌های هفته', data: week_days}"/>

    <button class="btn btn-primary mt-3" @click="editProfile">
      ثبت
    </button>
  </div>
</template>

<script>
import UserProfileField from "../components/UserProfileField";
import {mapGetters} from "vuex";

export default {
  name: "DoctorProfile",
  data() {
    return {
      cellphone: ['', true],
      username: ['', true],
      password: ['', true],
      name: ['', true],
      spec: ['', true],
      number: ['', true],
      online_pay: ['', true],
      experience_years: ['', true],
      address: ['', true],
      phone: ['', true],
      week_days: ['', true]
    }
  },
  components: {
    UserProfileField
  },
  methods: {
    editProfile() {
      console.log(this.cellphone[0])
      this.axios.put(this.getUrl() + "doctor1?did=" + this.$route.params.id, {
        cellphone: this.cellphone[0],
        username: this.username[0],
        password: this.password[0],
        name: this.name[0],
        spec: this.spec[0],
        number: this.number[0],
        online_pay: this.online_pay[0],
        experience_years: this.experience_years[0],
        address: this.address[0],
        phone: this.phone[0],
        week_days: this.week_days[0],
      }).then((response) => {
        console.log(response)
      })
    },
    ...mapGetters(['getUrl'])
  },
  created() {
    this.axios.get(this.getUrl() + "doctor1?did=" + this.$route.params.id)
        .then((response) => {
          console.log(response.data[0])
          this.username[0] = response.data[0].username;
          this.password[0] = response.data[0].password;
          this.cellphone[0] = response.data[0].cellphone;
          this.online_pay[0] = response.data[0].online_pay;
          this.experience_years[0] = response.data[0].experience_years;
          this.address[0] = response.data[0].address;
          this.phone[0] = response.data[0].phone;
          this.week_days[0] = response.data[0].week_days;
          this.number[0] = response.data[0].number;
          this.spec[0] = response.data[0].spec;
          this.name[0] = response.data[0].name;
        })
  }
}
</script>

<style scoped>

</style>