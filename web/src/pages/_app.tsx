import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { GlobalStyle } from "@styles/global";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default MyApp;
