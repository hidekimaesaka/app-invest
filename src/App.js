import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from './components/layout/Container';
import Nvda from './components/pages/Nvda';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';



export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Container customClass="min-height">
          <Route exact path='/'><Home></Home></Route>
          <Route exact path ='/nvda'><Nvda></Nvda></Route>
          <Route exact path ='/signup'><SignUp></SignUp></Route>
          <Route exact path ='/login'><SignIn></SignIn></Route>
        </Container>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

