
import './App.css';
import About from './About';
import Endpoint1 from './Endpoint1'
import Endpoint2 from './Endpoint2'
import Endpoint3 from './Endpoint3'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import facade from "./apiFacade";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    console.log(loginCredentials)
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
  }

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  )

}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")

  useEffect(() => {
    facade.fetchData().then(data => setDataFromServer(data.msg));
  }, [])

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  )

}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  // function Logout () {
  //   facade.logout()
  //   setLoggedIn(false)
  // }


  const logout = () => {
    setLoggedIn(false)
    facade.logout();
  }

  const login = (user, pass) => {
    LoginPage();
    facade.login(user, pass)
      .then(res => setLoggedIn(true));
      
  }
 const logoutBtn = () => {
    return (
      <div> 
        <p>Are you sure you want to log out?</p>
        <Link to="/">
     <button type="button" onClick={logout}>
     Logout
     </button>
    </Link>
        
      </div>
    )
    
  }


 const ShowLandingPage = () => (
  
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/logout" component={logoutBtn}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/endpoint1" component={Endpoint1} />
        <Route path="/endpoint2" component={Endpoint2} />
        <Route path="/endpoint3" component={Endpoint3} />
      </Switch>

    </div>
  </Router>
  
)
function LoginPage(){
  return(
  !loggedIn ? (<LogIn login={login} />) :
        (<div>
          
          <ShowLandingPage/>
          
        </div>)
)}

  return (


    <div className="App">
       {!loggedIn ? (<LogIn login={login} />) : 
        (<div>
          
        <ShowLandingPage/>
         
          
        </div>)}
    </div>
  );
 
}


const Home = () => (
  <div>
    <h1><LoggedIn/></h1>
  </div>
)

export default App; 