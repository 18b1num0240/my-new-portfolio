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
    color: string; // Added color property
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
        let starsFar: Star[] = [];
        let starsMid: Star[] = [];
        let starsNear: Star[] = [];
        let nebulas: Nebula[] = [];

        // mouse parallax (softer interpolation)
        const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
        const onMouseMove = (e: MouseEvent) => {
            mouse.tx = e.clientX / window.innerWidth;
            mouse.ty = e.clientY / window.innerHeight;
        };

        const dpr = () => Math.max(1, Math.min(2, window.devicePixelRatio || 1));
        const rand = (a: number, b: number) => a + Math.random() * (b - a);

        const getColor = (layer: 'far' | 'mid' | 'near') => {
            const r = Math.random();
            if (layer === 'far') {
                if (r < 0.9) return "#FFFFFF"; // mostly white for dust
                return r < 0.95 ? "#2DD4BF" : "#10B981";
            }
            if (r < 0.7) return "#FFFFFF";
            return r < 0.85 ? "#2DD4BF" : "#10B981";
        };

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
            const area = w * h;

            // Layer 3: THE DUST (Massive density)
            const farCount = Math.floor(area / 1200);
            starsFar = Array.from({ length: Math.max(800, Math.min(1500, farCount)) }).map(() => ({
                x: rand(0, w),
                y: rand(0, h),
                r: rand(0.2, 0.7),
                vx: rand(-0.01, 0.01),
                vy: rand(-0.01, 0.01),
                baseA: rand(0.05, 0.25),
                tw: rand(0.4, 0.8),
                ph: rand(0, Math.PI * 2),
                color: getColor('far'),
            }));

            // Layer 2: Midfield
            const midCount = Math.floor(area / 5000);
            starsMid = Array.from({ length: Math.max(200, Math.min(450, midCount)) }).map(() => ({
                x: rand(0, w),
                y: rand(0, h),
                r: rand(0.7, 1.3),
                vx: rand(-0.02, 0.02),
                vy: rand(-0.02, 0.02),
                baseA: rand(0.2, 0.5),
                tw: rand(0.7, 1.2),
                ph: rand(0, Math.PI * 2),
                color: getColor('mid'),
            }));

            // Layer 1: Foreground
            const nearCount = Math.floor(area / 15000);
            starsNear = Array.from({ length: Math.max(50, Math.min(100, nearCount)) }).map(() => ({
                x: rand(0, w),
                y: rand(0, h),
                r: rand(1.3, 2.2),
                vx: rand(-0.04, 0.04),
                vy: rand(-0.04, 0.04),
                baseA: rand(0.4, 0.8),
                tw: rand(1.0, 1.8),
                ph: rand(0, Math.PI * 2),
                color: getColor('near'),
            }));

            nebulas = Array.from({ length: 5 }).map(() => ({
                x: rand(0, w),
                y: rand(0, h),
                r: rand(Math.min(w, h) * 0.4, Math.min(w, h) * 0.8),
                a: rand(0.03, 0.08),
            }));
        };

        const wrap = (s: Star, w: number, h: number) => {
            if (s.x < -50) s.x = w + 50;
            if (s.x > w + 50) s.x = -50;
            if (s.y < -50) s.y = h + 50;
            if (s.y > h + 50) s.y = -50;
        };

        const drawNebula = (w: number, h: number) => {
            ctx.fillStyle = "#000000";
            ctx.fillRect(0, 0, w, h);

            ctx.save();
            ctx.globalCompositeOperation = "screen";
            ctx.filter = "blur(100px)";

            for (const n of nebulas) {
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
                g.addColorStop(0, `rgba(40, 20, 100, ${n.a})`);
                g.addColorStop(0.6, `rgba(10, 30, 80, ${n.a * 0.5})`);
                g.addColorStop(1, "rgba(0,0,0,0)");
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        };

        const updateAndDrawStars = (arr: Star[], t: number, dt: number, w: number, h: number, omegaBase: number, mouseFactor: number, glow: boolean) => {
            const cx = w / 2;
            const cy = h / 2;

            // smooth mouse update
            mouse.x += (mouse.tx - mouse.x) * 0.05;
            mouse.y += (mouse.ty - mouse.y) * 0.05;
            const mx = (mouse.x - 0.5) * 2;
            const my = (mouse.y - 0.5) * 2;

            for (const s of arr) {
                const dx = s.x - cx;
                const dy = s.y - cy;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;

                // 1. Base Rotation (Clockwise)
                const omega = omegaBase * (1 + 100 / dist);
                const vRotX = -dy * omega;
                const vRotY = dx * omega;

                // 2. Organic Flow Field (The "Random" Feel)
                // We use sine/cosine combinations with time to simulate shifting currents
                const noiseX = 0.015 * Math.sin(t * 0.4 + s.y * 0.002 + s.ph);
                const noiseY = 0.012 * Math.cos(t * 0.3 + s.x * 0.002 + s.ph);

                // 3. Individual "Brownian" Drift
                const driftX = s.vx * 0.5;
                const driftY = s.vy * 0.5;

                // 4. Mouse Parallax
                const vMouseX = mx * mouseFactor;
                const vMouseY = my * mouseFactor;

                // Total update
                s.x += (vRotX + noiseX + driftX + vMouseX) * dt;
                s.y += (vRotY + noiseY + driftY + vMouseY) * dt;

                wrap(s, w, h);

                // Depth Wobble (Changing size based on "distance" feel)
                const depthScale = 1 + 0.15 * Math.sin(t * 0.5 + s.ph);
                const currentRadius = s.r * (glow ? depthScale : 1);

                // Animation
                const twinkle = (glow ? 0.35 : 0.2) * Math.sin(t * s.tw + s.ph);
                const a = Math.max(0.05, Math.min(1, s.baseA + twinkle));

                ctx.save();
                ctx.globalAlpha = a;
                if (glow) {
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = s.color;
                }
                ctx.fillStyle = s.color;
                ctx.beginPath();
                ctx.arc(s.x, s.y, currentRadius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        };

        let last = performance.now();
        const loop = (now: number) => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const dt = Math.min(32, now - last);
            last = now;
            const t = now / 1000;

            drawNebula(w, h);

            // Layer 3 (Deep): Slowest rotation, highest density
            updateAndDrawStars(starsFar, t, dt, w, h, 0.00004, 0.01, false);

            // Layer 2 (Mid): Medium speed
            updateAndDrawStars(starsMid, t, dt, w, h, 0.00008, 0.025, false);

            // Layer 1 (Near): Fastest rotation, lowest density, glows
            updateAndDrawStars(starsNear, t, dt, w, h, 0.00015, 0.06, true);

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
