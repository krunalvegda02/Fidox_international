export default function manifest() {
  return {
    name: "Fidox - Leading Export Company in India",
    short_name: "Fidox International",
    description:
      "Fidox is a trusted export company in Gujarat, India specializing in fruits, spices, onions, pomegranates, bananas, mangoes, green chillies, and agricultural products.",
    start_url: "/",
    display: "standalone",
    background_color: "#2C4A5E",
    theme_color: "#2C4A5E",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
