// ==UserScript==
// @name         Shopify Better Share Preview Links
// @version      1.0
// @description  Make the Shopify "Share Preview" links link to the current page instead of the home page
// @author       Ewan Howell
// @match        *://*/*
// ==/UserScript==

(function() {
  if (location.pathname !== "/preview_bar") return
  const button = document.querySelector(".admin-bar > :first-child > ul > :nth-child(2) > button")
  if (button) {
    button.addEventListener("click", e => {
      const input = document.getElementById("share_theme_url")
      input.value += window.top.location.href.replace(window.location.origin, "")
      console.log(window.top.location.href)
    })
  }
})();
