import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export const triggerBlessingShower = () => {
  // Celebration burst of flower petals and gold sparkles
  const end = Date.now() + 2 * 1000;
  const colors = ['#e88b99', '#f4b4bd', '#d4af37', '#ffd700', '#6b1426', '#ff8c00', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 7,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 0.7 },
      colors: colors,
      shapes: ['circle'],
      scalar: 1.25,
      ticks: 220,
    });
    confetti({
      particleCount: 7,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 0.7 },
      colors: colors,
      shapes: ['circle'],
      scalar: 1.25,
      ticks: 220,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
};

export default function PetalCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Festive rose, marigold & gold particles
    const petalCount = 42;
    const petals = [];

    class Petal {
      constructor() {
        this.reset();
        this.y = Math.random() * height; // initial spread
      }

      reset() {
        this.x = Math.random() * width;
        this.y = -20 - Math.random() * 60;
        this.size = 12 + Math.random() * 16;
        this.speedY = 0.9 + Math.random() * 1.5;
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.9;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 1.8;
        this.flip = Math.random();
        this.flipSpeed = 0.018 + Math.random() * 0.025;
        this.opacity = 0.55 + Math.random() * 0.35;
        // Rich traditional hues
        const hues = [
          { r: 232, g: 139, b: 153 }, // Lotus Pink
          { r: 255, g: 140, b: 0 },   // Marigold Orange
          { r: 255, g: 195, b: 40 },  // Haldi Yellow
          { r: 212, g: 175, b: 55 },  // 24k Gold
          { r: 150, g: 25, b: 45 },   // Royal Crimson Rose
        ];
        this.color = hues[Math.floor(Math.random() * hues.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.012) * 1.1 + this.speedX;
        this.rotation += this.rotationSpeed;
        this.flip += this.flipSpeed;

        if (this.y > height + 30 || this.x < -30 || this.x > width + 30) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.scale(1, Math.cos(this.flip));

        // Organic petal shape
        ctx.beginPath();
        ctx.moveTo(0, -this.size / 2);
        ctx.bezierCurveTo(
          this.size / 1.8,
          -this.size / 2,
          this.size / 1.4,
          this.size / 3,
          0,
          this.size
        );
        ctx.bezierCurveTo(
          -this.size / 1.4,
          this.size / 3,
          -this.size / 1.8,
          -this.size / 2,
          0,
          -this.size / 2
        );

        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.35)';
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((petal) => {
        petal.update();
        petal.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3,
      }}
    />
  );
}
