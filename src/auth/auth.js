/* Auth demo: akun dari public/data/users.json (fallback bawaan bila fetch gagal).
   Perubahan profil disimpan di localStorage sebagai "override" di atas data JSON. */
const KEY = "floodmonitor.session";
const PKEY = "floodmonitor.profiles";
const FALLBACK = [
  { username: "admin", email: "admin@floodmonitor.id", phone: "081234567890", password: "admin123", name: "Admin", role: "Administrator" },
  { username: "operator", email: "operator@floodmonitor.id", phone: "081234567891", password: "operator123", name: "Operator Banjir", role: "Operator" },
  { username: "petugas", email: "petugas@floodmonitor.id", phone: "081234567892", password: "petugas123", name: "Petugas Lapangan", role: "Petugas" },
];

const read = (k) => { try { return JSON.parse(localStorage.getItem(k) || "null"); } catch { return null; } };
const phoneKey = (v) => { const d = String(v || "").replace(/\D/g, ""); return d.startsWith("62") ? "0" + d.slice(2) : d; };
const overrides = () => read(PKEY) || {};
const merge = (u) => ({ ...u, ...(overrides()[u.username] || {}) });
const publicUser = (u) => { const c = { ...u }; delete c.password; return c; };

export function getSession() {
  try { return JSON.parse(sessionStorage.getItem(KEY) || "null"); } catch { return null; }
}

export function loadUsers() {
  return Promise.resolve()
    .then(() => fetch(`${import.meta.env.BASE_URL}data/users.json`, { cache: "no-store" }))
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then((d) => d.users)
    .catch(() => FALLBACK)
    .then((list) => list.map(merge));
}

export async function login(id, password) {
  const q = String(id).trim().toLowerCase();
  const qp = phoneKey(id);
  const users = await loadUsers();
  const u = users.find((x) => {
    const hit = x.username.toLowerCase() === q || String(x.email).toLowerCase() === q ||
      (qp.length >= 8 && phoneKey(x.phone) === qp);
    return hit && x.password === password;
  });
  if (!u) return null;
  const s = publicUser(u);
  sessionStorage.setItem(KEY, JSON.stringify(s));
  return s;
}

/* Simpan perubahan profil (name, email, phone, password, photo). */
export function updateProfile(patch) {
  const s = getSession();
  if (!s) return null;
  const all = overrides();
  all[s.username] = { ...all[s.username], ...patch };
  localStorage.setItem(PKEY, JSON.stringify(all));
  const next = { ...s, ...patch };
  delete next.password;
  sessionStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export async function checkPassword(pw) {
  const s = getSession();
  if (!s) return false;
  const users = await loadUsers();
  const u = users.find((x) => x.username === s.username);
  return !!u && u.password === pw;
}

export function logout() {
  sessionStorage.removeItem(KEY);
  localStorage.removeItem(KEY);
}
