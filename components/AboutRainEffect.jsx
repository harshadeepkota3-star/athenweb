import React, { useEffect, useRef } from 'react';

/**
 * AboutRainEffect Component
 * Renders a premium, ultra-smooth diagonal teal rainfall animation using HTML5 Canvas.
 * Optimized for high-refresh-rate displays (120Hz/144Hz) using requestAnimationFrame.
 */
const AboutRainEffect = () => {
    const canvasRef = useRef(null);
    const requestRef = useRef();
    const particles = useRef([]);

    // Configuration for a cinematic, premium look
    const RAIN_COLOR = '#4cd0ca';
    const VELOCITY_X = 1.2; // Slower diagonal drift
    const VELOCITY_Y = 3.5; // Slower fall speed
    const STREAK_LENGTH = 30; // Longer streaks for a more cinematic feel
    const STREAK_WIDTH = 1.5; // Slightly thicker for better visibility
    const OPACITY = 0.5; // Increased base opacity

    const initParticles = (width, height) => {
        // Density calculation: roughly 1 drop per 10000 pixels
        const count = Math.floor((width * height) / 10000);
        const newParticles = [];
        for (let i = 0; i < count; i++) {
            newParticles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                l: Math.random() * STREAK_LENGTH + 10,
                s: Math.random() * 0.5 + 0.5, // speed multiplier for depth effect
                o: Math.random() * OPACITY + 0.1
            });
        }
        particles.current = newParticles;
    };

    const draw = (ctx, width, height) => {
        ctx.clearRect(0, 0, width, height);
        ctx.strokeStyle = RAIN_COLOR;
        ctx.lineWidth = STREAK_WIDTH;
        ctx.lineCap = 'round';

        particles.current.forEach(p => {
            ctx.beginPath();
            ctx.globalAlpha = p.o;
            ctx.moveTo(p.x, p.y);
            // Draw diagonal line
            ctx.lineTo(p.x + (p.l * (VELOCITY_X / VELOCITY_Y)), p.y + p.l);
            ctx.stroke();

            // Update position
            p.x += VELOCITY_X * p.s;
            p.y += VELOCITY_Y * p.s;

            // Reset if out of bounds
            if (p.y > height) {
                p.y = -p.l;
                p.x = Math.random() * (width + width * (VELOCITY_X / VELOCITY_Y)) - (width * (VELOCITY_X / VELOCITY_Y));
            }
            if (p.x > width) {
                p.x = -p.l;
                p.y = Math.random() * height;
            }
        });
    };

    const animate = (time) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        draw(ctx, canvas.width, canvas.height);
        requestRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Re-initialize particles to match new screen size density
        initParticles(canvas.width, canvas.height);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Set initial size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        initParticles(canvas.width, canvas.height);
        requestRef.current = requestAnimationFrame(animate);

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="about-rain-canvas"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 5,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};

export default AboutRainEffect;
