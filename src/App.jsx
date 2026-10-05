import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./auth/AuthContext.jsx";
import "./styles/styles.css";
import "./styles/shared.css";

import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PetaMonitoring from "./pages/PetaMonitoring.jsx";
import DataSensor from "./pages/DataSensor.jsx";
import DetailSensor from "./pages/DetailSensor.jsx";
import DetailAlert from "./pages/DetailAlert.jsx";
import RiwayatData from "./pages/RiwayatData.jsx";
import NotifikasiAlert from "./pages/NotifikasiAlert.jsx";
import Laporan from "./pages/Laporan.jsx";
import KelolaPerangkat from "./pages/KelolaPerangkat.jsx";
import AmbangBatas from "./pages/AmbangBatas.jsx";
import PenggunaRole from "./pages/PenggunaRole.jsx";
import SaluranNotifikasi from "./pages/SaluranNotifikasi.jsx";
import ProfilKeamanan from "./pages/ProfilKeamanan.jsx";

const ADMIN_ONLY = new Set(["/kelola-perangkat", "/ambang-batas", "/pengguna-role", "/saluran-notifikasi"]);

/* Halaman hanya bisa dibuka setelah login. Halaman Pengaturan khusus Administrator. */
function Protected({ path, children }) {
  const { session } = useAuth();
  if (!session) return <Navigate to="/login" replace />;
  if (ADMIN_ONLY.has(path) && session.role !== "Administrator") return <Navigate to="/dashboard" replace />;
  return children;
}

/* Logika lama memakai window.__fmNavigate untuk pindah halaman tanpa reload. */
function NavigateBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__fmNavigate = navigate;
    return () => { delete window.__fmNavigate; };
  }, [navigate]);
  return null;
}

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 360);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;
  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span aria-hidden="true">↑</span>
    </button>
  );
}

const PAGES = [
  ["/dashboard", Dashboard],
  ["/profil-keamanan", ProfilKeamanan],
  ["/peta-monitoring", PetaMonitoring],
  ["/data-sensor", DataSensor],
  ["/detail-sensor", DetailSensor],
  ["/detail-alert", DetailAlert],
  ["/riwayat-data", RiwayatData],
  ["/notifikasi-alert", NotifikasiAlert],
  ["/laporan", Laporan],
  ["/kelola-perangkat", KelolaPerangkat],
  ["/ambang-batas", AmbangBatas],
  ["/pengguna-role", PenggunaRole],
  ["/saluran-notifikasi", SaluranNotifikasi],
];

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavigateBridge />
        <Routes>
          <Route path="/login" element={<Login />} />
          {PAGES.map(([path, Page]) => (
            <Route key={path} path={path} element={<Protected path={path}><Page /></Protected>} />
          ))}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
        <BackToTop />
      </AuthProvider>
    </BrowserRouter>
  );
}
