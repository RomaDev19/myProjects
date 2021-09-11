import './styles.css';
import ProductsContextProvider from "context/ProductContext";
import CartContextProvider from "context/CartContext";
import  { AppWrapper } from '../context/CartContext'

export default function MyApp({ Component, pageProps }) {
    return (
    <AppWrapper>
        <Component {...pageProps} />
    </AppWrapper>

    )
}