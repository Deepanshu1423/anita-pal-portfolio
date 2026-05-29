"use client";

import { useRef } from "react";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  const frameRef = useRef(null);

  const handleMouseMove = (event) => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (!isFinePointer) return;

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width - 0.5) * 10).toFixed(2);
    const rotateX = ((0.5 - y / rect.height) * 10).toFixed(2);

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
    });
  };

  const handleMouseLeave = (event) => {
    const card = event.currentTarget;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  };

  return (
    <section id="home" className="section hero-fast-section pt-36">
      <div className="hero-fast-glow hero-fast-glow-left" />
      <div className="hero-fast-glow hero-fast-glow-right" />

      <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal">
          <span className="badge">
            Strategic HR • Payroll • Compliance • Talent Acquisition
          </span>

          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.04] tracking-tight md:text-7xl">
            Human Resources built with{" "}
            <span className="gradient-text">clarity, care & performance.</span>
          </h1>

          <p
            className="mt-6 max-w-2xl text-lg leading-8 md:text-xl"
            style={{ color: "var(--muted)" }}
          >
            {portfolio.headline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary">
              Let’s Connect
            </a>

            <a href="/experience" className="btn-secondary">
              View Experience
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {portfolio.stats.map((item) => (
              <div key={item.label} className="fast-stat-card">
                <h3 className="gradient-text text-3xl font-black">
                  {item.value}
                </h3>

                <p
                  className="mt-1 text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--muted)" }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-fast-stage reveal delay-2">
          <div
            className="hero-fast-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="fast-chip chip-a">Payroll</div>
            <div className="fast-chip chip-b">HRIS</div>
            <div className="fast-chip chip-c">Compliance</div>

            <div className="fast-profile-card">
              <div className="fast-avatar fast-avatar-image">
                <Image
                  src="/anita-profile.png"
                  alt="Anita Pal - Human Resource Professional"
                  width={230}
                  height={230}
                  priority
                  className="profile-img"
                />
              </div>

              <div className="mt-7 text-center">
                <p
                  className="text-xs font-black uppercase tracking-[0.22em]"
                  style={{ color: "var(--muted)" }}
                >
                  Human Resources Portfolio
                </p>

                <h2 className="mt-3 text-3xl font-black">{portfolio.name}</h2>

                <p className="mt-2 font-bold gradient-text">{portfolio.role}</p>
              </div>

              <div className="hero-profile-highlights">
                <div className="hero-highlight-item">
                  <span>01</span>
                  <div>
                    <h4>Employee Lifecycle</h4>
                    <p>
                      Hiring, onboarding, engagement and exit process handling.
                    </p>
                  </div>
                </div>

                <div className="hero-highlight-item">
                  <span>02</span>
                  <div>
                    <h4>Payroll & Compliance</h4>
                    <p>
                      Payroll coordination, attendance, EPF/ESIC and HR records.
                    </p>
                  </div>
                </div>

                <div className="hero-highlight-item">
                  <span>03</span>
                  <div>
                    <h4>Talent Acquisition</h4>
                    <p>
                      Recruitment, sourcing, candidate coordination and
                      induction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fast-shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
