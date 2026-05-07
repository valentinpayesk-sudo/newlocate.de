/* =========================================================
   AUSWANDERN.GR — Daten & Suche
   ========================================================= */

// Beispieldaten — leicht zu erweitern oder durch eine API zu ersetzen
const JOBS = [
  {
    title: 'Kundenservicemitarbeiter für Vodafone (m/w/d)',
    location: 'Serres',
    type: 'Vollzeit',
    salary: '€1.600 – €3.600',
    tags: ['Remote möglich', 'Deutsch C1', 'Quereinstieg'],
    desc: 'Betreuung deutscher Kunden im Bereich Telekommunikation. Modernes Büro im Zentrum von Serres, hybrides Arbeiten möglich.',
  },
  {
    title: 'Hotelmanager (m/w/d)',
    location: 'Santorin',
    type: 'Saison',
    salary: '€3.200 – €4.500',
    tags: ['Unterkunft inkl.', 'Mai – Oktober'],
    desc: 'Leitung eines Boutique-Hotels mit 24 Suiten. Erfahrung in der gehobenen Hotellerie erforderlich.',
  },
  {
    title: 'Softwareentwickler Backend',
    location: 'Thessaloniki',
    type: 'Hybrid',
    salary: '€3.500 – €5.000',
    tags: ['Node.js', 'Visa-Hilfe', '3 Tage Office'],
    desc: 'Entwicklung skalierbarer Backend-Services für FinTech-Kunden in der EU. Englisch reicht aus.',
  },
  {
    title: 'Restaurantleiter Taverne',
    location: 'Kreta — Chania',
    type: 'Vollzeit',
    salary: '€2.200 – €2.800',
    tags: ['Trinkgeld', 'Gastro-Erfahrung'],
    desc: 'Leitung einer traditionellen Taverne direkt am Hafen. Deutschkenntnisse für Gäste sehr willkommen.',
  },
  {
    title: 'Pflegefachkraft (m/w/d)',
    location: 'Athen — Glyfada',
    type: 'Vollzeit',
    salary: '€2.000 – €2.600',
    tags: ['Anerkennung Hilfe', 'Sprachkurs inkl.'],
    desc: 'Pflege deutschsprachiger Senioren in Privatresidenz. Wir helfen bei der Anerkennung Ihres Abschlusses.',
  },
  {
    title: 'Reiseleiter Helikopter-Touren',
    location: 'Mykonos',
    type: 'Saison',
    salary: '€2.800 – €3.500',
    tags: ['Tourismus', 'Englisch + Deutsch'],
    desc: 'Begleitung von VIP-Gästen auf privaten Inselrundflügen. Saisonarbeit Mai bis September.',
  },
  {
    title: 'Yachtkapitän / Skipper',
    location: 'Korfu',
    type: 'Saison',
    salary: '€4.000 – €6.000',
    tags: ['Patent erforderlich', 'Unterkunft'],
    desc: 'Führen von Charteryachten 12–18 m. SBF-See und Funkzeugnis Mindestvoraussetzung.',
  },
  {
    title: 'Online-Marketing Manager',
    location: 'Athen + Home-Office',
    type: 'Hybrid',
    salary: '€2.800 – €3.800',
    tags: ['SEO/SEA', '1 Tag Office / Woche'],
    desc: 'Performance-Marketing für deutsche E-Commerce-Brands. Flexibel zwischen Co-Working in Athen und zu Hause.',
  },
  {
    title: 'Lehrkraft Deutsch als Fremdsprache',
    location: 'Athen — Kifissia',
    type: 'Vollzeit',
    salary: '€1.900 – €2.500',
    tags: ['Goethe-Zertifikat', 'Erfahrung mit Kindern'],
    desc: 'Deutschunterricht an einer privaten Sprachschule. Mind. 24 Wochenstunden, kleine Gruppen.',
  },
  {
    title: 'Buchhalter mit deutschen Steuerkenntnissen',
    location: 'Thessaloniki',
    type: 'Hybrid',
    salary: '€2.500 – €3.200',
    tags: ['DATEV', 'Steuerrecht DE', '2 Tage Office'],
    desc: 'Begleitung deutscher Mandanten in Griechenland — Lohnabrechnung, USt-Voranmeldungen, Jahresabschluss.',
  },
  {
    title: 'Bauleiter Hochbau',
    location: 'Kreta — Heraklion',
    type: 'Vollzeit',
    salary: '€3.200 – €4.200',
    tags: ['Bauingenieur', 'Englisch', 'Dienstwagen'],
    desc: 'Steuerung mehrerer Wohnbauprojekte für Investoren aus dem DACH-Raum. Eigener Dienstwagen.',
  },
  {
    title: 'Animateur im Familien-Resort',
    location: 'Rhodos',
    type: 'Saison',
    salary: '€1.700 – €2.300',
    tags: ['Unterkunft + Verpflegung', 'Mai – Oktober'],
    desc: 'Kinder- und Familienprogramm in einem 4-Sterne-Resort. Deutschkenntnisse zwingend, Englisch von Vorteil.',
  },
  {
    title: 'Immobilienmakler für deutsche Käufer',
    location: 'Athen + Inseln',
    type: 'Vollzeit',
    salary: '€1.800 + Provision',
    tags: ['Hohe Provision', 'Eigener Kundenstamm möglich'],
    desc: 'Beratung deutscher Käufer beim Erwerb von Ferien- und Renditeimmobilien. Vertriebserfahrung erforderlich.',
  },
  {
    title: 'KFZ-Mechaniker mit Diagnose-Erfahrung',
    location: 'Thessaloniki',
    type: 'Vollzeit',
    salary: '€1.900 – €2.500',
    tags: ['Markenwerkstatt', 'Weiterbildung'],
    desc: 'Wartung und Reparatur europäischer PKW. Erfahrung mit OBD-Diagnose und Hybridfahrzeugen wünschenswert.',
  },
  {
    title: 'Fitness- & Wellness-Trainer',
    location: 'Korfu',
    type: 'Saison',
    salary: '€2.000 – €2.800',
    tags: ['Lizenz erforderlich', 'Unterkunft inkl.'],
    desc: 'Personal Training und Gruppenkurse in einem Wellness-Resort. Saison April bis Oktober.',
  },
  {
    title: 'Customer Success Manager (DACH)',
    location: 'Athen + Remote',
    type: 'Hybrid',
    salary: '€3.000 – €4.000',
    tags: ['SaaS', '2 Tage Office', 'Stock Options'],
    desc: 'Betreuung deutscher Enterprise-Kunden. Onboarding, QBRs, Renewals — auf Deutsch und Englisch.',
  },
];

