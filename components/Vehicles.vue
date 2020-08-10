<template>
  <div class="vehicles">
    <div class="header-content">
      <div class="type-container">
        <div class="text">
          <h1>Rent</h1>
          <select name="categories" v-model="typeName">
            <option value="whatever">whatever</option>
            <option v-for="(t,i) in type" :key="i" :value="t">{{t}}</option>
          </select>
        </div>
      </div>
      <div class="add-container" @click.prevent="showModal = !showModal">
        <h2>Add new</h2>
        <div class="button-add-vehicle">
          <img src="@/assets/img/i/VectorPlus.png" alt="add" />
        </div>
      </div>
    </div>

    <div class="content">
      <Item v-for="(e, idx) in getVeh" :key="idx" :data="e" />
    </div>

    <div class="modal" v-if="showModal">
      <ModalAddItem @close="showModal = false" @newItem="newItem" />
    </div>
  </div>
</template>

<script>
import Item from "@/components/ItemVehicle.vue";
import ModalAddItem from "@/components/app/ModalAddItem.vue";

export default {
  name: "vehicles",
  data: () => ({
    type: [],
    typeName: "whatever",
    showModal: false,
  }),
  mounted() {
    this.type = this.$store.getters.typeNameVehicles;
  },
  computed: {
    getVeh: function () {
      return this.typeName === "whatever"
        ? this.$store.getters.vehicles
        : this.$store.getters.vehiclesByType(this.typeName);
    },
  },
  methods: {
    async newItem(el) {
      this.type.push(el);
      await this.$store.dispatch("fetchVehicleByType");
    },
  },
  components: {
    Item,
    ModalAddItem,
  },
};
</script>
