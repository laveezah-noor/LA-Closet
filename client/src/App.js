import './App.css';
import Homepage from './views/homepage/homepage';
import Loginpage from './views/loginpage/loginpage';
import Registerpage from './views/registerpage/registerpage';
import Header from './components/header';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
      <Header/>
      {/* Hello World */}
      <Homepage/>
      {/* <Loginpage/>
      <Registerpage/> */}
      <Footer/>
    </div>
  );
}

export default App;
