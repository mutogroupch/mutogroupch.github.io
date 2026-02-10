/* ========================================
   MUTO Landschaftsarchitektur — Main JavaScript
   Minimal: only essential functionality
   ======================================== */

(function () {
  'use strict';

  // Highlight current page in navigation
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.site-nav a');

  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && currentPath.startsWith(href) && href !== '/' && href !== '/en/') {
      link.classList.add('is-active');
    }
  });
})();
