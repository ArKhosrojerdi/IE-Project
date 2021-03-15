<template>
  <div class="my-5">
    <UserProfileField :field="{title: 'شماره همراه', data: cellphone}"/>
    <UserProfileField :field="{title: 'نام کاربری', data: username}"/>
    <UserProfileField :field="{title: 'رمزعبور', data: password}"/>
    <UserProfileField :field="{title: 'سن', data: age}"/>
    <UserProfileField :field="{title: 'قد', data: height}"/>
    <UserProfileField :field="{title: 'وزن', data: weight}"/>

    <button class="btn btn-primary mt-3" @click="editProfile">
      ثبت
    </button>
  </div>
</template>

<script>
import UserProfileField from "../components/UserProfileField";
import {mapGetters} from "vuex";

export default {
  name: "UserProfile",
  data() {
    return {
      cellphone: ['', true],
      username: ['', true],
      password: ['', true],
      age: ['', true],
      height: ['', true],
      weight: ['', true],
    }
  },
  components: {
    UserProfileField
  },
  methods: {
    editProfile() {
      this.axios.put(this.getUrl() + "user1?id=" + this.$route.params.id, {
        cellphone: this.cellphone[0],
        username: this.username[0],
        password: this.password[0],
        age: this.age[0],
        height: this.height[0],
        weight: this.weight[0],
      })
    },
    ...mapGetters([
      'getUrl',
      'getUid'
    ])
  },
  created() {
    this.axios.get(this.getUrl() + "user1?id=" + this.$route.params.id)
        .then((response) => {
          console.log(response.data[0]);
          this.username[0] = response.data[0].username;
          this.password[0] = response.data[0].password;
          this.cellphone[0] = response.data[0].cellphone;
          this.age[0] = response.data[0].age;
          this.weight[0] = response.data[0].weight;
          this.height[0] = response.data[0].height;
        })
  }
}
</script>

<style scoped>

</style>