const RENTALS = [
  {
    title: 'Helle 2-Zimmer-Wohnung mit Meerblick',
    location: 'Athen — Piräus',
    rooms: '2 Zimmer',
    size: '68 m²',
    price: 780,
    type: 'Wohnung',
    tags: ['Möbliert', 'Balkon', 'Nähe Metro'],
  },
  {
    title: 'Studio im historischen Plaka-Viertel',
    location: 'Athen — Plaka',
    rooms: '1 Zimmer',
    size: '34 m²',
    price: 620,
    type: 'Studio',
    tags: ['Charmant', 'Akropolis-Blick'],
  },
  {
    title: 'Familienhaus mit Garten und Pool',
    location: 'Kreta — Chania',
    rooms: '4 Zimmer',
    size: '160 m²',
    price: 1450,
    type: 'Haus',
    tags: ['Pool', 'Garten', 'Carport'],
  },
  {
    title: 'Modernes Apartment direkt am Hafen',
    location: 'Thessaloniki',
    rooms: '3 Zimmer',
    size: '92 m²',
    price: 950,
    type: 'Wohnung',
    tags: ['Neubau', 'Klimaanlage'],
  },
  {
    title: 'Traditionelles Steinhaus',
    location: 'Santorin — Oia',
    rooms: '2 Zimmer',
    size: '75 m²',
    price: 1800,
    type: 'Haus',
    tags: ['Caldera-Blick', 'Saison Mai-Okt'],
  },
  {
    title: 'Loft im Künstlerviertel',
    location: 'Athen — Exarchia',
    rooms: '1 Zimmer',
    size: '52 m²',
    price: 690,
    type: 'Studio',
    tags: ['Loft-Charakter', 'Hochdecken'],
  },
  {
    title: 'Villa mit Olivenhain',
    location: 'Korfu',
    rooms: '5 Zimmer',
    size: '220 m²',
    price: 2100,
    type: 'Haus',
    tags: ['Privat', 'Olivenhain', 'Strandnähe'],
  },
  {
    title: 'Praktisches Apartment für Berufseinsteiger',
    location: 'Patras',
    rooms: '2 Zimmer',
    size: '60 m²',
    price: 540,
    type: 'Wohnung',
    tags: ['Günstig', 'Uni-Nähe'],
  },
];

