module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        // Primary
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        fadedLimeGreen: "hsl(157, 57%, 69%)",
        brightCyan: "hsl(192, 70%, 51%)",
        fadedBrightCyan: "hsl(181, 54%, 67%)",

        // Neutral
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/bg-intro-desktop.svg')",
      },
    },
  },
  variants: {
    // backgroundImage: ["responsive"],
    backgroundImage: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
