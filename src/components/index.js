// Sidebar group order (sections are rendered in this order).
export const groupOrder = [
  "Core",
  "Forms",
  "Navigation",
  "Feedback",
  "Data & Layout",
  "Media",
  "Modals",
  "Text & Effects",
  "Markdown & WYSIWYG",
  "Extra",
];

const components = [
  // ── Core ─────────────────────────────────────────────
  { name: "DrodButton", url: "button", group: "Core" },
  { name: "DrodButtonGroup", url: "button-group", group: "Core" },
  { name: "DrodButtonFloating", url: "button-floating", group: "Core" },
  { name: "DrodSpeedDial", url: "speed-dial", group: "Core" },
  { name: "DrodIcon", url: "icon", group: "Core" },
  { name: "DrodIconRotateHue", url: "icon-rotate-hue", group: "Core" },
  { name: "DrodLink", url: "link", group: "Core" },
  { name: "DrodBadge", url: "badge", group: "Core" },
  { name: "DrodChip", url: "chip", group: "Core" },
  { name: "DrodAvatar", url: "avatar", group: "Core" },
  { name: "DrodDivider", url: "divider", group: "Core" },
  { name: "DrodSpacer", url: "spacer", group: "Core" },

  // ── Forms ────────────────────────────────────────────
  { name: "DrodInput", url: "input", group: "Forms" },
  { name: "DrodInputPassword", url: "input-password", group: "Forms" },
  { name: "DrodCheckbox", url: "checkbox", group: "Forms" },
  { name: "DrodRadio", url: "radio", group: "Forms" },
  { name: "DrodSwitch", url: "switch", group: "Forms" },
  { name: "DrodSlider", url: "slider", group: "Forms" },
  { name: "DrodSelect", url: "select", group: "Forms" },
  { name: "DrodCombobox", url: "combobox", group: "Forms" },
  { name: "DrodMultiselect", url: "multiselect", group: "Forms" },
  { name: "DrodDropFile", url: "drop-file", group: "Forms" },
  { name: "DrodToggleButton", url: "toggle-button", group: "Forms" },

  // ── Navigation ───────────────────────────────────────
  { name: "DrodSidebar", url: "sidebar", group: "Navigation" },
  { name: "DrodTabs", url: "tabs", group: "Navigation" },
  { name: "DrodAccordion", url: "accordion", group: "Navigation" },
  { name: "DrodBreadcrumbs", url: "breadcrumbs", group: "Navigation" },
  { name: "DrodStepper", url: "stepper", group: "Navigation" },
  { name: "DrodPagination", url: "pagination", group: "Navigation" },
  { name: "DrodDropdown", url: "dropdown", group: "Navigation" },
  { name: "DrodFloatingMenu", url: "floating-menu", group: "Navigation" },
  { name: "DrodMenuActions", url: "MenuActions", group: "Navigation" },
  { name: "DrodMenuDropdown", url: "MenuDropdown", group: "Navigation" },
  { name: "DrodMenuIcon", url: "MenuIcon", group: "Navigation" },

  // ── Feedback ─────────────────────────────────────────
  { name: "DrodNotification", url: "Notification", group: "Feedback" },
  { name: "DrodAlert", url: "alert", group: "Feedback" },
  { name: "DrodTooltip", url: "tooltip", group: "Feedback" },
  { name: "DrodLoading", url: "loading", group: "Feedback" },
  { name: "DrodSkeleton", url: "skeleton", group: "Feedback" },
  { name: "DrodProgressGroup", url: "progress-group", group: "Feedback" },
  { name: "DrodRating", url: "rating", group: "Feedback" },
  { name: "DrodReloadPWA", url: "ReloadPWA", group: "Feedback" },
  { name: "DrodNoData", url: "NoData", group: "Feedback" },

  // ── Data & Layout ────────────────────────────────────
  { name: "DrodTable", url: "table", group: "Data & Layout" },
  { name: "DrodTimelineVertical", url: "TimelineVertical", group: "Data & Layout" },
  { name: "DrodMap", url: "map", group: "Data & Layout" },
  { name: "DrodPortrait", url: "portrait", group: "Data & Layout" },
  { name: "DrodCards", url: "cards", group: "Data & Layout" },
  { name: "DrodStackGrid", url: "StackGrid", group: "Data & Layout" },
  { name: "DrodHorizontalScroller", url: "horizontal-scroller", group: "Data & Layout" },

  // ── Media ────────────────────────────────────────────
  { name: "DrodCarousel", url: "carousel", group: "Media" },
  { name: "DrodCarouselSlider", url: "carousel-slider", group: "Media" },
  { name: "DrodVideo", url: "video", group: "Media" },
  { name: "DrodVideoGif", url: "video-gif", group: "Media" },
  { name: "DrodVideoScrubbable", url: "video-scrubbable", group: "Media" },
  { name: "DrodVideoSplitter", url: "video-splitter", group: "Media" },
  { name: "DrodYoutube", url: "video-youtube", group: "Media" },
  { name: "DrodLottie", url: "lottie", group: "Media" },
  { name: "DrodMusicPlayer", url: "MusicPlayer", group: "Media" },
  { name: "DrodImageModal", url: "image-modal", group: "Media" },
  { name: "DrodBackgroundImage", url: "background-image", group: "Media" },
  { name: "DrodIframe", url: "iframe", group: "Media" },

  // ── Modals ───────────────────────────────────────────
  { name: "DrodModalBase", url: "ModalBase", group: "Modals" },
  { name: "DrodModalDelete", url: "ModalDelete", group: "Modals" },
  { name: "DrodModalInfo", url: "ModalInfo", group: "Modals" },

  // ── Text & Effects ───────────────────────────────────
  { name: "DrodTextGlow", url: "TextGlow", group: "Text & Effects" },
  { name: "DrodTextGradient", url: "TextGradient", group: "Text & Effects" },
  { name: "DrodRotateText", url: "RotateText", group: "Text & Effects" },
  { name: "DrodAnimatedGradient", url: "animated-gradient", group: "Text & Effects" },
  { name: "DrodTerminal", url: "terminal", group: "Text & Effects" },
  { name: "DrodThemeSwitcher", url: "theme-switcher", group: "Text & Effects" },
  { name: "DrodGopher", url: "gopher", group: "Text & Effects" },

  // ── Markdown & WYSIWYG ───────────────────────────────
  { name: "DrodMarkdown", url: "markdown", group: "Markdown & WYSIWYG" },
  { name: "DrodMarkdownViewer", url: "markdown-viewer", group: "Markdown & WYSIWYG" },
  { name: "DrodWysiwyg", url: "wysiwyg", group: "Markdown & WYSIWYG" },
  { name: "DrodWysiwygEditor", url: "wysiwyg-editor", group: "Markdown & WYSIWYG" },
  { name: "DrodWysiwygViewer", url: "wysiwyg-viewer", group: "Markdown & WYSIWYG" },

  // ── Extra ────────────────────────────────────────────
  { name: "DrodVerticalSpacing", url: "vertical-spacing", group: "Extra" },
];

export default components;