const POSTS = [
  {
    title: 'Auswandern nach Griechenland: Der komplette Leitfaden 2026',
    cat: 'Leitfaden',
    date: '12. April 2026',
    read: '8 min',
    excerpt: 'Von der ersten Idee bis zur Anmeldung beim KEP — alle Schritte für einen reibungslosen Start in Griechenland.',
  },
  {
    title: 'AFM, AMKA und Steuernummer: So beantragen Sie alles richtig',
    cat: 'Behörden',
    date: '02. April 2026',
    read: '6 min',
    excerpt: 'Welche Dokumente Sie brauchen, wo Sie hingehen und welche typischen Fehler Sie vermeiden sollten.',
  },
  {
    title: 'Krankenversicherung in Griechenland — was deutsche Auswanderer wissen müssen',
    cat: 'Gesundheit',
    date: '24. März 2026',
    read: '7 min',
    excerpt: 'Privat, gesetzlich oder die griechische EFKA? Wir vergleichen Kosten, Leistungen und Wartezeiten.',
  },
  {
    title: 'Steuern als Selbstständiger in Athen — meine Erfahrungen',
    cat: 'Erfahrungsbericht',
    date: '14. März 2026',
    read: '9 min',
    excerpt: 'Pauschalsteuer, Sozialabgaben, Buchhaltung: Wie ich nach 18 Monaten endlich den Überblick habe.',
  },
  {
    title: 'Schule und Kita: Bildungssystem in Griechenland verstehen',
    cat: 'Familie',
    date: '01. März 2026',
    read: '10 min',
    excerpt: 'Öffentlich, privat oder deutsche Schule Athen? Vor- und Nachteile auf einen Blick.',
  },
  {
    title: 'Auto ummelden oder neu kaufen? Was sich wirklich lohnt',
    cat: 'Praktisch',
    date: '18. Februar 2026',
    read: '5 min',
    excerpt: 'Importkosten, Versicherung und KFZ-Steuer im direkten Vergleich.',
  },
];

/* =========================================================
   Renderer
   ========================================================= */

function jobCard(j) {
  return `
    <article class="card">
      <div class="card-media">
        <span class="badge">${j.type}</span>
      </div>
      <div class="card-body">
        <h3>${j.title}</h3>
        <div class="card-meta">
          <span>${j.location}</span>
        </div>
        <p style="color:var(--muted); font-size:14px;">${j.desc}</p>
        <div>${j.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-foot">
          <span class="price">${j.salary}</span>
          <a href="#" class="read-more">Bewerben →</a>
        </div>
      </div>
    </article>`;
}

function rentalCard(r) {
  return `
    <article class="card">
      <div class="card-media">
        <span class="badge">${r.type}</span>
      </div>
      <div class="card-body">
        <h3>${r.title}</h3>
        <div class="card-meta">
          <span>${r.location}</span><span>${r.rooms}</span><span>${r.size}</span>
        </div>
        <div>${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <div class="card-foot">
          <span class="price">€${r.price} / Monat</span>
          <a href="#" class="read-more">Details →</a>
        </div>
      </div>
    </article>`;
}

