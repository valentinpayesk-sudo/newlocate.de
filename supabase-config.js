/* =========================================================
   SUPABASE-EINRICHTUNG — so füllst du diese Datei aus
   ---------------------------------------------------------
   1. Auf https://supabase.com einloggen (Account ist kostenlos).
   2. Oben rechts auf "New project".
   3. Org wählen, Name z. B. "newlocate", ein Passwort vergeben
      (NICHT vergessen — du brauchst es später für die DB),
      Region "Frankfurt (eu-central-1)" empfohlen.
   4. ~2 Minuten warten, bis das Projekt fertig ist.
   5. Links im Menü: "Project Settings" → "API".
   6. Zwei Werte kopieren:
        - "Project URL"            →  unten in SUPABASE_URL
        - "Project API Keys" → "anon public"  →  SUPABASE_ANON_KEY
   7. (Optional, für die Entwicklung) Auth → Providers → Email
      → "Confirm email" auf OFF stellen. Dann können sich neue
      Nutzer sofort einloggen, ohne auf eine Bestätigungs-Mail
      zu warten. Für die Produktion später wieder aktivieren.

   Der "anon public"-Schlüssel ist explizit für den Browser
   gedacht — er darf öffentlich sein, weil Supabase über RLS
   (Row Level Security) absichert, was er tatsächlich sehen darf.
   ========================================================= */

window.SUPABASE_URL      = 'DEINE-PROJEKT-URL-HIER';
window.SUPABASE_ANON_KEY = 'DEIN-ANON-KEY-HIER';
