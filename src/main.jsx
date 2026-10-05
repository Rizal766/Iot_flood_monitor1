import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/* StrictMode sengaja tidak dipakai: logika halaman lama (script.js) memanipulasi DOM langsung
   dan tidak aman dijalankan dua kali saat mode development. */
createRoot(document.getElementById("root")).render(<App />);
