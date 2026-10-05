import { memo } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";
import { usePage, useLegacy } from "../hooks.js";
import { runLegacyScript } from "../legacy/script.js";

const PERMISSIONS = [
  ["Dashboard & Peta", true, true, true],
  ["Data Sensor", true, true, true],
  ["Pengaturan", true, false, false],
  ["Laporan", true, true, false],
  ["Pengguna & Role", true, false, false],
  ["Notifikasi & Kontak Darurat", true, true, false],
];

function PenggunaRole() {
  usePage({"title":"Pengguna & Role - IoT Flood Monitor","bodyClass":"","dataPage":"pengguna-role"});
  useLegacy(runLegacyScript);

  return (
    <>
      <header className="topbar">
        <div className="brand">
          <div className="brand-logo">
            <i className="fa-solid fa-droplet"></i>
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
          <i className="fa-solid fa-magnifying-glass"></i>
          {" "}
          <input type="text" id="globalSearch" placeholder="Cari lokasi,sensor,atau nama daerah..." />
        </div>
        <div className="top-info">
          <div className="weather">
            <i className="fa-solid fa-cloud"></i>
            {" "}
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
            <strong>
              Kota Semarang
            </strong>
          </div>
          <div className="date">
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
            <div className="promo-text">
              <strong>
                Bersama Teknologi,
                <br />
                {" "}Kita Lebih Siap
                <br />
                {" "}Menghadapi Banjir
              </strong>
              {" "}
              <small>
                ≋ IoT for a Safer Tomorrow
              </small>
            </div>
          </div>
        </aside>
        <main className="main-content">
          <div className="page-title">
            <div className="title-icon">
              <i className="fa-regular fa-address-card"></i>
            </div>
            <div>
              <h2>Pengguna &amp; Role</h2>
              <p>Kelola Pengguna, Hak Akses Dan Warga terdaftar</p>
            </div>
          </div>
          <div className="page-tabs">
            <button className="tab active">Pengguna</button>{" "}
            <button className="tab">Hak Akses Per Role</button>{" "}
            <button className="tab">Warga Terdaftar</button>
          </div>
          <section className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon user"><i className="fa-regular fa-user"></i></div>
              <div><small>Total Pengguna</small>{" "}<strong>3</strong></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon admin"><i className="fa-solid fa-crown"></i></div>
              <div><small>Admin</small>{" "}<strong>1</strong></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon operator"><i className="fa-solid fa-headset"></i></div>
              <div><small>Operator</small>{" "}<strong>1</strong></div>
            </div>
            <div className="stat-card">
              <div className="stat-icon field"><i className="fa-regular fa-user"></i></div>
              <div><small>Petugas Lapangan</small>{" "}<strong>1</strong></div>
            </div>
          </section>
          <section className="content-grid">
            <div className="left-area">
              <div className="filter-bar">
                <div className="search-box">
                  <i className="fa-solid fa-magnifying-glass"></i>{" "}
                  <input type="text" id="userSearch" placeholder="Cari nama atau email..." />
                </div>{" "}
                <select id="roleFilter">
                  <option value="all">Role</option>
                  <option value="Administrator">Admin</option>
                  <option value="Operator">Operator</option>
                  <option value="Petugas">Petugas Lapangan</option>
                </select>{" "}
                <select id="statusFilter">
                  <option value="all">Status</option>
                  <option value="Aktif">
                    Aktif
                  </option>
                  <option value="Nonaktif">
                    Nonaktif
                  </option>
                </select>
                {" "}
                <button className="reset-button" id="resetFilter">
                  Reset Filter
                </button>
              </div>
              <div className="table-card">
                <div className="table-wrapper">
                  <table id="userTable">
                    <thead>
                      <tr>
                        <th width="35"></th>
                        <th>
                          Nama
                        </th>
                        <th>
                          Email/Nomor HP
                        </th>
                        <th>
                          Role
                        </th>
                        <th>
                          Wilayah Tugas
                        </th>
                        <th>
                          Status
                        </th>
                        <th>
                          Terakhir Login
                        </th>
                        <th>
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-role="Administrator" data-status="Aktif">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <div className="user-name">
                            <div className="avatar">
                              AD
                            </div>
                            {" "}
                            <span>
                              Admin
                            </span>
                          </div>
                        </td>
                        <td>
                          admin@floodmonitor.id
                          <br />
                          {" "}081234567890
                        </td>
                        <td>
                          <span className="role admin-role">
                            Admin
                          </span>
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                        <td>
                          -
                        </td>
                        <td className="actions">
                          <button className="icon-btn edit-btn">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          {" "}
                          <button className="icon-btn more-btn">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </button>
                        </td>
                      </tr>
                      <tr data-role="Operator" data-status="Aktif">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <div className="user-name">
                            <div className="avatar">
                              OB
                            </div>
                            {" "}
                            <span>
                              Operator Banjir
                            </span>
                          </div>
                        </td>
                        <td>
                          operator@floodmonitor.id
                          <br />
                          {" "+"081234567891"}
                        </td>
                        <td>
                          <span className="role operator-role">
                            Operator
                          </span>
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                        <td>
                          -
                        </td>
                        <td className="actions">
                          <button className="icon-btn edit-btn">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          {" "}
                          <button className="icon-btn more-btn">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </button>
                        </td>
                      </tr>
                      <tr data-role="Petugas" data-status="Aktif">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <div className="user-name">
                            <div className="avatar">
                              PL
                            </div>
                            {" "}
                            <span>
                              Petugas Lapangan
                            </span>
                          </div>
                        </td>
                        <td>
                          petugas@floodmonitor.id
                          <br />
                          {" "+"081234567892"}
                        </td>
                        <td>
                          <span className="role field-role">
                            Petugas
                            <br />
                            Lapangan
                          </span>
                        </td>
                        <td>
                          -
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                        <td>
                          -
                        </td>
                        <td className="actions">
                          <button className="icon-btn edit-btn">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          {" "}
                          <button className="icon-btn more-btn">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </button>
                        </td>
                      </tr>
                      <tr data-role="Operator" data-status="Aktif" hidden>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <div className="user-name">
                            <div className="avatar">
                              RL
                            </div>
                            {" "}
                            <span>
                              Rina Lestari
                            </span>
                          </div>
                        </td>
                        <td>
                          rina@bpbd.go.id
                          <br />
                          {" "}+62 813 9999 8877
                        </td>
                        <td>
                          <span className="role operator-role">
                            Operator
                          </span>
                        </td>
                        <td>
                          Kali Timo
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                        <td>
                          26 Jun 2026
                        </td>
                        <td className="actions">
                          <button className="icon-btn edit-btn">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          {" "}
                          <button className="icon-btn more-btn">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </button>
                        </td>
                      </tr>
                      <tr data-role="Petugas Lapangan" data-status="Aktif">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <div className="user-name">
                            <div className="avatar">
                              AF
                            </div>
                            {" "}
                            <span>
                              Ahmad Fauzi
                            </span>
                          </div>
                        </td>
                        <td>
                          ahmad@lapangan.go.id
                          <br />
                          {" "}+62 856 1111 2222
                        </td>
                        <td>
                          <span className="role field-role">
                            Petugas
                            <br />
                            Lapangan
                          </span>
                        </td>
                        <td>
                          Semarang Timur
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                        <td>
                          26 Jun 2026
                        </td>
                        <td className="actions">
                          <button className="icon-btn edit-btn">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          {" "}
                          <button className="icon-btn more-btn">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </button>
                        </td>
                      </tr>
                      <tr data-role="Operator" data-status="Aktif">
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>
                          <div className="user-name">
                            <div className="avatar">
                              DL
                            </div>
                            {" "}
                            <span>
                              Dewi Maharani
                            </span>
                          </div>
                        </td>
                        <td>
                          dewi@operator.go.id
                          <br />
                          {" "}+62 812 7777 6666
                        </td>
                        <td>
                          <span className="role operator-role">
                            Operator
                          </span>
                        </td>
                        <td>
                          Kali Banjir
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                        <td>
                          26 Jun 2026
                        </td>
                        <td className="actions">
                          <button className="icon-btn edit-btn">
                            <i className="fa-regular fa-pen-to-square"></i>
                          </button>
                          {" "}
                          <button className="icon-btn more-btn">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-footer">
                  <span>
                    Menampilkan 1 - 3 dari 3 Pengguna
                  </span>
                  {" "}
                  <div className="pagination">
                    <button className="active">
                      1
                    </button>
                  </div>
                </div>
              </div>
              <div className="bottom-grid">
                <section className="permission-card bottom-card" aria-labelledby="permissionTitle">
                  <h3 id="permissionTitle">Hak Akses per Role</h3>
                  <div className="permission-table-wrap">
                    <table className="permission-table">
                      <thead>
                        <tr>
                          <th scope="col">Fitur</th>
                          <th scope="col">Admin</th>
                          <th scope="col">Operator</th>
                          <th scope="col">Petugas Lapangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PERMISSIONS.map(([feature, admin, operator, fieldWorker]) => (
                          <tr key={feature}>
                            <th scope="row">{feature}</th>
                            {[admin, operator, fieldWorker].map((allowed, index) => (
                              <td key={index} aria-label={allowed ? "Diizinkan" : "Tidak diizinkan"}>
                                {allowed ? "✓" : "-"}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
                <div className="bottom-card">
                  <h3>
                    Warga Terdaftar
                  </h3>
                  <table className="citizen-table">
                    <thead>
                      <tr>
                        <th>
                          Wilayah
                        </th>
                        <th>
                          Jumlah Warga
                        </th>
                        <th>
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          Semarang
                        </td>
                        <td>
                          2.345
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Kali Garang
                        </td>
                        <td>
                          682
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Kali Timo
                        </td>
                        <td>
                          573
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Semarang Timur
                        </td>
                        <td>
                          421
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Kali Banjir Kanal Barat
                        </td>
                        <td>
                          398
                        </td>
                        <td>
                          <span className="status active">
                            Aktif
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <aside className="right-panel">
              <div className="form-card">
                <h3>
                  Form Tambah Pengguna
                </h3>
                {" "}
                <label>
                  Nama Lengkap
                </label>
                {" "}
                <input id="newName" type="text" placeholder="Masukkan nama lengkap" />
                {" "}
                <label>
                  Email / No. HP
                </label>
                {" "}
                <input id="newContact" type="text" placeholder="contoh: nama@domain.com atau 08xxxxxxxxxx" />
                {" "}
                <label>
                  Role
                </label>
                {" "}
                <select id="newRole">
                  <option>
                    Pilih role
                  </option>
                  <option>
                    Admin
                  </option>
                  <option>
                    Operator
                  </option>
                  <option>
                    Petugas Lapangan
                  </option>
                </select>
                {" "}
                <label>
                  Wilayah Tugas
                </label>
                {" "}
                <select id="newArea">
                  <option>
                    Pilih wilayah
                  </option>
                  <option>
                    Semua Wilayah
                  </option>
                  <option>
                    Kota Semarang
                  </option>
                  <option>
                    Kali Garang
                  </option>
                  <option>
                    Kali Timo
                  </option>
                  <option>
                    Semarang Timur
                  </option>
                  <option>
                    Kali Banjir
                  </option>
                </select>
                {" "}
                <label className="checkbox-label">
                  <input type="checkbox" id="sendInvitation" />
                  {" "}Kirim undangan setelah disimpan
                </label>
                {" "}
                <div className="form-buttons">
                  <button className="cancel-btn" id="cancelUser">
                    Batal
                  </button>
                  {" "}
                  <button className="primary-btn" id="sendInvite">
                    Kirim Undangan
                  </button>
                </div>
              </div>
              <div className="form-card invitation-card">
                <h3>
                  Undangan Terkirim
                </h3>
                <table>
                  <thead>
                    <tr>
                      <th>
                        Email / No. HP
                      </th>
                      <th>
                        Role
                      </th>
                      <th>
                        Dikirim
                      </th>
                      <th>
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        agus@domain.com
                      </td>
                      <td>
                        Operator
                      </td>
                      <td>
                        26 Jun 2026
                      </td>
                      <td>
                        Terkirim
                      </td>
                    </tr>
                    <tr>
                      <td>
                        sari@domain.com
                      </td>
                      <td>
                        Petugas lapangan
                      </td>
                      <td>
                        26 Jun 2026
                      </td>
                      <td>
                        Kadaluarsa
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="toast success-toast">
                <i className="fa-solid fa-check"></i>
                {" "}
                <div>
                  <strong>
                    Undangan terkirim
                  </strong>
                  {" "}
                  <span>
                    Undangan untuk agus@domain.com telah terkirim.
                  </span>
                </div>
              </div>
              <div className="toast warning-toast">
                <i className="fa-solid fa-triangle-exclamation"></i>
                {" "}
                <div>
                  <strong>
                    Undangan kadaluarsa
                  </strong>
                  {" "}
                  <span>
                    Undangan untuk rina@domain.com telah kadaluarsa.
                  </span>
                </div>
                {" "}
                <button>
                  Kirim Ulang
                </button>
              </div>
              <div className="toast danger-toast">
                <i className="fa-solid fa-circle-xmark"></i>
                {" "}
                <div>
                  <strong>
                    Nonaktifkan Pengguna
                  </strong>
                  {" "}
                  <span>
                    Apakah Anda yakin ingin menonaktifkan pengguna Budi Santoso?
                  </span>
                </div>
                <div className="danger-actions">
                  <button>
                    Batal
                  </button>
                  {" "}
                  <button>
                    Nonaktifkan
                  </button>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>
      <div id="toastMessage" className="system-toast"></div>
    </>
  );
}

export default memo(PenggunaRole);
