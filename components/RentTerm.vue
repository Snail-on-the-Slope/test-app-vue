<template>
  <div class="rent-term">
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
    <h2>Additional conditions:</h2>
    <div class="conditions-container">
      <div class="condition">
        <img src="@/assets/img/i/Ellipse 10.png" alt />
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div class="condition">
        <img src="@/assets/img/i/Ellipse 10.png" alt />
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      </div>
      <div class="condition">
        <img src="@/assets/img/i/Ellipse 10.png" alt />
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: {
      term_text: null,
    },
  }),
  mounted() {
    this.item = this.$store.getters.vehicleById;
  },
};
</script>