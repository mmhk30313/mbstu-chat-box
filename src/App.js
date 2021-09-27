import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";
import "animate.css";
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import userLogo from "./images/cse-logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import { createContext, useEffect, useState } from "react";
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Users from './Components/Users/Users';
import Login from './Components/Login/Login';
import { getUsers } from './Components/Services/User.Service';
import { all_users } from './utils/fakeData';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  const [users, setUsers] = useState([]);
  console.log({loggedInUser});
  const loadUsers = async () => {
    const data = await getUsers();
    console.log({data});
    if(!data?.message){
      setUsers(data);
    }else{
      setUsers(all_users);
    }
  }
  useEffect(() => {
    AOS.init();
    // loadUsers();
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
          <PrivateRoute path="/client">
            <Users/>
          </PrivateRoute>
          {/* <Route path="/client">
            <Users/>
          </Route> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
