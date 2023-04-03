import { GlobalStyle } from "./style/GlobalStyle";
import store from "./store/store";
import { Provider } from "react-redux";
import Basket from "./pages/Basket";
import Delivery from "./pages/Delivery";

function App() {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <div className="App">
          {/* <Basket /> */}
          <Delivery />
        </div>
      </Provider>
    </>
  );
}

export default App;
