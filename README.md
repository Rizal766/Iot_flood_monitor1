# IoT Flood Monitor (React + Vite)

Konversi dari versi HTML/CSS/JS ke React (JSX).

## Menjalankan
```
cd react-app
npm run dev
```
Buka alamat yang muncul (biasanya http://localhost:5173).

## Akun demo
| Role | Email | Password |
|---|---|---|
| Administrator | admin@floodmonitor.id | admin123 |
| Operator | operator@floodmonitor.id | operator123 |
| Petugas | petugas@floodmonitor.id | petugas123 |

Data akun ada di `public/data/users.json`.

## Struktur
- `src/App.jsx` — router + proteksi login (halaman Pengaturan khusus Administrator)
- `src/pages/` — 9 halaman + Login (JSX)
- `src/components/` — `SideNav` (sidebar) dan `AccountMenu` (menu akun + Edit Profil)
- `src/auth/` — login/sesi (`AuthContext`)
- `src/legacy/` — logika lama `script.js` & `kelola-perangkat.js` (manipulasi DOM langsung), dijalankan lewat hook `useLegacy`
- `src/styles/` — `styles.css` dan `shared.css` asli
