import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div className='container px-14'>
      <Navbar></Navbar>

      {/* React Router */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
