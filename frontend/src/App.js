import { GlobalStyle } from './style/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store';
import { Provider } from 'react-redux';
import Delivery from './pages/Delivery';
import PharmacyList from './pages/PharmacyList';
import { Routes, Route } from 'react-router-dom';
import Join from './pages/SignUp';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Join />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/pharmacy" element={<PharmacyList />} />
                    <Route path="/products/:pharmacy" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/delivery" element={<Delivery />} />
                </Routes>
            </Provider>
        </QueryClientProvider>

    );
}

export default App;
