<template>
  <div class="mx-auto overflow-hidden pl-64 bg-veryLightGray">
    <div class="flex justify-between items-center">
      <div class="pl-6 w-5/12">
        <h1 class="text-6xl">Next generation digital banking</h1>
        <p class="text-gray-500 text-2xl my-8">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>

        <button
          class="rounded-full capitalize bg-gradient-to-r from-limeGreen to-brightCyan py-3 px-8 text-white font-bold"
        >
          request invite
        </button>
      </div>
      <div
        class="-mr-32 -mt-32 pl-32 bg-contain bg-no-repeat bg-left-top bg-hero-pattern"
      >
        <img src="./../assets/images/image-mockups.png" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumbotronBanner",
};
</script>

<style lang="css" scoped>
.bg-hero-pattern {
  background-image: url("./../assets/images/bg-intro-desktop.svg");
}
</style>