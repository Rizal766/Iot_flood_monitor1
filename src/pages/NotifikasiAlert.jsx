import { memo } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage, useLegacy } from "../hooks.js";
import { runLegacyScript } from "../legacy/script.js";

function NotifikasiAlert() {
  usePage({"title":"Notifikasi & Alert - IoT Flood Monitor","bodyClass":"","dataPage":""});
  useLegacy(runLegacyScript);

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">
            💧
          </div>
          <div>
            <div className="brand-title">
              IOT Flood Monitor
            </div>
            <div className="brand-subtitle">
              Early Warning System
            </div>
          </div>
        </div>
        <div className="global-search">
          <span>
            ⌕
          </span>
          {" "}
          <input id="globalSearch" type="search" placeholder="Cari lokasi,sensor,atau nama daerah..." />
        </div>
        <div className="top-info">
          <div className="weather">
            <span className="weather-icon">
              ☁
            </span>
            {" "}
            <div>
              <b>
                28°C
              </b>
              {" "}
              <small>
                Berawan
              </small>
            </div>
          </div>
          <div className="city">
            Kota Semarang
          </div>
          <div className="date-time">
            <span>
              12:52
            </span>
            {" "}
            <small>
              10 Sep 2026
            </small>
          </div>
          <AccountMenu />
        </div>
      </header>
      <div className="app-layout">
        <aside className="sidebar">
          <SideNav />
          <div className="sidebar-promo">
            <div className="promo-image"></div>
            <div className="promo-copy">
              Bersama Teknologi,
              <br />
              {" "}Kita Lebih Siap
              <br />
              {" "}Menghadapi Banjir
            </div>
            {" "}
            <small>
              ≈ IoT for a Safer Tomorrow
            </small>
          </div>
        </aside>
        <main className="main-content">
          <section className="page-heading">
            <div className="heading-icon">
              ♧
            </div>
            <div>
              <h1>
                {"Notifikasi & Alert"}
              </h1>
              <p>
                Informasi kondisi seluruh sensor IoT
              </p>
            </div>
          </section>
          <section className="alert-tabs card">
            <button className="tab active" data-status="all">
              Semua{" "}
              <b>
                24
              </b>
            </button>
            {" "}
            <button className="tab" data-status="pending">
              Belum di tangani{" "}
              <b>
                8
              </b>
            </button>
            {" "}
            <button className="tab" data-status="processing">
              Diproses{" "}
              <b>
                7
              </b>
            </button>
            {" "}
            <button className="tab" data-status="done">
              Selesai{" "}
              <b>
                9
              </b>
            </button>
          </section>
          <section className="filter-card card">
            <div className="filter-field">
              <label>
                Level
              </label>
              {" "}
              <select id="levelFilter">
                <option value="all">
                  Semua
                </option>
                <option value="Tinggi">
                  Tinggi
                </option>
                <option value="Sedang">
                  Sedang
                </option>
                <option value="Baterai">
                  Baterai
                </option>
                <option value="Offline">
                  Offline
                </option>
              </select>
            </div>
            <div className="filter-field">
              <label>
                Sensor
              </label>
              {" "}
              <select id="sensorFilter">
                <option value="all">
                  Semua Sensor
                </option>
                <option value="BNA-003">
                  BNA-003
                </option>
                <option value="SMG-015">
                  SMG-015
                </option>
                <option value="GRG-007">
                  GRG-007
                </option>
                <option value="TMR-021">
                  TMR-021
                </option>
                <option value="BRG-012">
                  BRG-012
                </option>
                <option value="KDL-008">
                  KDL-008
                </option>
              </select>
            </div>
            <div className="filter-field">
              <label>
                Jenis
              </label>
              {" "}
              <select id="typeFilter">
                <option value="all">
                  Semua Jenis
                </option>
                <option value="Tinggi Air">
                  Tinggi Air
                </option>
                <option value="Curah Hujan">
                  Curah Hujan
                </option>
                <option value="Baterai">
                  Baterai
                </option>
                <option value="Offline">
                  Offline
                </option>
              </select>
            </div>
            {" "}
            <button className="date-filter" id="dateFilter">
              26 Juni 2026 - 26 Juni 2026.
            </button>
            {" "}
            <div></div>
            {" "}
            <button className="reset-btn" id="resetFilter">
              Reset Filter
            </button>
            {" "}
            <button className="apply-btn" id="applyFilter">
              Terapkan
            </button>
          </section>
          <section className="alerts-card card">
            <div className="table-head">
              <h2>
                Daftar alert({" "}
                <span id="resultCount">
                  24
                </span>
                {" "})
              </h2>
              {" "}
              <select id="rowsPerPage">
                <option>
                  10
                </option>
                <option>
                  20
                </option>
                <option>
                  50
                </option>
              </select>
            </div>
            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th className="check-col">
                      <input type="checkbox" id="checkAll" />
                    </th>
                    <th>
                      Level
                    </th>
                    <th>
                      Judul Alert
                    </th>
                    <th>
                      {"Sensor & Lokasi"}
                    </th>
                    <th>
                      Nilai Pemicu/Ambang
                    </th>
                    <th>
                      Waktu
                    </th>
                    <th>
                      Status Tindak lanjut
                    </th>
                    <th>
                      Petugas
                    </th>
                    <th>
                      Aksi
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id="alertBody"></tbody>
              </table>
            </div>
            <div className="table-footer">
              <span id="pageInfo">
                Menampilkan 1 - 10 dari 24 Alert
              </span>
              {" "}
              <div className="pagination" id="pagination"></div>
            </div>
          </section>
          <section className="bottom-grid">
            <article className="bottom-card empty-state card">
              <div className="large-icon">
                ♧
              </div>
              <div>
                <strong>
                  Tidak ada alert yang perlu ditangani
                </strong>
                {" "}
                <p>
                  Semua notifikasi telah ditangani dengan baik.
                </p>
              </div>
              {" "}
              <button className="primary-small" id="backDashboard">
                Kembali ke Dashboard
              </button>
            </article>
            <article className="bottom-card new-alert card">
              <div className="large-icon">
                ♧
              </div>
              <div>
                <strong>
                  Alert Baru Masuk
                </strong>
                {" "}
                <p>
                  Tinggi air mencapai 248 cm di Kali Banjir Kanal Barat
                  <br />
                  {" "}10:48
                </p>
              </div>
              {" "}
              <button className="dark-btn" id="newAlertDetailButton">
                Lihat Detail
              </button>
            </article>
            <article className="bottom-card mini-pagination card">
              <span>
                Menampilkan 1-10 dari 24 alert
              </span>
              {" "}
              <div className="pagination compact">
                <button>
                  ‹
                </button>
                {" "}
                <button className="current">
                  1
                </button>
                {" "}
                <button>
                  2
                </button>
                {" "}
                <button>
                  3
                </button>
                {" "}
                <button>
                  4
                </button>
                {" "}
                <button>
                  ›
                </button>
              </div>
            </article>
          </section>
        </main>
      </div>
      <div className="toast" id="toast"></div>
    </>
  );
}

export default memo(NotifikasiAlert);
