import type { Lang } from '../lib/l10n';

// Chaînes d'interface. Les modèles de message WhatsApp utilisent des {variables} remplacées côté navigateur
// (voir src/scripts/booking.ts) : les garder en chaînes simples, sans fonctions.

const fr = {
  nav: {
    home: 'Accueil', cabinet: 'Le cabinet', treatments: 'Soins', visit: 'Première visite', access: 'Accès', faq: 'Questions', contact: 'Contact',
    menu: 'Menu', close: 'Fermer', language: 'Langue', skip: 'Aller au contenu', main: 'Navigation principale', mobile: 'Menu mobile',
  },
  cta: {
    whatsapp: 'Écrire sur WhatsApp', book: 'Prendre rendez-vous', seeTreatments: 'Nos soins', seeTreatment: 'Voir ce soin',
    call: 'Appeler', callNow: 'Appeler maintenant', openMap: 'Ouvrir dans OpenStreetMap', bookThis: 'Prendre rendez-vous pour ce soin',
  },
  sections: {
    treatments: { title: 'Nos soins', sub: 'Six domaines de soins. Chaque soin est expliqué avant d’être commencé.' },
    cabinet: { title: 'Le cabinet' },
    visit: { title: 'Votre première visite', sub: 'Ce qui se passe, étape par étape.' },
    commitments: { title: 'Les engagements du cabinet', sub: 'Ce que nous faisons à chaque rendez-vous.' },
    appointment: { title: 'Prendre rendez-vous', sub: 'Choisissez un soin et un jour. Votre demande est préparée sur WhatsApp, le cabinet vous confirme ensuite l’horaire.' },
    coverage: { title: 'Mutuelles et paiement' },
    faq: { title: 'Questions fréquentes' },
    contact: { title: 'Nous contacter', sub: 'Écrivez-nous sur WhatsApp ou appelez-nous pendant les horaires d’ouverture.' },
    access: { title: 'Accès au cabinet' },
  },
  strip: {
    today: 'Aujourd’hui : {range}',
    closedToday: 'Aujourd’hui : fermé',
    fallback: 'Lun–ven 9 h–19 h, sam 9 h–13 h',
    emergency: 'Urgences : appelez-nous',
    label: 'Informations pratiques',
  },
  treatment: {
    back: 'Tous les soins', duration: 'Durée indicative', sessions: 'Nombre de séances', forWho: 'Pour qui', steps: 'En quoi ça consiste',
    quote: 'Devis personnalisé après examen', quoteNote: 'Aucun tarif n’est affiché : le devis est établi après l’examen et vous est remis avant tout soin.',
    faq: 'Questions fréquentes sur ce soin', others: 'Autres soins', photos: 'Photos', description: 'Présentation',
  },
  booking: {
    title: 'Demande de rendez-vous', treatment: 'Soin', consult: 'Consultation / contrôle', urgent: 'Urgence',
    date: 'Date souhaitée', slot: 'Créneau', morning: 'Matin', afternoon: 'Après-midi', status: 'Statut',
    newPatient: 'Nouveau patient', existingPatient: 'Déjà patient', name: 'Nom (facultatif)',
    closedSunday: 'Le cabinet est fermé le dimanche. Choisissez un autre jour.',
    saturdayNote: 'Le samedi, le cabinet reçoit le matin uniquement.',
    hint: 'Choisissez une date pour préciser votre demande, ou envoyez-la telle quelle.',
    summary: 'Votre message', urgentTitle: 'Urgence dentaire', urgentText: 'Pour une urgence, le plus rapide est de téléphoner au cabinet.',
    opens: 'Ouvre WhatsApp avec votre message déjà écrit. Rien n’est envoyé tant que vous n’appuyez pas sur « Envoyer ».',
    send: 'Envoyer sur WhatsApp',
    msg: {
      intro: 'Bonjour {clinic}, je souhaite un rendez-vous pour : {treatment}.',
      urgent: 'Bonjour {clinic}, j’ai une urgence dentaire. Pouvez-vous me rappeler au plus vite ?',
      date: 'Date souhaitée : {date}, {slot}.',
      morning: 'le matin', afternoon: 'l’après-midi',
      newPatient: 'Nouveau patient.', existingPatient: 'Déjà patient.',
      name: 'Nom : {name}.',
    },
  },
  generic: {
    whatsappMsg: 'Bonjour {clinic}, je souhaite prendre rendez-vous. Pouvez-vous m’aider ?',
    treatmentMsg: 'Bonjour {clinic}, je souhaite un rendez-vous pour : {treatment}.',
  },
  hours: {
    title: 'Horaires',
    lines: [
      { days: 'Lundi – vendredi', time: '9 h – 19 h' },
      { days: 'Samedi', time: '9 h – 13 h' },
      { days: 'Dimanche', time: 'Fermé' },
    ],
  },
  viewer: { open: 'Agrandir la photo', close: 'Fermer', prev: 'Photo précédente', next: 'Photo suivante', hint: 'Pincez pour zoomer, glissez vers le bas pour fermer' },
  location: { mapLabel: 'Carte OpenStreetMap', mapActivate: 'Toucher pour déplacer la carte', address: 'Adresse', directions: 'Venir au cabinet', details: 'Bon à savoir' },
  contact: { whatsapp: 'WhatsApp', email: 'E-mail', phone: 'Téléphone', address: 'Adresse', hours: 'Horaires', seeAccess: 'Plan et accès' },
  footer: { demo: 'Site de démonstration. Cabinet, praticienne et coordonnées fictifs.', photos: 'Photos', legal: 'Mentions légales', home: 'Accueil', github: 'Mon GitHub' },
  demo: {
    text: 'Site de démonstration réalisé par Yassine Ait Oumghar. Vous voulez le même pour votre cabinet ?',
    cta: 'Contactez-moi sur WhatsApp',
    waMsg: 'Bonjour Yassine, j’ai vu la démo Cabinet Benali et je suis intéressé par un site pour mon cabinet.',
  },
  notFound: { title: 'Page introuvable', text: 'Cette page n’existe pas ou a été déplacée.', home: 'Retour à l’accueil' },
  meta: {
    homeTitle: 'Chirurgien-dentiste à Rabat, Agdal',
    homeDesc: 'Cabinet dentaire du Dr Salma Benali à Rabat (Agdal) : soins, détartrage, blanchiment, implants, orthodontie, prothèses et urgences. Rendez-vous par WhatsApp.',
    accessTitle: 'Accès et plan du cabinet',
    accessDesc: 'Adresse, plan, parking, tramway, ascenseur et accès PMR du Cabinet Benali, avenue de France à Rabat (Agdal).',
    legalTitle: 'Mentions légales',
    legalDesc: 'Ce site est une démonstration : le cabinet, la praticienne et les coordonnées sont fictifs.',
    notFoundTitle: 'Page introuvable',
  },
};

