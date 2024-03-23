import "./globals.css";
import Footer from "@/components/Footer/Footer";
export const metadata = {
  title: "InternFair",
  description: "Created by IoT Lab Web team, KIIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
     
      </body>
    </html>
  );
}
