import NavBar from './components/NavBar';
import HomePage from './screens/HomePage';
import AboutUs from './screens/AboutUs';
import Sponsors from './screens/Sponsors';
import Timeline from './screens/Timeline';
import FAQs from './screens/FAQs';
import Contact from './screens/Contact';

function App() {
  return (
    <div className="flex flex-col items-center justify-center wrapper-bg">
      <NavBar />
      <HomePage />
      <AboutUs />
      <Timeline />
      <Sponsors />
      <FAQs />
      <Contact />
    </div>
  );
}

export default App;
