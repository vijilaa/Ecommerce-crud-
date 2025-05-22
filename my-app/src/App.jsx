
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
import Categories from './detailpg/Categories'
import CategoryPage from './Pages/CategoryPage/CategoryPage'
function App() {


  return (


    <BrowserRouter>
      <Routes>
        <Route path='/category/:name' element={<><CategoryPage/></>}></Route>
        <Route path='/home' element={<><Navs></Navs> <Home></Home> <Footer></Footer></>}></Route>
        <Route path='/footer' element={<><Footer></Footer></>}></Route>
        <Route path='/forgot' element={<><Forgot></Forgot></>}></Route>
        <Route path='/about'element={<><Navs></Navs><About/><Footer></Footer></>}></Route>
        <Route path='/detail' element={<><Categories></Categories></>}></Route>
        <Route
          path='/Navb'
          element={
            <>
              <Navs />
            </>
          }>

        </Route>

        <Route path='/sign'
          element={
            <>
              <Navs />
              <Signup></Signup>
              <Footer/>
            </>}
        ></Route>
        <Route
          path='/log'
          element={
            <>
              <Navs />
              <Login />
              <Footer/>
            </>
          }></Route>
        <Route
          path='/'
          element={
            <>
              <Navs />
              <Body />
              <Footer/>
            </>
          }>

        </Route>

      </Routes>
    </BrowserRouter>





  )

}

export default App



