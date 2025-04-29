export const particlesConfig = {
  particles: {
    number: {
      value: 360,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.6, // <<< on réduit un peu l’opacité du point (pour faire ressortir le halo)
      random: false,
    },
    size: {
      value: {
        min: 0.2,
        max: 0.8, // petites étoiles
      },
      random: true,
    },
    move: {
      enable: false,
    },
    shadow: { 
      enable: true,
      color: "#ffffff", // halo très blanc
      blur: 0.8, // <<< halo plus serré
    },
  },
  interactivity: {
    events: {},
  },
  detectRetina: true,
  background: {
    color: "#000000",
  },
};

export default particlesConfig;
