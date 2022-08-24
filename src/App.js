import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Components/Shared/Footer';
import PageNotFound from './Components/Shared/PageNotFound';
import Purchase from './Components/Purchase/Purchase';
import RequireAuth from './Components/Login/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders';
import Review from './Components/Dashboard/Review';
import AllUsers from './Components/Dashboard/AllUsers';
import AddProduct from './Components/Dashboard/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAdmin from './Components/Login/RequireAdmin';
import ManageProducts from './Components/Dashboard/ManageProducts';
import Payment from './Components/Dashboard/Payment';
import MyProfile from './Components/Dashboard/MyProfile';
import UpdateProduct from './Components/Dashboard/UpdateProduct';
import UpdatedProfile from './Components/Dashboard/UpdatedProfile';
import ManageAllProducts from './Components/Dashboard/ManageAllProducts';
import Portfolio from './Components/Portfolio/Portfolio';
import ShortNavbar from './Components/Shared/ShortNavbar';

function App() {
  return (
    <div>
      <ShortNavbar></ShortNavbar>
      <Navbar></Navbar>

      {/* React Router */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/purchase/:id' element={
        <RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>
      }></Route>
      <Route path='/dashboard' element={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>
      }>
        <Route path='order' element={<MyOrders></MyOrders>}></Route>
        <Route path='updatedprofile/:id' element={<UpdatedProfile></UpdatedProfile>}></Route>
        <Route path='review' element={<Review></Review>}></Route>
        <Route index element={<MyProfile></MyProfile>}></Route>
        <Route path='payment/:id' element={<Payment></Payment>}></Route>
        <Route path='user' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
        <Route path='addproduct' element={<RequireAdmin>
          <AddProduct></AddProduct>
        </RequireAdmin>}></Route>
        <Route path='manageproduct' element={<RequireAdmin>
          <ManageProducts></ManageProducts>
        </RequireAdmin>}></Route>
        <Route path='allorders' element={<RequireAdmin>
          <ManageAllProducts></ManageAllProducts>
        </RequireAdmin>}></Route>
        <Route path='update/:id' element={<RequireAdmin>
          <UpdateProduct></UpdateProduct>
        </RequireAdmin>}></Route>
      </Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
