import ShoppingBasket from './components/shoppingBasket/ShoppingBasket';
import { GlobalStyle } from './style/GlobalStyle';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
    return (
        <>
            <Provider store={store}>
                <GlobalStyle />
                <div className="App">
                    <ShoppingBasket />
                </div>
            </Provider>
        </>
    );
}

export default App;
