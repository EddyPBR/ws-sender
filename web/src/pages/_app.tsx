import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { GlobalStyle } from "@styles/global";
import { Toaster } from "react-hot-toast";
import { toastStyles } from "@styles/toast";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Toaster position="top-right" toastOptions={toastStyles} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;
