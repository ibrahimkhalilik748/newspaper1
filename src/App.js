import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import { useState, createContext } from 'react';
import Footer from './Components/Footer/Footer';


export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [newUser, setNewUser] = useState(false);
  const [dark, setDark] = useState(false);
  const [light, setlight] = useState([]);
  return (
    <div className={dark ? "App dark" : "App light"}>
      <userContext.Provider value={{ value:[loggedInUser,setLoggedInUser],value1:[newUser, setNewUser], value2:[dark, setDark], value3:[light, setlight] }}>
        <Router>
          <Home></Home>
          {/* <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch> */}
          <Footer></Footer>
        </Router>
      </ userContext.Provider>
    </div>
  );
}

export default App;
