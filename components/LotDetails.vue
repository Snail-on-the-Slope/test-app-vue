<template>
  <div class="lot-page">
    <div class="content-left">
      <img :src="item.image" alt="image" />
    </div>

    <div class="content-right">
      <h1>{{item.name}}</h1>
      <nav class="lot-details-nav">
        <ul>
          <li :class="{active: active[0]}" @click.prevent="changeDetails">Specifications</li>
          <li :class="{active: active[1]}" @click.prevent="changeDetails">Team</li>
          <li :class="{active: active[2]}" @click.prevent="changeDetails">Rent terms</li>
        </ul>
      </nav>

      <div class="lot-details-content">
        <component :is="details">
          <router-view />
        </component>
      </div>

      <div class="rent-container">
        <div class="rent-text">
          <h4>Rent for</h4>
          <h4 class="secondary400">{{item.rent}} $/h</h4>
        </div>

        <div class="button-rent-now">
          <p>Rent now</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Specifications from "@/components/Specifications.vue";
import Team from "@/components/Team.vue";
import RentTerm from "@/components/RentTerm.vue";

export default {
  name: "lot-page",
  data: () => ({
    item: {
      image: null,
      name: null,
      rent: null,
      specifications_text: null,
    },
    detail: "specifications",
    active: [true, false, false],
  }),
  computed: {
    details() {
      return this.detail === "specifications"
        ? Specifications
        : this.detail === "team"
        ? Team
        : RentTerm;
    },
  },
  mounted() {
    this.item = this.$store.getters.vehicleById;
  },
  methods: {
    changeDetails(e) {
      if (e.path[0].outerText === "Specifications") {
        this.detail = "specifications";
        this.newActive(0);
      }
      if (e.path[0].outerText === "Team") {
        this.detail = "team";
        this.newActive(1);
      }
      if (e.path[0].outerText === "Rent terms") {
        this.detail = "rent terms";
        this.newActive(2);
      }
    },
    newActive(i) {
      this.active = [false, false, false];
      this.active[i] = true;
    },
  },
  components: {
    Specifications,
    Team,
    RentTerm,
  },
};
</script>