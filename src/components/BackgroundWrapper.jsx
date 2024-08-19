import React, { useEffect, useRef } from 'react';
import { TweenLite, Circ } from 'gsap';

const BackgroundWrapper = ({ children }) => {
  const largeHeaderRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    let width, height, ctx, points, target;

    // Initialize canvas and points
    const initHeader = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      const largeHeader = largeHeaderRef.current;
      largeHeader.style.height = height + 'px';

      const canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext('2d');

      // Create points
      points = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + (Math.random() * width) / 20;
          const py = y + (Math.random() * height) / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // Find the closest points
      points.forEach((p1) => {
        const closest = [];
        points.forEach((p2) => {
          if (p1 !== p2) {
            if (closest.length < 5) {
              closest.push(p2);
            } else {
              for (let i = 0; i < 5; i++) {
                if (getDistance(p1, p2) < getDistance(p1, closest[i])) {
                  closest[i] = p2;
                  break;
                }
              }
            }
          }
        });
        p1.closest = closest;
      });

      // Assign circles to points
      points.forEach((point) => {
        const c = new Circle(
          point,
          2 + Math.random() * 2,
          'rgba(255,255,255,0.3)'
        );
        point.circle = c;
      });
    };

    const getDistance = (p1, p2) => {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    };

    // Circle class
    class Circle {
      constructor(pos, rad, color) {
        this.pos = pos;
        this.radius = rad;
        this.color = color;
        this.active = 0;
      }

      draw() {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      }
    }

    const shiftPoint = (p) => {
      TweenLite.to(p, 1 + Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => shiftPoint(p),
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      points.forEach((point) => {
        const distance = getDistance(target, point);
        if (Math.abs(distance) < 4000) {
          point.active = 0.3;
          point.circle.active = 0.6;
        } else if (Math.abs(distance) < 20000) {
          point.active = 0.1;
          point.circle.active = 0.3;
        } else if (Math.abs(distance) < 40000) {
          point.active = 0.02;
          point.circle.active = 0.1;
        } else {
          point.active = 0;
          point.circle.active = 0;
        }

        drawLines(point);
        point.circle.draw();
      });

      requestAnimationFrame(animate);
    };

    const drawLines = (point) => {
      if (!point.active) return;
      point.closest.forEach((closestPoint) => {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(closestPoint.x, closestPoint.y);
        ctx.strokeStyle = `rgba(156,217,249,${point.active})`;
        ctx.stroke();
      });
    };

    const addListeners = () => {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('resize', resize);
    };

    const mouseMove = (e) => {
      target.x =
        (e.pageX || e.clientX) -
        (document.body.scrollLeft || document.documentElement.scrollLeft);
      target.y =
        (e.pageY || e.clientY) -
        (document.body.scrollTop || document.documentElement.scrollTop);
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeaderRef.current.style.height = height + 'px';
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    };

    // Init
    initHeader();
    animate();
    points.forEach((point) => shiftPoint(point));
    addListeners();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed" ref={largeHeaderRef}>
      <canvas id="demo-canvas" ref={canvasRef}>
        <div className="z-50">{children}</div>
      </canvas>
    </div>
  );
};

export default BackgroundWrapper;
