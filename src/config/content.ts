import type { L10n, L10nList } from '../lib/l10n';

// Textes de page propres au cabinet (pas à l'interface). À modifier librement pour un autre cabinet.
// Ton : informatif, calme, sans superlatif, sans promesse de résultat, sans promotion.

export const hero = {
  photo: 'fauteuil-bleu',
  // Une entrée par ligne, chaque ligne apparaît à tour de rôle.
  lines: {
    fr: ['Des soins dentaires attentifs,', 'au cœur de l’Agdal'],
    en: ['Attentive dental care,', 'in the heart of Agdal'],
    ar: ['عناية بالأسنان باهتمام،', 'في قلب أكدال'],
  } satisfies L10nList,
  sub: {
    fr: 'Cabinet du Dr Salma Benali, chirurgien-dentiste à Rabat. Sur rendez-vous, du lundi au samedi.',
    en: 'The practice of Dr Salma Benali, dental surgeon in Rabat. By appointment, Monday to Saturday.',
    ar: 'عيادة الدكتورة سلمى بنعلي، طبيبة أسنان بالرباط. بموعد، من الاثنين إلى السبت.',
  } satisfies L10n,
};

export const cabinet = {
  title: {
    fr: 'Le cabinet du Dr Salma Benali',
    en: 'The practice of Dr Salma Benali',
    ar: 'عيادة الدكتورة سلمى بنعلي',
  } satisfies L10n,
  text: {
    fr: 'Titulaire d’un doctorat en chirurgie dentaire, la Dr Benali exerce depuis 12 ans à Rabat. Elle prend le temps d’expliquer chaque soin et ne commence un traitement qu’une fois le plan et le devis validés par le patient. Le cabinet reçoit adultes et enfants.',
    en: 'Holder of a doctorate in dental surgery, Dr Benali has practised in Rabat for 12 years. She takes the time to explain each treatment and only starts once the plan and the quote have been approved by the patient. The practice sees adults and children.',
    ar: 'حاصلة على دكتوراه في جراحة الأسنان، تمارس الدكتورة بنعلي بالرباط منذ 12 سنة. تأخذ الوقت لشرح كل علاج، ولا تبدأ العلاج إلا بعد موافقة المريض على الخطة وعرض الأسعار. تستقبل العيادة البالغين والأطفال.',
  } satisfies L10n,
  facts: [
    { value: '12', label: { fr: 'années d’exercice', en: 'years of practice', ar: 'سنة من الممارسة' } },
    { value: '2012', label: { fr: 'doctorat en chirurgie dentaire', en: 'doctorate in dental surgery', ar: 'دكتوراه في جراحة الأسنان' } },
    { value: '3', label: { fr: 'langues : français, arabe, anglais', en: 'languages: French, Arabic, English', ar: 'لغات: العربية والفرنسية والإنجليزية' } },
  ],
  photos: ['salle-soins', 'plateau'],
};

export const visit = {
  steps: [
    {
      title: { fr: 'Prise de rendez-vous', en: 'Booking an appointment', ar: 'حجز الموعد' },
      text: {
        fr: 'Par WhatsApp ou par téléphone. Précisez s’il s’agit d’une première visite ou d’une urgence.',
        en: 'By WhatsApp or phone. Tell us whether it is a first visit or an emergency.',
        ar: 'عبر واتساب أو الهاتف. حددوا إن كانت الزيارة الأولى أو حالة استعجالية.',
      },
    },
    {
      title: { fr: 'Accueil et dossier', en: 'Welcome and file', ar: 'الاستقبال والملف' },
      text: {
        fr: 'Vous remplissez une fiche de renseignements médicaux. Apportez votre carte CNSS ou de mutuelle, et vos radios si vous en avez.',
        en: 'You fill in a medical information form. Bring your CNSS or insurance card, and any X-rays you have.',
        ar: 'تملؤون استمارة معلومات طبية. أحضروا بطاقة الضمان الاجتماعي أو التأمين، وأشعتكم إن وُجدت.',
      },
    },
    {
      title: { fr: 'Examen et radio', en: 'Examination and X-ray', ar: 'الفحص والأشعة' },
      text: {
        fr: 'La dentiste examine les dents et les gencives, et fait une radio si elle est nécessaire.',
        en: 'The dentist examines your teeth and gums, and takes an X-ray if one is needed.',
        ar: 'تفحص الطبيبة الأسنان واللثة وتجري أشعة إذا لزم الأمر.',
      },
    },
    {
      title: { fr: 'Plan de traitement expliqué', en: 'Treatment plan explained', ar: 'شرح خطة العلاج' },
      text: {
        fr: 'Elle vous explique ce qu’elle observe, les options possibles et leur déroulement. Vous posez toutes vos questions.',
        en: 'She explains what she sees, the possible options and how each would go. You can ask any question.',
        ar: 'تشرح لكم ما لاحظته والخيارات الممكنة وكيف يتم كل منها. يمكنكم طرح كل أسئلتكم.',
      },
    },
    {
      title: { fr: 'Devis remis avant tout soin', en: 'Quote given before any treatment', ar: 'عرض أسعار قبل أي علاج' },
      text: {
        fr: 'Un devis écrit vous est remis. Aucun soin programmé ne commence sans votre accord.',
        en: 'A written quote is handed to you. No scheduled treatment starts without your agreement.',
        ar: 'يُسلَّم لكم عرض أسعار مكتوب. لا يبدأ أي علاج مبرمج دون موافقتكم.',
      },
    },
  ],
};

