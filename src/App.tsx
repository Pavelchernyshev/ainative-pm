import { useEffect, useRef } from "react";
import { ArrowRight, Globe, Instagram, Twitter } from "lucide-react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const FADE_MS = 500;
const FADE_OUT_LEAD_S = 0.55;
const RESTART_DELAY_MS = 100;

export default function App() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const opacityRef = useRef(0);
  const fadingOutRef = useRef(false);
  const restartTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelFade = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    // rAF-based fade; resumes from the current opacity rather than snapping.
    const fadeTo = (target: number) => {
      cancelFade();
      const from = opacityRef.current;
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / FADE_MS, 1);
        const value = from + (target - from) * t;
        opacityRef.current = value;
        video.style.opacity = String(value);
        rafRef.current = t < 1 ? requestAnimationFrame(step) : null;
      };
      rafRef.current = requestAnimationFrame(step);
    };

    const handleLoaded = () => {
      fadingOutRef.current = false;
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      if (video.duration - video.currentTime <= FADE_OUT_LEAD_S && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const handleEnded = () => {
      cancelFade();
      opacityRef.current = 0;
      video.style.opacity = "0";
      restartTimerRef.current = window.setTimeout(() => {
        video.currentTime = 0;
        void video.play();
        fadingOutRef.current = false;
        fadeTo(1);
      }, RESTART_DELAY_MS);
    };

    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    // If the video was already loaded from cache before listeners attached.
    if (video.readyState >= 2) handleLoaded();

    return () => {
      cancelFade();
      if (restartTimerRef.current !== null) window.clearTimeout(restartTimerRef.current);
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden flex flex-col">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
        style={{ opacity: 0 }}
      />

      {/* Navigation */}
      <nav className="relative z-20 pl-6 pr-6 py-6">
        <div className="rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-white">
              <Globe size={24} />
              <span
                className="font-semibold text-lg"
                style={{ fontFamily: "'Brunson', sans-serif" }}
              >
                Asme
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Features
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Pricing
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                About
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Perfectly Nineties', serif" }}
        >
          Built for the curious
        </h1>

        <div className="max-w-xl w-full space-y-4">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent outline-none text-white placeholder:text-white/40 text-base"
            />
            <button className="bg-white rounded-full p-3 text-black" aria-label="Subscribe">
              <ArrowRight size={20} />
            </button>
          </div>

          <p className="text-white text-sm leading-relaxed px-4">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and
            never miss out on exciting updates.
          </p>

          <div className="flex justify-center">
            <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Manifesto
            </button>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button
          aria-label="Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Instagram size={20} />
        </button>
        <button
          aria-label="Twitter"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Twitter size={20} />
        </button>
        <button
          aria-label="Website"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
        >
          <Globe size={20} />
        </button>
      </div>
    </div>
  );
}
