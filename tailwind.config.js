/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#1E293B", // Dark Blue for navbar
          secondary: "#F8FAFC", // Light Gray for background
          accent: "#3B82F6", // Blue for buttons
        },
      },
    },
    plugins: [],
  };
  