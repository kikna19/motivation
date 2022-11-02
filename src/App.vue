<template>
  <header-page></header-page>
  <router-view></router-view>
  <footer-page></footer-page>
</template>

<script>



import HeaderPage from "@/components/HeaderPage";
import FooterPage from "@/components/FooterPage";

export default {
  name: 'App',
  components: {
    HeaderPage,
    FooterPage,
  }
}
</script>

<style>

</style>
