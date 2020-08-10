<template>
  <div class="specifications">
    <p>{{item.specifications_text}}</p>
    <div class="features-container">
      <h2>Features:</h2>
      <div class="feature">
        <div class="feature-left">
          <img src="@/assets/img/i/Feature_1.png" alt class="feature-img" />
        </div>
        <div class="feature-right">
          <strong>A challenge for a true champion</strong>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
      </div>
      <div class="feature">
        <div class="feature-left">
          <img src="@/assets/img/i/Feature_2.png" alt class="feature-img" />
        </div>
        <div class="feature-right">
          <strong>Pilot's sweaty hands</strong>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: {
      specifications_text: null,
    },
  }),
  mounted() {
    this.item = this.$store.getters.vehicleById;
  },
};
</script>