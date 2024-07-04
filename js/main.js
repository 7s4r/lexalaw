document.getElementById('menu-btn').addEventListener('click', function () {
  document.getElementById('menu').classList.toggle('active');
});

const translations = {
  en: {
    'site-title': 'LEXALAW',
    'nav-services': 'Services',
    'nav-about': 'About',
    'nav-contact': 'Contact',
    'hero-title': 'Welcome to Lexalaw',
    'hero-text': 'We offer a wide range of legal services to meet your needs.',
    'services-title': 'Our Services',
    'service1-title': 'Legal Consultation',
    'service1-text':
      'Personalized legal consultations to understand and defend your rights.',
    'service2-title': 'Litigation and Dispute Resolution',
    'service2-text':
      'Representation in court to effectively resolve your disputes.',
    'service3-title': 'Contract Law',
    'service3-text':
      'Drafting and reviewing contracts to protect your interests and prevent conflicts.',
    'service4-title': 'Family Law',
    'service4-text':
      'Advice and representation for all family law-related matters.',
    'service5-title': 'Business Law',
    'service5-text': 'Legal support for businesses and entrepreneurs.',
    'service6-title': 'Real Estate Law',
    'service6-text':
      'Legal assistance in real estate transactions and disputes.',
    'about-title': 'About Us',
    'about-text1':
      'Lexalaw is dedicated to providing high-quality legal services. Our team of experts consists of lawyers specializing in various areas of law. We are committed to defending your rights with integrity and professionalism.',
    'about-text2':
      'Whether you need legal advice, court representation, or support for your projects, we are here to help you every step of the way.',
    'contact-title': 'A question? Need appointment? Contact us',
    'contact-name-label': 'Name',
    'contact-email-label': 'Email',
    'contact-service-label': 'Type of Service',
    'contact-service-choose': 'Select a service',
    'contact-message-label': 'Message',
    'contact-button': 'Send',
    'footer-text': '&copy; 2024 Lexalaw. All rights reserved.',
  },
  fr: {
    'site-title': 'LEXALAW',
    'nav-services': 'Services',
    'nav-about': 'À propos',
    'nav-contact': 'Contact',
    'hero-title': 'Bienvenue chez Lexalaw',
    'hero-text':
      'Nous offrons une large gamme de services juridiques pour répondre à vos besoins.',
    'services-title': 'Nos Services',
    'service1-title': 'Consultation juridique',
    'service1-text':
      'Des consultations juridiques personnalisées pour comprendre et défendre vos droits.',
    'service2-title': 'Litiges et contentieux',
    'service2-text':
      'Représentation devant les tribunaux pour résoudre vos litiges de manière efficace.',
    'service3-title': 'Droit des contrats',
    'service3-text':
      'Rédaction et révision de contrats pour protéger vos intérêts et prévenir les conflits.',
    'service4-title': 'Droit de la famille',
    'service4-text':
      'Conseils et représentation pour toutes les questions liées au droit de la famille.',
    'service5-title': 'Droit des affaires',
    'service5-text':
      'Accompagnement juridique pour les entreprises et les entrepreneurs.',
    'service6-title': 'Droit immobilier',
    'service6-text':
      'Assistance juridique dans les transactions et les litiges immobiliers.',
    'about-title': 'À propos de nous',
    'about-text1':
      "Lexalaw est dédié à fournir des services juridiques de haute qualité. Notre équipe d'experts est composée d'avocats spécialisés dans divers domaines du droit. Nous nous engageons à défendre vos droits avec intégrité et professionnalisme.",
    'about-text2':
      "Que vous ayez besoin de conseils juridiques, de représentation en justice ou d'accompagnement pour vos projets, nous sommes là pour vous aider à chaque étape.",
    'contact-title': 'Contactez-nous',
    'contact-name-label': 'Nom',
    'contact-email-label': 'Email',
    'contact-phone-label': 'Téléphone',
    'contact-service-label': 'Type de service',
    'contact-service-choose': 'Sélectionnez un service',
    'contact-message-label': 'Message',
    'contact-button': 'Envoyer',
    'footer-text': '&copy; 2024 Lexalaw. Tous droits réservés.',
  },
  ru: {
    'site-title': 'LEXALAW',
    'nav-services': 'Услуги',
    'nav-about': 'О нас',
    'nav-contact': 'Контакт',
    'hero-title': 'Добро пожаловать в Lexalaw',
    'hero-text':
      'Мы предлагаем широкий спектр юридических услуг для решения ваших вопросов.',
    'services-title': 'Наши Услуги',
    'service1-title': 'Юридическая консультация',
    'service1-text':
      'Персонализированные юридические консультации для понимания и защиты ваших прав.',
    'service2-title': 'Судебные разбирательства',
    'service2-text':
      'Представительство в суде для эффективного разрешения ваших споров.',
    'service3-title': 'Договорное право',
    'service3-text':
      'Составление и пересмотр договоров для защиты ваших интересов и предотвращения конфликтов.',
    'service4-title': 'Семейное право',
    'service4-text':
      'Консультации и представительство по всем вопросам, связанным с семейным правом.',
    'service5-title': 'Корпоративное право',
    'service5-text': 'Юридическая поддержка для компаний и предпринимателей.',
    'service6-title': 'Недвижимость',
    'service6-text': 'Юридическая помощь в сделках и спорах с недвижимостью.',
    'about-title': 'О нас',
    'about-text1':
      'Юридическая фирма стремится предоставлять высококачественные юридические услуги. Наша команда экспертов состоит из адвокатов, специализирующихся в различных областях права. Мы стремимся защищать ваши права с честностью и профессионализмом.',
    'about-text2':
      'Нуждаетесь ли вы в юридических консультациях, представительстве в суде или сопровождении ваших проектов, мы готовы помочь вам на каждом этапе.',
    'contact-title': 'Есть вопрос? Нужна встреча? Свяжитесь с нами',
    'contact-name-label': 'Имя',
    'contact-email-label': 'Эл. почта',
    'contact-phone-label': 'Телефон',
    'contact-service-label': 'Тип услуги',
    'contact-service-choose': 'Выберите услугу',
    'contact-message-label': 'Сообщение',
    'contact-button': 'Отправить',
    'footer-text': '&copy; 2024 Lexalaw. Все права защищены.',
  },
  uk: {
    'site-title': 'LEXALAW',
    'nav-services': 'Послуги',
    'nav-about': 'Про нас',
    'nav-contact': 'Контакт',
    'hero-title': 'Ласкаво просимо до Lexalaw',
    'hero-text':
      'Ми пропонуємо широкий спектр юридичних послуг для вирішення ваших питань.',
    'services-title': 'Наші Послуги',
    'service1-title': 'Юридична консультація',
    'service1-text':
      'Персоналізовані юридичні консультації для розуміння та захисту ваших прав.',
    'service2-title': 'Судові спори',
    'service2-text':
      'Представництво в суді для ефективного вирішення ваших спорів.',
    'service3-title': 'Договірне право',
    'service3-text':
      'Складання та перегляд договорів для захисту ваших інтересів і запобігання конфліктам.',
    'service4-title': 'Сімейне право',
    'service4-text':
      "Консультації та представництво з усіх питань, пов'язаних із сімейним правом.",
    'service5-title': 'Корпоративне право',
    'service5-text': 'Юридична підтримка для компаній та підприємців.',
    'service6-title': 'Нерухомість',
    'service6-text': 'Юридична допомога в угодах та суперечках з нерухомістю.',
    'about-title': 'Про нас',
    'about-text1':
      'Юридична фірма прагне надавати високоякісні юридичні послуги. Наша команда експертів складається з адвокатів, які спеціалізуються в різних галузях права. Ми прагнемо захищати ваші права чесно та професійно.',
    'about-text2':
      'Потребуєте юридичних консультацій, представництва в суді чи супроводу ваших проектів? Ми готові допомогти вам на кожному етапі.',
    'contact-title': "Є питання? Потрібна зустріч? Зв'яжіться з нами",
    'contact-name-label': "Ім'я",
    'contact-email-label': 'Ел. пошта',
    'contact-phone-label': 'Телефон',
    'contact-service-label': 'Тип послуги',
    'contact-service-choose': 'Виберіть послугу',
    'contact-message-label': 'Повідомлення',
    'contact-button': 'Надіслати',
    'footer-text': '&copy; 2024 Lexalaw. Всі права захищені.',
  },
};

const languageSelect = document.getElementById('language-select');

languageSelect.addEventListener('change', function () {
  const selectedLanguage = this.value;
  applyTranslations(selectedLanguage);
});

function applyTranslations(lang) {
  document.querySelectorAll('[id]').forEach((element) => {
    const translationKey = element.id;
    if (translations[lang] && translations[lang][translationKey]) {
      element.textContent = translations[lang][translationKey];
    }
  });
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
