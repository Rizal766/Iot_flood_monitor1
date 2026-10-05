import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";
import { usePage } from "../hooks.js";
import "./Login.css";

const DEMO = [
  { label: "Administrator", u: "admin@floodmonitor.id", p: "admin123" },
  { label: "Operator", u: "operator@floodmonitor.id", p: "operator123" },
  { label: "Petugas", u: "petugas@floodmonitor.id", p: "petugas123" },
];

export default function Login() {
  usePage({ title: "Login - IoT Flood Monitor" });
  const { session, login } = useAuth();
  const navigate = useNavigate();
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(false);

  if (session) return <Navigate to="/dashboard" replace />;

  async function onSubmit(e) {
    e.preventDefault();
    if (!identity.trim() || !password) {
      setError("Email/No. Telepon dan password wajib diisi.");
      return;
    }
    setBusy(true);
    const s = await login(identity, password);
    if (s) {
      navigate("/dashboard", { replace: true });
      return;
    }
    setError("Email/No. Telepon atau password salah.");
    setBusy(false);
  }

  return (
    <div className="login-page">
      <main className="wrap">
        <svg className="logo" viewBox="0 0 34 42" aria-hidden="true">
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#7fd0f7" />
              <stop offset="1" stopColor="#2b7ce0" />
            </linearGradient>
          </defs>
          <path d="M17 1C17 1 3 17 3 27a14 14 0 0 0 28 0C31 17 17 1 17 1Z" fill="url(#g)" />
          <path d="M10 27a7 7 0 0 0 5 6.7" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" opacity=".85" />
        </svg>

        <form className="card" noValidate onSubmit={onSubmit}>
          <h1>IoT Flood Monitor</h1>
          <div className="tag">Early Warning System</div>

          <div className={"error" + (error ? " show" : "")} role="alert">{error}</div>

          <div className="field">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2.5" y="5" width="19" height="14" rx="1.5" />
              <path d="m3 6.5 9 7 9-7" />
            </svg>
            <input
              placeholder="Email / No.Telepon"
              autoComplete="username"
              aria-label="Email atau nomor telepon"
              autoFocus
              value={identity}
              onChange={(e) => setIdentity(e.target.value)}
            />
          </div>

          <div className="field">
            <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="5" y="10.5" width="14" height="10" rx="1.8" />
              <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
              <circle cx="12" cy="15.5" r="1.1" fill="currentColor" />
            </svg>
            <input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              autoComplete="current-password"
              aria-label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className={"eye" + (showPw ? " on" : "")}
              aria-label={showPw ? "Sembunyikan password" : "Tampilkan password"}
              onClick={() => setShowPw((v) => !v)}
            >
              <svg className="show" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <svg className="off" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
                <path d="M3 3l18 18" />
              </svg>
            </button>
          </div>

          <button className="submit" type="submit" disabled={busy}>{busy ? "Memeriksa..." : "Login"}</button>
          <button className="forgot" type="button" onClick={() => setNotice((v) => !v)}>Lupa Password?</button>
          <div className={"notice" + (notice ? " show" : "")}>Untuk reset password, hubungi administrator sistem.</div>
        </form>

        <div className="demo">
          Akun demo:
          {DEMO.map((d) => (
            <button
              key={d.label}
              type="button"
              onClick={() => { setIdentity(d.u); setPassword(d.p); setError(""); }}
            >
              {d.label}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
