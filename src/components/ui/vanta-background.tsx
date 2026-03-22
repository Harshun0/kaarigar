import { useEffect, useRef } from "react";

declare global {
  interface Window {
    VANTA?: {
      WAVES?: (options: Record<string, unknown>) => { destroy: () => void };
    };
    THREE?: unknown;
  }
}

interface VantaBackgroundProps {
  className?: string;
  color?: number;
  waveSpeed?: number;
  zoom?: number;
}

const THREE_SCRIPT_ID = "vanta-three-script";
const VANTA_SCRIPT_ID = "vanta-waves-script";
const THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
const VANTA_SRC = "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js";

let scriptsPromise: Promise<void> | null = null;

function loadScript(id: string, src: string) {
  return new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(id) as HTMLScriptElement | null;

    if (existingScript) {
      if (existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.addEventListener("load", () => {
      script.dataset.loaded = "true";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
    document.head.appendChild(script);
  });
}

function ensureVantaScripts() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.VANTA?.WAVES && window.THREE) {
    return Promise.resolve();
  }

  if (!scriptsPromise) {
    scriptsPromise = loadScript(THREE_SCRIPT_ID, THREE_SRC)
      .then(() => loadScript(VANTA_SCRIPT_ID, VANTA_SRC))
      .catch((error) => {
        scriptsPromise = null;
        throw error;
      });
  }

  return scriptsPromise;
}

export default function VantaBackground({
  className = "",
  color = 0x060606,
  waveSpeed = 1,
  zoom = 1,
}: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    let cancelled = false;

    ensureVantaScripts()
      .then(() => {
        if (cancelled || !vantaRef.current || !window.VANTA?.WAVES) {
          return;
        }

        vantaEffect.current?.destroy();
        vantaEffect.current = window.VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          color,
          waveSpeed,
          zoom,
        });
      })
      .catch(() => {
        // Keep the fallback background color when external scripts fail.
      });

    return () => {
      cancelled = true;
      vantaEffect.current?.destroy();
      vantaEffect.current = null;
    };
  }, [color, waveSpeed, zoom]);

  return (
    <div
      ref={vantaRef}
      className={`absolute inset-0 h-full w-full pointer-events-none ${className}`}
      style={{ zIndex: 0, backgroundColor: "#0a0a0a" }}
      aria-hidden="true"
    />
  );
}
