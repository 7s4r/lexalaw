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
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
  menu.classList.toggle('transition-all');
  menu.classList.toggle('duration-300');
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
  const currentLang = localStorage.getItem('language') || 'en';
  formResult.className = 'text-blue-600 font-semibold';
  formResult.innerHTML =
    translations[currentLang]['contact-wait'] || 'Please wait...';

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
        formResult.innerHTML =
          translations[currentLang]['contact-success'] ||
          'Your message has been sent successfully.';
        formResult.className = 'text-green-600 font-semibold';
      } else {
        formResult.className = 'text-red-600 font-semibold';
        formResult.innerHTML =
          translations[currentLang]['contact-error'] ||
          'There was an error sending your message. Please try again.';
      }
    })
    .catch((error) => {
      console.log(error);
      formResult.className = 'text-red-600 font-semibold';
      formResult.innerHTML =
        translations[currentLang]['contact-error'] || 'Something went wrong!';
    })
    .then(function () {
      contactForm.reset();
      setTimeout(() => {
        formResult.style.display = 'none';
      }, 3000);
    });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });

      const menu = document.getElementById('menu');
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menu.classList.remove('transition-all');
        menu.classList.remove('duration-300');
      }
    }
  });
});

document.addEventListener('click', function (event) {
  const menu = document.getElementById('menu');
  const menuBtn = document.getElementById('menu-btn');
  if (
    menu.classList.contains('active') &&
    !menu.contains(event.target) &&
    !menuBtn.contains(event.target)
  ) {
    menu.classList.remove('active');
    menu.classList.remove('transition-all');
    menu.classList.remove('duration-300');
  }
});

function onSubmit(token) {
  document.getElementById('contact-form').submit();
}

document.addEventListener('DOMContentLoaded', () => {
  const url = new URL(window.location.href);
  const lang = url.searchParams.get('lang');
  const canonical = document.createElement('link');
  canonical.setAttribute('rel', 'canonical');

  if (lang) {
    canonical.setAttribute('href', `https://lexalaw.eu?lang=${lang}`);
  } else {
    canonical.setAttribute('href', 'https://lexalaw.eu');
  }

  document.head.appendChild(canonical);
});
