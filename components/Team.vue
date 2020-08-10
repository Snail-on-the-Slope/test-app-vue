<template>
  <div class="team">
    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
    <h2>Qualified specialists</h2>
    <div class="specialists-container">
      <div class="specialist">
        <img src="@/assets/img/Spec_1.png" alt="specialist" />
        <div class="specialist-text">
          <h4>Marvin McKinney</h4>
          <p>Pilot assistant</p>
        </div>
      </div>
      <div class="specialist">
        <img src="@/assets/img/Spec_2.png" alt="specialist" />
        <div class="specialist-text">
          <h4>Marvin McKinney</h4>
          <p>Pilot assistant</p>
        </div>
      </div>
      <div class="specialist">
        <img src="@/assets/img/Spec_3.png" alt="specialist" />
        <div class="specialist-text">
          <h4>Marvin McKinney</h4>
          <p>Pilot assistant</p>
        </div>
      </div>
    </div>
    <p>{{item.team_text}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    item: {
      team_text: null,
    },
  }),
  mounted() {
    this.item = this.$store.getters.vehicleById;
  },
};
</script>