
import './App.css'
import Navs from './Navbar/Navs'
import Body from './Content/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login/Login'
import Signup from './signup/Signup'
import Home from './Pages/Home'
import Footer from './Footer/Footer'
import Forgot from './Forgot/Forgot'
import About from './about/About'

import CategoryPage from './Pages/CategoryPage/CategoryPage'
import Profile from './Profile/Profile'
import Navbar from './Nav/Navbar'
import Seller from './Seller/Seller'
import Log from './Seller/Log'
import Sig from './Seller/Sig'
import For from './Seller/For'
import Service from './Nav/Service'
// import Contactt from './Nav/Contactt'
// import Admin from './Admin/Admin'
function App() {


  return (


    <BrowserRouter>
      <Routes>
        <Route path='/category/:name' element={<><CategoryPage /></>}></Route>
        <Route path='/home' element={<><Navs></Navs> <Home></Home> <Footer></Footer></>}></Route>
        <Route path='/footer' element={<><Footer></Footer></>}></Route>
        <Route path='/forgot' element={<><Navs></Navs><Forgot></Forgot><Footer></Footer></>}></Route>
        <Route path='/about' element={<><Navs></Navs><About /><Footer></Footer></>}></Route>
        <Route path='/Navb' element={<> <Navs /> </>}> </Route>
        <Route path='/sign' element={<> <Navs /> <Signup></Signup> <Footer /></>}></Route>
        <Route path='/log' element={<>  <Navs />  <Login /> <Footer /></>}></Route>
        <Route path='/' element={<>  <Navs /><Body /><Footer /></>}></Route>
        <Route path='/profile' element={<><Navs></Navs><Profile></Profile><Footer></Footer></>}></Route>
        <Route path='/Navs' element={<><Navbar></Navbar></>}></Route>
        <Route path='/Seller' element={<><Seller></Seller></>}></Route>
        {/* <Route path='/Adm' element={<><Admin></Admin></>}></Route> */}
        <Route path='/logo' element={<><Navbar></Navbar><Log></Log><Footer></Footer></>}></Route>
        <Route path='/sig' element={<><Navbar></Navbar><Sig></Sig><Footer></Footer></>}></Route>
        <Route path='/For' element={<><Navbar></Navbar><For></For><Footer></Footer></>}></Route>
        <Route path='/Service' element={<><Service></Service></>}></Route>
        {/* <Route path='/contact' element={<><Contactt></Contactt></>}></Route> */}
      </Routes>
    </BrowserRouter>





  )

}

export default App



