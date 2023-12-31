import { Link } from "react-router-dom";
import { ReblateLogo } from "../assets";
import Typed from 'react-typed';
const ShuffleHero = () => {

  return (
    <section className="w-full px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 max-w-6xl mx-auto border-b-2 border-gray-100 py-[190px]">
      <div className="md:w-[550px]">
      <p className="text-base md:text-lg text-gray-500 my-4 md:my-6 ">
       Welcome to
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#14213d] ">
          <Typed strings={['Reblate Solutions','Reblate Solutions']} typeSpeed={300} showCursor={false} loop // Hide the cursor initially
        onComplete={(self) => {
         // Make the cursor visible after typing completes
          self.options.showCursor = true; // Update the showCursor option to true
        }}/>
       
        </h1>
        
        <p className="text-base md:text-lg text-gray-500 my-4 md:my-6 ">
        Transforming E-commerce Landscapes with Innovative Designs Elevate Your Brand Presence Today with Reblate Solutions, Your Trusted E-commerce Agency!
        </p>
        <h1 className="text-xl md:text-3xl font-bold text-[#14213d] mb-5">
        We offer top-notch services of <br />  <Typed className="text-[#fca311]"
                    strings={['Walmart','Amazon','E-Commerce', 'Web Developmemt', 'Graphic Designing', 'Digital Marketing']}
                    typeSpeed={300} loop
                />
        </h1>
        
        <div className="flex justify-start">
        <button className='bg-white font-bold border border-[#14213d] hover:border-[#fca311] md:flex text-sm px-6 py-3 mr-4 rounded-lg shadow-lg text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
               <Link to="/hire-us">
                Hire Us
               </Link>
        </button>

        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};


const ShuffleGrid = () => {


  return (
    <div className=" max-w-full md:max-w-lg mx-auto">
      <img src={ReblateLogo} alt="Reblate Logo" className="sm:w-[450px] md:w-full object-contain" /> 
    </div>
  );
};

export default ShuffleHero;