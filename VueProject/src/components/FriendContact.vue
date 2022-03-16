<template>
  <section>
    <li>
      <h3>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h3>
    </li>
    <button @click="toggleDetails">Show Details</button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
    <!-- clck event below, we could have created a method for it. but 
    we can also emit it directly in the button, snc is only 1 argument -->
    <button @click="$emit('delete', id)">Delete</button>
  </section>
</template>
<!--seperate part for javascript section -->
<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: false,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      //   validator: function (value) {
      //     return value === "1" || value === "0";
      //   },
    },
  },
  emits: ["toggle-favorite", "delete"],
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // this is how we communicate with parent app.vue $emit
    toggleFavorite() {
      this.$emit("toggle-Favorite", this.id);
    },
  },
};
</script>

<!--this is the style part of the component-->
<style>
section {
  background-color: rgba(97, 96, 95, 0.3);
}
body {
  background-color: aqua;
}
section {
  text-align: center;
  padding: 2rem;
  list-style: none;
}
input {
  margin: 10px;
  padding: 5px;
}
button {
  padding: 5px;
  margin: 10px;
  border-radius: 25px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-width: 0 auto;
  background-color: antiquewhite;
  color: black;
  text-align: center;
}
li {
  background-color: rgba(97, 96, 95, 0.3);
  width: 100%;
}
</style>
