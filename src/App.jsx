import NavBar from './components/NavBar';
import HomePage from './screens/HomePage';
import AboutUs from './screens/AboutUs';
import Sponsors from './screens/Sponsors';
import Timeline from './screens/Timeline';
import BackgroundWrapper from './components/BackgroundWrapper';
import FAQs from './screens/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BackgroundWrapper />
      <NavBar />
      <HomePage />
      <AboutUs />
      <Timeline />
      {/* <Sponsors /> */}
      {/* <FAQs /> */}
      <Footer />
    </>
  );
}

export default App;
