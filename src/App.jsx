import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { Navbar} from "./components";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Hire from "./pages/Careers";
import Walmart from './pages/services/Walmart'
import Amazon from './pages/services/Amazon';
import Shopify from './pages/services/Shopify';
import Web from './pages/services/Web';
import Graphics from './pages/services/Graphics';
import Marketing from './pages/services/Marketing.jsx'


import { WhatsappIcon } from "react-share";
import { WhatsAppWidget } from "react-whatsapp-widget";


const App = () => {
  return (
    <>
    <AnimatedCursor color='252, 163, 17' innerScale={0.5} innerSize={15}
      outerSize={15}
      outerScale={1.5} clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
      outerStyle={{
        mixBlendMode: 'exclusion'
      }}/>


{/* 
<WhatsAppWidget
  phoneNumber="+1234567890" // Enter your WhatsApp phone number
  textReplyTime="Typically replies within an hour"
  message="Hello, how can I help you?" // Optional pre-filled message
/>
<WhatsappIcon
  size={32}
  round
  url="https://api.whatsapp.com/send?phone=+1(646)8108076" // Replace with your phone number and pre-filled message
/> */}

    <BrowserRouter>
      <div className='relative z-0 bg-white'>
      <Navbar />
      
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} exact />
          <Route path="/services" element={<Services/>} exact/>
              <Route path="/services/walmart" element={<Walmart/>} exact/>
              <Route path="/services/amazon" element={<Amazon/>} exact/>
              <Route path="/services/ecommerce" element={<Shopify/>} exact/>
              <Route path="/services/web-development" element={<Web/>} exact/>
              <Route path="/services/graphic-designing" element={<Graphics/>} exact/>
              <Route path="/services/marketing" element={<Marketing/>} exact/>
  
          <Route path="/about" element={<AboutUs/>} exact />
          <Route path="/contact" element={<ContactUs/>} exact/>
          <Route path="/terms-and-condition" element={<Terms/>} exact/>
          <Route path="/privacy-policy" element={<Privacy/>} exact/>
          <Route path="/hire-us" element={<Hire/>} exact/>
        </Routes> 
        <Footer/>
      </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;