function postCard(p) {
  return `
    <article class="card blog-card">
      <div class="card-media">
        <span class="badge">${p.cat}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${p.date}</span><span>${p.read} Lesezeit</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="card-foot">
          <a href="#" class="read-more">Weiterlesen →</a>
        </div>
      </div>
    </article>`;
}

/* =========================================================
   Suche & Filter
   ========================================================= */

function filterBy(items, query, fields) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return items;
  return items.filter(it =>
    fields.some(f => String(it[f] || '').toLowerCase().includes(q))
  );
}

function initJobs() {
  const grid = document.getElementById('jobsGrid');
  if (!grid) return;
  const search = document.getElementById('jobsSearch');
  const loc = document.getElementById('jobsLocation');
  const type = document.getElementById('jobsType');

  function render() {
    let list = JOBS.slice();
    const q = search.value.trim().toLowerCase();
    if (q) list = list.filter(j =>
      [j.title, j.company, j.desc, j.tags.join(' ')].join(' ').toLowerCase().includes(q)
    );
    if (loc.value) list = list.filter(j => j.location.includes(loc.value));
    if (type.value) list = list.filter(j => j.type === type.value);

    grid.innerHTML = list.length
      ? list.map(jobCard).join('')
      : `<div class="no-results">Keine Stellen gefunden — bitte Suchkriterien anpassen.</div>`;
  }

  [search, loc, type].forEach(el => el.addEventListener('input', render));
  render();
}

function initRentals() {
  const grid = document.getElementById('rentalsGrid');
  if (!grid) return;
  const search = document.getElementById('rentalsSearch');
  const type = document.getElementById('rentalsType');
  const max = document.getElementById('rentalsMaxPrice');

  function render() {
    let list = RENTALS.slice();
    const q = search.value.trim().toLowerCase();
    if (q) list = list.filter(r =>
      [r.title, r.location, r.tags.join(' ')].join(' ').toLowerCase().includes(q)
    );
    if (type.value) list = list.filter(r => r.type === type.value);
    const m = parseInt(max.value, 10);
    if (!isNaN(m) && m > 0) list = list.filter(r => r.price <= m);

    grid.innerHTML = list.length
      ? list.map(rentalCard).join('')
      : `<div class="no-results">Keine passenden Wohnungen gefunden.</div>`;
  }

  [search, type, max].forEach(el => el.addEventListener('input', render));
  render();
}

function initBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  const search = document.getElementById('blogSearch');
  const cat = document.getElementById('blogCategory');

  function render() {
    let list = POSTS.slice();
    const q = search.value.trim().toLowerCase();
    if (q) list = list.filter(p =>
      [p.title, p.excerpt, p.cat].join(' ').toLowerCase().includes(q)
    );
    if (cat.value) list = list.filter(p => p.cat === cat.value);

    grid.innerHTML = list.length
      ? list.map(postCard).join('')
      : `<div class="no-results">Keine Artikel gefunden.</div>`;
  }

  [search, cat].forEach(el => el.addEventListener('input', render));
  render();
}

/* =========================================================
   Homepage Such-Card → Sprung zur passenden Seite
   ========================================================= */

function initHomeSearch() {
  const form = document.getElementById('homeSearch');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const kind = document.getElementById('homeKind').value;
    const region = document.getElementById('homeRegion').value;
    const target = kind === 'jobs' ? 'jobs.html' : 'wohnungen.html';
    const params = new URLSearchParams();
    if (region) params.set('q', region);
    window.location.href = `${target}?${params.toString()}`;
  });
}

/* =========================================================
   URL-Query → Sucheingabe vorausfüllen
   ========================================================= */

function applyQueryParam() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get('q');
  if (!q) return;
  const target = document.getElementById('jobsSearch') || document.getElementById('rentalsSearch');
  if (target) {
    target.value = q;
    target.dispatchEvent(new Event('input'));
  }
}

/* =========================================================
   Featured-Listings auf der Homepage
   ========================================================= */