export type Dict = typeof fr;

const en: Dict = {
  nav: {
    home: 'Home', cabinet: 'The practice', treatments: 'Treatments', visit: 'First visit', access: 'Getting here', faq: 'Questions', contact: 'Contact',
    menu: 'Menu', close: 'Close', language: 'Language', skip: 'Skip to content', main: 'Main navigation', mobile: 'Mobile menu',
  },
  cta: {
    whatsapp: 'Write on WhatsApp', book: 'Book an appointment', seeTreatments: 'Our treatments', seeTreatment: 'See this treatment',
    call: 'Call', callNow: 'Call now', openMap: 'Open in OpenStreetMap', bookThis: 'Book an appointment for this treatment',
  },
  sections: {
    treatments: { title: 'Our treatments', sub: 'Six areas of care. Each treatment is explained before it starts.' },
    cabinet: { title: 'The practice' },
    visit: { title: 'Your first visit', sub: 'What happens, step by step.' },
    commitments: { title: 'Our commitments', sub: 'What we do at every appointment.' },
    appointment: { title: 'Book an appointment', sub: 'Choose a treatment and a day. Your request is prepared on WhatsApp, then the practice confirms the time.' },
    coverage: { title: 'Insurance and payment' },
    faq: { title: 'Frequently asked questions' },
    contact: { title: 'Contact us', sub: 'Write to us on WhatsApp or call during opening hours.' },
    access: { title: 'Getting to the practice' },
  },
  strip: {
    today: 'Today: {range}',
    closedToday: 'Today: closed',
    fallback: 'Mon–Fri 9 am–7 pm, Sat 9 am–1 pm',
    emergency: 'Emergencies: call us',
    label: 'Practical information',
  },
  treatment: {
    back: 'All treatments', duration: 'Indicative duration', sessions: 'Number of sessions', forWho: 'Who it is for', steps: 'What it involves',
    quote: 'Personalised quote after examination', quoteNote: 'No prices are shown: the quote is drawn up after the examination and given to you before any treatment.',
    faq: 'Frequently asked questions about this treatment', others: 'Other treatments', photos: 'Photos', description: 'Overview',
  },
  booking: {
    title: 'Appointment request', treatment: 'Treatment', consult: 'Consultation / check-up', urgent: 'Emergency',
    date: 'Preferred date', slot: 'Time of day', morning: 'Morning', afternoon: 'Afternoon', status: 'Status',
    newPatient: 'New patient', existingPatient: 'Existing patient', name: 'Name (optional)',
    closedSunday: 'The practice is closed on Sunday. Please choose another day.',
    saturdayNote: 'On Saturday the practice is open in the morning only.',
    hint: 'Pick a date to be more specific, or send your request as it is.',
    summary: 'Your message', urgentTitle: 'Dental emergency', urgentText: 'For an emergency, the quickest way is to phone the practice.',
    opens: 'Opens WhatsApp with your message already written. Nothing is sent until you press “Send”.',
    send: 'Send on WhatsApp',
    msg: {
      intro: 'Hello {clinic}, I would like an appointment for: {treatment}.',
      urgent: 'Hello {clinic}, I have a dental emergency. Could you call me back as soon as possible?',
      date: 'Preferred date: {date}, {slot}.',
      morning: 'in the morning', afternoon: 'in the afternoon',
      newPatient: 'New patient.', existingPatient: 'Existing patient.',
      name: 'Name: {name}.',
    },
  },
  generic: {
    whatsappMsg: 'Hello {clinic}, I would like to book an appointment. Could you help me?',
    treatmentMsg: 'Hello {clinic}, I would like an appointment for: {treatment}.',
  },
  hours: {
    title: 'Opening hours',
    lines: [
      { days: 'Monday – Friday', time: '9 am – 7 pm' },
      { days: 'Saturday', time: '9 am – 1 pm' },
      { days: 'Sunday', time: 'Closed' },
    ],
  },
  viewer: { open: 'Enlarge photo', close: 'Close', prev: 'Previous photo', next: 'Next photo', hint: 'Pinch to zoom, swipe down to close' },
  location: { mapLabel: 'OpenStreetMap map', mapActivate: 'Tap to move the map', address: 'Address', directions: 'Getting to the practice', details: 'Good to know' },
  contact: { whatsapp: 'WhatsApp', email: 'Email', phone: 'Phone', address: 'Address', hours: 'Opening hours', seeAccess: 'Map and access' },
  footer: { demo: 'Demonstration website. Practice, practitioner and contact details are fictitious.', photos: 'Photos', legal: 'Legal notice', home: 'Home', github: 'My GitHub' },
  demo: {
    text: 'Demo website made by Yassine Ait Oumghar. Want the same for your practice?',
    cta: 'Contact me on WhatsApp',
    waMsg: 'Hello Yassine, I saw the Cabinet Benali demo and I am interested in a website for my practice.',
  },
  notFound: { title: 'Page not found', text: 'This page does not exist or has been moved.', home: 'Back to home' },
  meta: {
    homeTitle: 'Dental surgeon in Rabat, Agdal',
    homeDesc: 'Dental practice of Dr Salma Benali in Rabat (Agdal): check-ups, scaling, whitening, implants, orthodontics, prostheses and emergencies. Book by WhatsApp.',
    accessTitle: 'Getting here and map',
    accessDesc: 'Address, map, parking, tram, lift and wheelchair access for Cabinet Benali, Avenue de France in Rabat (Agdal).',
    legalTitle: 'Legal notice',
    legalDesc: 'This website is a demonstration: the practice, the practitioner and the contact details are fictitious.',
    notFoundTitle: 'Page not found',
  },
};

