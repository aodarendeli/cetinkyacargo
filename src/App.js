import './App.css';
import FlatDetail from "./components/FlatDetail"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Blog from "./components/Blog"
import BlogDetail from "./components/BlogDetail"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Karayolu from './components/Karayolu';
import Denizyolu from './components/Denizyolu';
import Parsiyel from './components/Gümrükleme';
import Havayolu from './components/Havayolu';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/karayolu" component={Karayolu}></Route>
        <Route path="/denizyolu" component={Denizyolu}></Route>
        <Route path="/parsiyel" component={Parsiyel}></Route>
        <Route path="/havayolu" component={Havayolu}></Route>
        <Route path="/blog" exact component={Blog}></Route>
        <Route path="/blog/:id" component={BlogDetail}></Route>
        <Route path="/flat/:slug" component={FlatDetail}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
