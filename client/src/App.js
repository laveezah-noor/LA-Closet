import './App.css';
import Homepage from './views/homepage/homepage';
import Loginpage from './views/loginpage/loginpage';
import Registerpage from './views/registerpage/registerpage';

function App() {
  return (
    <div className="App">
      Hello World
      <Homepage/>
      <Loginpage/>
      <Registerpage/>
    </div>
  );
}

export default App;
