import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import HomePage from "./home/HomePages";
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>    
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
