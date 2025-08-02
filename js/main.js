// js/main.js
const translations = window.locales;

// Détection automatique de la langue du navigateur
document.addEventListener('DOMContentLoaded', () => {
  const supportedLangs = ['fr', 'en', 'ru', 'uk'];
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const storedLang = localStorage.getItem('language');
  const browserLang = navigator.language.slice(0, 2);
  const defaultLang = supportedLangs.includes(urlLang)
    ? urlLang
    : storedLang || (supportedLangs.includes(browserLang) ? browserLang : 'en');

  localStorage.setItem('language', defaultLang);
  languageSelect.value = defaultLang;
  applyTranslations(defaultLang);
});

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function () {
  const selectedLanguage = this.value;
  localStorage.setItem('language', selectedLanguage);
  applyTranslations(selectedLanguage);

  const url = new URL(window.location);
  url.searchParams.set('lang', selectedLanguage);
  window.history.replaceState({}, '', url);
});

document.getElementById('menu-btn').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('active');
});

function applyTranslations(lang) {
  document.querySelectorAll('[id]').forEach((element) => {
    const translationKey = element.id;
    if (translations[lang] && translations[lang][translationKey]) {
      element.textContent = translations[lang][translationKey];
    }
  });

  document.title = translations[lang]['title-tag'];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', translations[lang]['meta-description']);
  }

  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords && translations[lang]['meta-keywords']) {
    metaKeywords.setAttribute('content', translations[lang]['meta-keywords']);
  }

  for (let i = 1; i <= 6; i++) {
    const option = document.getElementById(`form-service${i}-option`);
    if (option && translations[lang][`form-service${i}-option`]) {
      option.textContent = translations[lang][`form-service${i}-option`];
    }
  }

  ['seo-text-title', 'seo-text-paragraph1', 'seo-text-paragraph2'].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el && translations[lang][id]) {
        el.textContent = translations[lang][id];
      }
    }
  );
}

const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  formResult.innerHTML = 'Please wait...';

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        formResult.innerHTML = json.message;
      } else {
        console.log(response);
        formResult.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      formResult.innerHTML = 'Something went wrong!';
    })
    .then(function () {
      contactForm.reset();
      setTimeout(() => {
        formResult.style.display = 'none';
      }, 3000);
    });
});
