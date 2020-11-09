<template>
  <div class="mx-auto overflow-hidden md:pl-64 bg-veryLightGray pb-24 md:pb-0">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <div class="md:pl-6 md:w-5/12 text-center md:text-left px-5 md:pr-0">
        <h1 class="text-5xl md:text-6xl text-darkBlue">
          Next generation digital banking
        </h1>
        <p class="text-grayishBlue text-xl md:text-2xl my-8">
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
        class="md:-mr-32 -mt-40 md:-mt-32 md:pl-32 md:bg-contain bg-no-repeat md:bg-left-top md:bg-hero-pattern order-first md:order-none bg-hero-pattern bg-hero bg-right-bottom bg-contain z-10"
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
@media only screen and (max-width: 640px) {
  .bg-hero {
    background-image: url("./../assets/images/bg-intro-mobile.svg");
  }
}

@media only screen and (min-width: 640px) {
  .bg-hero-pattern {
    background-image: url("./../assets/images/bg-intro-desktop.svg");
  }
}
</style>