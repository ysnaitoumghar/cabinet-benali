import { site } from '../config/site';

/** Lien wa.me avec un message pré-rempli. */
export const waLink = (text: string, number: string = site.whatsapp) => `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

/** Remplace les {variables} d'un modèle de message. */
export const fill = (tpl: string, vars: Record<string, string>) => tpl.replace(/\{(\w+)\}/g, (m, k: string) => vars[k] ?? m);

/** Lien tel: à partir du numéro affiché. */
export const telHref = `tel:${site.phone.replace(/\s/g, '')}`;
