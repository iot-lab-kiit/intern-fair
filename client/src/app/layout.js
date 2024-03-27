import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "InternFair",
  description: "Created by IoT Lab Web team, KIIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
