import './App.css';
import Homepage from './views/homepage/homepage';
// import Loginpage from './views/loginpage/loginpage';
import Registerpage from './views/registerpage/registerpage';
import Shoppage from './views/shoppage/shoppage';
import Header from './components/header';
import Footer from './components/footer';
import { Card, StudentAllCard, OverviewCard } from './components/card';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Header/> */}
<Shoppage/>
      {/* <Route path='/' element={Homepage} /> */}
      {/* Hello World */}
       {/* <Homepage/> */}
      {/*<Card
      CourseName="Thsi is a test"
      CourseDetail="This is a test"
      />
      <StudentAllCard
      CourseName="Thsi is a test"
      CourseDetail="This is a test"
      InstructorName="Test"
      />
      <OverviewCard
      /> */}
      {/* <Loginpage/>
      <Registerpage/> */}
      {/* <Footer/> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
