import './App.css';
import Elements from './components/Elements';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <br />
      <Elements/>
      <Footer/>
    </div>
  );
}

export default App;
