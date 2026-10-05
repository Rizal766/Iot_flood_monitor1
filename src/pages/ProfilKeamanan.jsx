import { memo, useState } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage } from "../hooks.js";

function ProfilKeamanan() {
  usePage({
    title: "Profil & Keamanan - IoT Flood Monitor",
    bodyClass: "profile-security-page",
    dataPage: "",
  });

  const [notifications, setNotifications] = useState({
    warning: true,
    system: true,
    report: true,
    email: true,
    sms: true,
    whatsapp: true,
  });

  const [theme, setTheme] = useState("light");
  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSaveProfile = () => {
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  const handleChangePassword = () => {
    setPasswordError(true);

    setTimeout(() => {
      setPasswordError(false);
    }, 4000);
  };

  return (
    <>
      {/* ================= TOPBAR ================= */}
      <header className="topbar">
        <div className="brand">
          <div className="brand-water">💧</div>

          <div>
            <h1>IoT Flood Monitor</h1>
            <span>Early Warning System</span>
          </div>
        </div>

        <div className="global-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Cari lokasi,sensor,atau nama daerah..."
          />
        </div>

        <div className="top-right">
          <div className="weather">
            <div className="weather-symbol">☁</div>

            <div>
              <strong>28°C</strong>
              <span>Berawan</span>
            </div>
          </div>

          <div className="city">Kota Semarang</div>

          <div className="datetime">
            <strong>12:52</strong>
            <span>10 Sep 2026</span>
          </div>

          <div className="notification-icon">
            🔔 <b>3</b>
          </div>

          <AccountMenu />
        </div>
      </header>

      {/* ================= LAYOUT ================= */}
      <div className="layout">

        {/* ================= SIDEBAR ================= */}
        <aside className="sidebar">
          <SideNav />

          <div className="sidebar-banner">
            <img
              src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=500&q=80"
              alt="Banjir"
            />

            <div className="banner-content">
              <strong>
                Bersama Teknologi,
                <br />
                Kita Lebih Siap
                <br />
                Menghadapi Banjir
              </strong>

              <small>〰 IoT for a Safer Tomorrow</small>
            </div>
          </div>
        </aside>

        {/* ================= MAIN ================= */}
        <main className="main-content">

          {/* PAGE HEADER */}
          <section className="page-header">
            <div className="page-heading">
              <span className="heading-icon">🔒</span>

              <div>
                <h2>Profil &amp; Keamanan</h2>

                <p>
                  Kelola Informasi Akun, Keamanan, Dan Referensi Notifikasi anda
                </p>
              </div>
            </div>
          </section>

          {/* ================= TOP PROFILE AREA ================= */}
          <div className="profile-top-grid">

            {/* INFORMASI PROFILE */}
            <section className="profile-card">

              <div className="card-title">
                Informasi Profile
              </div>

              <div className="profile-body">

                <div className="profile-photo-area">
                  <div className="profile-photo">
                    🕊️
                  </div>

                  <button className="photo-button">
                    Ubah Foto
                  </button>
                </div>

                <div className="profile-form">

                  <label>Nama Lengkap</label>

                  <div className="blue-input">
                    <span>👤</span>
                    <input
                      type="text"
                      defaultValue="Rizal & Fadlan"
                    />
                  </div>

                  <label>Email</label>

                  <div className="blue-input">
                    <span>✉</span>
                    <input
                      type="email"
                      defaultValue="rizal@example.com"
                    />
                  </div>

                  <label>No HP</label>

                  <div className="blue-input">
                    <span>☎</span>
                    <input
                      type="text"
                      defaultValue="+62 834-567-987-900"
                    />
                  </div>

                  <div className="profile-divider"></div>

                  <div className="profile-save">
                    <button onClick={handleSaveProfile}>
                      Simpan Profile
                    </button>
                  </div>

                </div>
              </div>
            </section>

            {/* GANTI SANDI */}
            <section className="password-card">

              <div className="card-title">
                Ganti Sandi
              </div>

              <div className="password-form">

                <label>Password Lama</label>

                <input
                  type="password"
                  placeholder="Masukan Password Lama"
                />

                <label>Password Baru</label>

                <input
                  type="password"
                  placeholder="Minimal 8 Karakter"
                />

                <label>Konfirmasi Password Baru</label>

                <input
                  type="password"
                  placeholder="Ulangi Password Baru"
                />

                <div className="password-actions">
                  <button className="cancel-button">
                    Batal
                  </button>

                  <button
                    className="change-password-button"
                    onClick={handleChangePassword}
                  >
                    Ganti Password
                  </button>
                </div>

              </div>
            </section>
          </div>

          {/* ================= BOTTOM GRID ================= */}
          <div className="profile-bottom-grid">

            {/* SESI LOGIN */}
            <section className="login-session-card">

              <div className="card-heading">
                <h3>Sesi Login Aktif</h3>

                <p>
                  Daftar Perangkat yang login ke akun anda
                </p>
              </div>

              <div className="session-list">

                <Session
                  icon="🖥️"
                  title="Windows Chrome"
                  location="IP 103.78.45.12 - Kota Semarang"
                  status="Aktif Sekarang"
                />

                <Session
                  icon="📱"
                  title="Android Chrome"
                  location="IP 103.78.45.98 - Kota Semarang, Indonesia"
                  status="Aktif"
                />

                <Session
                  icon="🖥️"
                  title="Windows Edge"
                  location="IP 45.122.33.76 - Jakarta, Indonesia"
                  status="Aktif"
                />

                <Session
                  icon="📱"
                  title="IPhone Safari"
                  location="IP 73.26.121.44 - Bandung, Indonesia"
                  status="Aktif"
                />

              </div>

              <button className="logout-all-button">
                Keluarkan Semua Sesi
              </button>
            </section>

            {/* PREFERENSI NOTIFIKASI */}
            <section className="notification-card">

              <div className="card-heading">
                <h3>Preferensi Notifikasi</h3>

                <p>
                  Aturan jenis notifikasi yang ingin anda Terima.
                </p>
              </div>

              <Notification
                icon="⚠️"
                title="Peringatan Banjir"
                description="Notifikasi Peringatan Saat ada bahaya"
                active={notifications.warning}
                onClick={() => toggleNotification("warning")}
              />

              <Notification
                icon="🔔"
                title="Informasi Sistem"
                description="Update, pemeliharaan, dan informasi umum"
                active={notifications.system}
                onClick={() => toggleNotification("system")}
              />

              <Notification
                icon="📋"
                title="Laporan Harian"
                description="Ringkasan kondisi harian"
                active={notifications.report}
                onClick={() => toggleNotification("report")}
              />

              <Notification
                icon="✉️"
                title="Email"
                description="Terima notifikasi melalui email"
                active={notifications.email}
                onClick={() => toggleNotification("email")}
              />

              <Notification
                icon="💬"
                title="SMS"
                description="Terima notifikasi melalui SMS"
                active={notifications.sms}
                onClick={() => toggleNotification("sms")}
              />

              <Notification
                icon="📞"
                title="WhatsApp"
                description="Terima notifikasi melalui WhatsApp"
                active={notifications.whatsapp}
                onClick={() => toggleNotification("whatsapp")}
              />

            </section>

            {/* TAMPILAN TEMA */}
            <section className="theme-card">

              <div className="card-heading">
                <h3>Tampilan Tema</h3>

                <p>
                  Pilih Tema Sesuai Preferensi Anda
                </p>
              </div>

              <div
                className={`theme-option ${
                  theme === "light" ? "selected" : ""
                }`}
                onClick={() => setTheme("light")}
              >
                <div className="theme-icon">☀️</div>

                <div>
                  <strong>Terang</strong>

                  <p>
                    Tampilan Lebih Cerah Dan
                    <br />
                    nyaman Di siang hari
                  </p>
                </div>

                <span className="radio">
                  {theme === "light" && "✓"}
                </span>
              </div>

              <div
                className={`theme-option ${
                  theme === "dark" ? "selected" : ""
                }`}
                onClick={() => setTheme("dark")}
              >
                <div className="theme-icon">🌙</div>

                <div>
                  <strong>Gelap</strong>

                  <p>
                    Lebih Nyaman Di malam hari
                    <br />
                    Dan mengurangi cahaya layar
                  </p>
                </div>

                <span className="radio">
                  {theme === "dark" && "✓"}
                </span>
              </div>

              {/* SUCCESS */}
              {success && (
                <div className="success-alert">
                  <div className="alert-icon success">
                    ✓
                  </div>

                  <div>
                    <strong>Profile Berhasil di Simpan</strong>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              )}

              {/* ERROR */}
              {passwordError && (
                <div className="error-alert">
                  <div className="alert-icon error">
                    !
                  </div>

                  <div>
                    <strong>Password lama salah</strong>
                  </div>
                </div>
              )}

            </section>

          </div>
        </main>
      </div>
    </>
  );
}


/* =========================================================
   SESSION COMPONENT
========================================================= */

function Session({
  icon,
  title,
  location,
  status,
}) {
  return (
    <div className="session-item">

      <div className="session-icon">
        {icon}
      </div>

      <div className="session-info">
        <strong>{title}</strong>

        <span>{location}</span>
      </div>

      <div className="session-status">
        <strong>{status}</strong>

        <span>25 Juli 2026, 11.45</span>
      </div>

    </div>
  );
}


/* =========================================================
   NOTIFICATION COMPONENT
========================================================= */

function Notification({
  icon,
  title,
  description,
  active,
  onClick,
}) {
  return (
    <div className="notification-item">

      <div className="notification-item-icon">
        {icon}
      </div>

      <div className="notification-info">
        <strong>{title}</strong>

        <span>{description}</span>
      </div>

      <button
        className={`switch ${active ? "active" : ""}`}
        onClick={onClick}
      >
        <span></span>
      </button>

    </div>
  );
}

export default memo(ProfilKeamanan);