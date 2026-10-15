// Envoi des formulaires (e-mail) + suivi des actions des visiteurs.
// La configuration (clé Web3Forms, adresse FormSubmit) vient de src/data/site.js via <body data-…>.

export type Donnees = Record<string, string>;

/** Envoie les données par e-mail. Renvoie true si l'envoi a réussi. */
export async function envoyer(d: Donnees, subject: string): Promise<boolean> {
  const cfg = document.body.dataset;
  const entetes = { 'Content-Type': 'application/json', Accept: 'application/json' };
  try {
    let r: Response;
    if (cfg.key) {
      // Web3Forms : aucune activation nécessaire, la clé suffit
      const body: Record<string, string> = { ...d, access_key: cfg.key, subject, from_name: 'Site Poly-Center Mali' };
      if (d.nom) body.name = d.nom;
      r = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: entetes, body: JSON.stringify(body) });
    } else {
      // FormSubmit : l'adresse doit être activée une fois (e-mail de confirmation)
      const body = { ...d, _subject: subject, _template: 'table', _captcha: 'false' };
      r = await fetch('https://formsubmit.co/ajax/' + cfg.email, { method: 'POST', headers: entetes, body: JSON.stringify(body) });
    }
    const j = await r.json().catch(() => ({}));
    const ok = r.ok && (j.success === true || j.success === 'true');
    if (!ok) console.error('Envoi du formulaire échoué :', r.status, j);
    return ok;
  } catch (err) {
    console.error('Envoi du formulaire échoué :', err);
    return false;
  }
}

/** Enregistre une action dans les statistiques (Google Analytics et Vercel, s'ils sont activés). */
export function trace(nom: string, params: Record<string, string> = {}) {
  try {
    const w = window as any;
    w.gtag?.('event', nom, params);
    w.va?.('event', { name: nom, data: params });
  } catch {}
}

/** D'où vient le visiteur : site d'origine et campagne éventuelle (?utm_source=…). */
export function origine(): Donnees {
  const o: Donnees = { page: location.pathname };
  try {
    const u = new URLSearchParams(location.search);
    ['utm_source', 'utm_medium', 'utm_campaign'].forEach((k) => { const v = u.get(k); if (v) o[k] = v; });
    if (document.referrer) o.venu_de = new URL(document.referrer).hostname;
  } catch {}
  return o;
}
