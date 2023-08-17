import logo from './logo.svg';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import Footer from './Component/Footer';


import Homepage from './Pages/Homepage';
import Navbar from './Component/Navbar';

function App() {
  return (
   <>
    <Navbar />
    <Homepage />
    <Footer />
   </> 
  );
}

export default App;
