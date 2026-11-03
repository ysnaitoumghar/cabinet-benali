// Module de rendez-vous : soin, date, créneau, statut, nom -> message WhatsApp pré-rempli.
// Aucun envoi serveur : le formulaire ne fait que construire un lien wa.me.
interface Cfg {
  lang: string; locale: string; clinic: string; whatsapp: string; urgentValue: string;
  options: Record<string, string>;
  days: { open: boolean; afternoon: boolean }[];
  msg: {
    intro: string; urgent: string; date: string; morning: string; afternoon: string;
    newPatient: string; existingPatient: string; name: string;
  };
}

const fill = (tpl: string, vars: Record<string, string>) => tpl.replace(/\{(\w+)\}/g, (m, k: string) => vars[k] ?? m);
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const parse = (s: string) => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); };

export function initBooking() {
  document.querySelectorAll<HTMLFormElement>('[data-booking]').forEach(setup);
}

function setup(form: HTMLFormElement) {
  if (form.dataset.ready) return;
  form.dataset.ready = '1';
  const cfg: Cfg = JSON.parse(form.dataset.config!);
  const q = <T extends HTMLElement>(s: string) => form.querySelector<T>(s)!;
  const qa = <T extends HTMLElement>(s: string) => Array.from(form.querySelectorAll<T>(s));

  const treatment = q<HTMLSelectElement>('[data-treatment]');
  const date = q<HTMLInputElement>('[data-date]');
  const dateField = q('[data-date-field]');
  const slotField = q('[data-slot-field]');
  const slots = qa<HTMLInputElement>('[data-slot]');
  const statuses = qa<HTMLInputElement>('[data-status]');
  const name = q<HTMLInputElement>('[data-name]');
  const urgentBox = q('[data-urgent]');
  const closedMsg = q('[data-closed]');
  const satMsg = q('[data-sat]');
  const preview = q('[data-preview]');
  const send = q<HTMLAnchorElement>('[data-send]');

  const dateFmt = new Intl.DateTimeFormat(cfg.locale, { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });
  const todayIso = iso(new Date());
  date.min = todayIso;

  const checked = (list: HTMLInputElement[]) => list.find((i) => i.checked) ?? list[0];
  const slotInput = (v: string) => slots.find((i) => i.value === v) ?? slots[0];

  const render = () => {
    const urgent = treatment.value === cfg.urgentValue;
    urgentBox.hidden = !urgent;
    dateField.hidden = urgent;
    slotField.hidden = urgent;

    // Date : ignorée si vide ou passée
    const valid = !urgent && !!date.value && date.value >= todayIso;
    const day = valid ? cfg.days[parse(date.value).getUTCDay()] : null;
    const closed = !!day && !day.open;
    const morningOnly = !!day && day.open && !day.afternoon;
    closedMsg.hidden = !closed;
    satMsg.hidden = !morningOnly;

    // Créneaux : tout est désactivé un jour fermé ; l'après-midi l'est quand le cabinet ferme à midi
    slotInput('morning').disabled = closed;
    slotInput('afternoon').disabled = closed || morningOnly;
    if (morningOnly && slotInput('afternoon').checked) slotInput('morning').checked = true;

    const parts: string[] = [];
    const clinic = cfg.clinic;
    if (urgent) {
      parts.push(fill(cfg.msg.urgent, { clinic }));
    } else {
      parts.push(fill(cfg.msg.intro, { clinic, treatment: cfg.options[treatment.value] ?? '' }));
      if (valid && !closed) {
        const slot = checked(slots).value === 'afternoon' ? cfg.msg.afternoon : cfg.msg.morning;
        parts.push(fill(cfg.msg.date, { date: dateFmt.format(parse(date.value)), slot }));
      }
    }
    parts.push(checked(statuses).value === 'existing' ? cfg.msg.existingPatient : cfg.msg.newPatient);
    const who = name.value.trim();
    if (who) parts.push(fill(cfg.msg.name, { name: who }));

    const text = parts.join(' ');
    preview.textContent = text;
    send.href = `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  [treatment, date, name, ...slots, ...statuses].forEach((el) => {
    el.addEventListener('change', render);
    el.addEventListener('input', render);
  });
  render();
}
