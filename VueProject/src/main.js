// if we are importing from a package file like the one below we dont have to specify file path like ./
import { createApp } from "vue";
import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";
let app = createApp(App);
app.component("friend-contact", FriendContact);
app.component("new-friend", NewFriend);
app.mount("#app");
