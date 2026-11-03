export type Lang = 'fr' | 'en' | 'ar';
export type L10n = Record<Lang, string>;
export type L10nList = Record<Lang, string[]>;

export const langs: Lang[] = ['fr', 'en', 'ar'];
export const langNames: Record<Lang, string> = { fr: 'Français', en: 'English', ar: 'العربية' };
export const langShort: Record<Lang, string> = { fr: 'FR', en: 'EN', ar: 'ع' };
export const dir = (l: Lang) => (l === 'ar' ? 'rtl' : 'ltr');
export const tr = <T extends string | string[]>(v: Record<Lang, T>, l: Lang): T => v[l];

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Prefixe un chemin avec la base du site (sous-chemin GitHub Pages). */
export const href = (path = '/') => `${base}${path.startsWith('/') ? path : '/' + path}`;
export const pageUrl = (l: Lang, path = '') => href(`/${l}/${path}`.replace(/\/+$/, '/').replace(/^\/\//, '/'));

/** Locale BCP 47 utilisée pour les dates (chiffres latins en arabe, calendrier grégorien). */
export const locales: Record<Lang, string> = { fr: 'fr-FR', en: 'en-GB', ar: 'ar-MA-u-ca-gregory-nu-latn' };
/** Valeur de og:locale par langue. */
export const ogLocales: Record<Lang, string> = { fr: 'fr_MA', en: 'en_GB', ar: 'ar_MA' };
