import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

const MAIN = [
  { to: "/dashboard", icon: "⌂", text: "Dashboard" },
  { to: "/peta-monitoring", icon: "◈", text: "Peta Monitoring" },
  { to: "/data-sensor", icon: "◉", text: "Data sensor" },
  { to: "/riwayat-data", icon: "◷", text: "Riwayat Data" },
  {
    to: "/notifikasi-alert",
    icon: "♧",
    text: "Notifikasi & Alert",
    badge: 3,
  },
  { to: "/laporan", icon: "▣", text: "Laporan" },
];

const SETTINGS = [
  {
    to: "/kelola-perangkat",
    icon: "▤",
    text: "Kelola Perangkat",
  },
  {
    to: "/ambang-batas",
    icon: "◫",
    text: "Ambang Batas & Aturan Alert",
  },
  {
    to: "/saluran-notifikasi",
    icon: "♧",
    text: "Saluran Notifikasi",
  },
  {
    to: "/pengguna-role",
    icon: "☺",
    text: "Pengguna & Role",
  },
  {
    to: "/profil-keamanan",
    icon: "🔒",
    text: "Profil & Keamanan",
  },
];

export default function SideNav() {
  const { pathname } = useLocation();
  const { session } = useAuth();

  const isSettingsPage = SETTINGS.some(
    (item) => item.to === pathname
  );

  const [open, setOpen] = useState(isSettingsPage);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (isSettingsPage) {
      setOpen(true);
    }
  }, [isSettingsPage]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const closeOutside = (event) => {
      if (!event.target.closest(".sidebar")) {
        setMobileOpen(false);
      }
    };

    const closeEscape = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", closeOutside);
    document.addEventListener("keydown", closeEscape);

    return () => {
      document.removeEventListener("click", closeOutside);
      document.removeEventListener("keydown", closeEscape);
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`side-nav ${mobileOpen ? "is-open" : ""}`}
      aria-label="Menu utama"
    >
      {/* MOBILE MENU */}
      <button
        type="button"
        className="mobile-menu-toggle"
        onClick={() => setMobileOpen((value) => !value)}
        aria-expanded={mobileOpen}
      >
        <span aria-hidden="true">☰</span>
        <span>Menu</span>
      </button>

      <div className="main-menu">

        {/* =========================
            MENU UTAMA
        ========================== */}
        {MAIN.map((item) => {
          const active = pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              title={item.text}
              onClick={() => setMobileOpen(false)}
              className={`side-link ${active ? "active" : ""}`}
            >
              <span className="side-icon">
                {item.icon}
              </span>

              <span className="side-text">
                {item.text}
              </span>

              {item.badge ? (
                <span className="side-badge">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          );
        })}

        {/* =========================
            PENGATURAN
        ========================== */}
        {session?.role === "Administrator" && (
          <div
            className={`settings-group ${
              open ? "open" : ""
            }`}
          >
            <button
              type="button"
              className={`settings-toggle ${
                isSettingsPage ? "current" : ""
              }`}
              onClick={() =>
                setOpen((value) => !value)
              }
            >
              <span className="side-icon">
                ⚙
              </span>

              <span className="side-text">
                Pengaturan
              </span>

              <span
                className={`settings-arrow ${
                  open ? "rotate" : ""
                }`}
              >
                ›
              </span>
            </button>

            {/* SUB MENU */}
            <div className="settings-submenu">
              {SETTINGS.map((item) => {
                const active = pathname === item.to;

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    title={item.text}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className={`settings-link ${
                      active ? "active" : ""
                    }`}
                  >
                    <span className="sub-icon">
                      {item.icon}
                    </span>

                    <span className="side-text">
                      {item.text}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}