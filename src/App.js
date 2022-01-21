import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from './components/layout/Container';
import Nvda from './components/pages/Nvda';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import User from './components/pages/User';
import NewProduct from './components/pages/NewProduct';



export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
        <Container customClass="min-height">
      <Routes>
          <Route path='/' element={<Home></Home>}/>
          <Route path ='/nvda' element={<Nvda></Nvda>}/>
          <Route path ='/signup' element={<SignUp></SignUp>}/>
          <Route path ='/login' element={<SignIn></SignIn>}/>
          <Route path ='/user/:id/:token' element={<User></User>}/>
          <Route path ='/newproduct/:id' element={<NewProduct></NewProduct>}/>
      </Routes>
        </Container>
      <Footer></Footer>
    </Router>
  );
}

