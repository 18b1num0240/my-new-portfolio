"use client";

import { useEffect, useRef } from "react";

type Star = {
    x: number;
    y: number;
    r: number;
    vx: number;
    vy: number;
    baseA: number;
    tw: number;
    ph: number;
};

type Nebula = {
    x: number;
    y: number;
    r: number;
    a: number;
};

export default function StarBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let raf = 0;
        let starsNear: Star[] = [];
        let starsFar: Star[] = [];
        let nebulas: Nebula[] = [];

        // mouse parallax (optional but makes it feel like ujjwal)
        const mouse = { x: 0.5, y: 0.5 };
        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX / window.innerWidth;
            mouse.y = e.clientY / window.innerHeight;
        };

        const dpr = () => Math.max(1, Math.min(2, window.devicePixelRatio || 1));

        const rand = (a: number, b: number) => a + Math.random() * (b - a);

        const resize = () => {
            const ratio = dpr();
            canvas.width = Math.floor(window.innerWidth * ratio);
            canvas.height = Math.floor(window.innerHeight * ratio);
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
            init();
        };

        const init = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            const farCount = Math.floor((w * h) / 5000); // More stars
            starsFar = Array.from({ length: Math.max(200, Math.min(800, farCount)) }).map(() => ({
                x: rand(0, w),
                y: rand(0, h),
                r: rand(0.4, 1.1),
                vx: rand(-0.035, 0.035),
                vy: rand(-0.02, 0.02),
                baseA: rand(0.18, 0.55),
                tw: rand(0.6, 1.4),
                ph: rand(0, Math.PI * 2),
            }));

            const nearCount = Math.floor((w * h) / 15000); // More near stars
            starsNear = Array.from({ length: Math.max(50, Math.min(200, nearCount)) }).map(() => ({
                x: rand(0, w),
                y: rand(0, h),
                r: rand(1.0, 2.0),
                vx: rand(-0.09, 0.09),
                vy: rand(-0.06, 0.06),
                baseA: rand(0.35, 0.9),
                tw: rand(0.8, 1.6),
                ph: rand(0, Math.PI * 2),
            }));

            // 🌫 Nebula blobs
            nebulas = Array.from({ length: 6 }).map(() => ({
                x: rand(-w * 0.2, w * 1.2),
                y: rand(-h * 0.2, h * 1.2),
                r: rand(Math.min(w, h) * 0.35, Math.min(w, h) * 0.7),
                a: rand(0.05, 0.12),
            }));
        };

        const wrap = (s: Star, w: number, h: number) => {
            if (s.x < -20) s.x = w + 20;
            if (s.x > w + 20) s.x = -20;
            if (s.y < -20) s.y = h + 20;
            if (s.y > h + 20) s.y = -20;
        };

        const drawNebula = (w: number, h: number) => {
            // base
            ctx.fillStyle = "#000000"; // Pure Black
            ctx.fillRect(0, 0, w, h);

            // fog blobs
            ctx.save();
            ctx.globalCompositeOperation = "screen";
            ctx.filter = "blur(80px)";

            for (const n of nebulas) {
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
                // Deeper cosmic colors
                g.addColorStop(0, `rgba(50, 20, 120, ${n.a})`); // Deep Purple
                g.addColorStop(0.5, `rgba(20, 50, 150, ${n.a * 0.7})`); // Deep Blue
                g.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.filter = "none";
            ctx.globalCompositeOperation = "source-over";
            ctx.restore();
        };

        /**
         * ✅ Гол өөрчлөлт:
         * Random drift (vx/vy) дээр нэмээд
         * төвийн эргэн тойронд эргүүлэх "rotation field" нэмсэн.
         */
        const updateAndDrawStars = (arr: Star[], t: number, dt: number, w: number, h: number, glow: boolean) => {
            const cx = w / 2;
            const cy = h / 2;

            // mouse influence (subtle)
            const mx = (mouse.x - 0.5) * 2; // -1..1
            const my = (mouse.y - 0.5) * 2;

            for (const s of arr) {
                // --- rotation field around center ---
                const dx = s.x - cx;
                const dy = s.y - cy;
                const dist = Math.max(60, Math.sqrt(dx * dx + dy * dy));

                // omega = эргэх хурд (маш жижиг байх ёстой!)
                // dist ихсэх тусам багасна → гоё “галактик салхи” мэдрэмж
                const omegaBase = 0.00018; // 👈 эндээр overall rotation хурдыг тохируулна
                const omega =
                    (omegaBase * (200 / dist)) *
                    (1 + 0.35 * Math.sin(t * 0.6 + s.ph)); // бага зэрэг “random” мэт

                // rotation velocity: (-dy, dx) * omega
                const vRotX = -dy * omega;
                const vRotY = dx * omega;

                // mouse parallax drift
                const vMouseX = mx * 0.02;
                const vMouseY = my * 0.02;

                // total velocity
                const vx = s.vx + vRotX + vMouseX;
                const vy = s.vy + vRotY + vMouseY;

                // dt-г миллисекундээр авч байгаа тул жижигхэн үржүүлэгч хэрэглэнэ
                // (dt ~ 16ms үед хөдөлгөөн зөөлөн)
                s.x += vx * dt;
                s.y += vy * dt;

                wrap(s, w, h);

                // twinkle
                const twinkle = 0.35 * Math.sin(t * s.tw + s.ph);
                const a = Math.max(0.05, Math.min(1, s.baseA + twinkle));

                ctx.save();
                ctx.globalAlpha = a;

                if (glow) {
                    ctx.shadowBlur = 12;
                    ctx.shadowColor = "rgba(255,255,255,0.6)";
                }

                ctx.fillStyle = "white";
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        };

        let last = performance.now();

        const loop = (now: number) => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            const dt = Math.min(40, now - last);
            last = now;
            const t = now / 1000;

            drawNebula(w, h);

            // far stars
            updateAndDrawStars(starsFar, t, dt, w, h, false);

            // near stars
            updateAndDrawStars(starsNear, t, dt, w, h, true);

            raf = requestAnimationFrame(loop);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove);

        resize();
        raf = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
