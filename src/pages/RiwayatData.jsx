import { memo } from "react";
import { Link } from "react-router-dom";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage, useLegacy } from "../hooks.js";
import { runLegacyScript } from "../legacy/script.js";

function RiwayatData() {
  usePage({"title":"Riwayat Data - IoT Flood Monitor","bodyClass":"history-page","dataPage":""});
  useLegacy(runLegacyScript);

  return (
    <>
      <header className="topbar">
        <Link to="/dashboard" className="brand">
          <div className="brand-logo">
            💧
          </div>
          <div className="brand-text">
            <h1>
              IoT Flood Monitor
            </h1>
            {" "}
            <span>
              Early Warning System
            </span>
          </div>
        </Link>
        {" "}
        <div className="global-search">
          <span className="search-icon">
            ⌕
          </span>
          {" "}
          <input type="text" id="globalSearch" placeholder="Cari lokasi,sensor,atau nama daerah..." />
        </div>
        <div className="top-right">
          <div className="weather">
            <span className="weather-icon">
              ☁
            </span>
            {" "}
            <div>
              <strong>
                28°C
              </strong>
              {" "}
              <small>
                Berawan
              </small>
            </div>
          </div>
          <div className="city">
            <strong>
              Kota Semarang
            </strong>
          </div>
          <div className="clock">
            <span>
              12:52
            </span>
            {" "}
            <small>
              10 Sep 2026
            </small>
          </div>
          <div className="notification-top">
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
          <div className="sidebar-flood">
            <div className="flood-image"></div>
            <div className="flood-overlay">
              <strong>
                Bersama Teknologi,{" "}
                <br />
                {" "}Kita Lebih Siap{" "}
                <br />
                {" "}Menghadapi Banjir
              </strong>
              {" "}
              <small>
                IoT for Safer Tomorrow
              </small>
            </div>
          </div>
        </aside>
        <main className="content">
          <section className="history-header">
            <div className="history-title-icon">
              ◷
            </div>
            <div>
              <h2>
                Riwayat Data
              </h2>
              <p>
                Lihat dan analisis data historis sensor untuk kebutuhan evaluasi dan pelaporan
              </p>
            </div>
          </section>
          <section className="history-filter">
            <div className="filter-group date-group">
              <label>
                Rentang tanggal
              </label>
              {" "}
              <div className="date-buttons">
                <button type="button" className="date-button" data-range="today">
                  Hari ini
                </button>
                {" "}
                <button type="button" className="date-button" data-range="7">
                  7 Hari
                </button>
                {" "}
                <button type="button" className="date-button active" data-range="30">
                  30 Hari
                </button>
                {" "}
                <button type="button" className="date-button" data-range="custom">
                  Kustom
                </button>
              </div>
            </div>
            <div className="filter-divider"></div>
            <div className="filter-group sensor-filter">
              <label>
                Sensor
              </label>
              {" "}
              <select id="sensorFilter">
                <option value="all">
                  5 Sensor dipilih
                </option>
                <option value="BNA-003">
                  BNA-003
                </option>
                <option value="GRG-007">
                  GRG-007
                </option>
                <option value="BRG-012">
                  BRG-012
                </option>
                <option value="W-02">
                  W-02
                </option>
                <option value="W-03">
                  W-03
                </option>
              </select>
              {" "}
              <small>
                BNA-003, GRG-007, BRG-012, W-02, W-03
              </small>
            </div>
            <div className="filter-divider"></div>
            <div className="filter-group data-filter">
              <label>
                Jenis Data
              </label>
              {" "}
              <div className="checkbox-grid">
                <label>
                  <input type="checkbox" defaultChecked data-data="tinggi" />
                  {" "}Tinggi Air
                </label>
                {" "}
                <label>
                  <input type="checkbox" defaultChecked data-data="hujan" />
                  {" "}Tinggi Air
                </label>
                {" "}
                <label>
                  <input type="checkbox" data-data="tinggi2" />
                  {" "}Tinggi Air
                </label>
                {" "}
                <label>
                  <input type="checkbox" data-data="tinggi3" />
                  {" "}Tinggi Air
                </label>
              </div>
            </div>
            <div className="filter-divider"></div>
            <div className="filter-group interval-filter">
              <label>
                Interval
              </label>
              {" "}
              <label className="radio-row">
                <input type="radio" name="interval" />
                {" "}Tiap 1 jam
              </label>
              {" "}
              <label className="radio-row">
                <input type="radio" name="interval" defaultChecked />
                {" "}Tiap 6 jam
              </label>
              {" "}
              <label className="radio-row">
                <input type="radio" name="interval" />
                {" "}Tiap 12 jam
              </label>
            </div>
            {" "}
            <button type="button" className="export-main" id="exportData">
              Export Data
            </button>
          </section>
          <section className="history-top-grid">
            <article className="history-chart-card">
              <div className="chart-area">
                <div className="chart-y-label">
                  300
                </div>
                {" "}
                <svg className="history-line-chart" viewBox="0 0 700 160" preserveAspectRatio="none">
                  <line x1="0" y1="20" x2="700" y2="20"></line>
                  <line x1="0" y1="55" x2="700" y2="55"></line>
                  <line x1="0" y1="90" x2="700" y2="90"></line>
                  <line x1="0" y1="125" x2="700" y2="125"></line>
                  <line x1="0" y1="150" x2="700" y2="150"></line>
                  <line x1="70" y1="0" x2="70" y2="160"></line>
                  <line x1="140" y1="0" x2="140" y2="160"></line>
                  <line x1="210" y1="0" x2="210" y2="160"></line>
                  <line x1="280" y1="0" x2="280" y2="160"></line>
                  <line x1="350" y1="0" x2="350" y2="160"></line>
                  <line x1="420" y1="0" x2="420" y2="160"></line>
                  <line x1="490" y1="0" x2="490" y2="160"></line>
                  <line x1="560" y1="0" x2="560" y2="160"></line>
                  <line x1="630" y1="0" x2="630" y2="160"></line>
                  <polyline className="line-blue" points={"\n                            0,93\n                            30,90\n                            60,89\n                            90,91\n                            120,88\n                            150,90\n                            180,82\n                            210,78\n                            240,81\n                            270,76\n                            300,80\n                            330,74\n                            360,72\n                            390,69\n                            420,64\n                            450,53\n                            480,45\n                            510,41\n                            540,35\n                            570,39\n                            600,50\n                            630,54\n                            660,57\n                            700,58\n                            "}></polyline>
                  <polyline className="line-purple" points={"\n                            0,106\n                            30,106\n                            60,108\n                            90,105\n                            120,107\n                            150,104\n                            180,101\n                            210,104\n                            240,102\n                            270,105\n                            300,101\n                            330,100\n                            360,98\n                            390,99\n                            420,96\n                            450,90\n                            480,85\n                            510,80\n                            540,76\n                            570,79\n                            600,84\n                            630,87\n                            660,89\n                            700,89\n                            "}></polyline>
                  <polyline className="line-violet" points={"\n                            0,118\n                            30,118\n                            60,117\n                            90,119\n                            120,117\n                            150,118\n                            180,117\n                            210,115\n                            240,116\n                            270,114\n                            300,116\n                            330,115\n                            360,114\n                            390,114\n                            420,112\n                            450,109\n                            480,105\n                            510,102\n                            540,97\n                            570,99\n                            600,103\n                            630,104\n                            660,104\n                            700,104\n                            "}></polyline>
                  <circle className="chart-point blue-point" cx="540" cy="35" r="4"></circle>
                  <circle className="chart-point purple-point" cx="540" cy="76" r="4"></circle>
                  <circle className="chart-point violet-point" cx="540" cy="97" r="4"></circle>
                </svg>
              </div>
            </article>
            <article className="sensor-summary">
              <h3>
                Ringkasan Statistik per Sensor
              </h3>
              <div className="summary-head">
                <span>
                  ID Sensor
                </span>
                {" "}
                <span>
                  Tertinggi
                </span>
                {" "}
                <span>
                  Terendah
                </span>
                {" "}
                <span>
                  Rata-rata
                </span>
                {" "}
                <span>
                  Siaga
                </span>
              </div>
              <div className="summary-row">
                <span>
                  <i className="sensor-dot red"></i>
                  {" "}BNA-003
                </span>
                {" "}
                <span>
                  248 cm
                </span>
                {" "}
                <span>
                  82 cm
                </span>
                {" "}
                <span>
                  176 cm
                </span>
                {" "}
                <b>
                  12 jam
                </b>
              </div>
              <div className="summary-row">
                <span>
                  <i className="sensor-dot orange"></i>
                  {" "}GRG-007
                </span>
                {" "}
                <span>
                  165 cm
                </span>
                {" "}
                <span>
                  45 cm
                </span>
                {" "}
                <span>
                  98 cm
                </span>
                {" "}
                <b>
                  6 jam
                </b>
              </div>
              <div className="summary-row">
                <span>
                  <i className="sensor-dot yellow"></i>
                  {" "}BRG-012
                </span>
                {" "}
                <span>
                  89 cm
                </span>
                {" "}
                <span>
                  20 cm
                </span>
                {" "}
                <span>
                  54 cm
                </span>
                {" "}
                <b>
                  2 jam
                </b>
              </div>
              <div className="summary-row">
                <span>
                  <i className="sensor-dot blue"></i>
                  {" "}W-02
                </span>
                {" "}
                <span>
                  62 cm
                </span>
                {" "}
                <span>
                  12 cm
                </span>
                {" "}
                <span>
                  36 cm
                </span>
                {" "}
                <b>
                  0 jam
                </b>
              </div>
              <div className="summary-row">
                <span>
                  <i className="sensor-dot green"></i>
                  {" "}W-03
                </span>
                {" "}
                <span>
                  42 cm
                </span>
                {" "}
                <span>
                  8 cm
                </span>
                {" "}
                <span>
                  24 cm
                </span>
                {" "}
                <b>
                  0 jam
                </b>
              </div>
            </article>
          </section>
          <section className="history-middle-grid">
            <article className="bar-chart-card">
              <div className="bar-chart-area">
                <div className="bar-grid"></div>
                <div className="bars">
                  <span style={{ height: "12%" }}></span>
                  {" "}
                  <span style={{ height: "24%" }}></span>
                  {" "}
                  <span style={{ height: "17%" }}></span>
                  {" "}
                  <span style={{ height: "35%" }}></span>
                  {" "}
                  <span style={{ height: "26%" }}></span>
                  {" "}
                  <span style={{ height: "43%" }}></span>
                  {" "}
                  <span style={{ height: "39%" }}></span>
                  {" "}
                  <span style={{ height: "29%" }}></span>
                  {" "}
                  <span style={{ height: "47%" }}></span>
                  {" "}
                  <span style={{ height: "39%" }}></span>
                  {" "}
                  <span style={{ height: "55%" }}></span>
                  {" "}
                  <span style={{ height: "30%" }}></span>
                  {" "}
                  <span style={{ height: "44%" }}></span>
                  {" "}
                  <span style={{ height: "58%" }}></span>
                  {" "}
                  <span style={{ height: "42%" }}></span>
                  {" "}
                  <span style={{ height: "36%" }}></span>
                  {" "}
                  <span style={{ height: "48%" }}></span>
                  {" "}
                  <span style={{ height: "32%" }}></span>
                  {" "}
                  <span style={{ height: "24%" }}></span>
                  {" "}
                  <span style={{ height: "31%" }}></span>
                  {" "}
                  <span style={{ height: "57%" }}></span>
                  {" "}
                  <span style={{ height: "43%" }}></span>
                  {" "}
                  <span style={{ height: "19%" }}></span>
                  {" "}
                  <span style={{ height: "30%" }}></span>
                  {" "}
                  <span style={{ height: "41%" }}></span>
                  {" "}
                  <span style={{ height: "45%" }}></span>
                  {" "}
                  <span style={{ height: "33%" }}></span>
                  {" "}
                  <span style={{ height: "22%" }}></span>
                  {" "}
                  <span style={{ height: "50%" }}></span>
                  {" "}
                  <span style={{ height: "37%" }}></span>
                </div>
              </div>
            </article>
            <article className="active-filter-card">
              <h3>
                Informasi Filter Aktif
              </h3>
              <div className="active-info">
                <p>
                  26 Mei 2026 – 26 Jun 2026
                </p>
                <p>
                  5 sensor dipilih
                </p>
                <p>
                  Tinggi Air, Curah Hujan
                </p>
                <p>
                  Per Jam
                </p>
              </div>
            </article>
            <article className="export-card">
              <div className="export-icon">
                ▤
              </div>
              {" "}
              <span>
                Ekspor File
              </span>
              {" "}
              <div className="export-progress">
                <span></span>
              </div>
              <div className="export-success">
                <div className="success-circle">
                  ✓
                </div>
                <div>
                  <strong>
                    Ekspor Selesai
                  </strong>
                  {" "}
                  <small>
                    File berhasil diunduh (2.4 MB)
                  </small>
                </div>
                {" "}
                <button>
                  ×
                </button>
              </div>
              {" "}
              <button className="open-file" id="openFile">
                Buka File
              </button>
            </article>
          </section>
          <section className="history-bottom-grid">
            <article className="history-table-card">
              <div className="table-title">
                <h3>
                  Data Historis
                </h3>
                {" "}
                <label>
                  <input type="checkbox" id="selectAll" />
                  {" "}Pilih Semua (0)
                </label>
                {" "}
                <button type="button" id="exportCsv">
                  Ekspor CSV
                </button>
              </div>
              <div className="table-scroll">
                <table id="historyTable">
                  <thead>
                    <tr>
                      <th></th>
                      <th>
                        Waktu
                      </th>
                      <th>
                        Tinggi Air (cm)
                      </th>
                      <th>
                        Nama Lokasi
                      </th>
                      <th>
                        Sungai
                      </th>
                      <th>
                        Tinggi Air (cm)
                      </th>
                      <th>
                        Curah Hujan (mm)
                      </th>
                      <th>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        26 Apr 2026 10:00
                      </td>
                      <td>
                        <b className="sensor-code red-text">
                          ● BNA-003
                        </b>
                      </td>
                      <td>
                        Kali Banjir Kanal Barat{" "}
                        <small>
                          Kec. Semarang Barat
                        </small>
                      </td>
                      <td>
                        Kali Banjar
                      </td>
                      <td>
                        248
                      </td>
                      <td>
                        5.2
                      </td>
                      <td>
                        <span className="status danger">
                          ● Bahaya
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        26 Apr 2026 09:00
                      </td>
                      <td>
                        <b className="sensor-code orange-text">
                          ● GRG-007
                        </b>
                      </td>
                      <td>
                        Kali Garang{" "}
                        <small>
                          Kec. Gunungpati
                        </small>
                      </td>
                      <td>
                        Kali Garang
                      </td>
                      <td>
                        165
                      </td>
                      <td>
                        2.8
                      </td>
                      <td>
                        <span className="status warning">
                          ● Siaga
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        26 Apr 2026 08:00
                      </td>
                      <td>
                        <b className="sensor-code yellow-text">
                          ● BRG-012
                        </b>
                      </td>
                      <td>
                        Kali Bringin{" "}
                        <small>
                          Kec. Ngaliyan
                        </small>
                      </td>
                      <td>
                        Kali Bringin
                      </td>
                      <td>
                        89
                      </td>
                      <td>
                        1.7
                      </td>
                      <td>
                        <span className="status alert">
                          ● Waspada
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        26 Apr 2026 07:00
                      </td>
                      <td>
                        <b className="sensor-code blue-text">
                          ● W-02
                        </b>
                      </td>
                      <td>
                        Sungai Muktiharjo{" "}
                        <small>
                          Kec. Tembalang
                        </small>
                      </td>
                      <td>
                        Kali Muktiharjo
                      </td>
                      <td>
                        62
                      </td>
                      <td>
                        0.9
                      </td>
                      <td>
                        <span className="status normal">
                          ● Normal
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        26 Apr 2026 06:00
                      </td>
                      <td>
                        <b className="sensor-code red-text">
                          ● BNA-003
                        </b>
                      </td>
                      <td>
                        Kali Banjir Kanal Barat{" "}
                        <small>
                          Kec. Semarang Barat
                        </small>
                      </td>
                      <td>
                        Kali Banjir
                      </td>
                      <td>
                        241
                      </td>
                      <td>
                        4.8
                      </td>
                      <td>
                        <span className="status warning">
                          ● Siaga
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-footer">
                <span>
                  Tampilkan
                </span>
                {" "}
                <select>
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
                {" "}
                <span>
                  Data perhalaman
                </span>
                {" "}
                <div className="pagination">
                  <button>
                    ‹
                  </button>
                  {" "}
                  <button className="active">
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
                    5
                  </button>
                  {" "}
                  <button>
                    ...
                  </button>
                  {" "}
                  <button>
                    12
                  </button>
                  {" "}
                  <button>
                    ›
                  </button>
                </div>
                {" "}
                <span>
                  Menampilkan 1 - 5 dari 120 sensor
                </span>
              </div>
            </article>
            <article className="history-map-card">
              <h3>
                Peta Lokasi Sensor
              </h3>
              <div id="historyMap" className="history-map"></div>
              {" "}
              <button type="button" className="map-button" id="viewMap">
                ●   Lihat di Peta
              </button>
            </article>
          </section>
        </main>
      </div>
      <div className="toast" id="toast"></div>
    </>
  );
}

export default memo(RiwayatData);
