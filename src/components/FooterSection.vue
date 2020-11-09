<template>
  <div class="bg-darkBlue py-16">
    <div
      class="container mx-auto flex flex-col md:flex-row md:justify-between justify-center"
    >
      <div class="md:grid md:grid-cols-3">
        <div class="md:mr-24">
          <div class="justify-center flex md:justify-start md:pb-12">
            <img src="./../assets/images/logoWhite.svg" alt="" srcset="" />
          </div>
          <ul class="py-8 md:pb-0 flex justify-center">
            <li class="inline-block mr-4">
              <a href="">
                <img
                  src="./../assets/images/icon-facebook.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
            <li class="inline-block mr-4">
              <a href="">
                <img
                  src="./../assets/images/icon-youtube.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
            <li class="inline-block mr-4">
              <a href="">
                <img
                  src="./../assets/images/icon-twitter.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
            <li class="inline-block mr-4">
              <a href="">
                <img
                  src="./../assets/images/icon-pinterest.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
            <li class="inline-block">
              <a href="">
                <img
                  src="./../assets/images/icon-instagram.svg"
                  alt=""
                  srcset=""
                />
              </a>
            </li>
          </ul>
        </div>

        <ul class="capitalize text-grayishBlue text-center md:text-justify md:ml-6">
          <li class="py-1 md:pb-4">
            <a class="hover:text-limeGreen" href=""> about us </a>
          </li>
          <li class="py-1 md:pb-4">
            <a class="hover:text-limeGreen" href=""> contact </a>
          </li>
          <li class="py-1 md:pb-0">
            <a class="hover:text-limeGreen" href=""> blog </a>
          </li>
        </ul>
        <ul class="capitalize text-grayishBlue text-center md:text-justify">
          <li class="py-1 md:pb-4">
            <a class="hover:text-limeGreen" href=""> careers </a>
          </li>
          <li class="py-1 md:pb-4">
            <a class="hover:text-limeGreen" href=""> support </a>
          </li>
          <li class="py-1 md:pb-0">
            <a class="hover:text-limeGreen" href=""> privacy policy </a>
          </li>
        </ul>
      </div>
      <div class="">
        <div class="flex justify-center md:justify-end md:pb-6">
          <button
            class="rounded-full capitalize bg-gradient-to-r from-limeGreen to-brightCyan py-3 my-6 md:mt-0 px-8 text-white font-bold hover:bg-gradient-to-r hover:from-fadedLimeGreen hover:to-fadedBrightCyan"
          >
            request invite
          </button>
        </div>
        <div class="capitalize text-grayishBlue py-3 md:py-0 text-center">
          &#169; easybank. all rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style lang="scss" scoped>
</style>