function loadGTM() {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-P7K7HCMG");
}

window.addEventListener("load", function () {
  window.cookieconsent.initialise({
    palette: {
      popup: { background: "#100c08", text: "#f2f0e6" },
    },
    type: "opt-in",
    content: {
      message: "We use cookies to understand how visitors use our site. Your data helps us improve the experience.",
      allow: "Accept cookies",
      deny: "Decline",
      link: "Cookie policy",
      href: "/cookies.html",
    },
    onInitialise: function (status) {
      if (status === cookieconsent.status.allow) loadGTM();
    },
    onStatusChange: function (status) {
      if (status === cookieconsent.status.allow) loadGTM();
    },
  });
});
