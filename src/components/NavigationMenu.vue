<template>
  <div class="container mx-auto mb-3">
    <div class="flex justify-between pt-6 px-6 md:px-0 items-center">
      <img src="./../assets/images/logo.svg" alt=""/>
      <div class="capitalize text-grayishBlue navlinks">
        <span class="">
            <a class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black" href="">
                home
            </a>
        </span>
        <span class="">
            <a class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black" href="">
                about
            </a>
        </span>
        <span class="">
            <a class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black" href="">
                contact
            </a>
        </span>
        <span class="">
            <a class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black" href="">
                blog
            </a>
        </span>
        <span class="">
            <a class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black" href="">
                careers
            </a>
        </span>
      </div>
      <button class="hidden md:block rounded-full capitalize bg-gradient-to-r from-limeGreen to-brightCyan py-3 px-8 text-white font-bold">
        request invite
      </button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="11" class="md:hidden">
        <g fill="#2D314D" fill-rule="evenodd">
          <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
};
</script>

<style lang="scss" scoped>
</style>