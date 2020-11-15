import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";
import { theme } from "../styles/themes";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
