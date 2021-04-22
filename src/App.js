
import './App.css';
import About from './About';
import Endpoint1 from './Endpoint1'
import Endpoint2 from './Endpoint2'
import Endpoint3 from './Endpoint3'
import Nav from './Nav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className ="App">
          <Nav />
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/endpoint1" component={Endpoint1}/>
          <Route path="/endpoint2" component={Endpoint2}/>
          <Route path="/endpoint3" component={Endpoint3}/>
          </Switch>

             </div>
    </Router>
  );
}


const Home = () => (
  <div>
    <h1>home</h1>
  </div>
)

export default App;
