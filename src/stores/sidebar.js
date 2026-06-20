import { reactive } from "vue";

// Shared collapse-state for the Components sidebar so the app header (burger
// toggle) and the Components page (sidebar) stay in sync.
export const sidebarState = reactive({ collapsed: false });
