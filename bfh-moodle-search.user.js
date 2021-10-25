// ==UserScript==
// @name         BFH Moodle Search
// @author       Noah Salvi <https://github.com/noahsalvi/bfh-moodle-search>
// @match        https://moodle.bfh.ch/*
// ==/UserScript==

(() => {
  const script = document.createElement("script");
  script.src = "https://noahsalvi.github.io/bfh-moodle-search/build/bundle.js";
  document.head.append(script);
})();
