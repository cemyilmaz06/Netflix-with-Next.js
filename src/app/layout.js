import Navbar from "@/components/Navbar";
import "./globals.css";

//! metadata objesi ve generateMetadata fonksiyonu sadece Server Componentlerden export edilebilir.
export const metadata = {
  title: "Netflix App",
  description: "a movie platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
