import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './compnents/Home/Home';
import Contact from './compnents/Contact/Contact';
import MyRecongition from './compnents/Recognition/MyRecognition'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import GrainIcon from '@mui/icons-material/Grain';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import HouseIcon from '@mui/icons-material/House';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AboutMe from './compnents/About/AboutMe';
import { styled } from '@mui/material/styles';



function App() {

  const [redirectUrl, setRedirectUrl] = useState('');
  const [showAssistant, setShowAssistant] = useState(false);

  const commands = [
    {
      command: ["Go to *", "Open *", "Navigate to *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage)
    },
    {
      command: ["Turn on dark mode", "Dark mode", "Night mode"],
      callback: () => {
        document.body.style.background = '#3D0C02'
      },
      // callback: () => {
      //   // darkMode();
      //   document.getElementById('app').style.color = '#161616'
      //   // document.body.getElementsByClassName('App').style.color = '#161616'
      // }
    },
    {
      command: ["Turn on light mode", "Light mode", "Day mode"],
      callback: () => {
        <>
          {
            document.body.style.background = '#FFF'
            // document.getElementById('app').style.color = '#161616'
          }
        </>
      },
    }

  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const pages = ["home", "homepage", "about", "contacts", "recognition"];
  const urls = {
    home: '/',
    homepage: '/',
    about: '/about',
    contact: '/contact',
    contacts: '/contact',
    recognition: '/recognition'
  };

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Navigate to={urls[redirectUrl]} />
    }
    else {
      redirect = <p>Could not find the page: {redirectUrl}</p>
    }
  }

  const showAssistantHandler = () => {
    setShowAssistant(!showAssistant);
    SpeechRecognition.startListening();
    SpeechRecognition.stopListening() && setShowAssistant(false);
  }

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#0A192F',
      fontSize: '1.3rem',
    },
  }));

  // const darkMode = () => {
  //   console.log("In dark mode")
  //   document.getElementById('links').style.color = '#FFF'
  //   document.getElementById('app').background = '#3D0C02'
  // }

  // const lightMode = () => {
  //   document.getElementById('app').style.color = '#FFF'
  //   document.getElementById('app').background = '#3EB489'
  // }


  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between', height: '100vh', overflow: 'hidden', background: 'rgba(10, 25, 47, 0.85)' }}>
      <BrowserRouter>
        <div className='App'>
          <div className='headerWrapper'>
            <Link className='links' to="/">
              <div className='headerDiv'>
                Home
                <div className='iconWrapper'><HouseIcon className='iconColor' /></div>
              </div>
            </Link>
          </div>
          <div className='headerWrapper'>
            <Link className='links' to="/about">
              <div className='headerDiv'>
                About
                <div className='iconWrapper'><CastForEducationIcon className='iconColor' /></div>
              </div>
            </Link>
          </div>
          <div className='headerWrapper'>
            <Link className='links' to="/recognition">
              <div className='headerDiv'>
                Recognition
                <div className='iconWrapper'><EmojiEventsIcon className='iconColor' /></div>
              </div>
            </Link>

          </div>
          <div className='headerWrapper'>
            <Link className='links' to="/contact">
              <div className='headerDiv'>
                Contact
                <div className='iconWrapper'><ContactPageIcon className='iconColor' /></div>
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
        {redirect}
      </BrowserRouter>

      <div className='voiceControls'>
        {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
        {
          showAssistant &&
          <div>
            {
              listening
                ?
                <MicIcon onClick={SpeechRecognition.startListening} style={{ cursor: 'pointer' }} />
                :
                <MicOffIcon onClick={SpeechRecognition.stopListening} style={{ cursor: 'pointer' }} />
            }
            <RestartAltIcon onClick={resetTranscript} style={{ cursor: 'pointer' }} />
          </div>
        }
        {/* <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
        {/* <button onClick={resetTranscript}>Reset</button> */}
        {/* <p>{transcript}</p> */}
      </div>
      {/* <div > */}
      {/* <p>{transcript}</p> */}
      <CustomTooltip title="Say anyone of (goto/open) along with pagename for voice navigation" className='tooltip' arrow position="right">
        <GrainIcon className={listening ? `listening voiceAssist` : 'voiceAssist'} style={{ cursor: 'pointer' }} onClick={showAssistantHandler} />
      </CustomTooltip>
      {/* </div> */}
    </div>
  );
}

export default App;
