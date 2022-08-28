import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './compnents/Home/Home';
import Contact from './compnents/Contact/Contact';
import MyRecongition from './compnents/Recognition/MyRecognition'
import { useState } from 'react';
import HouseIcon from '@mui/icons-material/House';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AboutMe from './compnents/About/AboutMe';



function App() {

  let path = window.location.pathname.split('/')[1];
  const [selected, setSelected] = useState(path ? path : '/');

  const navigationHandler = (url) => {
    // setRedirectUrl(url);
    setSelected(url);
  }


  return (
    <div className='appRoot'>
      <BrowserRouter>
        <div className='App'>
          <div className='headerWrapper' >
            <Link className='links' to="/">
              <div className={selected === "/" ? 'selectedHeaderDiv' : 'headerDiv'} onClick={() => navigationHandler('/')}>
                <div className='desktopView'>Home</div>
                <div className={selected === "/" ? 'selectedIconWrapper' : 'iconWrapper'}><HouseIcon className={'iconColor'} /></div>
              </div>
            </Link>
          </div>
          <div className='headerWrapper'>
            <Link className='links' to="/about">
              <div className={selected === "about" ? 'selectedHeaderDiv' : 'headerDiv'}  onClick={() => navigationHandler('about')}>
                <div className='desktopView'>About</div>
                <div className={selected === "about" ? 'selectedIconWrapper' : 'iconWrapper'}><CastForEducationIcon className={'iconColor'} /></div>
              </div>
            </Link>
          </div>
          <div className='headerWrapper'>
            <Link className='links' to="/recognition">
              <div className={selected === "recognition" ? 'selectedHeaderDiv' : 'headerDiv'} onClick={() => navigationHandler('recognition')}>
                <div className='desktopView'>Recognition</div>
                <div className={selected === "recognition" ? 'selectedIconWrapper' : 'iconWrapper'}><EmojiEventsIcon className={'iconColor'} /></div>
              </div>
            </Link>

          </div>
          <div className='headerWrapper'>
            <Link className='links' to="/contact">
              <div className={selected === "contact" ? 'selectedHeaderDiv' : 'headerDiv'} onClick={() => navigationHandler('contact')}>
                <div className='desktopView'>Contact</div>
                <div className={selected === "contact" ? 'selectedIconWrapper' : 'iconWrapper'}><ContactPageIcon className={'iconColor'} /></div>
              </div>
            </Link>

          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='recognition' element={<MyRecongition />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
