/* Styles */
import "./styles/base/globals.css";

/* Components */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Metadatas */
export const metadata = {
  title: "Mode Intemp",
  description: "Site vitrine d'un site e-commerce",
  keywords: ["shop", "vêtements"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
