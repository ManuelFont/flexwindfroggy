(function () {
  function createAdSlot() {
    var footer = document.querySelector(".site-footer");

    if (!footer || document.querySelector(".ad-slot--lesson")) {
      return;
    }

    var slot = document.createElement("aside");
    var label = document.createElement("p");
    var ad = document.createElement("ins");

    slot.className = "ad-slot ad-slot--lesson";
    slot.setAttribute("aria-label", "Advertisements");
    label.className = "ad-slot__label";
    label.textContent = "Advertisements";
    ad.className = "adsbygoogle";
    ad.style.display = "block";
    ad.setAttribute("data-ad-client", "ca-pub-5896187408169408");
    ad.setAttribute("data-ad-slot", "9017832356");
    ad.setAttribute("data-ad-format", "auto");
    ad.setAttribute("data-full-width-responsive", "true");

    slot.appendChild(label);
    slot.appendChild(ad);
    footer.parentNode.insertBefore(slot, footer);
  }

  function loadAds() {
    createAdSlot();

    var ad = document.querySelector(".ad-slot--lesson .adsbygoogle");
    if (!ad) {
      return;
    }

    var script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5896187408169408";
    script.crossOrigin = "anonymous";
    script.onload = function () {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };
    document.head.appendChild(script);
  }

  function scheduleAds() {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadAds, { timeout: 2000 });
    } else {
      window.setTimeout(loadAds, 1);
    }
  }

  if (document.readyState === "complete") {
    scheduleAds();
  } else {
    window.addEventListener("load", scheduleAds, { once: true });
  }
})();
