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

function App() {
  return (
    <div>
      <Navbar></Navbar>

      {/* React Router */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
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
        <Route index element={<MyOrders></MyOrders>}></Route>
        <Route path='review' element={<Review></Review>}></Route>
      </Route>
      <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