function initFeatured() {
  const jobsFeat = document.getElementById('featuredJobs');
  if (jobsFeat) jobsFeat.innerHTML = JOBS.slice(0, 3).map(jobCard).join('');
  const rentalsFeat = document.getElementById('featuredRentals');
  if (rentalsFeat) rentalsFeat.innerHTML = RENTALS.slice(0, 3).map(rentalCard).join('');
  const postsFeat = document.getElementById('featuredPosts');
  if (postsFeat) postsFeat.innerHTML = POSTS.slice(0, 3).map(postCard).join('');
}

/* =========================================================
   Custom Dropdowns — ersetzen native <select> visuell
   ========================================================= */

function enhanceSelect(select) {
  if (select.dataset.enhanced) return;
  select.dataset.enhanced = '1';

  const host = document.createElement('div');
  host.className = 'select-host';
  select.parentNode.insertBefore(host, select);
  host.appendChild(select);

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'select-toggle';
  toggle.innerHTML = '<span class="t-icon"></span><span class="t-label"></span><span class="chev">▾</span>';
  host.appendChild(toggle);

  const menu = document.createElement('ul');
  menu.className = 'select-menu';
  menu.setAttribute('role', 'listbox');
  host.appendChild(menu);

  function buildMenu() {
    menu.innerHTML = '';
    Array.from(select.options).forEach(opt => {
      const li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.dataset.value = opt.value;
      const icon = opt.dataset.icon || '';
      li.innerHTML = `<span class="item-icon">${icon}</span><span class="item-label"></span>`;
      li.querySelector('.item-label').textContent = opt.textContent;
      li.addEventListener('click', () => {
        select.value = opt.value;
        select.dispatchEvent(new Event('input', { bubbles: true }));
        select.dispatchEvent(new Event('change', { bubbles: true }));
        updateLabel();
        host.classList.remove('open');
      });
      menu.appendChild(li);
    });
  }

  function updateLabel() {
    const opt = select.options[select.selectedIndex];
    const labelEl = toggle.querySelector('.t-label');
    const iconEl = toggle.querySelector('.t-icon');
    if (!opt) {
      labelEl.textContent = '';
      iconEl.innerHTML = '';
    } else {
      labelEl.textContent = opt.textContent;
      iconEl.innerHTML = opt.dataset.icon || '';
    }
    Array.from(menu.children).forEach(li => {
      if (li.dataset.value === select.value) li.setAttribute('aria-selected', 'true');
      else li.removeAttribute('aria-selected');
    });
  }

  toggle.addEventListener('click', e => {
    e.stopPropagation();
    document.querySelectorAll('.select-host.open').forEach(h => {
      if (h !== host) h.classList.remove('open');
    });
    host.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!host.contains(e.target)) host.classList.remove('open');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') host.classList.remove('open');
  });

  buildMenu();
  updateLabel();
}

function enhanceAllSelects() {
  document.querySelectorAll('select').forEach(enhanceSelect);
}

/* =========================================================
   Auth — Supabase (Login + Registrierung)
   Konfiguration in supabase-config.js. Wenn die nicht ausgefüllt
   ist, sehen die Buttons noch da, zeigen aber einen Hinweis.
   ========================================================= */

const supabaseClient = (
  window.supabase &&
  window.SUPABASE_URL &&
  !window.SUPABASE_URL.startsWith('DEINE')
)
  ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY)
  : null;

