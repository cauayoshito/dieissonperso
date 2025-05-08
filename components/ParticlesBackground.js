// components/ParticlesBackground.js
import Particles from "@tsparticles/react";
import { loadFull } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    // carrega todos os assets
    await loadFull(engine);
  };

  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 40, density: { enable: true, area: 800 } },
            color: { value: "#39ff14" },
            links: {
              enable: true,
              distance: 120,
              color: "#39ff14",
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 0.5, outModes: { default: "out" } },
            size: { value: { min: 1, max: 3 }, random: true },
            opacity: { value: 0.3 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              grab: { distance: 150, links: { opacity: 0.4 } },
              push: { quantity: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
