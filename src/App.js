import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home'
import Menu from './pages/menu'
import Cart from './pages/cart'
import Checkout from "./pages/Checkout";
import { ShopContextProvider } from "./context/shopContext";

const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
