<template>
  <nav class="navbar">
    <div class="nav-left">
      <div class="logo" @click.prevent="goToHome">
        <img :src="mod.logo" alt="logo" id="logo" />
        <img :src="mod.pepelane" alt="logoname" id="pepelane" />
      </div>
      <p class="grey hide">World's first affordable airsharing</p>
    </div>
    <div class="nav-right">
      <div class="night-theme" @click.prevent="changeNightMod">
        <img :src="mod.theme" class="i" />
        <p class="grey hide">{{!$store.getters.nightMod ? "Night mod" : "Day mod"}}</p>
      </div>
      <div class="notification">
        <img src="@/assets/img/i/Message.png" class="i" />
        <div class="i">
          <img src="@/assets/img/i/Subtract.png" />
          <img src="@/assets/img/i/Ellipse 9.png" v-if="notice" />
        </div>
      </div>
      <div class="profile">
        <strong class="hide">{{person.name}}</strong>
        <img src="@/assets/img/Rectangle 12.png" id="rectangle" />
      </div>
    </div>
  </nav>
</template>

<script>
import Night from "@/assets/img/i/Day.png";
import LogoNight from "@/assets/img/LogoNight.png";
import PepelaneNight from "@/assets/img/PepelaneNight.png";
import Day from "@/assets/img/i/Night.png";
import Logo from "@/assets/img/Logo.png";
import Pepelane from "@/assets/img/Pepelane.png";
import Rectangle12 from "@/assets/img/Rectangle 12.png";

export default {
  name: "navbar",
  data: () => ({
    person: {
      name: "Bessie Coper",
      img: Rectangle12,
    },
    dayMod: {
      theme: Day,
      logo: Logo,
      pepelane: Pepelane,
    },
    nightMod: {
      theme: Night,
      logo: LogoNight,
      pepelane: PepelaneNight,
    },
    notice: true,
  }),
  computed: {
    mod() {
      return this.$store.getters.nightMod ? this.nightMod : this.dayMod;
    },
  },
  methods: {
    changeNightMod() {
      this.$store.commit("changeNightMod");
    },
    goToHome() {
      window.location.pathname === "/vehicles" ||
      window.location.pathname === "/"
        ? window.location.reload()
        : this.$router.replace("/");
    },
  },
};
</script>
