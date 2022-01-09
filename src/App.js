import "./App.css";
import { Wrapper } from "./App.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import ShortenUrl from "./components/ShortenUrl";
import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Wrapper>
        <ThemeProvider theme={theme}>
          <Navigation />
          <Header />
          <ShortenUrl />
          <Main />
          <Section />
          <Footer />
        </ThemeProvider>
      </Wrapper>
    </>
  );
}

export default App;
