import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';

function App() {
  let location = useLocation();
  
  return (
    <div className="App">
    <Navbar/>
       <AnimatePresence exitBeforeEnter>
       <Switch location={location} key={location.pathname}>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/about"> <About/> </Route>
        <Route exact path="/services"> <Services/> </Route>
      </Switch>
       </AnimatePresence>
    </div>
  );
}

export default App;
