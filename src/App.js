import "./App.css";
import Balance from "./Component/Balance";
import { GlobalProvider } from "./Component/Context/GlobalProvider";
import Header from "./Component/Header";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
    </GlobalProvider>
  );
}

export default App;
