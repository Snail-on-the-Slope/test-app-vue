<template>
  <div class="item" @click="goToLotPage">
    <img :src="data.image" alt />
    <div class="item-right">
      <h2>{{data.name}}</h2>
      <p>{{data.description}}</p>
      <h4 class="secondary400">{{data.rent}} $/h</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    goToLotPage() {
      // this.$router.push({ name: "lot", params: { id: this.data.id } });
      this.$router.push("/lot/" + this.data.id);
    },
  },
};
</script>