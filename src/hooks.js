import { useEffect } from "react";

/* Atur <title>, class, dan data-page pada <body> selama halaman aktif (dipakai oleh styles.css lama). */
export function usePage({ title, bodyClass, dataPage }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;
    const cls = (bodyClass || "").split(/\s+/).filter(Boolean);
    cls.forEach((c) => document.body.classList.add(c));
    if (dataPage) document.body.dataset.page = dataPage;
    return () => {
      document.title = prevTitle;
      cls.forEach((c) => document.body.classList.remove(c));
      if (dataPage) delete document.body.dataset.page;
    };
  }, [title, bodyClass, dataPage]);
}

/* Jalankan logika DOM lama (script.js) setelah JSX dirender, lalu bersihkan saat halaman ditinggalkan. */
export function useLegacy(init) {
  useEffect(() => {
    const cleanups = [];
    const w = { add: window.addEventListener, int: window.setInterval, to: window.setTimeout };
    const d = { add: document.addEventListener };
    window.addEventListener = function (t, f, o) { cleanups.push(() => window.removeEventListener(t, f, o)); return w.add.call(this, t, f, o); };
    document.addEventListener = function (t, f, o) { cleanups.push(() => document.removeEventListener(t, f, o)); return d.add.call(this, t, f, o); };
    window.setInterval = function (...a) { const id = w.int.apply(window, a); cleanups.push(() => clearInterval(id)); return id; };
    window.setTimeout = function (...a) { const id = w.to.apply(window, a); cleanups.push(() => clearTimeout(id)); return id; };
    try {
      const extra = init();
      if (typeof extra === "function") cleanups.push(extra);
    } finally {
      window.addEventListener = w.add; window.setInterval = w.int; window.setTimeout = w.to;
      document.addEventListener = d.add;
    }
    return () => cleanups.forEach((fn) => { try { fn(); } catch { /* abaikan */ } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
