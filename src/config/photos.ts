import type { L10n } from '../lib/l10n';

// Texte alternatif de chaque photo de src/assets/photos (clé = nom de fichier sans extension).
export const photoAlt: Record<string, L10n> = {
  'fauteuil-bleu': {
    fr: 'Salle de soins lumineuse avec un fauteuil dentaire bleu et un sol clair',
    en: 'Bright treatment room with a blue dental chair and a light floor',
    ar: 'غرفة علاج مضيئة فيها كرسي أسنان أزرق وأرضية فاتحة',
  },
  'salle-soins': {
    fr: 'Salle de soins avec un fauteuil dentaire orange, un scialytique et des meubles blancs',
    en: 'Treatment room with an orange dental chair, an operating light and white cabinets',
    ar: 'غرفة علاج فيها كرسي أسنان برتقالي ومصباح فحص وخزائن بيضاء',
  },
  plateau: {
    fr: 'Plateau d’instruments dentaires posé près d’une fenêtre',
    en: 'Tray of dental instruments next to a window',
    ar: 'صينية أدوات طب الأسنان بجانب نافذة',
  },
  instruments: {
    fr: 'Miroir et sondes dentaires posés sur un champ propre',
    en: 'Dental mirror and probes on a clean sheet',
    ar: 'مرآة وأدوات فحص الأسنان على غطاء نظيف',
  },
  radio: {
    fr: 'Radiographie panoramique des dents et des mâchoires',
    en: 'Panoramic X-ray of the teeth and jaws',
    ar: 'صورة أشعة بانورامية للأسنان والفكين',
  },
  'salle-attente': {
    fr: 'Salle d’attente vide avec des rangées de sièges',
    en: 'Empty waiting room with rows of seats',
    ar: 'قاعة انتظار فارغة فيها صفوف من المقاعد',
  },
};
