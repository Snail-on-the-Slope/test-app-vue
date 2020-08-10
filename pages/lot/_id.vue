<template>
  <div>
    <div class="app-lot-layout">
      <Loader v-if="loading" />

      <main class="app-content" :class="{height: (errorDataBase | errorId)}" v-else>
        <div class="error-page" v-if="errorDataBase">
          <h1>An error has occurred</h1>
          <p>Please refresh the page</p>
          <div class="button-reload" @click.prevent="reloadPage">
            <p>Reload page</p>
          </div>
        </div>
        <div class="error-page" v-else-if="errorId">
          <h1>An error has occurred</h1>
          <p>
            Invalid Element Id.
            <br />Back to the home page
          </p>
          <div class="button-reload" @click.prevent="goToHome">
            <p>Go To Home</p>
          </div>
        </div>
        <LotDetails v-else />
      </main>
    </div>
  </div>
</template>

<script>
import LotDetails from "@/components/LotDetails.vue";

export default {
  name: "lot-page",
  data: () => ({
    loading: true,
    errorDataBase: false,
    errorId: false,
  }),
  async created() {
    if (!this.$store.getters.vehicles) {
      await this.$store.dispatch("fetchVehicles");
      this.errorDataBase = this.$store.getters.error;
    }

    if (!this.errorDataBase) {
      let item = await this.$store.dispatch(
        "fetchVehicleById",
        this.$route.params.id
      );
      if (!item) {
        this.errorId = true;
      }
    }
    this.loading = false;
  },
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    reloadPage() {
      window.location.reload();
    },
  },
  components: {
    LotDetails,
  },
};
</script>