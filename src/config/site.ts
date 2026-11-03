// Tout ce qui identifie le cabinet. Modifier ce fichier (puis treatments.ts, content.ts, ui.ts) pour adapter le site.
import type { L10n } from '../lib/l10n';

export interface DayHours { open: string; close: string }

const weekday: DayHours = { open: '09:00', close: '19:00' };
const saturday: DayHours = { open: '09:00', close: '13:00' };

export const site = {
  name: 'Cabinet Benali',
  doctor: {
    fr: 'Dr Salma Benali',
    en: 'Dr Salma Benali',
    ar: 'الدكتورة سلمى بنعلي',
  } satisfies L10n,
  // Logo : un mot-symbole. `mark` est un tracé SVG (viewBox 24x24) dessiné au trait ; laisser vide pour du texte seul.
  logo: {
    wordmark: 'Cabinet Benali',
    mark: 'M7.5 3.5c-2.2 0-3.5 1.7-3.5 4 0 2.2.8 3.6 1.4 5.3.6 1.8.6 4.2 1.1 6.2.3 1.2 1 1.8 1.7 1.8 1.1 0 1.3-1.6 1.6-3.3.2-1.2.5-2.2 1.2-2.2s1 1 1.2 2.2c.3 1.7.5 3.3 1.6 3.3.7 0 1.4-.6 1.7-1.8.5-2 .5-4.4 1.1-6.2.6-1.7 1.4-3.1 1.4-5.3 0-2.3-1.3-4-3.5-4-1.7 0-2.8.8-4.5.8S9.2 3.5 7.5 3.5z',
  },
  tagline: {
    fr: 'Chirurgien-dentiste à Rabat, quartier Agdal',
    en: 'Dental surgeon in Rabat, Agdal district',
    ar: 'طبيبة أسنان بالرباط، حي أكدال',
  } satisfies L10n,
  whatsapp: '212600000000', // format international, chiffres seuls (numéro fictif)
  phone: '+212 6 00 00 00 00',
  email: 'contact@cabinet-benali.example',
  address: {
    fr: '24 avenue de France, Agdal, Rabat',
    en: '24 Avenue de France, Agdal, Rabat',
    ar: '24 شارع فرنسا، أكدال، الرباط',
  } satisfies L10n,
  // Adresse postale (utilisée dans les données structurées, non traduite)
  addressParts: { street: '24 avenue de France', district: 'Agdal', city: 'Rabat', region: 'Rabat-Salé-Kénitra', country: 'MA' },
  // Coordonnées approximatives de démonstration (Agdal, Rabat).
  map: { lat: 33.9946, lon: -6.852, zoomSpan: 0.0045 },
  // Horaires : index = Date.getDay() (0 = dimanche). null = fermé.
  schedule: [null, weekday, weekday, weekday, weekday, weekday, saturday] as (DayHours | null)[],
  languagesSpoken: ['fr', 'ar', 'en'] as const,
  /** Bandeau « site de démonstration » en haut du site. Mettre false pour le retirer. */
  demoBanner: false,
  demo: {
    author: 'Yassine Ait Oumghar',
    whatsapp: '212600000000',
  },
  // Source des photos d'exemple (affichée dans le pied de page).
  photoCredit: 'Unsplash',
  /** Lien GitHub du concepteur, affiché en bas de page. Laisser vide pour le masquer. */
  github: 'https://github.com/ysnaitoumghar',
  themeColor: '#F4F7F8',
  languages: ['fr', 'en', 'ar'] as const,
  defaultLang: 'fr' as const,
};

export type Lang = (typeof site.languages)[number];
