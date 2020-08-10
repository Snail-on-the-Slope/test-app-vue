<template>
  <div id="modal-template">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <h1>Add new vehicle</h1>
              <div class="button-close" @click.prevent="$emit('close')">
                <img src="@/assets/img/i/VectorClose.png" alt="close" />
              </div>
            </div>

            <form action="#" class="modal-body">
              <div class="image-box" v-cloak @drop.prevent="addFile" @dragover.prevent>
                <img :src="imageFile[0]" alt="imageUploadNotYetAvailable" v-if="imageFile" />
                <div class="example-image" v-else>
                  <img src="@/assets/img/i/VectorExampleImage.png" alt="dropImage" />
                </div>
              </div>
              <div class="input-field">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  v-model="name"
                  :class="{invalid: $v.name.$dirty && !$v.name.required}"
                  required
                />
                <small
                  class="helper-text invalid"
                  v-if="$v.name.$dirty && !$v.name.required"
                >Entery Name</small>
              </div>
              <div class="input-field">
                <input
                  type="text"
                  name="Description"
                  placeholder="Description"
                  :class="{invalid: $v.desc.$dirty && !$v.desc.required}"
                  v-model="desc"
                  required
                />
                <small
                  class="helper-text invalid"
                  v-if="$v.desc.$dirty && !$v.desc.required"
                >Entery Description</small>
              </div>
              <div class="input-field">
                <input
                  type="text"
                  name="RentPrice"
                  placeholder="Rent price"
                  :class="{invalid: $v.rent.$dirty && !$v.rent.required}"
                  v-model="rent"
                  class="rent-input"
                  required
                />
                <small
                  class="helper-text invalid"
                  v-if="$v.rent.$dirty && !$v.rent.required"
                >Entery Rent</small>
              </div>
              <div class="button-add-item" @click.prevent="addtem">
                <p>Complete</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    imageFile: null,
    name: "",
    desc: "",
    rent: "",
  }),
  validations: {
    name: { required },
    desc: { required },
    rent: { required },
  },
  methods: {
    addtem() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$emit("close");
      let dataForm = {
        id: new Date().toString(),
        type: "custom",
        name: this.name,
        rent: this.rent,
        description: this.desc,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/3c/Nuxt-js.png",
      };
      this.$store.commit("createVehicles", dataForm);
      this.$emit("newItem", dataForm.type);
    },
    addFile(e) {
      let droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      this.imageFile = [];
      [...droppedFiles].forEach((f) => {
        this.imageFile.push(f);
        console.log(f);
      });
    },
  },
};
</script>
 