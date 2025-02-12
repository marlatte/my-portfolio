'use client';

import { useEffect } from 'react';

type Dot = {
  x: number;
  y: number;
  radius: number;
  direction: { x: number; y: number };
  color: string;
};

export default function DotField() {
  useEffect(() => {
    const canvas = document.getElementById('dot-field') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 92;

    const primary = 'rgb(86, 81, 233)';
    // const linkColor = 'rgb(81, 162, 233)'
    const secondary = 'rgb(61, 245, 196)';
    const dotColors = [primary, primary, primary, secondary];
    const numberOfParticles = Math.floor(canvas.width * 0.25);

    const dotsArray: Dot[] = new Array(numberOfParticles);
    for (let i = 0; i < dotsArray.length; i++) {
      const radius = Math.random() * 1.5 + 0.5;
      const dot: Dot = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        direction: { x: Math.random() - 0.5, y: Math.random() - 0.5 },
        color: dotColors[Math.floor(Math.random() * dotColors.length)],
      };
      dotsArray[i] = dot;
    }

    const mousePosition = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    function drawDot(dot: Dot) {
      const dotDistance =
        ((dot.x - mousePosition.x) ** 2 + (dot.y - mousePosition.y) ** 2) **
        0.5;
      const fadeStrength = canvas.width < 600 ? 1.7 : 2.1;
      const distanceRatio = dotDistance / (canvas.width / fadeStrength);

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = dot.color.slice(0, -1) + `,${1 - distanceRatio})`;
      ctx.fill();
    }

    function animateDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 1; i < dotsArray.length; i++) {
        const dot = dotsArray[i];
        const bounceX = dot.x >= canvas.width || dot.x <= 0;
        const bounceY = dot.y >= canvas.height || dot.y <= 0;

        if (bounceX) dot.direction.x *= -1;
        if (bounceY) dot.direction.y *= -1;

        dot.x += dot.direction.x;
        dot.y += dot.direction.y;
        drawDot(dot);
      }

      const mouseDot = dotsArray[0];
      mouseDot.x = mousePosition.x;
      mouseDot.y = mousePosition.y;
      mouseDot.color = secondary;
      mouseDot.radius = 2.5;
      mouseDot.direction = { x: 0, y: 0 };
      drawDot(mouseDot);

      window.requestAnimationFrame(animateDots);
    }

    window.onmousemove = (mouse) => {
      mousePosition.x = mouse.pageX;
      mousePosition.y = mouse.pageY - 52; // Account for header height
    };

    window.requestAnimationFrame(animateDots);
  }, []);

  return (
    <canvas id="dot-field" className="absolute overflow-hidden">
      Your browser does not support the canvas tag.
    </canvas>
  );
}

/*
numberOfParticles = windowSize * 0.4
minLinkingDistance = windowSize * 0.045
mouseLinkRadius = 0.2
*/