export const commitments = [
  {
    icon: 'shield',
    title: { fr: 'Stérilisation et hygiène', en: 'Sterilisation and hygiene', ar: 'التعقيم والنظافة' },
    text: {
      fr: 'Les instruments sont stérilisés en autoclave après chaque patient. Le matériel à usage unique est jeté après emploi.',
      en: 'Instruments are sterilised in an autoclave after each patient. Single-use items are discarded after use.',
      ar: 'تُعقَّم الأدوات في الأوتوكلاف بعد كل مريض، وتُرمى المواد ذات الاستعمال الواحد بعد استعمالها.',
    },
  },
  {
    icon: 'doc',
    title: { fr: 'Devis clair avant les soins', en: 'A clear quote before treatment', ar: 'عرض أسعار واضح قبل العلاج' },
    text: {
      fr: 'Vous savez ce que le traitement comprend et ce qu’il coûte avant qu’il ne commence.',
      en: 'You know what the treatment involves and what it costs before it begins.',
      ar: 'تعرفون ما يتضمنه العلاج وكلفته قبل أن يبدأ.',
    },
  },
  {
    icon: 'device',
    title: { fr: 'Matériel récent', en: 'Up-to-date equipment', ar: 'تجهيزات حديثة' },
    text: {
      fr: 'Radiographie numérique, fauteuils et instruments entretenus et renouvelés régulièrement.',
      en: 'Digital radiography, with chairs and instruments maintained and renewed regularly.',
      ar: 'أشعة رقمية وكراسي وأدوات تتم صيانتها وتجديدها بانتظام.',
    },
  },
  {
    icon: 'users',
    title: { fr: 'Prise en charge des enfants', en: 'Care for children', ar: 'التكفل بالأطفال' },
    text: {
      fr: 'Explications simples et séances adaptées. Si l’enfant est inquiet, le premier rendez-vous peut se limiter à découvrir le cabinet.',
      en: 'Simple explanations and sessions adapted to the child. If a child is anxious, the first visit can be limited to getting to know the practice.',
      ar: 'شرح مبسط وجلسات تناسب الطفل. وإذا كان الطفل قلقا يمكن أن تقتصر الزيارة الأولى على التعرف على العيادة.',
    },
  },
];

export const coverage = {
  intro: {
    fr: 'Le cabinet remplit les documents nécessaires à votre remboursement. Le montant remboursé dépend de votre couverture : renseignez-vous auprès de votre organisme.',
    en: 'The practice fills in the documents needed for your reimbursement. The amount reimbursed depends on your cover: check with your insurer.',
    ar: 'تملأ العيادة الوثائق اللازمة للتعويض. يتوقف المبلغ المسترجع على تغطيتكم، لذا استفسروا لدى هيئة التأمين الخاصة بكم.',
  } satisfies L10n,
  items: [
    { icon: 'shield', label: { fr: 'CNSS', en: 'CNSS', ar: 'الصندوق الوطني للضمان الاجتماعي' } },
    { icon: 'shield', label: { fr: 'CNOPS', en: 'CNOPS', ar: 'الصندوق الوطني لمنظمات الاحتياط الاجتماعي' } },
    { icon: 'shield', label: { fr: 'Assurances privées', en: 'Private insurance', ar: 'شركات التأمين الخاصة' } },
    { icon: 'doc', label: { fr: 'Feuilles de soins remplies sur place', en: 'Claim forms filled in on site', ar: 'ملء أوراق العلاج في عين المكان' } },
    { icon: 'card', label: { fr: 'Paiement par carte accepté', en: 'Card payment accepted', ar: 'الأداء بالبطاقة البنكية مقبول' } },
  ],
};

