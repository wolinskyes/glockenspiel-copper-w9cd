
import _events from "./_events";

// wait for content to load:
document.addEventListener("DOMContentLoaded", function() {
  // run the attachStickyNav function from _events.js
  _events.attachStickyNav();
  _events.attachDrawerMenu();
})