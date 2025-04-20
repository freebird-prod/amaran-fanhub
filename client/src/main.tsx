import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import '@/App.css'

// Import fonts directly in main.tsx
import { Toaster } from "@/components/ui/toaster";

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <App />
  </>
);
