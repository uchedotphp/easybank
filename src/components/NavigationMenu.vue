<template>
  <div class="container mx-auto mb-3">
    <div class="flex justify-between pt-6 px-6 md:px-0 items-center relative">
      <img src="./../assets/images/logo.svg" alt="" />
      <div
        class="capitalize text-grayishBlue hidden md:block"
        :class="[showNav ? 'navlinks' : '']"
      >
        <ul class="">
          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent md:hover:border-limeGreen hover:text-black"
              href=""
            >
              home
            </a>
          </li>

          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent md:hover:border-limeGreen hover:text-black"
              href=""
            >
              about
            </a>
          </li>
          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent md:hover:border-limeGreen hover:text-black"
              href=""
            >
              contact
            </a>
          </li>
          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent md:hover:border-limeGreen hover:text-black"
              href=""
            >
              blog
            </a>
          </li>
          <li class="inline-block">
            <a
              class="mx-4 pb-6 border-b-4 border-transparent md:hover:border-limeGreen hover:text-black"
              href=""
            >
              careers
            </a>
          </li>
        </ul>
      </div>
      <button
        class="hidden md:block rounded-full capitalize bg-gradient-to-r from-limeGreen to-brightCyan py-3 px-8 text-white font-bold hover:bg-gradient-to-r hover:from-fadedLimeGreen hover:to-fadedBrightCyan"
      >
        request invite
      </button>
      <svg v-if="!showNav"
        @click="displayMenu"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="11"
        class="md:hidden burger"
      >
        <g fill="#2D314D" fill-rule="evenodd">
          <path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
        </g>
      </svg>

      <svg @click="displayMenu" v-else xmlns="http://www.w3.org/2000/svg" width="18" height="19">
        <g fill="#2D314D" fill-rule="evenodd">
          <path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
          <path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    displayMenu() {
      this.showNav = this.showNav ? false : true;
      // console.log('hi')
    },
  },
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
    padding: 20px 0;
  }

  .navlinks ul li {
    display: block;
    padding: 15px 0;
  }

  .burger {
    cursor: pointer;
  }
}
</style>