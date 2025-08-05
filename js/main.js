// js/main.js
const translations = window.locales;

function getCurrentLanguage() {
  const supportedLangs = ['fr', 'en', 'ru', 'uk'];
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const storedLang = localStorage.getItem('language');
  const browserLang = navigator.language.slice(0, 2);

  return supportedLangs.includes(urlLang)
    ? urlLang
    : storedLang || (supportedLangs.includes(browserLang) ? browserLang : 'fr');
}

function updateEmailLinks() {
  const email = 'info' + '@' + 'lexalaw.eu';
  const emailLinkHTML = `<a href="mailto:${email}" class="text-blue-600 hover:underline">${email}</a>`;
  const contactEmailEl = document.getElementById('email-link-contact');
  const footerEmailEl = document.getElementById('email-link-footer');

  if (contactEmailEl) contactEmailEl.innerHTML = emailLinkHTML;
  if (footerEmailEl) footerEmailEl.innerHTML = emailLinkHTML;
}

function updateOpenGraphTags(lang) {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector(
    'meta[property="og:description"]'
  );

  if (ogTitle && ogDescription && translations[lang]) {
    ogTitle.setAttribute('content', translations[lang]['og-title']);
    ogDescription.setAttribute('content', translations[lang]['og-description']);
  }
}

// Détection automatique de la langue du navigateur
document.addEventListener('DOMContentLoaded', () => {
  const defaultLang = getCurrentLanguage();
  localStorage.setItem('language', defaultLang);
  languageSelect.value = defaultLang;
  applyTranslations(defaultLang);
  updateOpenGraphTags(defaultLang);
});

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function () {
  const selectedLanguage = this.value;
  localStorage.setItem('language', selectedLanguage);
  applyTranslations(selectedLanguage);
  updateOpenGraphTags(selectedLanguage);

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
      element.innerHTML = translations[lang][translationKey];
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

  updateEmailLinks();
}

const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');

/**
 * Utility to display the result of the contact form.
 * @param {'success'|'error'|'info'} type
 * @param {string} message
 */
function displayFormResult(type, message) {
  formResult.className = `font-semibold ${
    type === 'success'
      ? 'text-green-600'
      : type === 'error'
      ? 'text-red-600'
      : 'text-blue-600'
  }`;
  formResult.innerHTML = message;
  formResult.style.display = '';
}

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  const currentLang = localStorage.getItem('language') || 'en';
  displayFormResult(
    'info',
    translations[currentLang]['contact-wait'] || 'Please wait...'
  );

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
        displayFormResult(
          'success',
          translations[currentLang]['contact-success'] ||
            'Your message has been sent successfully.'
        );
      } else {
        displayFormResult(
          'error',
          translations[currentLang]['contact-error'] ||
            'There was an error sending your message. Please try again.'
        );
      }
    })
    .catch((error) => {
      console.log(error);
      displayFormResult(
        'error',
        translations[currentLang]['contact-error'] || 'Something went wrong!'
      );
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