export const faq = [
  {
    q: { fr: 'Comment se passe un premier rendez-vous ?', en: 'What happens at a first appointment?', ar: 'كيف يمر الموعد الأول؟' },
    a: {
      fr: 'Nous remplissons ensemble une fiche médicale, puis la dentiste examine vos dents et vos gencives, fait une radio si besoin et vous explique ses constatations. Aucun soin n’est démarré sans vous avoir présenté un devis.',
      en: 'We fill in a medical form together, then the dentist examines your teeth and gums, takes an X-ray if needed and explains her findings. No treatment starts before you have been given a quote.',
      ar: 'نملأ معا استمارة طبية، ثم تفحص الطبيبة الأسنان واللثة وتجري أشعة عند الحاجة وتشرح ملاحظاتها. لا يبدأ أي علاج قبل أن تتسلموا عرض الأسعار.',
    },
  },
  {
    q: { fr: 'Les soins sont-ils douloureux ?', en: 'Is treatment painful?', ar: 'هل العلاج مؤلم؟' },
    a: {
      fr: 'Les soins se font avec une anesthésie locale lorsque c’est nécessaire. Vous pouvez dire à tout moment que vous ressentez une gêne : le geste est alors adapté ou interrompu.',
      en: 'Treatment is carried out with a local anaesthetic when it is needed. You can say at any moment that you feel discomfort: the procedure is then adjusted or paused.',
      ar: 'تتم العلاجات بتخدير موضعي عند الحاجة. يمكنكم في أي لحظة التعبير عن الانزعاج، فيُعدَّل الإجراء أو يتوقف.',
    },
  },
  {
    q: { fr: 'Recevez-vous les enfants ?', en: 'Do you see children?', ar: 'هل تستقبلون الأطفال؟' },
    a: {
      fr: 'Oui. Un premier contrôle est possible dès les premières dents. Les explications sont adaptées à l’âge, et le premier rendez-vous peut être consacré à la découverte du cabinet.',
      en: 'Yes. A first check-up is possible as soon as the first teeth appear. Explanations are adapted to the child’s age, and the first visit can be spent getting to know the practice.',
      ar: 'نعم. يمكن إجراء أول فحص منذ ظهور الأسنان الأولى. يُكيَّف الشرح مع سن الطفل، ويمكن تخصيص الموعد الأول للتعرف على العيادة.',
    },
  },
  {
    q: { fr: 'Que faire en cas d’urgence le week-end ?', en: 'What should I do in an emergency at the weekend?', ar: 'ماذا أفعل في حالة استعجالية خلال نهاية الأسبوع؟' },
    a: {
      fr: 'Le cabinet reçoit le samedi de 9 h à 13 h. Appelez-nous : nous essayons de vous recevoir le jour même. Le dimanche, le cabinet est fermé ; pour une urgence importante, rendez-vous aux urgences d’un hôpital.',
      en: 'The practice is open on Saturday from 9 am to 1 pm. Call us: we try to see you the same day. On Sunday the practice is closed; for a serious emergency, go to a hospital emergency department.',
      ar: 'تستقبل العيادة يوم السبت من التاسعة صباحا إلى الواحدة زوالا. اتصلوا بنا: نحاول استقبالكم في اليوم نفسه. يوم الأحد العيادة مغلقة، وفي حالة استعجالية خطيرة توجهوا إلى مستعجلات مستشفى.',
    },
  },
  {
    q: { fr: 'Acceptez-vous la CNSS, la CNOPS et les mutuelles ?', en: 'Do you accept CNSS, CNOPS and insurance?', ar: 'هل تقبلون الضمان الاجتماعي وصناديق التأمين؟' },
    a: {
      fr: 'Nous remplissons sur place les feuilles de soins pour la CNSS, la CNOPS et les assurances privées. Le remboursement dépend de votre contrat : demandez à votre organisme ce qui est pris en charge.',
      en: 'We fill in claim forms on site for CNSS, CNOPS and private insurers. Reimbursement depends on your policy: ask your insurer what is covered.',
      ar: 'نملأ في عين المكان أوراق العلاج الخاصة بالضمان الاجتماعي وCNOPS وشركات التأمين الخاصة. يتوقف التعويض على عقدكم، فاسألوا هيئتكم عما هو مغطى.',
    },
  },
  {
    q: { fr: 'Combien de temps dure un détartrage ?', en: 'How long does scaling take?', ar: 'كم يستغرق تنظيف الجير؟' },
    a: {
      fr: 'Comptez 30 à 45 minutes en général. La durée dépend de la quantité de tartre et de l’état des gencives.',
      en: 'Allow 30 to 45 minutes in general. The time depends on the amount of tartar and the state of the gums.',
      ar: 'احسبوا من 30 إلى 45 دقيقة في الغالب. تتوقف المدة على كمية الجير وحالة اللثة.',
    },
  },
];

