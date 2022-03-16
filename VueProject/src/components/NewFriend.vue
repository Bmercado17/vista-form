<template>
  <form @submit.prevent="submitData">
    <!-- v-model listens to every keyentered in the inputfields in our form -->
    <div>
      <label for="name">Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="phone">Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div><button>Add Contact</button></div>
  </form>
</template>
<script>
export default {
  emits: ["toggle-favorite", "delete", "add-contact"],
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  //   we use $emit to broadcast the method or action we want 2 perform
  //   we are $emiting broadcasting the method/action 'add-Contact'
  //   which we are using in our new component new-friend @add-contact
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
<style>
body {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: gray;
}
</style>
