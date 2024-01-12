import { Bangers, Quicksand, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import CartMobileIcon from "@/components/CartMobileIcon";
import CardProvider from "@/CartContext/CartContex";
import CartMobile from "@/components/CartMobile";

const bangers = Bangers({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bangers",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-robotoCondensed",
});

export const metadata = {
  title: "Pizza Land",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <CardProvider>
      <html lang="en">
        <body
          className={`${bangers.variable} ${quicksand.variable} ${robotoCondensed.variable} font-quicksand `}
        >
          <Nav />
          <CartMobileIcon />
          <CartMobile />
          {children}
        </body>
      </html>
    </CardProvider>
  );
}
