import { memo } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage, useLegacy } from "../hooks.js";
import { runLegacyScript } from "../legacy/script.js";

function AmbangBatas() {
  usePage({"title":"Ambang Batas & Aturan Alert - IoT Flood Monitor","bodyClass":"threshold-page","dataPage":""});
  useLegacy(runLegacyScript);

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <div className="brand-water">
            💧
          </div>
          <div>
            <h1>
              IoT Flood Monitor
            </h1>
            {" "}
            <span>
              Early Warning System
            </span>
          </div>
        </div>
        <div className="global-search">
          <span>
            🔍
          </span>
          {" "}
          <input type="text" id="globalSearch" placeholder="Cari lokasi,sensor,atau nama daerah..." />
        </div>
        <div className="top-right">
          <div className="weather">
            <div className="weather-symbol">
              ☁
            </div>
            <div>
              <strong>
                28°C
              </strong>
              {" "}
              <span>
                Berawan
              </span>
            </div>
          </div>
          <div className="city">
            Kota Semarang
          </div>
          <div className="datetime">
            <strong id="clock">
              12:52
            </strong>
            {" "}
            <span>
              10 Sep 2026
            </span>
          </div>
          <div className="notification-icon">
            🔔{" "}
            <b>
              3
            </b>
          </div>
          <AccountMenu />
        </div>
      </header>
      <div className="layout">
        <aside className="sidebar">
          <SideNav />
          <div className="sidebar-banner">
            <img src={"https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=500&q=80"} alt="Banjir" />
            {" "}
            <div className="banner-content">
              <strong>
                Bersama Teknologi,
                <br />
                {" "}Kita Lebih Siap
                <br />
                {" "}Menghadapi Banjir
              </strong>
              {" "}
              <small>
                〰 IoT for a Safer Tomorrow
              </small>
            </div>
          </div>
        </aside>
        <main className="main-content">
          <section className="page-header">
            <div className="page-heading">
              <span className="heading-icon">
                ▤
              </span>
              {" "}
              <div>
                <h2>
                  {"Pengaturan Ambang Batas & Aturan Alert"}
                </h2>
                <p>
                  Tentukan kapan sensor dianggap Waspada, Siaga, atau Bahaya, dan siapa yang diberi tahu lewat saluran apa.
                </p>
              </div>
            </div>
          </section>
          <div className="settings-layout">
            <section className="configuration">
              <div className="tabs">
                <button className="tab active" data-tab="threshold">
                  Ambang Batas
                </button>
                {" "}
                <button className="tab" data-tab="alert">
                  Aturan Alert
                </button>
              </div>
              <section className="selection-card">
                <div className="field">
                  <label>
                    Pilih Sensor / Lokasi
                  </label>
                  {" "}
                  <select id="sensorSelect">
                    <option value="DEV-001">
                      Sungai Muktiharjo (DEV-001)
                    </option>
                    <option value="DEV-002">
                      Kali Garang (DEV-002)
                    </option>
                    <option value="DEV-003">
                      Kali Banjir Kanal Barat (DEV-003)
                    </option>
                  </select>
                </div>
                <div className="field">
                  <label>
                    Template Ambang
                  </label>
                  {" "}
                  <select id="templateSelect">
                    <option>
                      Sungai Besar (Default)
                    </option>
                    <option>
                      Sungai Sedang
                    </option>
                    <option>
                      Sungai Kecil
                    </option>
                  </select>
                </div>
                {" "}
                <button className="template-button" id="applyTemplate">
                  Terapkan Template ke Banyak Sensor
                </button>
              </section>
              <section className="threshold-card">
                <div className="threshold-inputs">
                  <h3>
                    Ambang Batas Tinggi Air (cm)
                  </h3>
                  <div className="threshold-row">
                    <span className="status-dot yellow"></span>
                    {" "}
                    <strong className="yellow-text">
                      Waspada
                    </strong>
                    {" "}
                    <input id="waspadaInput" type="number" defaultValue="100" />
                    {" "}
                    <span>
                      cm
                    </span>
                  </div>
                  <div className="threshold-row">
                    <span className="status-dot orange"></span>
                    {" "}
                    <strong className="orange-text">
                      Siaga
                    </strong>
                    {" "}
                    <input id="siagaInput" type="number" defaultValue="150" />
                    {" "}
                    <span>
                      cm
                    </span>
                  </div>
                  <div className="threshold-row">
                    <span className="status-dot red"></span>
                    {" "}
                    <strong className="red-text">
                      Bahaya
                    </strong>
                    {" "}
                    <input id="bahayaInput" type="number" defaultValue="200" />
                    {" "}
                    <span>
                      cm
                    </span>
                  </div>
                </div>
                <div className="scale-preview">
                  <h3>
                    Pratinjau Skala
                  </h3>
                  <div className="scale-container">
                    <div className="scale-axis">
                      <span></span>
                      {" "}
                      <span></span>
                      {" "}
                      <span></span>
                      {" "}
                      <span></span>
                      {" "}
                      <span></span>
                    </div>
                    <div className="water-scale">
                      <div className="danger"></div>
                      <div className="warning"></div>
                      <div className="caution"></div>
                      <div className="normal"></div>
                    </div>
                    <div className="arrows">
                      <span>
                        ➜
                      </span>
                      {" "}
                      <span>
                        ➜
                      </span>
                      {" "}
                      <span>
                        ➜
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <section className="additional-card">
                <h3>
                  Aturan Tambahan
                </h3>
                <div className="additional-grid">
                  <div className="additional-item">
                    <label>
                      Curah Hujan
                    </label>
                    {" "}
                    <span>
                      Peringatan dimulai jika intensitas mencapai lebih dari
                    </span>
                    {" "}
                    <div className="input-with-unit">
                      <input id="rainInput" type="number" defaultValue="50" />
                      {" "}
                      <small>
                        mm/jam
                      </small>
                    </div>
                  </div>
                  <div className="additional-item">
                    <label>
                      Sensor Offline
                    </label>
                    {" "}
                    <span>
                      Dianggap offline setelah
                    </span>
                    {" "}
                    <div className="input-with-unit">
                      <input id="offlineInput" type="number" defaultValue="30" />
                      {" "}
                      <small>
                        menit
                      </small>
                    </div>
                  </div>
                  <div className="additional-item">
                    <label>
                      Baterai Lemah
                    </label>
                    {" "}
                    <span>
                      Peringatan jika baterai di bawah
                    </span>
                    {" "}
                    <div className="input-with-unit">
                      <input id="batteryInput" type="number" defaultValue="20" />
                      {" "}
                      <small>
                        %
                      </small>
                    </div>
                  </div>
                </div>
              </section>
              <section className="alert-rule-card">
                <div className="role-title">
                  <span>
                    Level Alert
                  </span>
                  {" "}
                  <span>
                    Role / Grup
                  </span>
                  {" "}
                  <span>
                    Saluran Notifikasi
                  </span>
                </div>
                <div className="column-head">
                  <span></span>
                  {" "}
                  <div>
                    <span>
                      Admin
                    </span>
                    {" "}
                    <span>
                      Operator
                    </span>
                    {" "}
                    <span>
                      Petugas Lapangan
                    </span>
                    {" "}
                    <span>
                      BPBD
                    </span>
                  </div>
                  <div>
                    <span>
                      Push
                    </span>
                    {" "}
                    <span>
                      SMS
                    </span>
                    {" "}
                    <span>
                      WhatsApp
                    </span>
                    {" "}
                    <span>
                      Email
                    </span>
                    {" "}
                    <span>
                      Sirene
                    </span>
                  </div>
                </div>
                <div className="rule-row">
                  <div className="rule-name">
                    <span className="status-dot yellow"></span>
                    {" "}
                    <strong>
                      Waspada
                    </strong>
                  </div>
                  <div className="toggle-group">
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle off"></button>
                  </div>
                  <div className="toggle-group">
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle off"></button>
                  </div>
                </div>
                <div className="rule-row">
                  <div className="rule-name">
                    <span className="status-dot orange"></span>
                    {" "}
                    <strong>
                      Siaga
                    </strong>
                  </div>
                  <div className="toggle-group">
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                  </div>
                  <div className="toggle-group">
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle off"></button>
                  </div>
                </div>
                <div className="rule-row">
                  <div className="rule-name">
                    <span className="status-dot red"></span>
                    {" "}
                    <strong>
                      Bahaya
                    </strong>
                  </div>
                  <div className="toggle-group">
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                  </div>
                  <div className="toggle-group">
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle on"></button>
                    {" "}
                    <button className="toggle off"></button>
                  </div>
                </div>
              </section>
              <div className="save-bar">
                <button className="save-button" id="saveButton">
                  Simpan Perubahan
                </button>
                {" "}
                <button className="secondary-button" id="resetButton">
                  Terapkan Template
                </button>
                {" "}
                <span className="saved-info">
                  Terakhir disimpan: 26 Jun 2026, 09:32 oleh Fahmi Nuraflah
                </span>
                {" "}
                <button className="secondary-button" id="bulkButton">
                  Terapkan Template ke Banyak Sensor
                </button>
              </div>
            </section>
            <aside className="right-settings">
              <section className="validation-card">
                <div className="warning-icon">
                  !
                </div>
                <div>
                  <strong>
                    Validasi Data
                  </strong>
                  {" "}
                  <p>
                    Nilai Siaga harus lebih besar dari Waspada.
                  </p>
                  <p>
                    Nilai Bahaya harus lebih besar dari Siaga.
                  </p>
                </div>
              </section>
              <section className="summary-card">
                <h3>
                  Ringkasan Konfigurasi
                </h3>
                <div className="summary-row">
                  <span>
                    Sensor / Lokasi
                  </span>
                  {" "}
                  <strong id="summarySensor">
                    Sungai Muktiharjo (DEV-001)
                  </strong>
                </div>
                <div className="summary-row">
                  <span>
                    Template Ambang
                  </span>
                  {" "}
                  <strong id="summaryTemplate">
                    Sungai Besar (Default)
                  </strong>
                </div>
                <div className="summary-row">
                  <span>
                    Tinggi Air (cm)
                  </span>
                  {" "}
                  <strong>
                    Waspada:{" "}
                    <b id="summaryWaspada">
                      100
                    </b>
                    {" "}Siaga:{" "}
                    <b id="summarySiaga">
                      150
                    </b>
                    {" "}Bahaya:{" "}
                    <b id="summaryBahaya">
                      200
                    </b>
                  </strong>
                </div>
                <div className="summary-row">
                  <span>
                    Curah Hujan
                  </span>
                  {" "}
                  <strong>
                    <b id="summaryRain">
                      50
                    </b>
                    {" "}mm/jam
                  </strong>
                </div>
                <div className="summary-row">
                  <span>
                    Sensor Offline
                  </span>
                  {" "}
                  <strong>
                    <b id="summaryOffline">
                      30
                    </b>
                    {" "}menit
                  </strong>
                </div>
                <div className="summary-row">
                  <span>
                    Baterai Lemah
                  </span>
                  {" "}
                  <strong>
                    <b id="summaryBattery">
                      20
                    </b>
                    {" "}%
                  </strong>
                </div>
              </section>
              <section className="preview-card">
                <h3>
                  Preview Notifikasi
                </h3>
                <div className="notification-preview">
                  <div className="preview-alert-icon">
                    !
                  </div>
                  <div>
                    <strong>
                      Alert Bahaya - Tinggi Air
                    </strong>
                    {" "}
                    <p>
                      Tinggi air mencapai 205 cm di Sungai Muktiharjo (Kali Timo).
                    </p>
                    {" "}
                    <small>
                      26 Jun 2026, 09:45
                    </small>
                  </div>
                </div>
                <h4>
                  Penerima
                </h4>
                <div className="recipient-list">
                  <button>
                    Admin
                  </button>
                  {" "}
                  <button>
                    Operator
                  </button>
                  {" "}
                  <button>
                    BPBD
                  </button>
                </div>
                <h4>
                  Saluran
                </h4>
                <div className="channel-list">
                  <span>
                    Push
                  </span>
                  {" "}
                  <span>
                    SMS
                  </span>
                  {" "}
                  <span>
                    WhatsApp
                  </span>
                  {" "}
                  <span>
                    Email
                  </span>
                  {" "}
                  <span>
                    Sirene
                  </span>
                </div>
              </section>
              <section className="success-message" id="successMessage">
                <button id="closeSuccess">
                  ×
                </button>
                {" "}
                <div className="success-check">
                  ✓
                </div>
                <div>
                  <strong>
                    Pengaturan berhasil di simpan
                  </strong>
                  {" "}
                  <p>
                    Ambang batas dan aturan alert telah di perbarui
                  </p>
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
    </>
  );
}

export default memo(AmbangBatas);
