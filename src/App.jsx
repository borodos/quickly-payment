import CardPayer from "./components/CardPayer";
import CardPayment from "./components/CardPayment";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  let language = "ru";
  return (
    <>
      <Header language={language} />
      <Container>
        <CardPayment language={language} />
        <CardPayer language={language} />
      </Container>
    </>
  );
}

export default App;