function injectAuthModal() {
  if (document.getElementById('authOverlay')) return;
  const overlay = document.createElement('div');
  overlay.id = 'authOverlay';
  overlay.className = 'auth-overlay';
  overlay.innerHTML = `
    <div class="auth-modal" role="dialog" aria-modal="true">
      <button class="auth-close" type="button" aria-label="Schließen">✕</button>

      <div class="auth-view active" data-view="login">
        <h2>Willkommen zurück</h2>
        <p class="auth-sub">Melden Sie sich an, um Jobs und Wohnungen zu speichern.</p>
        <form class="auth-form" id="loginForm" autocomplete="on">
          <div class="auth-error" id="loginError"></div>
          <div class="auth-success" id="loginSuccess"></div>
          <div class="auth-field">
            <label for="loginEmail">E-Mail</label>
            <input type="email" id="loginEmail" required autocomplete="email" />
          </div>
          <div class="auth-field">
            <label for="loginPassword">Passwort</label>
            <input type="password" id="loginPassword" required autocomplete="current-password" />
          </div>
          <button type="submit" class="auth-submit">Anmelden</button>
        </form>
        <div class="auth-switch">
          Noch kein Konto? <a data-switch="register">Jetzt registrieren</a>
        </div>
      </div>

      <div class="auth-view" data-view="register">
        <h2>Konto erstellen</h2>
        <p class="auth-sub">Kostenlos in 30 Sekunden — keine Kreditkarte nötig.</p>
        <form class="auth-form" id="registerForm" autocomplete="on">
          <div class="auth-error" id="registerError"></div>
          <div class="auth-success" id="registerSuccess"></div>
          <div class="auth-field">
            <label for="regName">Vor- und Nachname</label>
            <input type="text" id="regName" required autocomplete="name" />
          </div>
          <div class="auth-field">
            <label for="regEmail">E-Mail</label>
            <input type="email" id="regEmail" required autocomplete="email" />
          </div>
          <div class="auth-field">
            <label for="regPassword">Passwort (min. 8 Zeichen)</label>
            <input type="password" id="regPassword" required minlength="8" autocomplete="new-password" />
          </div>
          <div class="auth-field">
            <label for="regPassword2">Passwort wiederholen</label>
            <input type="password" id="regPassword2" required minlength="8" autocomplete="new-password" />
          </div>
          <button type="submit" class="auth-submit">Konto erstellen</button>
        </form>
        <div class="auth-switch">
          Schon ein Konto? <a data-switch="login">Jetzt anmelden</a>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  overlay.querySelectorAll('[data-switch]').forEach(el => {
    el.addEventListener('click', () => switchAuthView(el.dataset.switch));
  });
  overlay.querySelector('.auth-close').addEventListener('click', closeAuth);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeAuth(); });

  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  document.getElementById('registerForm').addEventListener('submit', handleRegister);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeAuth();
  });
}

function openAuth(view) {
  switchAuthView(view || 'login');
  document.getElementById('authOverlay').classList.add('open');
  setTimeout(() => {
    const first = document.querySelector('.auth-view.active input');
    if (first) first.focus();
  }, 100);
}

function closeAuth() {
  const overlay = document.getElementById('authOverlay');
  overlay.classList.remove('open');
  document.querySelectorAll('.auth-error, .auth-success').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.auth-form').forEach(f => f.reset());
}

function switchAuthView(view) {
  document.querySelectorAll('.auth-view').forEach(el => {
    el.classList.toggle('active', el.dataset.view === view);
  });
  document.querySelectorAll('.auth-error, .auth-success').forEach(e => e.classList.remove('show'));
}

function showAuthMsg(formId, type, msg) {
  const errId = formId === 'loginForm' ? 'loginError' : 'registerError';
  const okId  = formId === 'loginForm' ? 'loginSuccess' : 'registerSuccess';
  const el    = document.getElementById(type === 'error' ? errId : okId);
  const other = document.getElementById(type === 'error' ? okId : errId);
  el.textContent = msg;
  el.classList.add('show');
  other.classList.remove('show');
}

function translateAuthError(msg) {
  if (!msg) return 'Ein unbekannter Fehler ist aufgetreten.';
  const m = msg.toLowerCase();
  if (m.includes('invalid login credentials')) return 'E-Mail oder Passwort sind nicht korrekt.';
  if (m.includes('user already registered')) return 'Diese E-Mail ist bereits registriert.';
  if (m.includes('email not confirmed')) return 'Bitte bestätige zuerst deine E-Mail-Adresse — schau in dein Postfach.';
  if (m.includes('password should be')) return 'Das Passwort ist zu kurz.';
  if (m.includes('rate limit')) return 'Zu viele Versuche — bitte ein paar Minuten warten.';
  if (m.includes('failed to fetch') || m.includes('network')) return 'Keine Verbindung zum Server. Internet prüfen?';
  return msg;
}

function ensureSupabase(formId) {
  if (!supabaseClient) {
    showAuthMsg(formId, 'error', 'Supabase ist noch nicht eingerichtet. Bitte URL und Anon-Key in supabase-config.js eintragen.');
    return false;
  }
  return true;
}

async function handleLogin(e) {
  e.preventDefault();
  if (!ensureSupabase('loginForm')) return;
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const submit = e.target.querySelector('.auth-submit');
  submit.disabled = true; submit.textContent = 'Anmelden …';
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  submit.disabled = false; submit.textContent = 'Anmelden';
  if (error) {
    showAuthMsg('loginForm', 'error', translateAuthError(error.message));
    return;
  }
  closeAuth();
  // updateAuthUI wird durch onAuthStateChange ausgelöst
}

async function handleRegister(e) {
  e.preventDefault();
  if (!ensureSupabase('registerForm')) return;
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim().toLowerCase();
  const pw = document.getElementById('regPassword').value;
  const pw2 = document.getElementById('regPassword2').value;
  if (pw !== pw2) {
    showAuthMsg('registerForm', 'error', 'Die Passwörter stimmen nicht überein.');
    return;
  }
  if (pw.length < 8) {
    showAuthMsg('registerForm', 'error', 'Das Passwort muss mindestens 8 Zeichen haben.');
    return;
  }
  const submit = e.target.querySelector('.auth-submit');
  submit.disabled = true; submit.textContent = 'Konto wird erstellt …';
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password: pw,
    options: { data: { full_name: name } },
  });
  submit.disabled = false; submit.textContent = 'Konto erstellen';
  if (error) {
    showAuthMsg('registerForm', 'error', translateAuthError(error.message));
    return;
  }
  if (data.session) {
    closeAuth();
  } else {
    showAuthMsg('registerForm', 'success',
      'Fast geschafft! Wir haben dir eine Bestätigungs-Mail geschickt — bitte den Link darin anklicken.');
    e.target.reset();
  }
}

function updateAuthUI(session) {
  document.querySelectorAll('.nav-actions').forEach(el => {
    el.innerHTML = '';
    if (session && session.user) {
      const fullName = session.user.user_metadata && session.user.user_metadata.full_name;
      const displayName = fullName ? fullName.split(' ')[0] : session.user.email.split('@')[0];

      const greeting = document.createElement('span');
      greeting.className = 'nav-user';
      greeting.textContent = `Hallo, ${displayName}`;
      el.appendChild(greeting);

      const logout = document.createElement('button');
      logout.className = 'nav-logout';
      logout.type = 'button';
      logout.textContent = 'Abmelden';
      logout.addEventListener('click', async () => {
        if (supabaseClient) await supabaseClient.auth.signOut();
        else updateAuthUI(null);
      });
      el.appendChild(logout);
    } else {
      const login = document.createElement('button');
      login.className = 'nav-login';
      login.type = 'button';
      login.textContent = 'Anmelden';
      login.addEventListener('click', () => openAuth('login'));
      el.appendChild(login);

      const register = document.createElement('button');
      register.className = 'nav-register';
      register.type = 'button';
      register.textContent = 'Registrieren';
      register.addEventListener('click', () => openAuth('register'));
      el.appendChild(register);
    }
  });
}

async function initAuth() {
  injectAuthModal();
  if (supabaseClient) {
    const { data: { session } } = await supabaseClient.auth.getSession();
    updateAuthUI(session);
    supabaseClient.auth.onAuthStateChange((_event, session) => {
      updateAuthUI(session);
    });
  } else {
    updateAuthUI(null);
    console.warn('[Newlocate] Supabase nicht konfiguriert — bitte URL und Anon-Key in supabase-config.js eintragen.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  enhanceAllSelects();
  initAuth();
  initHomeSearch();
  initJobs();
  initRentals();
  initBlog();
  initFeatured();
  applyQueryParam();
});
