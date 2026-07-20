var translator = {
  getInitialLanguage: function (availableLanguages) {
    var language = window.location.hash.substring(1) || "en";
    var requestedLanguage = window.navigator.language.split("-")[0];

    if (
      window.location.hash === "" &&
      requestedLanguage !== "en" &&
      availableLanguages.hasOwnProperty(requestedLanguage)
    ) {
      language = requestedLanguage;
      window.location.hash = requestedLanguage;
    }

    return availableLanguages.hasOwnProperty(language) ? language : "en";
  },

  getLanguageFromHash: function (availableLanguages) {
    var requestedLanguage = window.location.hash.substring(1);

    return availableLanguages.hasOwnProperty(requestedLanguage)
      ? requestedLanguage
      : "en";
  },

  translate: function (translations, language) {
    document.documentElement.lang = language;

    if (translations.title) {
      document.title = translations.title[language] || translations.title.en;
    }

    document.querySelectorAll(".translate").forEach(function (element) {
      translator.translateElement(translations, language, element);
    });
  },

  translateElement: function (translations, language, element) {
      var translation = translations[element.id];

      if (!translation) {
        return;
      }

      var text = translation[language] || translation.en;

      if (element.dataset.translateAttribute) {
        element.setAttribute(element.dataset.translateAttribute, text);
      } else if (element.tagName === "META") {
        element.setAttribute("content", text);
      } else if (element.tagName === "NAV") {
        element.setAttribute("aria-label", text);
      } else {
        element.innerHTML = text;
      }
  },

  start: function (translations) {
    var availableLanguages = messages.languageActive;
    var update = function () {
      translator.translate(
        translations,
        translator.getLanguageFromHash(availableLanguages),
      );
    };

    translator.translate(
      translations,
      translator.getInitialLanguage(availableLanguages),
    );
    window.addEventListener("hashchange", update);

    new MutationObserver(function (mutations) {
      var language = translator.getLanguageFromHash(availableLanguages);

      mutations.forEach(function (mutation) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
          }

          if (node.matches(".translate")) {
            translator.translateElement(translations, language, node);
          }

          node.querySelectorAll(".translate").forEach(function (element) {
            translator.translateElement(translations, language, element);
          });
        });
      });
    }).observe(document.body, { childList: true, subtree: true });
  },
};
