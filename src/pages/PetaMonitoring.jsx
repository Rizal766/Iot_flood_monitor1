import { memo } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage, useLegacy } from "../hooks.js";
import { runLegacyScript } from "../legacy/script.js";

function PetaMonitoring() {
  usePage({"title":"Peta Monitoring - IoT Flood Monitor","bodyClass":"","dataPage":""});
  useLegacy(runLegacyScript);

  return (
    <>
      <header className="topbar">
        <div className="brand">
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
        </div>
        <div className="search-box">
          <span>
            🔍
          </span>
          {" "}
          <input id="globalSearch" type="text" placeholder="Cari lokasi, sensor, atau nama daerah..." />
        </div>
        <div className="top-info">
          <div className="top-weather">
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
          <div className="city-info">
            <b>
              Kota Semarang
            </b>
            {" "}
            <small>
              12:52
              <br />
              {" "}10 Sep 2026
            </small>
          </div>
          <AccountMenu />
        </div>
      </header>
      <div className="layout">
        <aside className="sidebar">
          <SideNav />
          <div className="sidebar-flood">
            <div className="flood-overlay">
              <b>
                Bersama Teknologi,
                <br />
                {" "}Kita Lebih Siap
                <br />
                {" "}Menghadapi Banjir
              </b>
              {" "}
              <small>
                IoT Flood Monitor
              </small>
            </div>
          </div>
        </aside>
        <main className="content">
          <div className="page-header">
            <div>
              <h2>
                Peta Monitoring
              </h2>
              <p>
                Melihat sebaran semua sensor secara geografis untuk menilai wilayah terdampak.
              </p>
            </div>
            <div className="live-status">
              <span></span>
              {" "}LIVE
            </div>
          </div>
          <section className="monitoring-layout">
            <aside className="monitor-panel">
              <div className="sensor-search">
                <span>
                  ⌕
                </span>
                {" "}
                <input id="sensorSearch" type="text" placeholder="Cari sensor / nama lokasi" />
              </div>
              <h3>
                Status Sensor
              </h3>
              <div className="status-grid">
                <button className="status-filter active" data-status="all">
                  <i className="blue"></i>
                  {" "}Semua{" "}
                  <b>
                    24
                  </b>
                </button>
                {" "}
                <button className="status-filter" data-status="Normal">
                  <i className="green"></i>
                  {" "}Normal{" "}
                  <b>
                    18
                  </b>
                </button>
                {" "}
                <button className="status-filter" data-status="Waspada">
                  <i className="yellow"></i>
                  {" "}Waspada{" "}
                  <b>
                    2
                  </b>
                </button>
                {" "}
                <button className="status-filter" data-status="Siaga">
                  <i className="orange"></i>
                  {" "}Siaga{" "}
                  <b>
                    1
                  </b>
                </button>
                {" "}
                <button className="status-filter" data-status="Bahaya">
                  <i className="red"></i>
                  {" "}Bahaya{" "}
                  <b>
                    1
                  </b>
                </button>
                {" "}
                <button className="status-filter" data-status="Offline">
                  <i className="gray"></i>
                  {" "}Offline{" "}
                  <b>
                    2
                  </b>
                </button>
              </div>
              <h3>
                Filter tambahan
              </h3>
              <div className="filter-field">
                <label>
                  ≋ Sungai
                </label>
                {" "}
                <select id="riverFilter">
                  <option value="all">
                    Semua Sungai
                  </option>
                  <option value="Kali Banjir Kanal Barat">
                    Kali Banjir Kanal Barat
                  </option>
                  <option value="Kali Garang">
                    Kali Garang
                  </option>
                  <option value="Kali Bringin">
                    Kali Bringin
                  </option>
                  <option value="Sungai Muktiharjo">
                    Sungai Muktiharjo
                  </option>
                  <option value="Kali Tinja">
                    Kali Tinja
                  </option>
                </select>
              </div>
              <div className="filter-field">
                <label>
                  ▥ Kecamatan
                </label>
                {" "}
                <select id="districtFilter">
                  <option value="all">
                    Semua Kecamatan
                  </option>
                  <option value="Semarang Barat">
                    Semarang Barat
                  </option>
                  <option value="Semarang Selatan">
                    Semarang Selatan
                  </option>
                  <option value="Semarang Timur">
                    Semarang Timur
                  </option>
                  <option value="Pedurungan">
                    Pedurungan
                  </option>
                </select>
              </div>
              <div className="sensor-list-title">
                <b>
                  Sensor
                </b>
                {" "}
                <span id="sensorCount">
                  7 sensor
                </span>
              </div>
              <div className="sensor-list" id="sensorList"></div>
            </aside>
            <section className="map-area">
              <div className="map-toolbar">
                <button className="map-button active" data-map="street">
                  Peta
                </button>
                {" "}
                <button className="map-button" data-map="satellite">
                  Satelit
                </button>
                {" "}
                <button className="map-button" data-map="river">
                  Garis Sungai
                </button>
                {" "}
                <button className="map-button" data-map="district">
                  Batas Kecamatan
                </button>
                {" "}
                <button className="map-button" data-map="evacuation">
                  Titik Evakuasi
                </button>
                {" "}
                <button className="map-button" data-map="rain">
                  Radar Hujan (P2)
                </button>
              </div>
              <div className="map-card">
                <div id="map"></div>
                {" "}
                <button className="map-fullscreen" id="mapFullscreen" title="Layar penuh">
                  ⛶
                </button>
                {" "}
                <div className="map-legend">
                  <strong>
                    Legenda
                  </strong>
                  {" "}
                  <span>
                    <i className="green"></i>
                    {" "}Normal
                  </span>
                  {" "}
                  <span>
                    <i className="yellow"></i>
                    {" "}Waspada
                  </span>
                  {" "}
                  <span>
                    <i className="orange"></i>
                    {" "}Siaga
                  </span>
                  {" "}
                  <span>
                    <i className="red"></i>
                    {" "}Bahaya
                  </span>
                  {" "}
                  <span>
                    <i className="gray"></i>
                    {" "}Offline
                  </span>
                </div>
              </div>
              <div className="map-tools">
                <div className="tool-card">
                  <h3>
                    ▤ Kontrol Layer
                  </h3>
                  {" "}
                  <label>
                    <input type="checkbox" defaultChecked data-toggle="river" />
                    {" "}Garis Sungai
                  </label>
                  {" "}
                  <label>
                    <input type="checkbox" defaultChecked data-toggle="district" />
                    {" "}Batas Kecamatan
                  </label>
                  {" "}
                  <label>
                    <input type="checkbox" defaultChecked data-toggle="evacuation" />
                    {" "}Titik Evakuasi
                  </label>
                  {" "}
                  <label>
                    <input type="checkbox" data-toggle="rain" />
                    {" "}Radar Hujan (P2)
                  </label>
                </div>
                <div className="tool-card">
                  <h3>
                    ◎ Lokasi Saya
                  </h3>
                  <p id="locationText">
                    ● Posisi Anda
                  </p>
                  {" "}
                  <button id="locationButton">
                    Posisi saya
                  </button>
                </div>
                <div className="tool-card">
                  <h3>
                    ▰ Skala
                  </h3>
                  <div className="scale-line">
                    <span></span>
                    {" "}
                    <small>
                      2 km
                    </small>
                  </div>
                </div>
                <div className="tool-card">
                  <h3>
                    ⛶ Layar Penuh
                  </h3>
                  {" "}
                  <button id="toolFullscreen">
                    ⛶ Perbesar Peta
                  </button>
                  {" "}
                  <button id="resetMap">
                    ↻ Cuci Peta
                  </button>
                </div>
              </div>
            </section>
            <aside className="detail-panel">
              <div className="detail-header">
                <h3>
                  Daftar Sensor
                </h3>
              </div>
              <div className="selected-sensor" id="selectedSensor">
                <div className="selected-title">
                  ⚠ BNA-003{" "}
                  <span className="status-badge bahaya">
                    Bahaya
                  </span>
                </div>
                {" "}
                <b>
                  Kali Banjir Kanal Barat
                </b>
                {" "}
                <div className="sensor-metric">
                  <span>
                    ⌂ Tinggi muka air
                  </span>
                  {" "}
                  <strong>
                    248 cm
                  </strong>
                </div>
                <div className="sensor-metric">
                  <span>
                    ⌁ Tren
                  </span>
                  {" "}
                  <strong className="danger-text">
                    +12 cm/jam
                  </strong>
                </div>
                <div className="sensor-metric">
                  <span>
                    ◷ Update terakhir
                  </span>
                  {" "}
                  <strong>
                    10:02
                  </strong>
                </div>
              </div>
              <div className="detail-tabs">
                <button className="active">
                  Ringkasan
                </button>
                {" "}
                <button>
                  Grafik 6 Jam
                </button>
              </div>
              <div className="detail-content">
                <div className="location-summary">
                  <div className="big-location">
                    📍
                  </div>
                  <div>
                    <b>
                      Kali Banjir Kanal Barat
                    </b>
                    {" "}
                    <small>
                      Kecamatan
                      <br />
                      {" "}Semarang Barat
                    </small>
                  </div>
                </div>
                <div className="warning-box">
                  <b>
                    ⚠ Status
                  </b>
                  {" "}
                  <p>
                    Ketinggian air sudah melewati batas aman. Segera lakukan pemantauan dan siapkan tim evakuasi.
                  </p>
                </div>
                <div className="mini-chart">
                  <b>
                    Grafik Tinggi Muka Air (6 jam)
                  </b>
                  {" "}
                  <svg viewBox="0 0 300 100">
                    <polyline points={"\n                                0,80\n                                40,75\n                                80,72\n                                120,65\n                                160,57\n                                200,50\n                                240,40\n                                280,25\n                                300,20\n                                "}></polyline>
                  </svg>
                </div>
                {" "}
                <button className="detail-button" id="detailButton">
                  Lihat detail sensor →
                </button>
                {" "}
                <div className="special-case">
                  <b>
                    Kasus Khusus
                  </b>
                  {" "}
                  <div>
                    ⚠ Sensor #SMG-015 (Offline){" "}
                    <small>
                      Terakhir terlihat 06:05
                    </small>
                  </div>
                  <div>
                    ⚠ Peta tidak dapat dimuat{" "}
                    <small>
                      Coba lagi dalam beberapa saat
                    </small>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>
      <div className="toast" id="toast"></div>
    </>
  );
}

export default memo(PetaMonitoring);
