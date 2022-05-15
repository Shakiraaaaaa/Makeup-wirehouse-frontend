import { Form } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Blogs from './Blogs/Blogs';
import Checkout from './CheckOut/Checkout/Checkout';
import Home from './Home/Home/Home';
import ServiceDetail from './Home/ServiceDetail/ServiceDetail';
import Services from './Home/Services/Services';
import Login from './Login/Login/Login';
import RequireAuth from './Login/Login/RequireAuth/RequireAuth';
import Register from './Login/Register/Register';
import Notfound from './Noutfound/Notfound';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import '../src/AddService/AddService'
import AddService from '../src/AddService/AddService';
import ManageServices from './ManageServices/ManageServices';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/addservice" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>

        <Route path="/manage" element={
          <RequireAuth>
            <ManageServices></ManageServices>
          </RequireAuth>
        }></Route>

        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
