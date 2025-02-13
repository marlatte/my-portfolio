'use client';

import { useEffect } from 'react';

type Point = {
  x: number;
  y: number;
};

type Dot = Point & {
  radius: number;
  velocity: { x: number; y: number };
  color: string;
};

export default function DotField() {
  useEffect(() => {
    const canvas = document.getElementById('dot-field') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 92;

    const primary = 'rgb(86, 170, 236)';
    const secondary = 'rgb(52, 211, 153)';
    const linkColor = 'rgb(34, 130, 106)';
    const dotColors = [primary, primary, primary, secondary];
    const numberOfParticles = Math.floor(canvas.width * 0.25);

    const dotsArray: Dot[] = new Array(numberOfParticles);
    for (let i = 0; i < dotsArray.length; i++) {
      const radius = Math.random() * 1.5 + 0.5;
      const dot: Dot = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        velocity: { x: Math.random() - 0.5, y: Math.random() - 0.5 },
        color: dotColors[Math.floor(Math.random() * dotColors.length)],
      };
      dotsArray[i] = dot;
    }

    const mousePosition = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    function drawDot(dot: Dot, distanceFromMouse: number) {
      const fadeStrength = canvas.width < 600 ? 1.7 : 2.1;
      const distanceRatio = distanceFromMouse / (canvas.width / fadeStrength);

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = dot.color.slice(0, -1) + `,${1 - distanceRatio})`;
      ctx.fill();
    }

    function getDistance(a: Dot, b: Dot | Point) {
      return ((a.x - b.x) ** 2 + (a.y - b.y) ** 2) ** 0.5;
    }

    function drawLines(dotOne: Dot, index: number, distanceFromMouse: number) {
      for (let j = 0; j < dotsArray.length; j++) {
        // Skip if dotOne & dotTwo point to same dot.
        if (index === j) continue;

        const dotTwo = dotsArray[j];
        const linkMultiplier = j === 0 ? 0.08 : 0.05;
        const minLinkDistance = canvas.width * linkMultiplier;
        const mouseLinkRadius = canvas.width * 0.25;

        const distanceFromOtherDot = getDistance(dotOne, dotTwo);

        if (
          distanceFromMouse < mouseLinkRadius &&
          distanceFromOtherDot < minLinkDistance
        ) {
          ctx.beginPath();
          ctx.moveTo(dotOne.x, dotOne.y);
          ctx.lineTo(dotTwo.x, dotTwo.y);

          const distanceRatio = distanceFromMouse / mouseLinkRadius;

          ctx.strokeStyle = linkColor.slice(0, -1) + `, ${1 - distanceRatio})`;
          ctx.closePath();
          ctx.stroke();
        }
      }
    }

    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Reserve first dot for mouse-tracking
      for (let i = 1; i < dotsArray.length; i++) {
        const dot = dotsArray[i];
        const bounceX = dot.x >= canvas.width || dot.x <= 0;
        const bounceY = dot.y >= canvas.height || dot.y <= 0;

        if (bounceX) dot.velocity.x *= -1;
        if (bounceY) dot.velocity.y *= -1;

        dot.x += dot.velocity.x;
        dot.y += dot.velocity.y;

        const distanceFromMouse = getDistance(dot, mousePosition);
        if (canvas.width > 600) drawLines(dot, i, distanceFromMouse);
        drawDot(dot, distanceFromMouse);
      }

      // Only show mouse-tracking dot on desktop
      if (canvas.width > 1000) {
        const mouseDot = dotsArray[0];
        mouseDot.x = mousePosition.x;
        mouseDot.y = mousePosition.y;
        mouseDot.color = secondary;
        mouseDot.radius = 2.5;
        mouseDot.velocity = { x: 0, y: 0 };
        drawDot(mouseDot, 0);
      }

      window.requestAnimationFrame(animateDots);
    }

    // Only track mouse if on desktop
    if (canvas.width > 1000) {
      window.onmousemove = (mouse) => {
        mousePosition.x = mouse.pageX;
        mousePosition.y = mouse.pageY - 52; // Account for header height
      };
    }

    window.requestAnimationFrame(animateDots);
  }, []);

  return (
    <canvas id="dot-field" className="absolute overflow-hidden">
      Your browser does not support the canvas tag.
    </canvas>
  );
}
