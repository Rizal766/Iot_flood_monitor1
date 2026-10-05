import { memo } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage, useLegacy } from "../hooks.js";
import { runLegacyScript } from "../legacy/script.js";

function DataSensor() {
  usePage({"title":"Data Sensor - IoT Flood Monitor","bodyClass":"data-sensor-page","dataPage":""});
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
            ⌕
          </span>
          {" "}
          <input type="text" id="globalSearch" placeholder="Cari lokasi,sensor,atau nama daerah..." />
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
          <section className="page-header">
            <div>
              <h2>
                Data Sensor
              </h2>
              <p>
                Total sensor terdaftar: 24
              </p>
            </div>
            {" "}
            <button type="button" className="add-sensor-button" id="addSensorButton">
              +  Tambah Sensor{" "}
              <small>
                (Hanya Admin)
              </small>
            </button>
          </section>
          <section className="sensor-stats">
            <div className="sensor-stat danger">
              <div className="stat-symbol">
                ⚠
              </div>
              <div>
                <span>
                  Bahaya
                </span>
                {" "}
                <strong>
                  1
                </strong>
                {" "}
                <small>
                  4%
                </small>
              </div>
            </div>
            <div className="sensor-stat alert">
              <div className="stat-symbol">
                🔔
              </div>
              <div>
                <span>
                  Siaga
                </span>
                {" "}
                <strong>
                  1
                </strong>
                {" "}
                <small>
                  4%
                </small>
              </div>
            </div>
            <div className="sensor-stat warning">
              <div className="stat-symbol">
                🔔
              </div>
              <div>
                <span>
                  Waspada
                </span>
                {" "}
                <strong>
                  2
                </strong>
                {" "}
                <small>
                  8%
                </small>
              </div>
            </div>
            <div className="sensor-stat normal">
              <div className="stat-symbol">
                ≡
              </div>
              <div>
                <span>
                  Normal
                </span>
                {" "}
                <strong>
                  18
                </strong>
                {" "}
                <small>
                  75%
                </small>
              </div>
            </div>
            <div className="sensor-stat offline">
              <div className="stat-symbol">
                📶
              </div>
              <div>
                <span>
                  Offline
                </span>
                {" "}
                <strong>
                  2
                </strong>
                {" "}
                <small>
                  8%
                </small>
              </div>
            </div>
          </section>
          <section className="filter-card">
            <div className="sensor-search">
              <span>
                ⌕
              </span>
              {" "}
              <input type="text" id="sensorSearch" placeholder="Cari ID sensor,nama lokasi atau sinyal" />
            </div>
            {" "}
            <select id="statusFilter">
              <option value="all">
                Semua
              </option>
              <option value="Bahaya">
                Bahaya
              </option>
              <option value="Siaga">
                Siaga
              </option>
              <option value="Waspada">
                Waspada
              </option>
              <option value="Normal">
                Normal
              </option>
              <option value="Offline">
                Offline
              </option>
            </select>
            {" "}
            <select id="riverFilter">
              <option value="all">
                Semua
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
              <option value="Kali Timo">
                Kali Timo
              </option>
            </select>
            {" "}
            <select id="signalFilter">
              <option value="all">
                Semua
              </option>
              <option value="4G">
                4G
              </option>
              <option value="Offline">
                Offline
              </option>
            </select>
            {" "}
            <button type="button" className="export-button" id="exportButton">
              ↓  Ekspor CSV
            </button>
          </section>
          <section className="table-card">
            <div className="table-wrapper">
              <table id="sensorTable">
                <thead>
                  <tr>
                    <th className="check-col">
                      <input type="checkbox" id="selectAll" />
                    </th>
                    <th>
                      ID Sensor
                    </th>
                    <th>
                      {"Nama Lokasi & Sungai"}
                    </th>
                    <th>
                      Tinggi Air (cm)
                    </th>
                    <th>
                      Status
                    </th>
                    <th>
                      Baterai
                    </th>
                    <th>
                      Sinyal
                    </th>
                    <th>
                      Update Terakhir
                    </th>
                    <th>
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody id="sensorBody">
                  <tr data-status="Bahaya" data-river="Kali Banjir Kanal Barat" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #BNA-003
                    </td>
                    <td>
                      <strong>
                        Kali Banjir Kanal Barat
                      </strong>
                      {" "}
                      <small>
                        Sungai Mudi
                      </small>
                    </td>
                    <td className="water-danger">
                      ↑ +12
                    </td>
                    <td>
                      <span className="status danger">
                        ● Bahaya
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      2 menit lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Siaga" data-river="Kali Garang" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #GRC-007
                    </td>
                    <td>
                      <strong>
                        Kali Garang
                      </strong>
                      {" "}
                      <small>
                        Sungai Garang
                      </small>
                    </td>
                    <td className="water-danger">
                      ↑ +8
                    </td>
                    <td>
                      <span className="status siaga">
                        ● Siaga
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      5 menit lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Waspada" data-river="Kali Bringin" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #BRG-012
                    </td>
                    <td>
                      <strong>
                        Kali Bringin
                      </strong>
                      {" "}
                      <small>
                        Sungai Bringin
                      </small>
                    </td>
                    <td className="water-normal">
                      ↓ -3
                    </td>
                    <td>
                      <span className="status waspada">
                        ● Waspada
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      9 menit lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Normal" data-river="Sungai Muktiharjo" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #SWO-015
                    </td>
                    <td>
                      <strong>
                        Sungai Muktiharjo
                      </strong>
                      {" "}
                      <small>
                        Sungai Timo
                      </small>
                    </td>
                    <td className="water-normal">
                      ↓ -2
                    </td>
                    <td>
                      <span className="status normal">
                        ● Normal
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      12 menit lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Normal" data-river="Kali Timo" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #TMR-021
                    </td>
                    <td>
                      <strong>
                        Kali Timo
                      </strong>
                      {" "}
                      <small>
                        Sungai Timo
                      </small>
                    </td>
                    <td className="water-normal">
                      ↓ -1
                    </td>
                    <td>
                      <span className="status normal">
                        ● Normal
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      17 menit lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Normal" data-river="Kali Kembang" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #KDL-008
                    </td>
                    <td>
                      <strong>
                        Kali Kembangan
                      </strong>
                      {" "}
                      <small>
                        Sungai Kembangan
                      </small>
                    </td>
                    <td className="water-normal">
                      ↓ -5
                    </td>
                    <td>
                      <span className="status normal">
                        ● Normal
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      23 menit lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Offline" data-river="Sungai Muktiharjo" data-signal="Offline">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #WF-02
                    </td>
                    <td>
                      <strong>
                        Sungai Muktiharjo
                      </strong>
                      {" "}
                      <small>
                        Sungai Timo
                      </small>
                    </td>
                    <td>
                      -
                    </td>
                    <td>
                      <span className="status offline">
                        ◉ Offline
                      </span>
                    </td>
                    <td>
                      <span className="battery low"></span>
                      {" "}
                      <small className="battery-percent">
                        18%
                      </small>
                    </td>
                    <td>
                      <span className="signal-off">
                        ⌁
                      </span>
                      {" "}
                      <small>
                        -
                      </small>
                    </td>
                    <td>
                      1 jam lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Normal" data-river="Sungai Mangkuk" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #WF-03
                    </td>
                    <td>
                      <strong>
                        Sungai Mangkuk
                      </strong>
                      {" "}
                      <small>
                        Sungai Garang
                      </small>
                    </td>
                    <td className="water-normal">
                      ↓ -1
                    </td>
                    <td>
                      <span className="status normal">
                        ● Normal
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      2 jam lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Normal" data-river="Kali Garang" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #WF-01
                    </td>
                    <td>
                      <strong>
                        Kali Garang
                      </strong>
                      {" "}
                      <small>
                        Sungai Garang
                      </small>
                    </td>
                    <td className="water-normal">
                      ↓ -2
                    </td>
                    <td>
                      <span className="status normal">
                        ● Normal
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      3 jam lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                  <tr data-status="Normal" data-river="Sungai Krejo" data-signal="4G">
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      #WF-06
                    </td>
                    <td>
                      <strong>
                        Sungai Krejo
                      </strong>
                      {" "}
                      <small>
                        Sungai Krejo
                      </small>
                    </td>
                    <td className="water-normal">
                      ↓ -1
                    </td>
                    <td>
                      <span className="status normal">
                        ● Normal
                      </span>
                    </td>
                    <td>
                      <span className="battery full"></span>
                    </td>
                    <td>
                      <span className="signal-bars">
                        ▂▅█
                      </span>
                      {" "}
                      <small>
                        4G
                      </small>
                    </td>
                    <td>
                      4 jam lalu
                    </td>
                    <td className="actions">
                      <button className="view-btn">
                        ▤ Lihat
                      </button>
                      {" "}
                      <button className="edit-btn">
                        ↗ Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="table-footer">
              <div className="footer-left">
                <label>
                  <input type="checkbox" id="selectAllBottom" />
                  {" "}Pilih Semua
                </label>
                {" "}
                <button type="button" className="bulk-export" id="bulkExport">
                  Ekspor CSV (0)
                </button>
              </div>
              <div className="footer-right">
                <span>
                  Tampilkan
                </span>
                {" "}
                <select id="rowsPerPage">
                  <option value="10">
                    10
                  </option>
                  <option value="20">
                    20
                  </option>
                  <option value="50">
                    50
                  </option>
                </select>
                {" "}
                <span>
                  Baris per halaman
                </span>
                {" "}
                <div className="pagination">
                  <button type="button" id="prevPage">
                    ‹
                  </button>
                  {" "}
                  <button type="button" className="page active">
                    1
                  </button>
                  {" "}
                  <button type="button" className="page">
                    2
                  </button>
                  {" "}
                  <button type="button" className="page">
                    3
                  </button>
                  {" "}
                  <button type="button" className="page">
                    4
                  </button>
                  {" "}
                  <button type="button" id="nextPage">
                    ›
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="toast" id="toast"></div>
      <dialog className="sensor-edit-dialog" id="sensorEditDialog">
        <form id="sensorEditForm">
          <div className="sensor-edit-heading">
            <div>
              <h2>
                Edit Sensor
              </h2>
              <p id="sensorEditId"></p>
            </div>
            {" "}
            <button type="button" className="sensor-edit-close" id="closeSensorEdit" aria-label="Tutup">
              ×
            </button>
          </div>
          {" "}
          <label>
            Nama lokasi{" "}
            <input id="editSensorLocation" name="location" required />
          </label>
          {" "}
          <label>
            Nama sungai{" "}
            <input id="editSensorRiver" name="river" required />
          </label>
          {" "}
          <label>
            Tinggi air{" "}
            <input id="editSensorWater" name="water" required />
          </label>
          {" "}
          <label>
            Status{" "}
            <select id="editSensorStatus" name="status" required>
              <option value="Normal">
                Normal
              </option>
              <option value="Waspada">
                Waspada
              </option>
              <option value="Siaga">
                Siaga
              </option>
              <option value="Bahaya">
                Bahaya
              </option>
              <option value="Offline">
                Offline
              </option>
            </select>
          </label>
          {" "}
          <div className="sensor-edit-actions">
            <button type="button" id="cancelSensorEdit">
              Batal
            </button>
            {" "}
            <button type="submit">
              Simpan perubahan
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default memo(DataSensor);
