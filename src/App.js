import { Route, Routes } from 'react-router';
import './App.css';
import ReadMore from './components/Card/ReadMore';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Services from './components/Services/Services';
import CheckOut from './components/CheckOut/CheckOut';
import SignIn from './components/SignForms/SignIn';
import SignUp from './components/SignForms/SignUp';
import ResetPass from './components/SignForms/ResetPass';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    // display flex for footer
    <div className='flex flex-col justify-between min-h'>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/readmore/:id" element={<ReadMore />} />
          <Route path="/checkout/:id" element={<RequireAuth>
            <CheckOut />
          </RequireAuth>} />
          <Route path="/checkout" element={<RequireAuth>
            <CheckOut />
          </RequireAuth>} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset" element={<ResetPass />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
