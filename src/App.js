import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import About from './component/About/About';
import Cats from './component/Cats/Cats';
import Home from './component/Home/Home'
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './component/PageNotFound/PageNotFound';
import Product from './component/Products/Product';
import CategoryProduct from './component/CategoryProduct/CategoryProduct';
import ProductDetails from './component/ProductDetails/ProductDetails';





function App() {
  return (
   <div>
    <Navbar />
    <Header />
    {/* <div className='container'> */}
   <Routes>
<Route path='product' element={<Product />}></Route>
<Route path='home' element={<Home />}></Route>
<Route path='/' element={<Home />}></Route>
<Route path='category/:name' element={<CategoryProduct/>}></Route>
<Route path='product/:id' element={<ProductDetails />}></Route> 
<Route path='*' element={<PageNotFound />}></Route>
   </Routes>
    </div>
   
    // </div>
  );
}

export default App;
