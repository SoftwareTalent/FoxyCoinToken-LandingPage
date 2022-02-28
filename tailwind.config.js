module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        100: "#342926",
        primary: {
          light: "#bbf7d7",
          DEFAULT: "#99fdc7",
          dark: "#4dc081",
          darker: "#3caa6e",
          darkest: "#217a49",
        },
        secondary: {
          DEFAULT: "#001409",
        },
      },
      width: {
        192: "48rem",
      },
      height: {
        80: "20rem",
      },
      fontFamily: {
        Medieval: "font-MedievalSharp",
        Sanchez: "font-Sanchez",
      },
      maxWidth: {
        300: "1200px",
      },
      backgroundImage: {
        roadMap: 'url("https://i.imgur.com/wHExAln.png")',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
