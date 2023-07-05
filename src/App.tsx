import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FilterContextProvider } from "./context/FilterContext";
import { AppContextProvider } from "./context/AppContext";
import { CartContextProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Protected from "./components/auth/Protected";
import VewOrder from "./pages/VewOrder";

const App = () => {


  return (
    <div>
      <AuthContextProvider>
        <AppContextProvider>
          <FilterContextProvider>
            <CartContextProvider>
              <Router>
                <Routes>
                  {/* <Route path="/" element={<Protected children={<Home />} />} />
                    <Route path="/orders" element={<Protected children={<Orders />} />} /> */}
                  <Route path="/" element={<Home />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/orders/:id" element={<VewOrder />} />
                  <Route path="/auth/login" element={<Login />} />
                </Routes>
              </Router>
            </CartContextProvider>
          </FilterContextProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </div>
  )
}

export default App;