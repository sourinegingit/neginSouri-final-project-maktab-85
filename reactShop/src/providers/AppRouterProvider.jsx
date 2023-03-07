import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Basket from "../components/basket";
// import FinalBasket from "../components/finalBasket";
import Paymentgateway from "../components/paymentgateway";
// import ProductManaging from "../components/productManaging";
import AdminPanel from "../pages/adminPanel";
import Auth from '../pages/auth/index'
import Home from "../pages/home";
import NotFound from '../pages/notFound'


const AppRouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />}/>
        <Route path="/panelAdmin" element={<AdminPanel />}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path="paymentgateway" element={<Paymentgateway/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouterProvider;
