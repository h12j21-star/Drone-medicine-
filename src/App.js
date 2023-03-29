import { GlobalStyle } from './style/GlobalStyle';
import store from './store/store';
import { Provider } from 'react-redux';
import Basket from './pages/Basket';

function App() {
    return (
        <>
            <Provider store={store}>
                <GlobalStyle />
                <div className="App">
                    <Basket />
                </div>
            </Provider>
        </>
    );
}

export default App;
