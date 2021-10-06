
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home'
import Notfound from './Component/NotFound/Notfound';
import Service from './Component/Service/Service';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/service'>
            <Service></Service>
          </Route>
          <Route path='/about'>
            <About></About>

          </Route>

          <Route path='/blog'>
            <Blog></Blog>

          </Route>

          <Route path='*'>
            <Notfound></Notfound>

          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
