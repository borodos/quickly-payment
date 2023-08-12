import CardPayer from "./components/CardPayer";
import CardPayment from "./components/CardPayment";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <CardPayment />
        <CardPayer />
      </Container>
    </>
  );
}

export default App;
