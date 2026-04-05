import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={async () => {}}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: ["#8b5cf6", "#a855f7", "#7c3aed"] },
          links: {
            color: "#8b5cf6",
            distance: 150,
            enable: true,
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none" as const,
            random: true,
            straight: false,
            outModes: { default: "bounce" as const },
          },
          number: {
            density: { enable: true },
            value: 60,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.3 } },
            push: { quantity: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;
