import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import "animate.css";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import { createContext, useEffect, useState } from "react";
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Client from './Components/Client/Client';
import Login from './Components/Login/Login';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [users, setUsers] = useState([]);
  console.log({loggedInUser});
  useEffect(() => {
    AOS.init();
    // fetch('https://travel-solution-server.herokuapp.com/services')
    // .then(res => res.json())
    // .then( data => {
    //     setAllServices(data);
    // })
    // .catch(err => console.log(err, loggedInUser, setLoggedInUser))
    
  },[""]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, users, setUsers]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/* <PrivateRoute path="/client">
            <Client/>
          </PrivateRoute> */}
          <Route path="/client">
            <Client/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
