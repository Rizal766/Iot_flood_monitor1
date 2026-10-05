import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

function Avatar({ profile, className }) {
  const [failedPhoto, setFailedPhoto] = useState("");
  const imageFailed = failedPhoto === profile.photo;

  const initial = (profile.name || "?").trim().charAt(0).toUpperCase();

  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full bg-[var(--fm-blue)] font-semibold text-white ${className}`}
      aria-label={`Foto profil ${profile.name || ""}`}
    >
      {profile.photo && !imageFailed ? (
        <img
          className="h-full w-full object-cover"
          src={profile.photo}
          alt=""
          onError={() => setFailedPhoto(profile.photo)}
        />
      ) : (
        initial
      )}
    </span>
  );
}

function ProfileDialog({ dialogRef, onSaved }) {
  const { session, updateProfile, checkPassword } = useAuth();
  const [form, setForm] = useState({});
  const [photo, setPhoto] = useState(null); // null = tidak berubah, "" = dihapus
  const [error, setError] = useState("");

  // Dipanggil dari luar setiap dialog dibuka.
  useEffect(() => {
    const dlg = dialogRef.current;
    const reset = () => {
      setForm({ name: session.name, email: session.email || "", phone: session.phone || "", role: session.role, old: "", pw: "", pw2: "" });
      setPhoto(null);
      setError("");
    };
    dlg.addEventListener("fm-open", reset);
    return () => dlg.removeEventListener("fm-open", reset);
  }, [dialogRef, session]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const preview = photo === null ? session.photo : photo;

  function onFile(e) {
    const f = e.target.files[0];
    if (!f) return;
    const img = new Image();
    const url = URL.createObjectURL(f);
    img.onload = () => {
      const c = document.createElement("canvas");
      const n = 160;
      const side = Math.min(img.width, img.height);
      c.width = c.height = n;
      c.getContext("2d").drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, n, n);
      setPhoto(c.toDataURL("image/jpeg", 0.85));
      URL.revokeObjectURL(url);
    };
    img.src = url;
  }

  async function submit(e) {
    e.preventDefault();
    const name = (form.name || "").trim();
    const email = (form.email || "").trim();
    const phone = (form.phone || "").trim();
    if (!name) return setError("Nama tidak boleh kosong.");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return setError("Format email tidak valid.");
    if (!/^\+?[\d\s-]{8,16}$/.test(phone)) return setError("No. telepon harus 8-15 digit.");
    const patch = { name, email, phone };
    if (photo !== null) patch.photo = photo;

    if (form.old || form.pw || form.pw2) {
      if ((form.pw || "").length < 6) return setError("Password baru minimal 6 karakter.");
      if (form.pw !== form.pw2) return setError("Konfirmasi password tidak sama.");
      if (!(await checkPassword(form.old))) return setError("Password saat ini salah.");
      patch.password = form.pw;
    }
    updateProfile(patch);
    dialogRef.current.close();
    onSaved("Profil berhasil diperbarui.");
  }

  const close = () => dialogRef.current.close();

  return (
    <dialog
      ref={dialogRef}
      className="profile-edit-dialog m-auto max-h-[calc(100vh-32px)] w-[min(440px,_calc(100vw_-_24px))] rounded-xl border-0 p-0 text-[#26303b] shadow-[0_24px_60px_rgba(10,24,44,0.3)] backdrop:bg-[rgba(10,24,44,0.45)]"
      onClick={(e) => { if (e.target === dialogRef.current) close(); }}
    >
      <form id="pfForm" className="flex flex-col gap-3 px-[22px] py-5 font-[Segoe_UI,system-ui,sans-serif]" noValidate onSubmit={submit}>
        <header className="flex items-center justify-between">
          <h2 className="m-0 text-lg">Edit Profil</h2>
          <button type="button" className="cursor-pointer border-0 bg-transparent text-2xl leading-none text-[#66727f]" aria-label="Tutup" onClick={close}>×</button>
        </header>
        <div className="flex items-center gap-[14px]">
          <Avatar profile={{ name: form.name, photo: preview }} className="size-16 text-[26px]" />
          <div className="flex flex-wrap items-center gap-2">
            <label className="inline-flex h-[34px] cursor-pointer items-center justify-center rounded-[7px] border border-[#dfe5ec] bg-white px-[14px] text-xs font-semibold text-[#26303b] hover:bg-[#f1f6ff]">
              Ganti foto
              <input type="file" accept="image/*" hidden onChange={onFile} />
            </label>
            <button type="button" className="inline-flex h-[34px] cursor-pointer items-center justify-center rounded-[7px] border border-[#dfe5ec] bg-white px-[14px] text-xs font-semibold text-[#26303b] hover:bg-[#f1f6ff]" onClick={() => setPhoto("")}>Hapus foto</button>
            <small className="basis-full text-[11px] text-[#7a8592]">JPG/PNG, otomatis diperkecil.</small>
          </div>
        </div>
        <label className="flex flex-col gap-[5px] text-xs font-semibold">Nama lengkap<input className="h-[38px] rounded-[7px] border border-[#dfe5ec] px-3 font-normal focus:border-[var(--fm-blue)] focus:outline-2 focus:outline-[var(--fm-blue)]" value={form.name || ""} onChange={set("name")} autoComplete="name" /></label>
        <label className="flex flex-col gap-[5px] text-xs font-semibold">Email<input className="h-[38px] rounded-[7px] border border-[#dfe5ec] px-3 font-normal focus:border-[var(--fm-blue)] focus:outline-2 focus:outline-[var(--fm-blue)]" type="email" value={form.email || ""} onChange={set("email")} autoComplete="email" /></label>
        <label className="flex flex-col gap-[5px] text-xs font-semibold">No. Telepon<input className="h-[38px] rounded-[7px] border border-[#dfe5ec] px-3 font-normal focus:border-[var(--fm-blue)] focus:outline-2 focus:outline-[var(--fm-blue)]" type="tel" value={form.phone || ""} onChange={set("phone")} autoComplete="tel" /></label>
        <label className="flex flex-col gap-[5px] text-xs font-semibold">Role<input className="h-[38px] rounded-[7px] border border-[#dfe5ec] bg-[#f3f6f9] px-3 font-normal text-[#7a8592]" value={form.role || ""} disabled readOnly /></label>
        <fieldset className="m-0 flex flex-col gap-[10px] rounded-lg border border-[#dfe5ec] px-3 pb-3 pt-[10px]">
          <legend className="px-1.5 text-xs font-bold">Ganti password <small className="font-normal text-[#7a8592]">(kosongkan jika tidak diganti)</small></legend>
          <label className="flex flex-col gap-[5px] text-xs font-semibold">Password saat ini<input className="h-[38px] rounded-[7px] border border-[#dfe5ec] px-3 font-normal focus:border-[var(--fm-blue)] focus:outline-2 focus:outline-[var(--fm-blue)]" type="password" value={form.old || ""} onChange={set("old")} autoComplete="current-password" /></label>
          <label className="flex flex-col gap-[5px] text-xs font-semibold">Password baru<input className="h-[38px] rounded-[7px] border border-[#dfe5ec] px-3 font-normal focus:border-[var(--fm-blue)] focus:outline-2 focus:outline-[var(--fm-blue)]" type="password" value={form.pw || ""} onChange={set("pw")} autoComplete="new-password" /></label>
          <label className="flex flex-col gap-[5px] text-xs font-semibold">Ulangi password baru<input className="h-[38px] rounded-[7px] border border-[#dfe5ec] px-3 font-normal focus:border-[var(--fm-blue)] focus:outline-2 focus:outline-[var(--fm-blue)]" type="password" value={form.pw2 || ""} onChange={set("pw2")} autoComplete="new-password" /></label>
        </fieldset>
        <p className="m-0 min-h-4 text-xs text-[#b42318]" role="alert">{error}</p>
        <footer className="flex justify-end gap-2">
          <button type="button" className="inline-flex h-[34px] cursor-pointer items-center justify-center rounded-[7px] border border-[#dfe5ec] bg-white px-[14px] text-xs font-semibold text-[#26303b] hover:bg-[#f1f6ff]" onClick={close}>Batal</button>
          <button type="submit" className="inline-flex h-[34px] cursor-pointer items-center justify-center rounded-[7px] border border-[var(--fm-blue)] bg-[var(--fm-blue)] px-[14px] text-xs font-semibold text-white hover:brightness-[.93]">Simpan</button>
        </footer>
      </form>
    </dialog>
  );
}

export default function AccountMenu() {
  const { session, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState("");
  const rootRef = useRef(null);
  const dialogRef = useRef(null);
  const toastTimer = useRef(null);

  useEffect(() => {
    const onDoc = (e) => { if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  function showToast(msg) {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  }

  function onClick(e) {
    const act = e.target.closest("[data-act]");
    if (act) {
      setOpen(false);
      if (act.dataset.act === "logout" && window.confirm("Keluar dari akun ini?")) {
        logout();
        navigate("/login", { replace: true });
      }
      if (act.dataset.act === "profile") {
        dialogRef.current.dispatchEvent(new Event("fm-open"));
        dialogRef.current.showModal();
      }
      if (act.dataset.act === "security") {
        navigate("/profil-keamanan");
      }
      return;
    }
    if (!e.target.closest(".fm-account-dropdown")) setOpen((o) => !o);
  }

  if (!session) return null;
  return (
    <>
      <div
        ref={rootRef}
        className={`relative z-[1] flex shrink-0 cursor-pointer items-center gap-[9px] rounded-lg px-2 py-1 text-[#26303b] hover:bg-[#eef4ff] ${open ? "z-[3001] bg-[#eef4ff]" : ""}`}
        id="fmAccount"
        tabIndex={0}
        role="button"
        onClick={onClick}
      >
        <Avatar profile={session} className="size-[34px] text-sm" />
        <div className="flex min-w-0 flex-col leading-tight max-[640px]:hidden">
          <b className="whitespace-nowrap text-xs font-semibold">{session.name}</b>
          <small className="text-[11px] text-[#66727f]">{session.role}</small>
        </div>
        <span className="text-[13px] text-[#66727f] max-[640px]:hidden">⌄</span>
        <div className={`fm-account-dropdown absolute right-0 top-[calc(100%+8px)] z-[3100] min-w-[190px] rounded-lg border border-[#dfe5ec] bg-white p-1.5 text-[#26303b] shadow-[0_10px_28px_rgba(20,32,51,0.16)] ${open ? "flex flex-col" : "hidden"}`}>
          <div className="mb-1 flex flex-col border-b border-[#dfe5ec] px-[10px] py-2"><b className="text-xs">{session.name}</b><small className="text-[11px] text-[#6b7785]">{session.email}</small></div>
          <button type="button" className="w-full cursor-pointer rounded-[5px] border-0 bg-transparent px-[10px] py-2 text-left text-xs font-medium text-[#26303b] hover:bg-[#eef4ff]" data-act="profile">Edit Profil</button>
          <button type="button" className="w-full cursor-pointer rounded-[5px] border-0 bg-transparent px-[10px] py-2 text-left text-xs font-medium text-[#26303b] hover:bg-[#eef4ff]" data-act="security">Profil &amp; Keamanan</button>
          <button type="button" className="w-full cursor-pointer rounded-[5px] border-0 bg-transparent px-[10px] py-2 text-left text-xs font-semibold text-[#c62828] hover:bg-[#fdecec]" data-act="logout">Keluar</button>
        </div>
      </div>
      <ProfileDialog dialogRef={dialogRef} onSaved={showToast} />
      <div className={`fixed bottom-[26px] left-1/2 z-[5000] -translate-x-1/2 rounded-lg bg-[#14243a] px-[18px] py-[11px] text-[13px] font-medium text-white transition duration-200 ${toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"}`}>{toast}</div>
    </>
  );
}
