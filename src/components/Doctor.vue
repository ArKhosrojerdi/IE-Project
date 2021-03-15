<template>
  <div class="w-100 card border-light-gray rounded-10 mb-3">
    <router-link :to="{name: 'Profile', params: {id: profile.id}}" class="p-3 row w-100 mx-0">
      <div class="row col-md-7 px-0 mx-0 text-right">
        <div class="col-3 m-0 p-0 text-right">
          <img :alt="profile.name" style="height: 105px;" :src="profile.avatar">
          <span class="bg-light-cyan wifi-icon px-1 py-md-1 rounded-circle" data-v-50fd7d5a="">
            <svg
                xmlns="http://www.w3.org/2000/svg" width="24px" height="20px" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="text-cyan feather feather-wifi" data-v-50fd7d5a="">
            <path d="M5 12.55a11 11 0 0 1 14.08 0" data-v-50fd7d5a=""></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0" data-v-50fd7d5a=""></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" data-v-50fd7d5a=""></path>
              <line x1="12" y1="20" x2="12" y2="20" data-v-50fd7d5a=""></line>
            </svg>
          </span>
        </div>

        <div class="col-md-9 pt-2 ml-0 text-right text-18 pr-0">
          <h5 class="text-dark-gray">
            {{ profile.name }}
          </h5>
          <h6 class="text-dark-gray lh-26 text-16">
            {{ profile.spec }}
          </h6>

          <div class="my-md-4 d-flex flex-row align-items-center">
            <div>
              <i v-for="index in 5" :key="index" class="fas fa-star text-12 mr-1" :class="profile.stars >= index ? 'text-water-blue' : 'text-light-gray'"></i>
            </div>

            <p class="text-12 text-light-gray m-0 mr-2">
              ( {{profile.comments}} )
            </p>
          </div>

          <p class="text-14 text-light-gray">
            {{profile.comment_text}}
          </p>
        </div>
      </div>

      <div class="row col-md-5 px-0 mx-0">
        <div class="w-100">
          <div class="w-100 row mx-auto mb-2">
            <div class="col-4 pl-1 pr-0">
              <button class="btn bg-light-cyan text-light-gray py-2 px-1 text-12 w-100">
                <i class="fa fa-video text-12 ml-1"></i>
                مشاوره تصویری
              </button>
            </div>
            <div class="col-4 px-1">
              <button class="btn bg-light-cyan text-light-gray p-2 text-12 w-100">
                <i class="fa fa-microphone text-12 ml-1"></i>
                مشاوره صوتی
              </button>
            </div>
            <div class="col-4 pr-1 pl-0">
              <button class="btn bg-light-cyan text-light-gray p-2 text-12 w-100">
                <i class="far fa-comment-alt text-12 ml-1"></i>
                مشاوره متنی
              </button>
            </div>
          </div>

          <div class="bg-ice-blue rounded-10 d-flex flex-column align-items-start mb-3">
            <div class="p-3 text-light-gray text-right w-100">
              <p class="text-14 mb-3">
                <i class="fas fa-book ml-3 text-18"></i> تجربه کاری {{ profile.experience_years }} سال
              </p>

              <p class="text-14 m-0">
                <i class="fas fa-thumbs-up ml-3 text-18"></i> {{ profile.user_percent }} درصد رضایت کاربران
              </p>
            </div>
          </div>

          <div class="text-center">
            <div class="d-flex flex-row justify-content-between w-100">
              <button class="btn bg-orange text-white w-100 rounded-10 text-18">
                نوبت بگیر
              </button>

              <button class="btn btn-light mr-2 border rounded-10 p-3">
                <i class="far fa-heart text-22 text-water-blue"></i>
              </button>
            </div>
            <p class="text-dark-mint text-14 mt-2 mb-0">
              اولین نوبت خالی {{ profile.first_empty_date }}
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Doctor",
  props: ['profile'],
}
</script>

<style scoped>

</style>