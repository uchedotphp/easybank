<template>
<!-- <div class="overlay"> -->
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
          class="rounded-full capitalize bg-gradient-to-r from-limeGreen to-brightCyan py-3 px-8 text-white font-bold hover:bg-gradient-to-r hover:from-fadedLimeGreen hover:to-fadedBrightCyan"
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
<!-- </div> -->
</template>

<script>
export default {
  name: "JumbotronBanner",
};
</script>

<style lang="css" scoped>
@media only screen and (max-width: 768px) {
  .bg-hero {
    background-image: url("./../assets/images/bg-intro-mobile.svg");
  }

  /* .overlay { */
  /* background-color: crimson; */
  /* z-index: 90; */
  /* height: 100%; */
  /* position: fixed; */
  /* left: 0;
  top: 0; */
  /* background-color: rgba(0,0,0, 0.9); Black w/opacity */
  /* } */
}

@media only screen and (min-width: 768px) {
  .bg-hero-pattern {
    background-image: url("./../assets/images/bg-intro-desktop.svg");
  }
}
</style>