import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { GlobalStyle } from "@styles/global";
import { Toaster } from "react-hot-toast";
import { toastStyles } from "@styles/toast";
import { WhatsAppProvider } from "@contexts/WhatsAppContext";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toaster 
        position="top-right" 
        toastOptions={toastStyles} 
      />
      <WhatsAppProvider>
        <Component {...pageProps} />
      </WhatsAppProvider>
    </ThemeProvider>
  );
}
export default MyApp;
