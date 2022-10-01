module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: ["16px", "21.82px"],
        "base-1": "18px",
        "base-2": "20px",
        lg: "2rem",
        "lg-2": "24px",
        "2lg": "1.5rem",
        xl: ["50px", "48px"],
        "1xl": "1.5rem",
        "2xl": "4rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem"
      },
      colors: {
        powerblue: {
          primary: "#DCF0F1",
          100: "#A8DADB"
        },
        virindian: {
          100: "#0093AD",
          60 : "#67BECF"
        },
        celadon: {
          primary: "#8FAFC4",
          40:  "#B4CAD8",
          100: "#457B9D"
        },
        cutured: {
          primary: "#EFEFEF"
        },
        spacecadet: {
          primary: "#A6A9BC",
          40: "#A6A9BC",
          60: "#797F99",
          100: "#1F2855"
        },
        rossocorsa: {
          primary: "#D2000F",
          100: "#f9dbdb"
        },
        charcoal: {
          primary: "#2B2B2B"
        },
        antique: {
          primary: "#FD7E14",
          100: "#F7E3CE"
        },
        vermillion: {
          60: "#EA9291",
          100: "#DA4A4A"
        },
      },
    },
  },
  plugins: [],
}