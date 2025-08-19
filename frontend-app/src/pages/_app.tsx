
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton"
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={anton.className}>
      <Component {...pageProps} />
    </main>
  );
}