<template>
  <div class="w-50 mx-auto mb-2">
    <div class="text-dark-gray text-right">
      <label class="text-16 m-0">{{ field.title }}</label>
    </div>
    <div class="d-flex flex-row align-items-center">
      <button class="btn btn-warning mr-2" @click="data[1] = !data[1]">
        ویرایش
      </button>
      <input type="text" class="text-16 form-control m-0 text-right" v-model="data[0]" :disabled="data[1]">
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfileField",
  props: ['field'],
  data() {
    return {
      data: ''
    }
  },
  created() {
    this.data = this.field.data
  }
}
</script>

<style scoped>

</style>