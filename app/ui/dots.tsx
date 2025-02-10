"use client";

import { useEffect } from "react";

export default function DotField() {
  useEffect(() => {
    const canvas = document.getElementById("dot-field") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 52;

    const dotsArray: Dot[] = [];
    dotsArray.length = 50;

    class Dot {
      centerX: number;
      centerY: number;
      radius: number;
      startAngle: number;
      endAngle: number;
      color: string;
      constructor() {
        this.centerX = Math.random() * canvas.width; // centerX coordinate
        this.centerY = Math.random() * canvas.height; // centerY coordinate
        this.radius = 6;
        this.startAngle = 0; // Starting point on circle
        this.endAngle = Math.PI * 2; // Full circle = 2π radians (360deg)
        this.color = 0.5 + Math.random() > 1 ? "green" : "white";
      }

      create() {
        ctx.beginPath();
        ctx.arc(
          this.centerX,
          this.centerY,
          this.radius,
          this.startAngle,
          this.endAngle,
        );
        ctx.fillStyle = this.color;
      }

      animate() {
        this.centerX += 1;
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dotsArray.length; i++) {
        dotsArray[i] = new Dot();
        dotsArray[i].create();
        ctx.fill();
      }

      window.requestAnimationFrame(() => {
        dotsArray.forEach((dot) => dot.animate());
      });
    };

    render();

    // const draw = setInterval(render, 800);

    return () => {
      // clearInterval(draw);
    };
  }, []);

  return (
    <canvas
      id="dot-field"
      className="absolute overflow-hidden ring-1 ring-inset ring-red-600"
    >
      Your browser does not support the canvas tag.
    </canvas>
  );
}

/*
numberOfParticles = windowSize * 0.4
minLinkingDistance = windowSize * 0.045
mouseLinkRadius = 0.2

lightBlue = 'rgb(81, 162, 233)';
linkColor = lightBlue;
pinkishRed = 'rgb(255, 77, 90)';
dotColors = [
  linkColor,
  linkColor,
  linkColor,
  pinkishRed,
], 
*/
