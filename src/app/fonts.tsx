import { Geist, Geist_Mono, Titan_One } from "next/font/google";

export const GeistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const TitanOne = Titan_One({
  weight: "400",
  variable: "--font-titan-one",
  subsets: ["latin"],
});