const ar: Dict = {
  nav: {
    home: 'الرئيسية', cabinet: 'العيادة', treatments: 'العلاجات', visit: 'الزيارة الأولى', access: 'كيف تصلون', faq: 'أسئلة', contact: 'اتصال',
    menu: 'القائمة', close: 'إغلاق', language: 'اللغة', skip: 'انتقل إلى المحتوى', main: 'التنقل الرئيسي', mobile: 'قائمة الهاتف',
  },
  cta: {
    whatsapp: 'راسلونا على واتساب', book: 'حجز موعد', seeTreatments: 'علاجاتنا', seeTreatment: 'عرض هذا العلاج',
    call: 'اتصال', callNow: 'اتصلوا الآن', openMap: 'فتح في OpenStreetMap', bookThis: 'حجز موعد لهذا العلاج',
  },
  sections: {
    treatments: { title: 'علاجاتنا', sub: 'ستة مجالات للعناية. يُشرح كل علاج قبل أن يبدأ.' },
    cabinet: { title: 'العيادة' },
    visit: { title: 'زيارتكم الأولى', sub: 'ما يحدث خطوة بخطوة.' },
    commitments: { title: 'التزامات العيادة', sub: 'ما نقوم به في كل موعد.' },
    appointment: { title: 'حجز موعد', sub: 'اختاروا علاجا ويوما. يُجهَّز طلبكم على واتساب ثم تؤكد لكم العيادة الموعد.' },
    coverage: { title: 'التأمين والأداء' },
    faq: { title: 'الأسئلة الشائعة' },
    contact: { title: 'تواصلوا معنا', sub: 'راسلونا على واتساب أو اتصلوا بنا خلال أوقات العمل.' },
    access: { title: 'الوصول إلى العيادة' },
  },
  strip: {
    today: 'اليوم: {range}',
    closedToday: 'اليوم: مغلق',
    fallback: 'الاثنين–الجمعة 9:00–19:00، السبت 9:00–13:00',
    emergency: 'الحالات الاستعجالية: اتصلوا بنا',
    label: 'معلومات عملية',
  },
  treatment: {
    back: 'كل العلاجات', duration: 'المدة التقريبية', sessions: 'عدد الجلسات', forWho: 'لمن هذا العلاج', steps: 'ماذا يتضمن',
    quote: 'عرض أسعار شخصي بعد الفحص', quoteNote: 'لا تُعرض أي أسعار: يُعدّ عرض الأسعار بعد الفحص ويُسلَّم لكم قبل أي علاج.',
    faq: 'أسئلة شائعة حول هذا العلاج', others: 'علاجات أخرى', photos: 'صور', description: 'نظرة عامة',
  },
  booking: {
    title: 'طلب موعد', treatment: 'العلاج', consult: 'استشارة / فحص', urgent: 'حالة استعجالية',
    date: 'التاريخ المفضل', slot: 'الفترة', morning: 'صباحا', afternoon: 'بعد الزوال', status: 'الحالة',
    newPatient: 'مريض جديد', existingPatient: 'مريض سابق', name: 'الاسم (اختياري)',
    closedSunday: 'العيادة مغلقة يوم الأحد. اختاروا يوما آخر.',
    saturdayNote: 'يوم السبت تستقبل العيادة في الفترة الصباحية فقط.',
    hint: 'اختاروا تاريخا لتدقيق طلبكم، أو أرسلوه كما هو.',
    summary: 'رسالتكم', urgentTitle: 'حالة استعجالية للأسنان', urgentText: 'في الحالات الاستعجالية، أسرع وسيلة هي الاتصال بالعيادة هاتفيا.',
    opens: 'يفتح واتساب برسالتكم جاهزة. لا يُرسَل شيء حتى تضغطوا على «إرسال».',
    send: 'إرسال عبر واتساب',
    msg: {
      intro: 'السلام عليكم {clinic}، أود حجز موعد من أجل: {treatment}.',
      urgent: 'السلام عليكم {clinic}، لدي حالة استعجالية في الأسنان. هل يمكنكم الاتصال بي في أقرب وقت؟',
      date: 'التاريخ المفضل: {date}، {slot}.',
      morning: 'صباحا', afternoon: 'بعد الزوال',
      newPatient: 'مريض جديد.', existingPatient: 'مريض سابق.',
      name: 'الاسم: {name}.',
    },
  },
  generic: {
    whatsappMsg: 'السلام عليكم {clinic}، أود حجز موعد. هل يمكنكم مساعدتي؟',
    treatmentMsg: 'السلام عليكم {clinic}، أود حجز موعد من أجل: {treatment}.',
  },
  hours: {
    title: 'أوقات العمل',
    lines: [
      { days: 'من الاثنين إلى الجمعة', time: '9:00 – 19:00' },
      { days: 'السبت', time: '9:00 – 13:00' },
      { days: 'الأحد', time: 'مغلق' },
    ],
  },
  viewer: { open: 'تكبير الصورة', close: 'إغلاق', prev: 'الصورة السابقة', next: 'الصورة التالية', hint: 'قرّبوا الأصابع للتكبير، واسحبوا للأسفل للإغلاق' },
  location: { mapLabel: 'خريطة OpenStreetMap', mapActivate: 'المسوا لتحريك الخريطة', address: 'العنوان', directions: 'الوصول إلى العيادة', details: 'معلومات مفيدة' },
  contact: { whatsapp: 'واتساب', email: 'البريد الإلكتروني', phone: 'الهاتف', address: 'العنوان', hours: 'أوقات العمل', seeAccess: 'الخريطة والولوج' },
  footer: { demo: 'موقع تجريبي. العيادة والطبيبة وبيانات الاتصال وهمية.', photos: 'الصور', legal: 'الإشعار القانوني', home: 'الرئيسية', github: 'حسابي على GitHub' },
  demo: {
    text: 'موقع تجريبي من تصميم ياسين أيت أومغار. تريدون موقعا مثله لعيادتكم؟',
    cta: 'راسلوني على واتساب',
    waMsg: 'السلام عليكم ياسين، شاهدت عرض عيادة بنعلي التجريبي وأنا مهتم بموقع لعيادتي.',
  },
  notFound: { title: 'الصفحة غير موجودة', text: 'هذه الصفحة غير موجودة أو تم نقلها.', home: 'العودة إلى الرئيسية' },
  meta: {
    homeTitle: 'طبيبة أسنان بالرباط، أكدال',
    homeDesc: 'عيادة الدكتورة سلمى بنعلي لطب الأسنان بالرباط (أكدال): علاجات، تنظيف الجير، تبييض، زراعة، تقويم، تركيبات وحالات استعجالية. حجز عبر واتساب.',
    accessTitle: 'كيف تصلون إلى العيادة',
    accessDesc: 'العنوان والخريطة والموقف والترام والمصعد وولوج ذوي الإعاقة لعيادة بنعلي بشارع فرنسا بالرباط (أكدال).',
    legalTitle: 'الإشعار القانوني',
    legalDesc: 'هذا الموقع تجريبي: العيادة والطبيبة وبيانات الاتصال وهمية.',
    notFoundTitle: 'الصفحة غير موجودة',
  },
};

export const ui: Record<Lang, Dict> = { fr, en, ar };
