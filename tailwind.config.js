/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
      extend: {
        fontFamily: {
          // Elegant & Modern
          playfair: ['Playfair Display', 'serif'],
          lora: ['Lora', 'serif'],
          inter: ['Inter', 'sans-serif'],
        
          // Futuristic
          orbitron: ['Orbitron', 'sans-serif'],
          rajdhani: ['Rajdhani', 'sans-serif'],
          exo: ['Exo', 'sans-serif'],
          quantico: ['Quantico', 'sans-serif'],
        
          // Minimalist & Aesthetic
          montserrat: ['Montserrat', 'sans-serif'],
          manrope: ['Manrope', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          urbanist: ['Urbanist', 'sans-serif'],
        
          // High-End & Luxurious
          cinzel: ['Cinzel', 'serif'],
          abril: ['Abril Fatface', 'serif'],
          
          poppins: ["Poppins", "sans-serif"], // Example with Poppins
          sora: ["Sora", "sans-serif"],
          spaceGrotesk: ["Space Grotesk", "sans-serif"],
          dmSans: ["DM Sans", "sans-serif"],
        },
      },
    },
    plugins: [require('daisyui')],
     daisyui: {
      themes: [
        "light", "dark" // first one will be the default theme
      ],
    },
  }