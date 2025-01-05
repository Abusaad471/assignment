import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Aesop | Formulations for skin",
  description: "Formulations designed to care for your skin.",
  openGraph: {
    title: "Aesop | Formulations for skin",
    description: "Formulations designed to care for your skin.",
    images: [
      {
        url: "/aesop.png",
        width: 1200,
        height: 630,
        alt: "Aesop products for skin care",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className=" flex-grow ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
