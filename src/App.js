import { GlobalStyle } from "./style/GlobalStyle";
import store from "./store/store";
import { Provider } from "react-redux";
import Basket from "./pages/Basket";
import Delivery from "./pages/Delivery";
import PharmacyList from "./pages/PharmacyList";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <div className="App">
          {/* <Basket /> */}
          {/* <Delivery /> */}
          <PharmacyList />
        </div>
      </Provider>
    </>
  );
}

export default App;
