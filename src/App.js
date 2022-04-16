import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    // display flex for footer
    <div className='flex flex-col justify-between min-h'>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
