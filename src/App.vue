<template>
  <div>
    <NavigationMenu />
    <JumbotronBanner />
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu';
import JumbotronBanner from '@/components/JumbotronBanner';
export default {
  name: 'App',
  components: {
    NavigationMenu,
    JumbotronBanner
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,300&display=swap');
body {
  font-family: 'Public Sans', sans-serif;
}
</style>
