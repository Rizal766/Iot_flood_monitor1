import { memo, useState } from "react";
import { Link } from "react-router-dom";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage } from "../hooks.js";

function SaluranNotifikasi() {
  usePage({
    title: "Saluran Notifikasi & Kontak Darurat - IoT Flood Monitor",
    bodyClass: "notification-page",
    dataPage: "notifikasi"
  });

  const [channels, setChannels] = useState({
    sms: true,
    whatsapp: true,
    email: true,
    push: true,
    sirene: false,
    api: true
  });

  const toggleChannel = (name) => {
    setChannels((prev) => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const [template, setTemplate] = useState(
    "PERINGATAN BANJIR!\nTerdeteksi Di(lokasi) dengan air (tinggi air) cm. Mohon segera menuju titik evakuasi terdekat."
  );

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="topbar">
        <Link to="/dashboard" className="brand">
          <div className="brand-logo">💧</div>

          <div className="brand-text">
            <h1>IoT Flood Monitor</h1>
            <span>Early Warning System</span>
          </div>
        </Link>

        <div className="global-search">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Cari lokasi,sensor,atau nama daerah..."
          />
        </div>

        <div className="top-right">
          <div className="weather">
            <span className="weather-icon">☁</span>

            <div>
              <strong>28°C</strong>
              <small>Berawan</small>
            </div>
          </div>

          <div className="city">
            <strong>Kota Semarang</strong>
          </div>

          <div className="clock">
            <span>12:52</span>
            <small>10 Sep 2026</small>
          </div>

          <div className="notification-top">
            🔔
            <b>3</b>
          </div>

          <AccountMenu />
        </div>
      </header>

      {/* ================= LAYOUT ================= */}
      <div className="layout">
        <aside className="sidebar">
          <SideNav />

          <div className="sidebar-flood">
            <div className="flood-image"></div>

            <div className="flood-overlay">
              <strong>
                Bersama Teknologi,
                <br />
                Kita Lebih Siap
                <br />
                Menghadapi Banjir
              </strong>

              <small>IoT for Safer Tomorrow</small>
            </div>
          </div>
        </aside>

        {/* ================= CONTENT ================= */}
        <main className="content notification-content">

          {/* HEADER PAGE */}
          <section className="notification-page-header">
            <div className="notification-header-icon">
              ♧
            </div>

            <div>
              <h2>Saluran Notifikasi & Kontak Darurat</h2>

              <p>
                Pastikan Semua Saluran Notifikasi Aktif Agar Peringatan Banjir
                Dapat Diterima Oleh Warga Dan Petugas yang Terkait
              </p>
            </div>
          </section>

          {/* ================= CHANNELS ================= */}
          <section className="notification-channel-grid">

            {/* SMS */}
            <NotificationCard
              icon="▣"
              iconClass="sms-icon"
              title="SMS Gateway"
              active={channels.sms}
              onToggle={() => toggleChannel("sms")}
              provider="Provider: Telkomsel"
              detail="Pengirim: Flood-SMS"
              quota="Kuota: 98%"
            />

            {/* WHATSAPP */}
            <NotificationCard
              icon="◉"
              iconClass="whatsapp-icon"
              title="WhatsApp"
              active={channels.whatsapp}
              onToggle={() => toggleChannel("whatsapp")}
              provider="Provider: WhatsApp Business API"
              detail="Nomor: +62 811 222 333"
              quota="Template: Aktif"
            />

            {/* EMAIL */}
            <NotificationCard
              icon="✉"
              iconClass="email-icon"
              title="Email"
              active={channels.email}
              onToggle={() => toggleChannel("email")}
              provider="SMTP: smtp.gmail.com"
              detail="Port: 587 (TLS)"
              quota="Pengirim: flood-monitor@semarang.go.id"
            />

            {/* PUSH */}
            <NotificationCard
              icon="♧"
              iconClass="push-icon"
              title="Push Notification"
              active={channels.push}
              onToggle={() => toggleChannel("push")}
              provider="Provider: Firebase Cloud Messaging"
              detail="App ID: floodmonitor.sem"
              quota="Template: Aktif"
            />

            {/* SIRENE */}
            <NotificationCard
              icon="♧"
              iconClass="sirene-icon"
              title="Sirene Remote"
              active={channels.sirene}
              onToggle={() => toggleChannel("sirene")}
              provider="Provider: IoT Siren Gateway"
              detail="Lokasi: 5 titik"
              quota="Terhubung: 4"
              warning="Gangguan"
            />

            {/* API */}
            <NotificationCard
              icon="☁"
              iconClass="api-icon"
              title="API Integration"
              active={channels.api}
              onToggle={() => toggleChannel("api")}
              provider="Endpoint: https://api.floodmonitor.id"
              detail="Akses: Bearer Token"
              quota="Versi: v1.0"
            />

          </section>

          {/* ================= BOTTOM GRID ================= */}
          <section className="notification-bottom-grid">

            {/* TEMPLATE */}
            <article className="notification-card template-card">
              <h3>Template Pesan dan Notifikasi</h3>

              <div className="severity-tabs">
                <button className="severity danger">Bahaya</button>
                <button className="severity">Siaga</button>
                <button className="severity">Waspada</button>
                <button className="severity">Normal</button>
              </div>

              <label className="template-label">
                Template Pesan(SMS & WhatsApp)
              </label>

              <textarea
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
              />

              <div className="character-count">
                {template.length}/225 karakter
              </div>

              <label className="template-label preview-label">
                Preview Pesan
              </label>

              <div className="message-preview">
                <strong>PERINGATAN BANJIR!</strong>
                <br />
                Terdeteksi Di(lokasi) dengan air (tinggi air) cm.
                <br />
                Segera ambil tindakan untuk menuju titik evakuasi terdekat.
              </div>
            </article>

            {/* KONTAK DARURAT */}
            <article className="notification-card emergency-card">
              <h3>Kontak Darurat</h3>

              <div className="emergency-table">
                <div className="emergency-head">
                  <span>NO</span>
                  <span>NAMA</span>
                  <span>NOMOR<br />TELEPON</span>
                  <span>TAMPILKAN<br />DI APLIKASI</span>
                  <span>AKSI</span>
                </div>

                <EmergencyRow
                  no="1"
                  name="112"
                  phone="112"
                />

                <EmergencyRow
                  no="2"
                  name="BPBD Kota Semarang"
                  phone="(024) 354 2709"
                />

                <EmergencyRow
                  no="3"
                  name="Damkar Kota Semarang"
                  phone="(024) 354 2709"
                />

                <EmergencyRow
                  no="4"
                  name="PMI Kota Semarang"
                  phone="(024) 354 2709"
                />

                <EmergencyRow
                  no="5"
                  name="Puskesmas Tembalang"
                  phone="(024) 354 2709"
                />
              </div>
            </article>

            {/* TITIK EVAKUASI */}
            <article className="notification-card evacuation-card">
              <h3>Titik Evakuasi</h3>

              <div className="evacuation-table">
                <div className="evacuation-head">
                  <span>NO</span>
                  <span>NAMA</span>
                  <span>ALAMAT</span>
                  <span>KOORDINAT</span>
                  <span>KAPASITAS</span>
                  <span>STATUS</span>
                </div>

                <EvacuationRow
                  no="1"
                  name="GOR Jatidiri"
                  address="Jl. Stadion Jatidiri, Semarang"
                  coordinate="-7.02310,110.4567"
                  capacity="2.000"
                />

                <EvacuationRow
                  no="2"
                  name="Kantor Kecamatan Tembalang"
                  address="Jl. Tembalang Raya"
                  coordinate="-7.02310,110.4567"
                  capacity="500"
                />

                <EvacuationRow
                  no="3"
                  name="Balai Kelurahan Meteseh"
                  address="Jl. Meteseh Raya"
                  coordinate="-7.02310,110.4567"
                  capacity="300"
                />
              </div>
            </article>
          </section>

          {/* ================= ACTION ================= */}
          <section className="notification-actions">
            <button className="save-notification">
              Simpan Perubahan
            </button>

            <button className="manage-contact">
              Kelola kontak & Titik
              <br />
              Evakuasi
            </button>
          </section>

        </main>
      </div>
    </>
  );
}


/* =========================================================
   COMPONENT NOTIFICATION CARD
   ========================================================= */

function NotificationCard({
  icon,
  iconClass,
  title,
  active,
  onToggle,
  provider,
  detail,
  quota,
  warning
}) {
  return (
    <article className="notification-channel-card">

      <div className={`channel-icon ${iconClass}`}>
        {icon}
      </div>

      <div className="channel-content">
        <div className="channel-title">
          <strong>{title}</strong>

          <span className={active ? "active-badge" : "inactive-badge"}>
            {warning || (active ? "Aktif" : "Nonaktif")}
          </span>
        </div>

        <div className="channel-info">
          <span>{provider}</span>
          <span>{detail}</span>
          <span>{quota}</span>
        </div>
      </div>

      <div className="channel-controls">
        <button
          className={`toggle ${active ? "on" : "off"}`}
          onClick={onToggle}
          type="button"
          aria-label={`Toggle ${title}`}
        >
          <span></span>
        </button>

        <button className="test-button" type="button">
          Kirim Uji
        </button>
      </div>

      <div className="channel-footer">
        <span>Pengiriman Terakhir: 25 Jun 2026 09:10</span>
        <span className={active ? "success-text" : "failed-text"}>
          {active ? "Uji Berhasil" : "Uji Gagal"}
        </span>
        <span>2 menit yang lalu</span>
      </div>

    </article>
  );
}


/* =========================================================
   EMERGENCY ROW
   ========================================================= */

function EmergencyRow({ no, name, phone }) {
  return (
    <div className="emergency-row">
      <span>{no}</span>
      <span>{name}</span>
      <span>{phone}</span>
      <span className="yes-text">YA</span>
      <button type="button">⋮</button>
    </div>
  );
}


/* =========================================================
   EVACUATION ROW
   ========================================================= */

function EvacuationRow({
  no,
  name,
  address,
  coordinate,
  capacity
}) {
  return (
    <div className="evacuation-row">
      <span>{no}</span>

      <span>{name}</span>

      <span>{address}</span>

      <span>{coordinate}</span>

      <span>{capacity}</span>

      <span>
        <b className="status-active">Aktif</b>
      </span>
    </div>
  );
}

export default memo(SaluranNotifikasi);