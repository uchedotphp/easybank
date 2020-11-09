<template>
  <div class="container mx-auto mb-3">
    <div class="flex justify-between pt-6 px-6 md:px-0 items-center relative">
      <img src="./../assets/images/logo.svg" alt="" />
      <div class="capitalize text-grayishBlue hidden md:block navlinks">
        <ul class="">
          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black"
              href=""
            >
              home
            </a>
          </li>

          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black"
              href=""
            >
              about
            </a>
          </li>
          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black"
              href=""
            >
              contact
            </a>
          </li>
          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black"
              href=""
            >
              blog
            </a>
          </li>
          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent hover:border-limeGreen hover:text-black"
              href=""
            >
              careers
            </a>
          </li>
        </ul>
      </div>
      <button
        class="hidden md:block rounded-full capitalize bg-gradient-to-r from-limeGreen to-brightCyan py-3 px-8 text-white font-bold"
      >
        request invite
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="11"
        class="md:hidden"
      >
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

<style lang="css" scoped>
@media screen and (max-width: 767px) {
  .navlinks {
    display: block;
    position: absolute;
    background: #fff;
    color: #000;
    width: 87vw;
    top: 75px;
    border-radius: 10px;
    text-align: center;
    z-index: 20;
  }

  .navlinks ul li{
    display: block;
    padding: 20px 0;
  }
}
</style>