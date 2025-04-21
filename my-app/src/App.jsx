
import './App.css'
import Navs from './Navbar/Navs'
import Body from './Content/Body'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login/Login'
import Signup from './signup/Signup'
import Home from './Pages/Home'
import Footer from './Footer/Footer'
function App() {


  return (


    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<> <Home></Home></>}></Route>
        <Route path='/footer' element={<><Footer></Footer></>}></Route>
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
            </>}
        ></Route>
        <Route
          path='/log'
          element={
            <>
              <Navs />
              <Login />
            </>
          }></Route>
        <Route
          path='/'
          element={
            <>
              <Navs />
              <Body />
            </>
          }>

        </Route>

      </Routes>
    </BrowserRouter>





  )

}

export default App



