import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import Pages from './pages/Page';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
     <>
      <Navbar />
        <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:slug" element={<SinglePost />} />
              <Route path="/:slug" element={<Pages />}/>
            </Routes>
        </Router>
        <Footer/>
     </>
  );
}

export default App;