export const access = {
  intro: {
    fr: 'Le cabinet est situé avenue de France, dans le quartier Agdal à Rabat. Voici comment venir et ce qu’il faut savoir sur l’accès.',
    en: 'The practice is on Avenue de France, in the Agdal district of Rabat. Here is how to get here and what to know about access.',
    ar: 'تقع العيادة بشارع فرنسا، في حي أكدال بالرباط. إليكم كيفية الوصول وما يجب معرفته عن الولوج.',
  } satisfies L10n,
  // Coordonnées et adresse fictives, donnés à titre d'exemple.
  items: [
    {
      icon: 'parking',
      title: { fr: 'Parking à proximité', en: 'Nearby parking', ar: 'موقف قريب' },
      text: {
        fr: 'Stationnement dans la rue et parking public à environ 3 minutes à pied.',
        en: 'Street parking and a public car park about 3 minutes on foot away.',
        ar: 'توقف في الشارع وموقف عمومي على بعد حوالي 3 دقائق مشيا.',
      },
    },
    {
      icon: 'tram',
      title: { fr: 'Tramway', en: 'Tram', ar: 'الترام' },
      text: {
        fr: 'La station de tramway la plus proche est à environ 6 minutes à pied.',
        en: 'The nearest tram stop is about 6 minutes on foot away.',
        ar: 'أقرب محطة للترام على بعد حوالي 6 دقائق مشيا.',
      },
    },
    {
      icon: 'elevator',
      title: { fr: 'Étage et ascenseur', en: 'Floor and lift', ar: 'الطابق والمصعد' },
      text: {
        fr: 'Le cabinet est au 2e étage, avec un ascenseur dans l’immeuble.',
        en: 'The practice is on the 2nd floor, with a lift in the building.',
        ar: 'تقع العيادة بالطابق الثاني، وبالعمارة مصعد.',
      },
    },
    {
      icon: 'access',
      title: { fr: 'Accès PMR', en: 'Wheelchair access', ar: 'الولوج للأشخاص ذوي الإعاقة' },
      text: {
        fr: 'Entrée de plain-pied et ascenseur adapté aux fauteuils roulants.',
        en: 'Step-free entrance and a lift suitable for wheelchairs.',
        ar: 'مدخل دون عتبات ومصعد مناسب للكراسي المتحركة.',
      },
    },
  ],
};

export const legal = {
  title: { fr: 'Mentions légales', en: 'Legal notice', ar: 'الإشعار القانوني' } satisfies L10n,
  paragraphs: {
    fr: [
      'Ce site est un site de démonstration. Le Cabinet Benali, la Dr Salma Benali, l’adresse, les horaires, les diplômes et les coordonnées affichés sont fictifs. Toute ressemblance avec un cabinet ou un praticien réel serait fortuite.',
      'Le numéro de téléphone et de WhatsApp affiché est celui du concepteur du site, Yassine Ait Oumghar. Les messages envoyés depuis le module de rendez-vous lui parviennent, et aucun rendez-vous réel n’est pris.',
      'Les textes de ce site sont donnés à titre d’information générale et ne remplacent pas une consultation. Aucun avis de patient n’est publié. Aucune promesse de résultat n’est faite.',
      'Photos : Unsplash, utilisées selon la licence Unsplash. Les photos sont illustratives.',
    ],
    en: [
      'This is a demonstration website. Cabinet Benali, Dr Salma Benali, the address, hours, qualifications and contact details shown are fictitious. Any resemblance to a real practice or practitioner is coincidental.',
      'The phone and WhatsApp number shown belongs to the site’s designer, Yassine Ait Oumghar. Messages sent from the appointment module reach them, and no real appointment is made.',
      'The texts on this site are general information and do not replace a consultation. No patient reviews are published. No promise of results is made.',
      'Photos: Unsplash, used under the Unsplash licence. They are illustrative.',
    ],
    ar: [
      'هذا موقع تجريبي. عيادة بنعلي والدكتورة سلمى بنعلي والعنوان والأوقات والشهادات وبيانات الاتصال المعروضة كلها وهمية. أي تشابه مع عيادة أو طبيب حقيقي هو محض صدفة.',
      'رقم الهاتف وواتساب المعروض هو رقم مصمم الموقع ياسين أيت أومغار. الرسائل المرسلة من وحدة الموعد تصل إليه، ولا يتم أي موعد حقيقي.',
      'نصوص هذا الموقع معلومات عامة ولا تغني عن الاستشارة الطبية. لا تُنشر أي آراء للمرضى ولا تُقدَّم أي وعود بالنتائج.',
      'الصور: Unsplash، مستعملة وفق ترخيص Unsplash، وهي للتوضيح فقط.',
    ],
  } satisfies L10nList,
};
