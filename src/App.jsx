import CardPayer from "./components/CardPayer";
import CardPayment from "./components/CardPayment";
import Container from "./components/Container";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("RU");
  console.log(language);
  return (
    <>
      <Header setLanguage={setLanguage} />
      <Container>
        <CardPayment languageSelect={language} />
        <CardPayer languageSelect={language} />
      </Container>
    </>
  );
}

export default App;
