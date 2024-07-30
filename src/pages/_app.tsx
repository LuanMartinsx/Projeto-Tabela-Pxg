import { AuthProvider } from "@/components/AuthContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

  return (
    // AUTENTICADOR 
  <AuthProvider>
    {/* renderiza todos os componentes presentes na pasta page */}
    <Component {...pageProps} />

  </AuthProvider>
  )
}
