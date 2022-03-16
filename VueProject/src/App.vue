<template>
  <section>
    <h1>My Friends</h1>
    <!-- add-contact is being $emited broadcasted from inside 
    methods in NewFriend (from child to parent app.vue) -->
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :id="friend.id"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-Favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
    </ul>
  </section>
</template>
<script>
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "Manuel",
          name: "Lorenz",
          phone: "503 333 33333",
          email: "lorenz@localHost.com",
          isFavorite: true,
        },
        {
          id: "BM",
          name: "Mercado",
          phone: "503 777 7777",
          email: "Mercado@localHost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      let identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    // add-contact is being broadcasted emited from inside methods
    // in NewFriend.vue 3 piece code in two components to make it work
    addContact(name, phone, email) {
      //create the action with the method
      //and create the actyal steps/information to perform the action
      let NewFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.friends.push(NewFriendContact);
    },
    // this method checks within app.vue custom component properties, and the array
    // of friends cheks if friend Id is equal which we trigger by matching and filtering to return
    // a new array without the matching friendId because it will delete it.
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>
