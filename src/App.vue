<template>
  <div id="app">
    <Header v-if="page !== 'Login' && page !== 'Signup' && page !== 'LoginDoctor' && page !== 'SignupDoctor'"/>

    <router-view/>

    <MainFooter v-if="page === '/'"/>
    <MiniFooter v-else-if="page !== 'Login' && page !== 'Signup' && page !== 'LoginDoctor' && page !== 'SignupDoctor'"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import MainFooter from '@/components/MainFooter.vue';
import MiniFooter from '@/components/MiniFooter.vue';

export default {
  name: "App",
  components: {
    Header,
    MainFooter,
    MiniFooter
  },
  computed: {
    page() {
      return this.$route.name;
    }
  }
}
</script>

<style>
@import "../public/styles/index.css";
@import "../public/styles/my-bootstrap.css";

#app {
  font-family: 'Yekan', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
}
</style>
