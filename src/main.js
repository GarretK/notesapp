import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import AddNote from "./components/AddNote.vue";
import DeleteNote from "./components/DeleteNote.vue";
import StatsBanner from "./components/StatsBanner.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSort,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSort);
library.add(faExclamationTriangle);
Vue.component("FontAwesomeIcon", FontAwesomeIcon);
Vue.component("DeleteNote", DeleteNote);
Vue.component("AddNote", AddNote);
Vue.component("StatsBanner", StatsBanner);
new Vue({
  render: (h) => h(App),
  components: { App, DeleteNote, AddNote, StatsBanner },
}).$mount("#app");
