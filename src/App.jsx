import NavBar from './pages/Navbar';
import Banner from './pages/Banner';
import About from './pages/About';
import Overview from './pages/Overview';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Plan from './pages/Plan';
import Brand from './pages/Brand';
import Product from './pages/Product';
import Articles from './pages/Article';
import Stats from './pages/Stats';
import Map from './pages/Map';

function App() { 
  return (
    <div className="root">
            <NavBar />
            <Banner />
            <Brand />             
            <Stats />             
            <Plan />
            <About />
            <Overview />                   
            <Product />
            <Articles />
            <Contact />
            <Map/>
            <Footer />  
    </div>
  );
 }

export default App;
