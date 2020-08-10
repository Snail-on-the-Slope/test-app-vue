<template>
  <div>
    <div class="app-main-layout">
      <Loader v-if="loading" />

      <main class="app-content" :class="{height: error}" v-else>
        <div class="error-page" v-if="error">
          <h1>An error has occurred</h1>
          <p>Please refresh the page</p>
          <div class="button-reload" @click.prevent="reloadPage">
            <p>Reload page</p>
          </div>
        </div>

        <Vehicles v-else />
      </main>
    </div>
  </div>
</template>

<script>
import Vehicles from "@/components/Vehicles";

export default {
  name: "main-layout",
  data: () => ({
    loading: true,
    error: false,
  }),
  async mounted() {
    if (!this.$store.getters.vehicles) {
      await this.$store.dispatch("fetchVehicles");
    }
    this.loading = false;
    this.error = this.$store.getters.error;
    if (!this.error) {
      await this.$store.dispatch("fetchVehicleByType");
    }
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
  components: {
    Vehicles,
  },
};
</script>