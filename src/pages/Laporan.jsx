import { memo } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage, useLegacy } from "../hooks.js";
import { runLegacyScript } from "../legacy/script.js";

function Laporan() {
  usePage({"title":"Laporan - IoT Flood Monitor","bodyClass":"","dataPage":""});
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
        <div className="global-search">
          <span>
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
          <div className="page-header">
            <div>
              <h2>
                ▣ Laporan
              </h2>
              <p>
                Kelola dan buat laporan monitoring banjir untuk pimpinan dan instansi terkait.
              </p>
            </div>
          </div>
          <div className="report-layout">
            <section className="report-main">
              <div className="report-stats">
                <div className="report-stat">
                  <div className="stat-icon blue">
                    ▦
                  </div>
                  <div>
                    <span>
                      Total Laporan
                    </span>
                    {" "}
                    <strong>
                      24
                    </strong>
                    {" "}
                    <small>
                      ↑ 12% dari bulan lalu
                    </small>
                  </div>
                </div>
                <div className="report-stat">
                  <div className="stat-icon black">
                    □
                  </div>
                  <div>
                    <span>
                      Laporan Bulanan
                    </span>
                    {" "}
                    <strong>
                      8
                    </strong>
                    {" "}
                    <small>
                      ↑ 33% dari bulan lalu
                    </small>
                  </div>
                </div>
                <div className="report-stat">
                  <div className="stat-icon yellow">
                    ⚠
                  </div>
                  <div>
                    <span>
                      Laporan Kejadian
                    </span>
                    {" "}
                    <strong>
                      5
                    </strong>
                    {" "}
                    <small>
                      ↑ 67% dari bulan lalu
                    </small>
                  </div>
                </div>
                <div className="report-stat">
                  <div className="stat-icon dark">
                    ▤
                  </div>
                  <div>
                    <span>
                      Laporan Harian
                    </span>
                    {" "}
                    <strong>
                      11
                    </strong>
                    {" "}
                    <small>
                      ↑ 10% dari bulan lalu
                    </small>
                  </div>
                </div>
              </div>
              <section className="reports-card">
                <h3>
                  Daftar Laporan Tersimpan
                </h3>
                <div className="report-filter">
                  <div className="report-search">
                    <span>
                      ⌕
                    </span>
                    {" "}
                    <input type="text" id="reportSearch" placeholder="Cari nama laporan..." />
                  </div>
                  {" "}
                  <select id="periodFilter">
                    <option value="all">
                      1 Jan 2026 - 26 Jun 2026
                    </option>
                    <option value="juni">
                      Juni 2026
                    </option>
                    <option value="mei">
                      Mei 2026
                    </option>
                  </select>
                  {" "}
                  <select id="areaFilter">
                    <option value="all">
                      Semua Wilayah
                    </option>
                    <option value="semarang">
                      Semarang
                    </option>
                    <option value="garang">
                      Kali Garang
                    </option>
                    <option value="demak">
                      Demak
                    </option>
                  </select>
                </div>
                <div className="report-table-wrapper">
                  <table className="report-table">
                    <thead>
                      <tr>
                        <th>
                          Nama Laporan
                        </th>
                        <th>
                          Jenis
                        </th>
                        <th>
                          Periode
                        </th>
                        <th>
                          Wilayah/Sensor
                        </th>
                        <th>
                          Dibuat Oleh
                        </th>
                        <th>
                          Tanggal Dibuat
                        </th>
                        <th>
                          Aksi
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody id="reportBody">
                      <tr data-name="Laporan Harian 28 Jun 2026" data-type="harian" data-area="semarang">
                        <td>
                          <span className="file-icon">
                            ▣
                          </span>
                          {" "}Laporan Harian 28 Jun 2026
                        </td>
                        <td>
                          <span className="type blue">
                            Harian
                          </span>
                        </td>
                        <td>
                          26 Jun 2026
                        </td>
                        <td>
                          Semarang (Semua)
                        </td>
                        <td>
                          <small>
                            Fatmi Nurfaizah{" "}
                            <br />
                            {" "}Admin
                          </small>
                        </td>
                        <td>
                          26 Jun 2026 09:15
                        </td>
                        <td className="download-actions">
                          <button className="pdf-btn" data-report="Laporan Harian 28 Jun 2026">
                            ▣ PDF
                          </button>
                          {" "}
                          <button className="excel-btn" data-report="Laporan Harian 28 Jun 2026">
                            ▣ Excel
                          </button>
                        </td>
                        <td>
                          <button className="more-btn">
                            ⋮
                          </button>
                        </td>
                      </tr>
                      <tr data-name="Laporan Mingguan 16-22 Juni" data-type="mingguan" data-area="demak">
                        <td>
                          <span className="file-icon">
                            ▣
                          </span>
                          {" "}Laporan Mingguan 16-22 Juni
                        </td>
                        <td>
                          <span className="type purple">
                            Mingguan
                          </span>
                        </td>
                        <td>
                          16 - 22 Jun 2026
                        </td>
                        <td>
                          Semarang, Demak
                        </td>
                        <td>
                          <small>
                            Siti Aminah{" "}
                            <br />
                            {" "}Operator
                          </small>
                        </td>
                        <td>
                          22 Jun 2026 14:32
                        </td>
                        <td className="download-actions">
                          <button className="pdf-btn">
                            ▣ PDF
                          </button>
                          {" "}
                          <button className="excel-btn">
                            ▣ Excel
                          </button>
                        </td>
                        <td>
                          <button className="more-btn">
                            ⋮
                          </button>
                        </td>
                      </tr>
                      <tr data-name="Laporan Bulanan Mei 2026" data-type="bulanan" data-area="semarang">
                        <td>
                          <span className="file-icon">
                            ▣
                          </span>
                          {" "}Laporan Bulanan Mei 2026
                        </td>
                        <td>
                          <span className="type green">
                            Bulanan
                          </span>
                        </td>
                        <td>
                          1 - 31 Mei 2026
                        </td>
                        <td>
                          Semarang (Semua)
                        </td>
                        <td>
                          <small>
                            Ahmad Fauzi{" "}
                            <br />
                            {" "}Operator
                          </small>
                        </td>
                        <td>
                          31 Mei 2026 16:45
                        </td>
                        <td className="download-actions">
                          <button className="pdf-btn">
                            ▣ PDF
                          </button>
                          {" "}
                          <button className="excel-btn">
                            ▣ Excel
                          </button>
                        </td>
                        <td>
                          <button className="more-btn">
                            ⋮
                          </button>
                        </td>
                      </tr>
                      <tr data-name="Laporan Kejadian Banjir" data-type="kejadian" data-area="garang">
                        <td>
                          <span className="file-icon">
                            ▣
                          </span>
                          {" "}Laporan Kejadian Banjir
                        </td>
                        <td>
                          <span className="type red">
                            Kejadian
                          </span>
                        </td>
                        <td>
                          24 Mei 2026
                        </td>
                        <td>
                          Kali Garang, Semarang
                        </td>
                        <td>
                          <small>
                            Rizky Maulana{" "}
                            <br />
                            {" "}Operator
                          </small>
                        </td>
                        <td>
                          24 Mei 2026 08:21
                        </td>
                        <td className="download-actions">
                          <button className="pdf-btn">
                            ▣ PDF
                          </button>
                          {" "}
                          <button className="excel-btn">
                            ▣ Excel
                          </button>
                        </td>
                        <td>
                          <button className="more-btn">
                            ⋮
                          </button>
                        </td>
                      </tr>
                      <tr data-name="Laporan Harian 15 Juni 2026" data-type="harian" data-area="semarang">
                        <td>
                          <span className="file-icon">
                            ▣
                          </span>
                          {" "}Laporan Harian 15 Juni 2026
                        </td>
                        <td>
                          <span className="type blue">
                            Harian
                          </span>
                        </td>
                        <td>
                          15 Jun 2026
                        </td>
                        <td>
                          Semarang (Semua)
                        </td>
                        <td>
                          <small>
                            Dewi Lestari{" "}
                            <br />
                            {" "}Operator
                          </small>
                        </td>
                        <td>
                          15 Jun 2026 10:12
                        </td>
                        <td className="download-actions">
                          <button className="pdf-btn">
                            ▣ PDF
                          </button>
                          {" "}
                          <button className="excel-btn">
                            ▣ Excel
                          </button>
                        </td>
                        <td>
                          <button className="more-btn">
                            ⋮
                          </button>
                        </td>
                      </tr>
                      <tr data-name="Laporan Mingguan 9-15 Juni" data-type="mingguan" data-area="garang">
                        <td>
                          <span className="file-icon">
                            ▣
                          </span>
                          {" "}Laporan Mingguan 9-15 Juni
                        </td>
                        <td>
                          <span className="type purple">
                            Mingguan
                          </span>
                        </td>
                        <td>
                          9 - 15 Jun 2026
                        </td>
                        <td>
                          Kali Timo, Semarang
                        </td>
                        <td>
                          <small>
                            Budi Santoso
                          </small>
                        </td>
                        <td>
                          15 Jun 2026 09:03
                        </td>
                        <td className="download-actions">
                          <button className="pdf-btn">
                            ▣ PDF
                          </button>
                          {" "}
                          <button className="excel-btn">
                            ▣ Excel
                          </button>
                        </td>
                        <td>
                          <button className="more-btn">
                            ⋮
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="pagination">
                  <button id="previousPage">
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
                  <button id="nextPage">
                    ›
                  </button>
                </div>
              </section>
              <div className="bottom-reports">
                <div className="bottom-card empty-report">
                  <div className="bottom-icon">
                    ▣
                  </div>
                  {" "}
                  <strong>
                    Belum ada laporan
                  </strong>
                  {" "}
                  <p>
                    Mulai dari membuat laporan pertama Anda
                  </p>
                  {" "}
                  <button type="button" className="primary-button" id="bottomCreateButton">
                    + Buat Laporan
                  </button>
                </div>
                <div className="bottom-card processing">
                  <h3>
                    Laporan Sedang Dibuat
                  </h3>
                  <div className="processing-content">
                    <div className="loading-circle">
                      ◉
                    </div>
                    <div>
                      <strong>
                        Laporan Bulanan Juni 2026
                      </strong>
                      {" "}
                      <small>
                        Sedang diproses... 45%
                      </small>
                    </div>
                  </div>
                  <div className="progress">
                    <span></span>
                  </div>
                  {" "}
                  <small>
                    Dibuat oleh Ahmad Fauzi (Operator){" "}
                    <br />
                    {" "}Mulai 26 Jun 2026, 10:32
                  </small>
                </div>
                <div className="bottom-card failed">
                  <h3>
                    Laporan Gagal
                  </h3>
                  <div className="failed-content">
                    <div className="failed-icon">
                      ×
                    </div>
                    <div>
                      <strong>
                        Laporan Kejadian - 20 Juni 2026
                      </strong>
                      {" "}
                      <small>
                        Gagal membuat laporan. Silakan coba lagi.
                      </small>
                      {" "}
                      <small>
                        Dibuat oleh Siti Aminah (Operator)
                      </small>
                      {" "}
                      <small>
                        26 Jun 2026, 08:14
                      </small>
                    </div>
                  </div>
                  {" "}
                  <button type="button" className="retry-button">
                    Coba Lagi
                  </button>
                </div>
              </div>
            </section>
            <aside className="create-panel">
              <h3>
                Buat Laporan
              </h3>
              <div className="form-section">
                <label>
                  1. Jenis Laporan
                </label>
                {" "}
                <div className="report-types">
                  <button type="button" className="report-type active" data-type="harian">
                    ▣{" "}
                    <span>
                      Harian
                    </span>
                  </button>
                  {" "}
                  <button type="button" className="report-type" data-type="mingguan">
                    ▣{" "}
                    <span>
                      Mingguan
                    </span>
                  </button>
                  {" "}
                  <button type="button" className="report-type" data-type="bulanan">
                    ▣{" "}
                    <span>
                      Bulanan
                    </span>
                  </button>
                  {" "}
                  <button type="button" className="report-type" data-type="kejadian">
                    ⚠{" "}
                    <span>
                      Kejadian
                    </span>
                  </button>
                </div>
              </div>
              <div className="form-section">
                <label>
                  2. Periode
                </label>
                {" "}
                <input type="text" defaultValue="26 Jun 2026 - 26 Jun 2026" id="reportPeriod" />
              </div>
              <div className="form-section">
                <label>
                  3. Wilayah / Sensor
                </label>
                {" "}
                <select id="reportArea">
                  <option>
                    Semarang (Semua)
                  </option>
                  <option>
                    Kali Garang
                  </option>
                  <option>
                    Kali Timo
                  </option>
                  <option>
                    Demak
                  </option>
                </select>
              </div>
              <div className="form-section">
                <label>
                  4. Isi yang Disertakan
                </label>
                {" "}
                <label className="checkbox-row">
                  <input type="checkbox" defaultChecked />
                  {" "}Ringkasan status
                </label>
                {" "}
                <label className="checkbox-row">
                  <input type="checkbox" defaultChecked />
                  {" "}Grafik
                </label>
                {" "}
                <label className="checkbox-row">
                  <input type="checkbox" defaultChecked />
                  {" "}{"Daftar alert & waktu respons"}
                </label>
                {" "}
                <label className="checkbox-row">
                  <input type="checkbox" />
                  {" "}Sensor bermasalah
                </label>
              </div>
              <div className="form-section">
                <label>
                  5. Jadwalkan (Opsional)
                </label>
                {" "}
                <label className="switch-row">
                  <input type="checkbox" id="scheduleSwitch" />
                  {" "}
                  <span className="switch"></span>
                  {" "}Kirim otomatis via email
                </label>
                {" "}
                <div className="schedule-fields" id="scheduleFields">
                  <div>
                    <label>
                      Frekuensi
                    </label>
                    {" "}
                    <select>
                      <option>
                        Tidak ada
                      </option>
                      <option>
                        Harian
                      </option>
                      <option>
                        Mingguan
                      </option>
                      <option>
                        Bulanan
                      </option>
                    </select>
                  </div>
                  <div>
                    <label>
                      Email tujuan
                    </label>
                    {" "}
                    <input type="email" placeholder="Pisahkan dengan koma" />
                  </div>
                </div>
              </div>
              <div className="create-actions">
                <button type="button" className="cancel-button" id="cancelReport">
                  Batal
                </button>
                {" "}
                <button type="button" className="primary-button" id="createReport">
                  Buat Laporan
                </button>
              </div>
              <div className="report-preview">
                <div className="preview-header">
                  <strong>
                    Laporan Harian
                  </strong>
                  {" "}
                  <small>
                    26 Jun 2026
                  </small>
                </div>
                <div className="preview-body">
                  <div className="preview-chart">
                    ▂▃▆▄▇▅▆▃▅
                  </div>
                  <div className="preview-stat">
                    96%
                  </div>
                </div>
                <div className="preview-actions">
                  <button>
                    Preview
                  </button>
                  {" "}
                  <button className="pdf-preview">
                    Unduh PDF
                  </button>
                  {" "}
                  <button className="excel-preview">
                    Unduh Excel
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
      <div className="toast" id="toast"></div>
    </>
  );
}

export default memo(Laporan);
