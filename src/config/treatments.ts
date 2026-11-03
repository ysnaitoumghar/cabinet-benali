import type { L10n, L10nList } from '../lib/l10n';

export interface Treatment {
  slug: string;
  icon: string; // nom d'icône de Icon.astro
  name: L10n;
  summary: L10n;
  description: L10n;
  /** « En quoi ça consiste » : 3 à 4 étapes */
  steps: L10nList;
  duration: L10n;
  sessions: L10n;
  forWho: L10n;
  /** clés de fichiers de src/assets/photos (texte alternatif dans photos.ts) ; la première sert de couverture */
  photos: string[];
  faq: { q: L10n; a: L10n }[];
}

// Pas de prix affichés : la mention « Devis personnalisé après examen » est dans ui.ts.
export const treatments: Treatment[] = [
  {
    slug: 'soins-detartrage',
    icon: 'care',
    name: { fr: 'Soins et détartrage', en: 'Check-ups, fillings and scaling', ar: 'العلاجات وتنظيف الجير' },
    summary: {
      fr: 'Examen, traitement des caries et nettoyage des dents.',
      en: 'Examination, treatment of cavities and teeth cleaning.',
      ar: 'فحص وعلاج التسوس وتنظيف الأسنان.',
    },
    description: {
      fr: 'Les soins courants comprennent l’examen de la bouche, le traitement des caries et le détartrage. Le détartrage retire le tartre et la plaque que le brossage ne suffit pas à enlever. Un contrôle régulier permet de repérer un problème tôt, quand le soin est plus simple.',
      en: 'Routine care covers the examination of the mouth, the treatment of cavities and scaling. Scaling removes the tartar and plaque that brushing alone cannot remove. A regular check-up helps spot a problem early, when treatment is simpler.',
      ar: 'تشمل العلاجات الاعتيادية فحص الفم وعلاج التسوس وتنظيف الجير. يزيل تنظيف الجير الترسبات والبلاك التي لا يكفي التفريش لإزالتها. والفحص المنتظم يساعد على اكتشاف أي مشكل مبكرا، حين يكون العلاج أبسط.',
    },
    steps: {
      fr: ['Examen de la bouche, des dents et des gencives.', 'Anesthésie locale si un soin est nécessaire.', 'Traitement de la carie, ou détartrage aux ultrasons.', 'Polissage et conseils d’hygiène adaptés à votre bouche.'],
      en: ['Examination of the mouth, teeth and gums.', 'Local anaesthetic if a treatment is needed.', 'Treatment of the cavity, or ultrasonic scaling.', 'Polishing and hygiene advice suited to your mouth.'],
      ar: ['فحص الفم والأسنان واللثة.', 'تخدير موضعي إذا كان العلاج يتطلب ذلك.', 'علاج التسوس، أو تنظيف الجير بالموجات فوق الصوتية.', 'تلميع الأسنان ونصائح للنظافة تناسب حالة فمك.'],
    },
    duration: { fr: '30 à 60 minutes selon le soin', en: '30 to 60 minutes depending on the treatment', ar: 'من 30 إلى 60 دقيقة حسب العلاج' },
    sessions: { fr: '1 séance en général', en: 'Usually 1 session', ar: 'جلسة واحدة في الغالب' },
    forWho: {
      fr: 'Tout patient, enfants compris : contrôle de routine, sensibilité, gencives qui saignent ou carie suspectée.',
      en: 'Any patient, children included: routine check-up, sensitivity, bleeding gums or a suspected cavity.',
      ar: 'كل المرضى بمن فيهم الأطفال: فحص اعتيادي، حساسية، نزيف اللثة أو الاشتباه في تسوس.',
    },
    photos: ['salle-soins', 'plateau', 'instruments'],
    faq: [
      {
        q: { fr: 'Le détartrage est-il douloureux ?', en: 'Is scaling painful?', ar: 'هل تنظيف الجير مؤلم؟' },
        a: {
          fr: 'Il est en général bien toléré. Si les gencives sont inflammées ou les dents sensibles, il peut être désagréable : nous adaptons le geste et pouvons utiliser une anesthésie locale.',
          en: 'It is usually well tolerated. If the gums are inflamed or the teeth sensitive, it can be uncomfortable: we adapt the technique and can use a local anaesthetic.',
          ar: 'يتحمله أغلب المرضى جيدا. إذا كانت اللثة ملتهبة أو الأسنان حساسة قد يكون مزعجا، ونكيّف طريقة العمل ويمكننا استعمال تخدير موضعي.',
        },
      },
      {
        q: { fr: 'À quelle fréquence faire un détartrage ?', en: 'How often should I have my teeth scaled?', ar: 'كم مرة يجب تنظيف الجير؟' },
        a: {
          fr: 'Souvent une à deux fois par an, mais cela dépend de l’état de vos gencives. Le dentiste vous indique le rythme adapté après l’examen.',
          en: 'Often once or twice a year, but it depends on the state of your gums. The dentist will recommend the right interval after the examination.',
          ar: 'غالبا مرة أو مرتين في السنة، لكن ذلك يتوقف على حالة اللثة. تحدد الطبيبة الوتيرة المناسبة بعد الفحص.',
        },
      },
      {
        q: { fr: 'Une carie peut-elle disparaître toute seule ?', en: 'Can a cavity go away on its own?', ar: 'هل يمكن أن يزول التسوس من تلقاء نفسه؟' },
        a: {
          fr: 'Non. Une fois la cavité formée, elle ne se referme pas. La soigner tôt évite qu’elle atteigne le nerf et rend le soin plus court.',
          en: 'No. Once the cavity has formed it does not close up. Treating it early prevents it from reaching the nerve and keeps the treatment shorter.',
          ar: 'لا. عندما يتكون التجويف لا ينغلق. علاجه مبكرا يمنع وصوله إلى العصب ويجعل العلاج أقصر.',
        },
      },
    ],
  },
  {
    slug: 'blanchiment',
    icon: 'sparkle',
    name: { fr: 'Blanchiment dentaire', en: 'Teeth whitening', ar: 'تبييض الأسنان' },
    summary: {
      fr: 'Éclaircir la teinte des dents après un examen de leur état.',
      en: 'Lighten the shade of your teeth after an examination.',
      ar: 'تفتيح لون الأسنان بعد فحص حالتها.',
    },
    description: {
      fr: 'Le blanchiment utilise un gel à base de peroxyde, appliqué sous contrôle du dentiste. Il se fait après un détartrage et le traitement des caries éventuelles. Le résultat varie selon la teinte de départ et les habitudes de chacun.',
      en: 'Whitening uses a peroxide-based gel applied under the dentist’s supervision. It is done after scaling and the treatment of any cavities. The result varies with the starting shade and each person’s habits.',
      ar: 'يعتمد التبييض على جل يحتوي على البيروكسيد، يوضع تحت إشراف طبيبة الأسنان. يتم بعد تنظيف الجير وعلاج أي تسوس. تختلف النتيجة حسب اللون الأصلي وعادات كل شخص.',
    },
    steps: {
      fr: ['Examen et détartrage préalables.', 'Choix de la méthode : au cabinet ou avec des gouttières à porter chez soi.', 'Application du gel, avec protection des gencives.', 'Conseils pour la suite : boissons colorées, tabac, sensibilité passagère.'],
      en: ['Preliminary examination and scaling.', 'Choice of method: in the practice or with trays worn at home.', 'Application of the gel, with the gums protected.', 'Advice afterwards: coloured drinks, tobacco, temporary sensitivity.'],
      ar: ['فحص وتنظيف للجير قبل البدء.', 'اختيار الطريقة: في العيادة أو بقوالب تُلبس في البيت.', 'وضع الجل مع حماية اللثة.', 'نصائح بعد العلاج: المشروبات الملونة، التدخين، الحساسية المؤقتة.'],
    },
    duration: { fr: '45 à 90 minutes au cabinet', en: '45 to 90 minutes in the practice', ar: 'من 45 إلى 90 دقيقة في العيادة' },
    sessions: { fr: '1 à 2 séances, ou 1 à 2 semaines avec gouttières', en: '1 to 2 sessions, or 1 to 2 weeks with trays', ar: 'جلسة أو جلستان، أو أسبوع إلى أسبوعين بالقوالب' },
    forWho: {
      fr: 'Adultes ayant des dents et des gencives en bonne santé. Il n’est pas conseillé pendant la grossesse ni en présence de caries non soignées.',
      en: 'Adults with healthy teeth and gums. It is not recommended during pregnancy or with untreated cavities.',
      ar: 'البالغون الذين لديهم أسنان ولثة سليمة. لا يُنصح به أثناء الحمل أو في وجود تسوس غير معالج.',
    },
    photos: ['fauteuil-bleu', 'instruments'],
    faq: [
      {
        q: { fr: 'Le blanchiment abîme-t-il les dents ?', en: 'Does whitening damage teeth?', ar: 'هل يضر التبييض بالأسنان؟' },
        a: {
          fr: 'Réalisé selon les règles, il n’enlève pas l’émail. Une sensibilité passagère est possible pendant quelques jours.',
          en: 'Done properly, it does not remove enamel. Temporary sensitivity is possible for a few days.',
          ar: 'عند إجرائه وفق الأصول لا يزيل المينا. قد تظهر حساسية مؤقتة لبضعة أيام.',
        },
      },
      {
        q: { fr: 'Le résultat est-il définitif ?', en: 'Is the result permanent?', ar: 'هل النتيجة دائمة؟' },
        a: {
          fr: 'Non, la teinte peut se rembrunir avec le temps. Café, thé et tabac accélèrent le phénomène. Une séance d’entretien est parfois proposée.',
          en: 'No, the shade can darken again over time. Coffee, tea and tobacco speed this up. A maintenance session is sometimes offered.',
          ar: 'لا، قد يعود اللون إلى الاسمرار مع الوقت، والقهوة والشاي والتدخين تسرّع ذلك. تُقترح أحيانا جلسة صيانة.',
        },
      },
      {
        q: { fr: 'Peut-on blanchir une couronne ou une facette ?', en: 'Can a crown or veneer be whitened?', ar: 'هل يمكن تبييض التاج أو القشرة؟' },
        a: {
          fr: 'Non, ces matériaux ne changent pas de teinte. Le dentiste en tient compte pour choisir la méthode.',
          en: 'No, these materials do not change shade. The dentist takes this into account when choosing the method.',
          ar: 'لا، هذه المواد لا يتغير لونها. تأخذ الطبيبة ذلك في الحسبان عند اختيار الطريقة.',
        },
      },
    ],
  },
  {
    slug: 'implants',
    icon: 'implant',
    name: { fr: 'Implants dentaires', en: 'Dental implants', ar: 'زراعة الأسنان' },
    summary: {
      fr: 'Remplacer une dent absente par une racine en titane et une couronne.',
      en: 'Replace a missing tooth with a titanium root and a crown.',
      ar: 'تعويض سن مفقودة بجذر من التيتانيوم وتاج.',
    },
    description: {
      fr: 'Un implant est une petite racine en titane placée dans l’os de la mâchoire, sur laquelle on fixe une couronne. Il se prépare avec soin : examen, radio panoramique, parfois un scanner, puis un plan de traitement expliqué et un devis avant de commencer.',
      en: 'An implant is a small titanium root placed in the jawbone, onto which a crown is fixed. It is prepared carefully: examination, panoramic X-ray, sometimes a scan, then an explained treatment plan and a quote before anything starts.',
      ar: 'الزرعة جذر صغير من التيتانيوم يوضع في عظم الفك ويُثبَّت عليه تاج. يُحضَّر لها بعناية: فحص، أشعة بانورامية، وأحيانا أشعة مقطعية، ثم خطة علاج مشروحة وعرض أسعار قبل أي إجراء.',
    },
    steps: {
      fr: ['Examen, radio panoramique et, si besoin, scanner.', 'Plan de traitement expliqué et devis remis.', 'Pose de l’implant sous anesthésie locale.', 'Cicatrisation de plusieurs mois, puis pose de la couronne.'],
      en: ['Examination, panoramic X-ray and, if needed, a scan.', 'Explained treatment plan and quote handed over.', 'Placement of the implant under local anaesthetic.', 'Several months of healing, then fitting of the crown.'],
      ar: ['فحص، أشعة بانورامية، وعند الحاجة أشعة مقطعية.', 'شرح خطة العلاج وتسليم عرض الأسعار.', 'وضع الزرعة تحت تخدير موضعي.', 'التئام يدوم عدة أشهر ثم تركيب التاج.'],
    },
    duration: { fr: 'Environ 1 heure par implant pour la pose', en: 'About 1 hour per implant for placement', ar: 'حوالي ساعة لكل زرعة عند الوضع' },
    sessions: { fr: '3 à 4 séances sur 3 à 6 mois', en: '3 to 4 sessions over 3 to 6 months', ar: 'من 3 إلى 4 جلسات على مدى 3 إلى 6 أشهر' },
    forWho: {
      fr: 'Patients qui ont perdu une ou plusieurs dents, avec un os suffisant et des gencives saines. L’état de santé général est pris en compte.',
      en: 'Patients who have lost one or more teeth, with enough bone and healthy gums. General health is taken into account.',
      ar: 'المرضى الذين فقدوا سنا أو أكثر ولديهم عظم كاف ولثة سليمة. تؤخذ الحالة الصحية العامة بعين الاعتبار.',
    },
    photos: ['radio', 'salle-soins', 'plateau'],
    faq: [
      {
        q: { fr: 'La pose d’un implant fait-elle mal ?', en: 'Does placing an implant hurt?', ar: 'هل وضع الزرعة مؤلم؟' },
        a: {
          fr: 'La pose se fait sous anesthésie locale. Une gêne est possible les jours suivants ; elle se soulage en général avec les antalgiques prescrits.',
          en: 'Placement is done under local anaesthetic. Some discomfort is possible in the following days; it is usually relieved with the painkillers prescribed.',
          ar: 'يتم الوضع تحت تخدير موضعي. قد يظهر انزعاج في الأيام التالية، ويخف عادة بمسكنات تصفها الطبيبة.',
        },
      },
      {
        q: { fr: 'Combien de temps dure un implant ?', en: 'How long does an implant last?', ar: 'كم تدوم الزرعة؟' },
        a: {
          fr: 'La durée dépend surtout de l’hygiène, du suivi régulier et du tabac. Un contrôle annuel permet de surveiller les gencives autour de l’implant.',
          en: 'It depends mostly on hygiene, regular follow-up and smoking. A yearly check lets us monitor the gums around the implant.',
          ar: 'تتوقف المدة أساسا على النظافة والمتابعة المنتظمة والتدخين. يتيح فحص سنوي مراقبة اللثة حول الزرعة.',
        },
      },
      {
        q: { fr: 'Faut-il beaucoup d’os pour poser un implant ?', en: 'Do I need a lot of bone for an implant?', ar: 'هل يلزم الكثير من العظم لوضع زرعة؟' },
        a: {
          fr: 'Il faut un volume d’os suffisant, que la radio permet d’évaluer. Si ce n’est pas le cas, une greffe osseuse peut être proposée avant la pose.',
          en: 'A sufficient volume of bone is needed, which the X-ray lets us assess. If not, a bone graft may be suggested before placement.',
          ar: 'يلزم حجم كاف من العظم، وتتيح الأشعة تقييمه. إن لم يكن كافيا فقد يُقترح ترقيع عظمي قبل الوضع.',
        },
      },
    ],
  },
  {
    slug: 'orthodontie',
    icon: 'ortho',
    name: { fr: 'Orthodontie et aligneurs', en: 'Orthodontics and aligners', ar: 'تقويم الأسنان والمحاذيات' },
    summary: {
      fr: 'Aligner les dents des enfants et des adultes, avec bagues ou gouttières transparentes.',
      en: 'Straighten the teeth of children and adults, with braces or clear aligners.',
      ar: 'تقويم أسنان الأطفال والبالغين بالأسلاك أو بالمحاذيات الشفافة.',
    },
    description: {
      fr: 'L’orthodontie corrige la position des dents et la façon dont les mâchoires se rencontrent. Selon le cas, on utilise des bagues ou des aligneurs transparents amovibles. Le choix est expliqué après l’examen et les radios.',
      en: 'Orthodontics corrects the position of the teeth and the way the jaws meet. Depending on the case, braces or removable clear aligners are used. The choice is explained after the examination and X-rays.',
      ar: 'يصحح التقويم موضع الأسنان وطريقة التقاء الفكين. حسب الحالة تُستعمل الأسلاك أو المحاذيات الشفافة القابلة للإزالة. يُشرح الاختيار بعد الفحص والأشعة.',
    },
    steps: {
      fr: ['Examen, empreintes ou scan, radios.', 'Présentation du plan de traitement et des options.', 'Pose de l’appareil : bagues ou premières gouttières.', 'Contrôles réguliers, puis contention pour garder la position.'],
      en: ['Examination, impressions or scan, X-rays.', 'Presentation of the treatment plan and options.', 'Fitting of the appliance: braces or first aligners.', 'Regular check-ups, then a retainer to hold the position.'],
      ar: ['فحص، قوالب أو مسح رقمي، وأشعة.', 'عرض خطة العلاج والخيارات.', 'تركيب الجهاز: أسلاك أو أولى المحاذيات.', 'مواعيد مراقبة منتظمة ثم مثبّت للحفاظ على الوضع.'],
    },
    duration: { fr: 'Contrôles de 20 à 30 minutes', en: 'Check-ups of 20 to 30 minutes', ar: 'مواعيد مراقبة من 20 إلى 30 دقيقة' },
    sessions: { fr: 'Traitement de 6 à 24 mois, contrôle toutes les 4 à 8 semaines', en: 'Treatment of 6 to 24 months, check-up every 4 to 8 weeks', ar: 'علاج من 6 إلى 24 شهرا، مراقبة كل 4 إلى 8 أسابيع' },
    forWho: {
      fr: 'Enfants, adolescents et adultes. Un premier avis vers 7 ans permet de surveiller la croissance des mâchoires.',
      en: 'Children, teenagers and adults. A first opinion around the age of 7 allows jaw growth to be monitored.',
      ar: 'الأطفال والمراهقون والبالغون. يتيح رأي أول في حدود سن السابعة مراقبة نمو الفكين.',
    },
    photos: ['fauteuil-bleu', 'radio'],
    faq: [
      {
        q: { fr: 'À partir de quel âge consulter ?', en: 'From what age should we consult?', ar: 'من أي سن يجب الاستشارة؟' },
        a: {
          fr: 'Un premier avis vers 7 ans est utile pour surveiller la croissance. Un traitement n’est pas toujours nécessaire à cet âge : cela dépend de chaque enfant.',
          en: 'A first opinion around 7 is useful to monitor growth. Treatment is not always needed at that age: it depends on each child.',
          ar: 'رأي أول في حدود السابعة مفيد لمراقبة النمو. لا يلزم العلاج دائما في هذا السن، فذلك يختلف من طفل لآخر.',
        },
      },
      {
        q: { fr: 'Les aligneurs conviennent-ils à tout le monde ?', en: 'Are aligners suitable for everyone?', ar: 'هل المحاذيات تناسب الجميع؟' },
        a: {
          fr: 'Non. Certains cas demandent des bagues. Le dentiste indique la solution adaptée après l’examen, et les aligneurs doivent être portés environ 22 heures par jour.',
          en: 'No. Some cases need braces. The dentist recommends the right solution after the examination, and aligners must be worn around 22 hours a day.',
          ar: 'لا. بعض الحالات تتطلب الأسلاك. تحدد الطبيبة الحل المناسب بعد الفحص، ويجب لبس المحاذيات حوالي 22 ساعة في اليوم.',
        },
      },
      {
        q: { fr: 'Pourquoi une contention après le traitement ?', en: 'Why a retainer after treatment?', ar: 'لماذا مثبّت بعد العلاج؟' },
        a: {
          fr: 'Les dents ont tendance à bouger après le retrait de l’appareil. La contention les maintient en place.',
          en: 'Teeth tend to move once the appliance is removed. A retainer keeps them in place.',
          ar: 'تميل الأسنان إلى التحرك بعد نزع الجهاز، والمثبّت يُبقيها في مكانها.',
        },
      },
    ],
  },
  {
    slug: 'protheses',
    icon: 'crown',
    name: { fr: 'Prothèses dentaires', en: 'Dental prostheses', ar: 'التركيبات السنية' },
    summary: {
      fr: 'Couronnes, bridges et prothèses amovibles pour protéger ou remplacer des dents.',
      en: 'Crowns, bridges and removable dentures to protect or replace teeth.',
      ar: 'تيجان وجسور وتركيبات متحركة لحماية الأسنان أو تعويضها.',
    },
    description: {
      fr: 'Une couronne protège une dent très abîmée. Un bridge ou une prothèse amovible remplace une ou plusieurs dents manquantes. Elles sont fabriquées sur mesure par un laboratoire, à partir d’une empreinte ou d’un scan.',
      en: 'A crown protects a badly damaged tooth. A bridge or removable denture replaces one or more missing teeth. They are made to measure by a laboratory, from an impression or a scan.',
      ar: 'يحمي التاج سنا متضررة كثيرا. ويعوض الجسر أو التركيب المتحرك سنا أو عدة أسنان مفقودة. تُصنع على المقاس في مختبر انطلاقا من قالب أو مسح رقمي.',
    },
    steps: {
      fr: ['Examen et préparation de la dent.', 'Empreinte ou scan, choix de la teinte.', 'Prothèse provisoire pendant la fabrication.', 'Pose de la prothèse définitive et réglage de la mastication.'],
      en: ['Examination and preparation of the tooth.', 'Impression or scan, choice of shade.', 'Temporary prosthesis during fabrication.', 'Fitting of the final prosthesis and bite adjustment.'],
      ar: ['فحص وتحضير السن.', 'قالب أو مسح رقمي واختيار اللون.', 'تركيب مؤقت أثناء التصنيع.', 'تثبيت التركيب النهائي وضبط المضغ.'],
    },
    duration: { fr: '45 à 60 minutes par séance', en: '45 to 60 minutes per session', ar: 'من 45 إلى 60 دقيقة لكل جلسة' },
    sessions: { fr: '2 à 3 séances, avec quelques jours de fabrication', en: '2 to 3 sessions, with a few days of fabrication', ar: 'من 2 إلى 3 جلسات مع بضعة أيام للتصنيع' },
    forWho: {
      fr: 'Patients dont une dent est très abîmée ou manquante, ou qui souhaitent remplacer une ancienne prothèse.',
      en: 'Patients with a badly damaged or missing tooth, or who wish to replace an old prosthesis.',
      ar: 'المرضى الذين لديهم سن متضررة جدا أو مفقودة، أو الراغبون في استبدال تركيب قديم.',
    },
    photos: ['instruments', 'salle-soins', 'plateau'],
    faq: [
      {
        q: { fr: 'Quelle différence entre une couronne et un bridge ?', en: 'What is the difference between a crown and a bridge?', ar: 'ما الفرق بين التاج والجسر؟' },
        a: {
          fr: 'Une couronne recouvre une seule dent. Un bridge remplace une dent manquante en s’appuyant sur les dents voisines, qui sont alors couronnées.',
          en: 'A crown covers a single tooth. A bridge replaces a missing tooth by resting on the neighbouring teeth, which are then crowned.',
          ar: 'التاج يغطي سنا واحدة. أما الجسر فيعوض سنا مفقودة بالاستناد إلى الأسنان المجاورة التي تُغطى بتيجان.',
        },
      },
      {
        q: { fr: 'Combien de temps faut-il pour fabriquer une prothèse ?', en: 'How long does a prosthesis take to make?', ar: 'كم يستغرق تصنيع التركيب؟' },
        a: {
          fr: 'Le laboratoire a besoin de quelques jours à deux semaines selon la prothèse. Une prothèse provisoire protège la dent en attendant.',
          en: 'The laboratory needs a few days to two weeks depending on the prosthesis. A temporary one protects the tooth in the meantime.',
          ar: 'يحتاج المختبر من بضعة أيام إلى أسبوعين حسب التركيب. ويحمي تركيب مؤقت السن في هذه الأثناء.',
        },
      },
      {
        q: { fr: 'Comment entretenir une prothèse ?', en: 'How do I look after a prosthesis?', ar: 'كيف أعتني بالتركيب؟' },
        a: {
          fr: 'Brossage soigneux, brossettes ou fil entre les dents, et contrôle au cabinet une à deux fois par an. Nous vous montrons les gestes lors de la pose.',
          en: 'Careful brushing, interdental brushes or floss, and a check-up at the practice once or twice a year. We show you the technique at fitting.',
          ar: 'تفريش دقيق، وفرشاة أو خيط بين الأسنان، وفحص في العيادة مرة أو مرتين في السنة. نريك الطريقة عند التركيب.',
        },
      },
    ],
  },
  {
    slug: 'urgences',
    icon: 'alert',
    name: { fr: 'Urgences dentaires', en: 'Dental emergencies', ar: 'الحالات الاستعجالية للأسنان' },
    summary: {
      fr: 'Douleur vive, dent cassée, gonflement, choc : appelez-nous pour être orienté.',
      en: 'Severe pain, broken tooth, swelling, injury: call us to be guided.',
      ar: 'ألم شديد، سن مكسورة، تورم، أو ضربة: اتصلوا بنا لتوجيهكم.',
    },
    description: {
      fr: 'En cas de douleur intense, de dent cassée ou tombée, ou de gonflement, appelez le cabinet. Nous essayons de vous recevoir le jour même, selon les disponibilités, pour calmer la douleur et décider de la suite.',
      en: 'In case of intense pain, a broken or knocked-out tooth, or swelling, call the practice. We try to see you the same day, depending on availability, to relieve the pain and decide what comes next.',
      ar: 'في حالة ألم شديد أو سن مكسورة أو ساقطة أو تورم، اتصلوا بالعيادة. نحاول استقبالكم في اليوم نفسه حسب الإمكانيات لتخفيف الألم وتحديد ما يلزم بعد ذلك.',
    },
    steps: {
      fr: ['Appel téléphonique pour décrire la situation.', 'Rendez-vous le jour même si possible.', 'Examen et radio si nécessaire.', 'Soin de première intention, puis plan de suite expliqué.'],
      en: ['A phone call to describe the situation.', 'Same-day appointment where possible.', 'Examination and X-ray if needed.', 'First-line treatment, then the follow-up plan explained.'],
      ar: ['مكالمة هاتفية لوصف الحالة.', 'موعد في اليوم نفسه إن أمكن.', 'فحص وأشعة عند الحاجة.', 'علاج أولي ثم شرح خطة المتابعة.'],
    },
    duration: { fr: '30 à 60 minutes', en: '30 to 60 minutes', ar: 'من 30 إلى 60 دقيقة' },
    sessions: { fr: '1 séance, suivie d’un soin complet si nécessaire', en: '1 session, followed by full treatment if needed', ar: 'جلسة واحدة يليها علاج كامل عند الحاجة' },
    forWho: {
      fr: 'Toute personne avec une douleur intense, un gonflement, une dent cassée ou tombée après un choc, ou un saignement qui persiste.',
      en: 'Anyone with intense pain, swelling, a tooth broken or knocked out after an injury, or bleeding that persists.',
      ar: 'كل شخص يعاني من ألم شديد أو تورم أو سن مكسورة أو ساقطة بعد ضربة أو نزيف مستمر.',
    },
    photos: ['salle-attente', 'fauteuil-bleu'],
    faq: [
      {
        q: { fr: 'Que faire si une dent tombe après un choc ?', en: 'What if a tooth is knocked out?', ar: 'ماذا أفعل إذا سقطت سن بعد ضربة؟' },
        a: {
          fr: 'Tenez-la par la couronne, sans frotter la racine. Conservez-la dans du lait ou dans la bouche, contre la joue, et appelez-nous aussitôt : le délai compte.',
          en: 'Hold it by the crown, without rubbing the root. Keep it in milk or in your mouth against your cheek, and call us straight away: time matters.',
          ar: 'امسكوها من التاج دون فرك الجذر. احفظوها في الحليب أو داخل الفم قرب الخد، واتصلوا بنا فورا: فالوقت مهم.',
        },
      },
      {
        q: { fr: 'Recevez-vous le week-end ?', en: 'Are you open at the weekend?', ar: 'هل تستقبلون في نهاية الأسبوع؟' },
        a: {
          fr: 'Le cabinet reçoit le samedi de 9 h à 13 h et est fermé le dimanche. En dehors de ces horaires, pour une urgence importante, rendez-vous aux urgences d’un hôpital.',
          en: 'The practice is open on Saturday from 9 am to 1 pm and closed on Sunday. Outside these hours, for a serious emergency, go to a hospital emergency department.',
          ar: 'تستقبل العيادة يوم السبت من التاسعة صباحا إلى الواحدة زوالا وتُغلق يوم الأحد. خارج هذه الأوقات، وفي حالة استعجالية خطيرة، توجهوا إلى مستعجلات مستشفى.',
        },
      },
      {
        q: { fr: 'Mon visage gonfle et j’ai de la fièvre, que faire ?', en: 'My face is swollen and I have a fever. What should I do?', ar: 'وجهي منتفخ ولدي حمى، ماذا أفعل؟' },
        a: {
          fr: 'Consultez sans attendre. Si vous avez du mal à respirer ou à avaler, rendez-vous directement aux urgences d’un hôpital.',
          en: 'Seek care without delay. If you have trouble breathing or swallowing, go straight to a hospital emergency department.',
          ar: 'استشيروا دون تأخير. إذا كانت لديكم صعوبة في التنفس أو البلع فتوجهوا مباشرة إلى مستعجلات مستشفى.',
        },
      },
    ],
  },
];

export const treatmentBySlug = (slug: string) => treatments.find((t) => t.slug === slug);
