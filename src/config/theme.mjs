// Couleurs de la marque. Fichier .mjs pour que tailwind.config.mjs et le layout le lisent.
// Valeurs "R G B" afin que Tailwind applique l'opacité (bg-accent/10).
export const theme = {
  sand: '244 247 248',      // fond de page
  paper: '255 255 255',     // cartes
  stone: '220 228 232',     // bordures
  ink: '22 34 46',          // texte principal
  muted: '88 102 114',      // texte secondaire
  deep: '20 42 58',         // sections sombres
  accent: '0 104 112',      // couleur d'accent unique : bleu clinique / menthe
  accentInk: '255 255 255', // texte sur accent
  accentSoft: '224 242 241', // fonds de badges et d'icônes
};
