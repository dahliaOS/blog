import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function Blog({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
