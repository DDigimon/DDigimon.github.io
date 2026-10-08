(function () {
  document.querySelectorAll(".homepage-news").forEach(function (news) {
    var panel = news.parentElement;
    var scrollbar = panel.querySelector(".homepage-news__scrollbar");
    var thumb = scrollbar.querySelector(".homepage-news__thumb");
    var content = news.querySelector(".homepage-news__items");
    var items = Array.prototype.filter.call(content.children, function (item) {
      return item.tagName === "P";
    });
    var visibleCount = Number(news.dataset.visibleItems) || 3;
    var lastVisible = items[Math.min(visibleCount, items.length) - 1];

    if (!lastVisible) return;

    function updateScrollbar() {
      var range = news.scrollHeight - news.clientHeight;
      panel.classList.toggle("is-scrollable", range > 0);
      var thumbHeight = Math.min(scrollbar.clientHeight, Math.max(24,
        scrollbar.clientHeight * news.clientHeight / news.scrollHeight));
      var progress = range > 0 ? news.scrollTop / range : 0;
      thumb.style.height = thumbHeight + "px";
      thumb.style.transform = "translateY(" + progress * (scrollbar.clientHeight - thumbHeight) + "px)";
      scrollbar.setAttribute("aria-valuenow", Math.round(progress * 100));
    }

    // Measure complete entries so wrapping on smaller screens still shows three.
    function updateHeight() {
      var height = lastVisible.getBoundingClientRect().bottom - content.getBoundingClientRect().top;
      news.style.maxHeight = Math.ceil(height) + "px";
      updateScrollbar();
    }

    news.addEventListener("scroll", updateScrollbar);

    var dragOffset = null;
    function dragTo(event) {
      var travel = scrollbar.clientHeight - thumb.offsetHeight;
      if (travel <= 0) return;
      var position = event.clientY - scrollbar.getBoundingClientRect().top - dragOffset;
      news.scrollTop = Math.max(0, Math.min(1, position / travel)) * (news.scrollHeight - news.clientHeight);
    }
    scrollbar.addEventListener("pointerdown", function (event) {
      if (event.button !== 0) return;
      event.preventDefault();
      scrollbar.focus({ preventScroll: true });
      dragOffset = event.target === thumb ? event.clientY - thumb.getBoundingClientRect().top : thumb.offsetHeight / 2;
      scrollbar.setPointerCapture(event.pointerId);
      dragTo(event);
    });
    scrollbar.addEventListener("pointermove", function (event) {
      if (dragOffset !== null) dragTo(event);
    });
    ["pointerup", "pointercancel", "lostpointercapture"].forEach(function (name) {
      scrollbar.addEventListener(name, function () { dragOffset = null; });
    });
    scrollbar.addEventListener("keydown", function (event) {
      switch (event.key) {
        case "ArrowDown": news.scrollTop += 40; break;
        case "ArrowUp": news.scrollTop -= 40; break;
        case "PageDown": news.scrollTop += news.clientHeight; break;
        case "PageUp": news.scrollTop -= news.clientHeight; break;
        case "Home": news.scrollTop = 0; break;
        case "End": news.scrollTop = news.scrollHeight; break;
        default: return;
      }
      event.preventDefault();
    });
    scrollbar.addEventListener("wheel", function (event) {
      event.preventDefault();
      var unit = event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? news.clientHeight : 1;
      news.scrollTop += event.deltaY * unit;
    }, { passive: false });

    updateHeight();
    if (window.ResizeObserver) {
      new ResizeObserver(updateHeight).observe(content);
    } else {
      window.addEventListener("resize", updateHeight);
    }
    if (document.fonts) document.fonts.ready.then(updateHeight);
  });
})();
