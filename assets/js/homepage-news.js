(function () {
  document.querySelectorAll(".homepage-news").forEach(function (news) {
    var content = news.querySelector(".homepage-news__items");
    var items = Array.prototype.filter.call(content.children, function (item) {
      return item.tagName === "P";
    });
    var visibleCount = Number(news.dataset.visibleItems) || 3;
    var lastVisible = items[Math.min(visibleCount, items.length) - 1];

    if (!lastVisible) return;

    // Measure complete entries so wrapping on smaller screens still shows three.
    function updateHeight() {
      var height = lastVisible.getBoundingClientRect().bottom - content.getBoundingClientRect().top;
      news.style.maxHeight = Math.ceil(height) + "px";
    }

    updateHeight();
    if (window.ResizeObserver) {
      new ResizeObserver(updateHeight).observe(content);
    } else {
      window.addEventListener("resize", updateHeight);
    }
    if (document.fonts) document.fonts.ready.then(updateHeight);
  });
})();
