import { createApp } from "vue";
import { DrodDirectiveOnClickOutside, DrodDirectiveFocus } from "drod-components";

import App from "./App.vue";
import router from "./router";

// import DrodComponents from "./plugins/drod-components.ts";
import "../node_modules/drod-components/dist/style.css";

createApp(App)
  .use(router)
  // .use(DrodComponents as any)
  .directive("on-click-outside", DrodDirectiveOnClickOutside)
  .directive("focus", DrodDirectiveFocus)
  .mount("#app");
