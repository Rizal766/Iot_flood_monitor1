import { memo } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage, useLegacy } from "../hooks.js";
import { runLegacyScript } from "../legacy/script.js";

function Dashboard() {
  usePage({"title":"IoT Flood Monitor","bodyClass":"","dataPage":""});
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
          <input type="text" id="searchInput" placeholder="Cari lokasi, sensor, atau nama daerah..." />
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
              <h2 id="pageTitle">
                Dashboard
              </h2>
              <p id="pageSubtitle">
                Monitoring kondisi banjir secara real-time.
              </p>
            </div>
            <div className="live-status">
              <span></span>
              {" "}LIVE
            </div>
          </div>
          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon blue">
                ▰
              </div>
              <div className="stat-content">
                <span>
                  Total sensor
                </span>
                {" "}
                <strong>
                  24
                </strong>
                {" "}
                <small>
                  Aktif 22 | Offline 2
                </small>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon red">
                ▲
              </div>
              <div className="stat-content">
                <span>
                  Lokasi berisiko
                </span>
                {" "}
                <strong>
                  3
                </strong>
                {" "}
                <small className="danger-text">
                  Siaga 1 | Waspada 2 | Aman 19
                </small>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green">
                ♨
              </div>
              <div className="stat-content">
                <span>
                  Curah hujan (24 Jam)
                </span>
                {" "}
                <strong>
                  86mm
                </strong>
                {" "}
                <small className="green-text">
                  +12% Dari Kemarin
                </small>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon cyan">
                〰
              </div>
              <div className="stat-content">
                <span>
                  Tinggi muka air
                </span>
                {" "}
                <strong>
                  118cm
                </strong>
                {" "}
                <small className="green-text">
                  +8% Dari Kemarin
                </small>
              </div>
            </div>
          </section>
          <section className="dashboard-grid">
            <div className="left-column">
              <article className="card map-card">
                <div className="card-header">
                  <h3>
                    Peta Monitoring Lokasi
                  </h3>
                  {" "}
                  <button className="header-button" id="mapFocusButton">
                    ⛶
                  </button>
                </div>
                <div className="map-container">
                  <div id="map"></div>
                  <div className="map-legend">
                    <div>
                      <i className="dot normal"></i>
                      {" "}Aman
                    </div>
                    <div>
                      <i className="dot waspada"></i>
                      {" "}Waspada
                    </div>
                    <div>
                      <i className="dot siaga"></i>
                      {" "}Siaga
                    </div>
                    <div>
                      <i className="dot bahaya"></i>
                      {" "}Bahaya
                    </div>
                    <div>
                      <i className="dot offline"></i>
                      {" "}Offline
                    </div>
                  </div>
                </div>
              </article>
              <div className="bottom-grid">
                <article className="card chart-card">
                  <div className="card-header">
                    <h3>
                      Grafik Tinggi Muka Air (TMA)
                    </h3>
                    {" "}
                    <span>
                      24 jam
                    </span>
                  </div>
                  <div className="chart-wrapper">
                    <div className="chart-grid"></div>
                    {" "}
                    <svg viewBox="0 0 500 180" preserveAspectRatio="none">
                      <polyline className="chart-red" points={"\n                                        0,125\n                                        50,138\n                                        100,132\n                                        150,126\n                                        200,118\n                                        250,124\n                                        300,111\n                                        350,105\n                                        400,108\n                                        450,84\n                                        500,73\n                                        "}></polyline>
                      <polyline className="chart-orange" points={"\n                                        0,145\n                                        50,151\n                                        100,147\n                                        150,140\n                                        200,145\n                                        250,135\n                                        300,140\n                                        350,128\n                                        400,131\n                                        450,113\n                                        500,105\n                                        "}></polyline>
                      <polyline className="chart-yellow" points={"\n                                        0,162\n                                        50,167\n                                        100,163\n                                        150,157\n                                        200,156\n                                        250,159\n                                        300,152\n                                        350,149\n                                        400,145\n                                        450,137\n                                        500,131\n                                        "}></polyline>
                    </svg>
                  </div>
                  <div className="chart-labels">
                    <span>
                      00:00
                    </span>
                    {" "}
                    <span>
                      06:00
                    </span>
                    {" "}
                    <span>
                      12:00
                    </span>
                    {" "}
                    <span>
                      18:00
                    </span>
                    {" "}
                    <span>
                      24:00
                    </span>
                  </div>
                  <div className="chart-legends">
                    <span>
                      <i className="red"></i>
                      {" "}BNA-003 (Bahaya)
                    </span>
                    {" "}
                    <span>
                      <i className="orange"></i>
                      {" "}GRC-003 (Siaga)
                    </span>
                    {" "}
                    <span>
                      <i className="yellow"></i>
                      {" "}GRC-012 (Waspada)
                    </span>
                  </div>
                </article>
                <article className="card sensor-card">
                  <div className="card-header">
                    <h3>
                      Daftar sensor
                    </h3>
                    {" "}
                    <button className="text-button" id="showSensors">
                      Lihat semua
                    </button>
                  </div>
                  <div className="sensor-table">
                    <div className="sensor-row sensor-head">
                      <span>
                        ID Sensor
                      </span>
                      {" "}
                      <span>
                        Lokasi
                      </span>
                      {" "}
                      <span>
                        Tinggi air
                      </span>
                      {" "}
                      <span>
                        Status
                      </span>
                      {" "}
                      <span>
                        Update
                      </span>
                    </div>
                    <div className="sensor-row">
                      <span>
                        BNA-003
                      </span>
                      {" "}
                      <span>
                        Kali Banjir Kanal Barat
                      </span>
                      {" "}
                      <span>
                        248CM
                      </span>
                      {" "}
                      <span className="status bahaya">
                        Bahaya
                      </span>
                      {" "}
                      <span>
                        11:12
                      </span>
                    </div>
                    <div className="sensor-row">
                      <span>
                        GRC-007
                      </span>
                      {" "}
                      <span>
                        Kali Garang
                      </span>
                      {" "}
                      <span>
                        165CM
                      </span>
                      {" "}
                      <span className="status siaga">
                        Siaga
                      </span>
                      {" "}
                      <span>
                        10:48
                      </span>
                    </div>
                    <div className="sensor-row">
                      <span>
                        BRG-012
                      </span>
                      {" "}
                      <span>
                        Brongkalan
                      </span>
                      {" "}
                      <span>
                        89CM
                      </span>
                      {" "}
                      <span className="status waspada">
                        Waspada
                      </span>
                      {" "}
                      <span>
                        09:32
                      </span>
                    </div>
                    <div className="sensor-row">
                      <span>
                        SWO-001
                      </span>
                      {" "}
                      <span>
                        Sungai Muktiharjo
                      </span>
                      {" "}
                      <span>
                        78CM
                      </span>
                      {" "}
                      <span className="status normal">
                        Normal
                      </span>
                      {" "}
                      <span>
                        08:17
                      </span>
                    </div>
                    <div className="sensor-row">
                      <span>
                        TM-021
                      </span>
                      {" "}
                      <span>
                        Kali Tinja
                      </span>
                      {" "}
                      <span>
                        34CM
                      </span>
                      {" "}
                      <span className="status normal">
                        Normal
                      </span>
                      {" "}
                      <span>
                        07:56
                      </span>
                    </div>
                  </div>
                  {" "}
                  <small className="sensor-footer">
                    Menampilkan 5 dari 24 sensor
                  </small>
                </article>
              </div>
            </div>
            <div className="right-column">
              <article className="card alert-card">
                <div className="card-header">
                  <h3 className="alert-title">
                    ⚠ Alert Terbaru
                  </h3>
                </div>
                <div className="alert-list">
                  <div className="alert-item">
                    <div className="alert-icon danger">
                      !
                    </div>
                    <div className="alert-info">
                      <b>
                        Sensor BNA-003 - Kali Banjir Kanal Barat
                      </b>
                      {" "}
                      <small>
                        Tinggi muka air mencapai 248cm
                      </small>
                    </div>
                    {" "}
                    <strong className="alert-danger">
                      Bahaya
                    </strong>
                    {" "}
                    <time>
                      11:12
                    </time>
                  </div>
                  <div className="alert-item">
                    <div className="alert-icon danger">
                      !
                    </div>
                    <div className="alert-info">
                      <b>
                        Sensor GRC-007 - Kali Garang
                      </b>
                      {" "}
                      <small>
                        Tinggi muka air 165cm
                      </small>
                    </div>
                    {" "}
                    <strong className="alert-siaga">
                      Siaga
                    </strong>
                    {" "}
                    <time>
                      10:48
                    </time>
                  </div>
                  <div className="alert-item">
                    <div className="alert-icon warning">
                      !
                    </div>
                    <div className="alert-info">
                      <b>
                        Sensor BRG-012 - Brongkalan
                      </b>
                      {" "}
                      <small>
                        Curah hujan meningkat 45mm
                      </small>
                    </div>
                    {" "}
                    <strong className="alert-waspada">
                      Waspada
                    </strong>
                    {" "}
                    <time>
                      09:32
                    </time>
                  </div>
                  <div className="alert-item">
                    <div className="alert-icon offline">
                      ⌁
                    </div>
                    <div className="alert-info">
                      <b>
                        Sensor SGM-016
                      </b>
                      {" "}
                      <small>
                        Koneksi normal
                      </small>
                    </div>
                    {" "}
                    <strong className="alert-normal">
                      Normal
                    </strong>
                    {" "}
                    <time>
                      08:14
                    </time>
                  </div>
                </div>
              </article>
              <article className="card weather-card">
                <div className="card-header">
                  <h3>
                    {"Cuaca & Prediksi"}
                  </h3>
                  {" "}
                  <b>
                    Prediksi 3 hari
                  </b>
                </div>
                <div className="weather-content">
                  <div className="current-weather">
                    <span>
                      ☁️
                    </span>
                    {" "}
                    <div>
                      <strong>
                        28°C
                      </strong>
                      {" "}
                      <b>
                        Berawan
                      </b>
                    </div>
                  </div>
                  <div className="forecast">
                    <span>
                      Kam 10 Sep{" "}
                      <b>
                        90%
                      </b>
                      {" "}32°/25°
                    </span>
                    {" "}
                    <span>
                      Jum 11 Sep{" "}
                      <b>
                        80%
                      </b>
                      {" "}32°/25°
                    </span>
                    {" "}
                    <span>
                      Sab 12 Sep{" "}
                      <b>
                        70%
                      </b>
                      {" "}32°/25°
                    </span>
                  </div>
                </div>
              </article>
              <article className="card integration-card">
                <div className="card-header">
                  <h3>
                    {"Notifikasi & Integrasi"}
                  </h3>
                </div>
                <div className="integration-row">
                  <span>
                    💬
                  </span>
                  {" "}
                  <b>
                    SMS Gateway
                  </b>
                  {" "}
                  <strong>
                    aktif
                  </strong>
                  {" "}
                  <i>
                    ›
                  </i>
                </div>
                <div className="integration-row">
                  <span>
                    🟢
                  </span>
                  {" "}
                  <b>
                    WhatsApp
                  </b>
                  {" "}
                  <strong>
                    aktif
                  </strong>
                  {" "}
                  <i>
                    ›
                  </i>
                </div>
                <div className="integration-row">
                  <span>
                    ✉️
                  </span>
                  {" "}
                  <b>
                    Email
                  </b>
                  {" "}
                  <strong>
                    aktif
                  </strong>
                  {" "}
                  <i>
                    ›
                  </i>
                </div>
                <div className="integration-row">
                  <span>
                    📱
                  </span>
                  {" "}
                  <b>
                    Push Notification
                  </b>
                  {" "}
                  <strong>
                    aktif
                  </strong>
                  {" "}
                  <i>
                    ›
                  </i>
                </div>
                <div className="integration-row">
                  <span>
                    🔔
                  </span>
                  {" "}
                  <b>
                    Sirene Remote
                  </b>
                  {" "}
                  <strong>
                    aktif
                  </strong>
                  {" "}
                  <i>
                    ›
                  </i>
                </div>
                <div className="integration-row">
                  <span>
                    🔗
                  </span>
                  {" "}
                  <b>
                    API Integration
                  </b>
                  {" "}
                  <strong>
                    aktif
                  </strong>
                  {" "}
                  <i>
                    ›
                  </i>
                </div>
              </article>
              <article className="flood-card">
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
              </article>
            </div>
          </section>
        </main>
      </div>
      <div className="toast" id="toast"></div>
    </>
  );
}

export default memo(Dashboard);
