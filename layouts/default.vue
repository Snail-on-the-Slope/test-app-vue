<template>
  <div id="app" :class="{daymod: !$store.getters.nightMod, nightmod: $store.getters.nightMod}">
    <Navbar />

    <Nuxt />
  </div>
</template>

<script>
import Navbar from "@/components/app/Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
@media screen and (max-width: 425px) {
  @import "@/assets/styles/mobile.scss";
}
</style>