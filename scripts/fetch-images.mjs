// Télécharge les photos Unsplash de la démo dans src/assets/photos (jusqu'à 2000 px de large).
// À lancer une fois : npm run images   (les fichiers sont versionnés ; ce script sert à les re-télécharger ou les remplacer)
// Clé = nom de fichier utilisé dans src/config/*.ts ; valeur = identifiant de la photo Unsplash.
import { writeFile, mkdir } from 'node:fs/promises';

const PHOTOS = {
  'fauteuil-bleu': 'AQG6C_xYEpA',   // salle de soins claire, fauteuil bleu (hero)
  'salle-soins': 'XJptUS8nbhs',     // salle de soins lumineuse, fauteuil orange
  'plateau': 'kpLEaeScdHY',         // plateau d'instruments devant une fenêtre
  'instruments': 'R8MoN4FV5q0',     // miroir et sondes dentaires
  'radio': 'KeVKEs1_RDU',           // radio panoramique dentaire
  'salle-attente': 'IhIlMEkVQvQ',   // salle d'attente
};

// Photos conseillées à ajouter à la main si vous le souhaitez (même dossier, extension .jpg) :
//   aligneurs.jpg      gouttière transparente d'aligneur sur fond neutre
//   sterilisation.jpg  autoclave ou sachets de stérilisation
//   enfant.jpg         enfant chez le dentiste, vu de dos ou de loin
//   blanchiment.jpg    teintier dentaire
// Puis les référencer dans src/config/treatments.ts et content.ts.

await mkdir('src/assets/photos', { recursive: true });
for (const [name, id] of Object.entries(PHOTOS)) {
  let done = false;
  for (let attempt = 1; attempt <= 3 && !done; attempt++) {
    try {
      const res = await fetch(`https://unsplash.com/photos/${id}/download?force=true&w=2000`, { redirect: 'follow', signal: AbortSignal.timeout(60000) });
      if (!res.ok || !(res.headers.get('content-type') || '').startsWith('image/')) throw new Error(`HTTP ${res.status}`);
      await writeFile(`src/assets/photos/${name}.jpg`, Buffer.from(await res.arrayBuffer()));
      console.log(`ok ${name}`);
      done = true;
    } catch (e) {
      console.error(`tentative ${attempt} échouée pour ${name} (${id}): ${e.cause?.code || e.message}`);
    }
  }
  if (!done) process.exitCode = 1;
}
