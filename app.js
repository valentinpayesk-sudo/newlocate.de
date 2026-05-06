/* =========================================================
   AUSWANDERN.GR — Daten & Suche
   ========================================================= */

// Beispieldaten — leicht zu erweitern oder durch eine API zu ersetzen
const JOBS = [
  {
    title: 'Deutschsprachiger Kundenberater',
    company: 'AegeanTech Athens',
    location: 'Athen',
    type: 'Vollzeit',
    salary: '€2.400 – €3.000',
    tags: ['Remote möglich', 'Deutsch C1', 'Quereinstieg'],
    desc: 'Betreuung deutscher Kunden im Bereich SaaS. Modernes Büro im Zentrum von Athen, hybrides Arbeiten möglich.',
  },
  {
    title: 'Hotelmanager (m/w/d)',
    company: 'Caldera Suites',
    location: 'Santorin',
    type: 'Saison',
    salary: '€3.200 – €4.500',
    tags: ['Unterkunft inkl.', 'Mai – Oktober'],
    desc: 'Leitung eines Boutique-Hotels mit 24 Suiten. Erfahrung in der gehobenen Hotellerie erforderlich.',
  },
  {
    title: 'Softwareentwickler Backend',
    company: 'Hellas Digital',
    location: 'Thessaloniki',
    type: 'Vollzeit',
    salary: '€3.500 – €5.000',
    tags: ['Remote', 'Node.js', 'Visa-Hilfe'],
    desc: 'Entwicklung skalierbarer Backend-Services für FinTech-Kunden in der EU. Englisch reicht aus.',
  },
  {
    title: 'Restaurantleiter Taverne',
    company: 'Mythos Restaurant Group',
    location: 'Kreta — Chania',
    type: 'Vollzeit',
    salary: '€2.200 – €2.800',
    tags: ['Trinkgeld', 'Gastro-Erfahrung'],
    desc: 'Leitung einer traditionellen Taverne direkt am Hafen. Deutschkenntnisse für Gäste sehr willkommen.',
  },
  {
    title: 'Pflegefachkraft (m/w/d)',
    company: 'Athens Senior Care',
    location: 'Athen — Glyfada',
    type: 'Vollzeit',
    salary: '€2.000 – €2.600',
    tags: ['Anerkennung Hilfe', 'Sprachkurs inkl.'],
    desc: 'Pflege deutschsprachiger Senioren in Privatresidenz. Wir helfen bei der Anerkennung Ihres Abschlusses.',
  },
  {
    title: 'Reiseleiter Helikopter-Touren',
    company: 'Aegean Sky Tours',
    location: 'Mykonos',
    type: 'Saison',
    salary: '€2.800 – €3.500',
    tags: ['Tourismus', 'Englisch + Deutsch'],
    desc: 'Begleitung von VIP-Gästen auf privaten Inselrundflügen. Saisonarbeit Mai bis September.',
  },
  {
    title: 'Yachtkapitän / Skipper',
    company: 'Blue Horizon Charter',
    location: 'Korfu',
    type: 'Saison',
    salary: '€4.000 – €6.000',
    tags: ['Patent erforderlich', 'Unterkunft'],
    desc: 'Führen von Charteryachten 12–18 m. SBF-See und Funkzeugnis Mindestvoraussetzung.',
  },
  {
    title: 'Online-Marketing Manager',
    company: 'Olive & Co.',
    location: 'Remote — Griechenland',
    type: 'Vollzeit',
    salary: '€2.800 – €3.800',
    tags: ['100% Remote', 'SEO/SEA'],
    desc: 'Performance-Marketing für deutsche E-Commerce-Brands. Du wohnst, wo du willst — solange WLAN da ist.',
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
          <span>${j.company}</span><span>${j.location}</span>
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

document.addEventListener('DOMContentLoaded', () => {
  enhanceAllSelects();
  initHomeSearch();
  initJobs();
  initRentals();
  initBlog();
  initFeatured();
  applyQueryParam();
});
