import { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "../components/SideNav.jsx";
import AccountMenu from "../components/AccountMenu.jsx";

export default function DetailAlert() {
  const [status, setStatus] = useState("Belum ditangani");
  const [note, setNote] = useState("");

  const handleSaveNote = () => {
    if (!note.trim()) return;

    alert("Catatan berhasil disimpan.");
    setNote("");
  };

  const handleStatus = () => {
    setStatus(
      status === "Belum ditangani"
        ? "Sedang ditangani"
        : "Belum ditangani"
    );
  };

  return (
    <div className="alert-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="alert-topbar">

        <div className="alert-brand">

          <div className="alert-brand-icon">
            💧
          </div>

          <div>
            <h1>IoT Flood Monitor</h1>
            <span>Early Warning System</span>
          </div>

        </div>


        <div className="alert-search">

          <span>⌕</span>

          <input
            type="text"
            placeholder="Cari lokasi,sensor,atau nama daerah..."
          />

        </div>


        <div className="alert-top-right">

          <div className="alert-weather">

            <div className="weather-cloud">
              ☁
            </div>

            <div>
              <strong>28°C</strong>
              <span>Berawan</span>
            </div>

          </div>


          <div className="alert-city">
            Kota Semarang
          </div>


          <div className="alert-date">

            <strong>12:52</strong>

            <span>
              10 Sep 2026
            </span>

          </div>


          <div className="alert-notification">

            🔔

            <b>
              3
            </b>

          </div>


          <AccountMenu />

        </div>

      </header>


      {/* =====================================================
          PAGE LAYOUT
      ===================================================== */}

      <div className="alert-layout">


        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="alert-sidebar">

          <SideNav />


          <div className="alert-sidebar-banner">

            <img
              src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=500&q=80"
              alt="Banjir"
            />

            <div className="alert-banner-overlay">

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


        {/* ===================================================
            MAIN
        =================================================== */}

        <main className="alert-main">


          {/* =================================================
              BREADCRUMB
          ================================================= */}

          <div className="alert-back">

            <Link to="/notifikasi-alert">
              &lt; Kembali ke Daftar Alert
            </Link>

          </div>


          {/* =================================================
              TITLE
          ================================================= */}

          <section className="alert-title-row">

            <div className="alert-title-icon">
              ♧
            </div>

            <div className="alert-title-text">

              <h2>
                Detail Alert &amp; Tindak Lanjut
              </h2>

              <span>
                Tinggi air mencapai 248 cm di Kali Banjir Kanal Barat
              </span>

            </div>


            <div className="alert-title-status">

              <span className="not-handled">
                {status}
              </span>

              <span className="danger-level">
                Level: Bahaya
              </span>

              <small>
                26 Jun 2026 10:48
              </small>

            </div>

          </section>


          {/* =================================================
              ALERT SUMMARY
          ================================================= */}

          <section className="alert-summary">

            <div className="summary-item">

              <div className="summary-image water-summary">
                ≋
              </div>

              <div>
                <small>Sensor</small>

                <strong>
                  #BNA-003
                </strong>

                <span>
                  Kali Banjir Kanal Barat
                </span>
              </div>

            </div>


            <div className="summary-item">

              <div className="summary-icon">
                📍
              </div>

              <div>

                <small>
                  Lokasi
                </small>

                <strong>
                  Kali Banjir Kanal Barat Semarang
                </strong>

                <span>
                  -6.9876, 110.4167
                </span>

              </div>

            </div>


            <div className="summary-item">

              <div className="summary-image">
                ≋
              </div>

              <div>

                <small>
                  Jenis
                </small>

                <strong>
                  Tinggi Air
                </strong>

              </div>

            </div>


            <div className="summary-item">

              <div className="summary-image">
                ≋
              </div>

              <div>

                <small>
                  Nilai Terkini
                </small>

                <strong>
                  248 cm
                </strong>

                <span>
                  Ambang 200 cm
                </span>

              </div>

            </div>

          </section>


          {/* =================================================
              CONTENT GRID
          ================================================= */}

          <div className="alert-content-grid">


            {/* ===============================================
                LEFT CONTENT
            =============================================== */}

            <div className="alert-left">


              {/* -----------------------------------------------
                  MAP + CHART
              ----------------------------------------------- */}

              <div className="top-two-cards">


                {/* MAP */}

                <section className="alert-card map-card">

                  <h3>
                    Lokasi di Peta
                  </h3>

                  <div className="alert-map">

                    <img
                      src="https://tile.openstreetmap.org/14/13723/8274.png"
                      alt="Lokasi Kali Banjir Kanal Barat"
                    />

                    <div className="map-location-name">
                      Kali Banjir Kanal Barat
                    </div>

                    <div className="alert-map-marker">
                      ⚠
                    </div>

                    <div className="map-zoom">

                      <button>+</button>
                      <button>−</button>
                      <button>◎</button>

                    </div>

                    <span className="map-scale">
                      2 km
                    </span>

                  </div>

                </section>


                {/* CHART */}

                <section className="alert-card alert-chart-card">

                  <div className="chart-heading">

                    <h3>
                      Grafik Tinggi Muka Air (cm)
                    </h3>

                    <div className="chart-mini-legend">

                      <span>
                        <i className="red-dot"></i>
                        BNA-003 (Bahaya)
                      </span>

                      <span>
                        <i className="orange-dot"></i>
                        BRG-012 (Siaga)
                      </span>

                      <span>
                        <i className="yellow-dot"></i>
                        BRG-012 (Waspada)
                      </span>

                    </div>

                  </div>


                  <div className="small-chart">

                    <div className="small-y-axis">

                      <span>350</span>
                      <span>300</span>
                      <span>250</span>
                      <span>200</span>
                      <span>150</span>
                      <span>100</span>
                      <span>50</span>
                      <span>0</span>

                    </div>


                    <div className="small-chart-area">

                      <div className="grid-lines"></div>

                      <div className="chart-line red-line"></div>
                      <div className="chart-line orange-line"></div>
                      <div className="chart-line yellow-line"></div>

                    </div>


                    <div className="small-x-axis">

                      <span>04.00</span>
                      <span>08.00</span>
                      <span>12.00</span>
                      <span>16.00</span>
                      <span>20.00</span>
                      <span>24.00</span>

                    </div>

                  </div>

                </section>

              </div>


              {/* ===============================================
                  DETAIL ALERT + TIMELINE
              =============================================== */}

              <div className="middle-two-cards">


                {/* DETAIL */}

                <section className="alert-card detail-info-card">

                  <h3>
                    Detail Informasi Alert
                  </h3>


                  <InfoRow
                    icon="◷"
                    label="Waktu Terjadi"
                    value="26 Jun 2026 10:48 (16 menit lalu)"
                  />

                  <InfoRow
                    icon="↗"
                    label="Nilai Pemicu"
                    value="248 cm"
                  />

                  <InfoRow
                    icon="〰"
                    label="Ambang Batas"
                    value="200 cm"
                  />

                  <InfoRow
                    icon="♟"
                    label="Selisih"
                    value="+48 cm (di atas ambang)"
                  />

                  <InfoRow
                    icon="✣"
                    label="Status Tindak Lanjut"
                    value={status}
                  />

                  <InfoRow
                    icon="♙"
                    label="Dibuat oleh"
                    value="Sistem (Sensor)"
                  />

                  <InfoRow
                    icon="♙"
                    label="Petugas Ditugaskan"
                    value="-"
                  />


                  <div className="recommendation">

                    <h4>
                      Rekomendasi Tindakan
                    </h4>

                    <ol>

                      <li>
                        Segera lakukan pengecekan lapangan di lokasi sensor.
                      </li>

                      <li>
                        Koordinasi dengan petugas terdekat untuk memastikan kondisi di lapangan.
                      </li>

                      <li>
                        Update status tindak lanjut setelah penanganan dilakukan.
                      </li>

                    </ol>

                  </div>

                </section>


                {/* TIMELINE */}

                <section className="alert-card timeline-card">

                  <h3>
                    Timeline Aktivitas
                  </h3>


                  <div className="timeline">


                    <TimelineItem
                      type="danger"
                      icon="!"
                      title="Alert baru masuk"
                      text={
                        <>
                          26 Jun 2026 10:48
                          <br />
                          Tinggi air mencapai 248 cm di Kali Banjir Kanal Barat.
                        </>
                      }
                    />


                    <TimelineItem
                      type="warning"
                      icon="!"
                      title="Rekomendasi Tindakan"
                      text={
                        <>
                          26 Jun 2026 10:50
                          <br />
                          Segera lakukan pengecekan lapangan dan koordinasi dengan petugas.
                        </>
                      }
                    />


                    <TimelineItem
                      type="normal"
                      icon="!"
                      title="Tindak Lanjut"
                      text={
                        <>
                          Menunggu penanganan
                        </>
                      }
                    />

                  </div>

                </section>

              </div>


              {/* ===============================================
                  RECOMMENDATION + ATTACHMENT
              =============================================== */}

              <div className="bottom-left-grid">


                <section className="recommendation-large">

                  <h3>
                    Rekomendasi Tindakan
                  </h3>

                  <ol>

                    <li>
                      Segera lakukan pengecekan lapangan di lokasi sensor.
                    </li>

                    <li>
                      Koordinasi dengan petugas terdekat untuk memastikan kondisi di lapangan.
                    </li>

                    <li>
                      Update status tindak lanjut setelah penanganan dilakukan.
                    </li>

                  </ol>

                </section>


                <section className="attachment-card">

                  <h3>
                    Lampiran
                  </h3>

                  <div className="attachment">

                    <img
                      src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=200&q=80"
                      alt="Lampiran"
                    />

                    <div>

                      <strong>
                        Foto Lokasi.jpg
                      </strong>

                      <span>
                        2.4 MB
                      </span>

                    </div>

                  </div>

                </section>

              </div>

            </div>


            {/* ===============================================
                RIGHT CONTENT
            =============================================== */}

            <aside className="alert-right">


              {/* AKSI CEPAT */}

              <section className="right-card quick-action">

                <h3>
                  Aksi Cepat
                </h3>

                <button className="primary-action">
                  Tandai Diproses
                </button>

                <button>
                  Tugaskan Petugas
                </button>

                <button onClick={handleStatus}>
                  Ubah Status
                </button>

              </section>


              {/* INFORMASI LOKASI */}

              <section className="right-card location-info">

                <h3>
                  ⚡ Informasi Lokasi
                </h3>

                <div className="location-info-body">

                  <img
                    src="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=300&q=80"
                    alt="Lokasi"
                  />

                  <div>

                    <strong>
                      Kali Banjir Kanal Barat
                    </strong>

                    <span>
                      Semarang (Semarang)
                    </span>

                    <small>
                      -6.9876, 110.4167
                    </small>

                  </div>

                </div>

                <button className="view-map-btn">
                  Lihat di Peta
                </button>

              </section>


              {/* CATATAN */}

              <section className="right-card note-card">

                <h3>
                  Catatan
                </h3>

                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Tambahkan catatan penanganan..."
                  maxLength={500}
                />

                <div className="note-footer">

                  <span>
                    {note.length}/500
                  </span>

                  <button onClick={handleSaveNote}>
                    Simpan
                  </button>

                </div>

              </section>


              {/* RIWAYAT CATATAN */}

              <section className="right-card notes-history">

                <h3>
                  Catatan
                </h3>


                <AlertNote
                  icon="!"
                  type="danger"
                  text="Tinggi air mencapai 248 cm"
                  time="26 Jun 2026 10:48"
                  status="Bahaya"
                />


                <AlertNote
                  icon="!"
                  type="warning"
                  text="Tinggi air 165 cm"
                  time="26 Jun 2026 08:17"
                  status="Siaga"
                />


                <AlertNote
                  icon="!"
                  type="normal"
                  text="Tinggi air 132 cm"
                  time="25 Jun 2026 21:03"
                  status="Waspada"
                />


                <a className="all-history">
                  Lihat Semua Riwayat →
                </a>

              </section>

            </aside>

          </div>

        </main>

      </div>

    </div>
  );
}


/* =========================================================
   INFO ROW
========================================================= */

function InfoRow({
  icon,
  label,
  value,
}) {
  return (
    <div className="info-row">

      <span className="info-row-icon">
        {icon}
      </span>

      <span className="info-row-label">
        {label}
      </span>

      <span className="info-row-value">
        {value}
      </span>

    </div>
  );
}


/* =========================================================
   TIMELINE
========================================================= */

function TimelineItem({
  type,
  icon,
  title,
  text,
}) {
  return (
    <div className="timeline-item">

      <div className={`timeline-icon ${type}`}>
        {icon}
      </div>

      <div className="timeline-box">

        <strong>
          {title}
        </strong>

        <span>
          {text}
        </span>

      </div>

    </div>
  );
}


/* =========================================================
   ALERT NOTE
========================================================= */

function AlertNote({
  icon,
  type,
  text,
  time,
  status,
}) {
  return (
    <div className="alert-note">

      <div className={`note-alert-icon ${type}`}>
        {icon}
      </div>

      <div className="note-alert-text">

        <strong>
          {text}
        </strong>

        <span>
          {time}
        </span>

      </div>

      <span className={`note-status ${type}`}>
        {status}
      </span>

    </div>
  );
}