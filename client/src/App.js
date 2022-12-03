import './App.css';
import Homepage from './views/homepage/homepage';
// import Loginpage from './views/loginpage/loginpage';
import Registerpage from './views/registerpage/registerpage';
import Header from './components/header';
import Footer from './components/footer';
import { Card, StudentAllCard, OverviewCard } from './components/card';



function App() {
  return (
    <div className="App">
      <Header/>
      {/* Hello World */}
      <Homepage/>
      <Card
      CourseName="Thsi is a test"
      CourseDetail="This is a test"
      />
      <StudentAllCard
      CourseName="Thsi is a test"
      CourseDetail="This is a test"
      InstructorName="Test"
      />
      <OverviewCard
      />
      {/* <Loginpage/>
      <Registerpage/> */}
      <Footer/>
    </div>
  );
}

export default App;
