import { useState } from "react";
import AccountMenu from "../components/AccountMenu.jsx";
import SideNav from "../components/SideNav.jsx";

export default function DetailSensor() {
  const [activeChart, setActiveChart] = useState("water");
  const [period, setPeriod] = useState("24");

  return (
    <div className="detail-page">

      {/* =====================================================
          TOPBAR
      ===================================================== */}
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

          <div className="city">
            Kota Semarang
          </div>

          <div className="datetime">
            <strong>12:52</strong>
            <span>10 Sep 2026</span>
          </div>

          <div className="notification-icon">
            🔔
            <b>3</b>
          </div>

          <AccountMenu />

        </div>
      </header>


      {/* =====================================================
          LAYOUT
      ===================================================== */}
      <div className="layout">

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

              <small>
                〰 IoT for a Safer Tomorrow
              </small>
            </div>

          </div>
        </aside>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <main className="main-content detail-main">

          {/* =================================================
              SENSOR HEADER
          ================================================= */}
          <section className="sensor-header">

            <div className="sensor-danger-icon">
              ⚠
            </div>

            <div className="sensor-title">

              <h2>
                #BNA-003
              </h2>

              <strong>
                Kali Banjir Kanal Barat
              </strong>

              <small>
                Sungai Mudi &nbsp;&nbsp; Kec. Semarang Barat
              </small>

            </div>

            <div className="header-divider"></div>

            <div className="status-danger">
              <span>⚠</span>
              Bahaya
            </div>

            <div className="status-online">
              <span></span>
              Online
            </div>

            <div className="last-update">
              <strong>
                Update terakhir
              </strong>

              <span>
                26 Jun 2026 10:02
              </span>
            </div>

            <button className="header-button">
              ✎ Edit
            </button>

            <button className="header-button">
              📍 Lihat di Peta
            </button>

            <button className="header-button">
              ♧ Ekspor Data
            </button>

          </section>


          {/* =================================================
              TOP INFORMATION
          ================================================= */}
          <section className="sensor-info-grid">
            <div className="sensor-measurements">
              <div className="info-card water-card">
                <div className="info-icon water">≋</div>
                <div className="info-copy">
                  <span>Tinggi Air Saat Ini</span>
                  <strong>248 cm</strong>
                  <small className="red-value">↑ +12 cm/jam</small>
                </div>
                <div className="danger-number">248 cm</div>
              </div>

              <div className="info-card distance-card">
                <div className="big-warning-icon">⚠</div>
                <div className="info-copy">
                  <span>Jarak ke Ambang Bahaya</span>
                  <strong>0 cm</strong>
                  <small className="danger-text">(sudah melewati batas)</small>
                </div>
              </div>

              <div className="threshold-card">
                <h3>Ambang Batas</h3>
                <div className="threshold-bar">
                  <span className="normal"></span>
                  <span className="warning"></span>
                  <span className="alert"></span>
                  <span className="danger"></span>
                </div>
                <div className="threshold-labels">
                  <div>
                    <b>Normal</b>
                    <span>&lt;78</span>
                  </div>
                  <div>
                    <b>Waspada</b>
                    <span>79-150</span>
                  </div>
                  <div>
                    <b>Siaga</b>
                    <span>151-220</span>
                  </div>
                  <div>
                    <b>Bahaya</b>
                    <span>&gt;220</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="device-card">
              <div className="device-header">
                <strong>☑ Informasi Perangkat</strong>
                <span>Baik</span>
              </div>

              <DeviceRow icon="🔋" title="Baterai" value="92%" />
              <DeviceRow icon="▥" title="Pengisian Panel Surya" value="76%" />
              <DeviceRow icon="◉" title="Sinyal" value="4G (Kuat)" />
              <DeviceRow icon="🌡" title="Suhu Perangkat" value="31°C" />

              <div className="device-divider"></div>

              <DeviceRow icon="▣" title="Versi Firmware" value="v1.2.6" />
              <DeviceRow icon="▦" title="Tanggal Pasang" value="15 Apr 2026" />
              <DeviceRow icon="♙" title="Penanggung Jawab" value="Andi Saputra" />
              <DeviceRow icon="📍" title="Koordinat" value="-6.9847, 110.4148" />
              <DeviceRow icon="▧" title="Foto Lokasi" value="" />

              <img
                className="device-photo"
                src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=200&q=80"
                alt="Lokasi sensor"
              />
            </div>
          </section>


          {/* =================================================
              CHART
          ================================================= */}
          <section className="chart-card">

            <div className="chart-tabs">

              <button
                className={
                  activeChart === "water"
                    ? "active"
                    : ""
                }
                onClick={() => setActiveChart("water")}
              >
                Tinggi Air
              </button>

              <button
                className={
                  activeChart === "rain"
                    ? "active"
                    : ""
                }
                onClick={() => setActiveChart("rain")}
              >
                Curah Hujan (P2)
              </button>

            </div>


            <div className="period-buttons">

              {["24", "7", "30", "custom"].map((item) => (
                <button
                  key={item}
                  className={
                    period === item
                      ? "active"
                      : ""
                  }
                  onClick={() => setPeriod(item)}
                >
                  {item === "24"
                    ? "24 Jam"
                    : item === "7"
                    ? "7 Hari"
                    : item === "30"
                    ? "30 Hari"
                    : "Kustom"}
                </button>
              ))}

            </div>


            {/* LEGEND */}
            <div className="chart-legend">

              <span>
                → Tinggi Air
              </span>

              <span className="legend-normal">
                — Normal &lt;78
              </span>

              <span className="legend-warning">
                — Waspada 79-150
              </span>

              <span className="legend-alert">
                — Siaga 151-220
              </span>

              <span className="legend-danger">
                — Bahaya &gt;220
              </span>

            </div>


            {/* WATER CHART */}
            {activeChart === "water" && (
              <div className="water-chart">

                <div className="chart-y-axis">
                  <span>350</span>
                  <span>280</span>
                  <span>220</span>
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>

                <div className="chart-area">

                  <div className="horizontal-line l350"></div>
                  <div className="horizontal-line l280"></div>
                  <div className="horizontal-line l220"></div>
                  <div className="horizontal-line l150"></div>
                  <div className="horizontal-line l100"></div>
                  <div className="horizontal-line l50"></div>

                  <div className="danger-line"></div>

                  <div className="water-fill"></div>

                  <div className="current-point">
                    <span></span>
                    <label>
                      Tinggi Air 248 cm
                    </label>
                  </div>

                </div>

                <div className="chart-x-axis">
                  <span>00.00</span>
                  <span>02.00</span>
                  <span>04.00</span>
                  <span>06.00</span>
                  <span>08.00</span>
                  <span>10.00</span>
                  <span>12.00</span>
                  <span>14.00</span>
                  <span>16.00</span>
                  <span>18.00</span>
                  <span>20.00</span>
                  <span>22.00</span>
                  <span>00.00</span>
                  <span>02.00</span>
                </div>

              </div>
            )}


            {/* RAIN CHART */}
            {activeChart === "rain" && (
              <div className="rain-chart">

                <div className="rain-bars">

                  {[
                    20, 35, 15, 40, 55, 35, 25,
                    48, 20, 60, 30, 42, 25, 55,
                    32, 20, 40, 28, 48, 35, 25,
                    42, 30, 52, 38
                  ].map((height, index) => (
                    <div
                      key={index}
                      className="rain-bar"
                      style={{
                        height: `${height}px`,
                      }}
                    />
                  ))}

                </div>

              </div>
            )}

          </section>


          {/* =================================================
              BOTTOM GRID
          ================================================= */}
          <section className="bottom-grid">

            {/* RIWAYAT */}
            <div className="history-card">

              <div className="section-title">

                <h3>
                  Riwayat Alert (5 Terakhir)
                </h3>

                <a href="#">
                  Lihat Semua →
                </a>

              </div>

              <table>

                <thead>
                  <tr>
                    <th>Waktu</th>
                    <th>Status</th>
                    <th>Tinggi Air</th>
                    <th>Keterangan</th>
                  </tr>
                </thead>

                <tbody>

                  <AlertRow
                    time="26 Jun 2026 10:02"
                    status="Bahaya"
                    height="248 cm"
                    description="Melewati ambang batas bahaya"
                    type="danger"
                  />

                  <AlertRow
                    time="26 Jun 2026 08:45"
                    status="Siaga"
                    height="216 cm"
                    description="Mendekati ambang siaga"
                    type="alert"
                  />

                  <AlertRow
                    time="26 Jun 2026 06:12"
                    status="Waspada"
                    height="162 cm"
                    description="Meningkat signifikan (+18 cm/jam)"
                    type="warning"
                  />

                  <AlertRow
                    time="26 Jun 2026 03:20"
                    status="Normal"
                    height="68 cm"
                    description="Kondisi stabil"
                    type="normal"
                  />

                  <AlertRow
                    time="26 Jun 2026 01:05"
                    status="Normal"
                    height="52 cm"
                    description="Kondisi stabil"
                    type="normal"
                  />

                </tbody>

              </table>

            </div>


            {/* LOKASI PETA */}
            <div className="location-card">

              <div className="section-title">
                <h3>
                  Lokasi di Peta
                </h3>
              </div>

              <div className="mini-map">

                <img
                  src="https://tile.openstreetmap.org/14/13723/8274.png"
                  alt="Peta lokasi sensor"
                />

                <div className="map-marker">
                  ⚠
                </div>

                <div className="map-controls">
                  <button>+</button>
                  <button>−</button>
                  <button>◉</button>
                </div>

                <span className="map-label">
                  Kali Banjir Kanal Barat
                </span>

                <span className="map-city">
                  Kota Semarang
                </span>

              </div>

            </div>

          </section>

        </main>

      </div>

    </div>
  );
}


/* =========================================================
   DEVICE ROW
========================================================= */

function DeviceRow({
  icon,
  title,
  value,
}) {
  return (
    <div className="device-row">

      <span className="device-row-icon">
        {icon}
      </span>

      <span className="device-row-title">
        {title}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* =========================================================
   ALERT ROW
========================================================= */

function AlertRow({
  time,
  status,
  height,
  description,
  type,
}) {
  return (
    <tr>

      <td>
        {time}
      </td>

      <td>
        <span className={`table-status ${type}`}>
          <i></i>
          {status}
        </span>
      </td>

      <td>
        {height}
      </td>

      <td>
        {description}
      </td>

    </tr>
  );
}