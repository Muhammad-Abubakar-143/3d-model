import { Link } from "react-router-dom";
import { technologies } from "../../constants/tech";
import { EcommerceOffer, EcommercegridBottom, EcommercegridTop } from "../../constants/ecommerce";
import { React, useEffect , useState } from "react";

const Shopify = () => {
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="pb-4 bg-white text-center pt-[130px]">
        <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          ECommerce
        </h1>
      </div>

      <div className="px-9 bg-white pb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {EcommercegridTop.map((top)=>(
          <>
          <div className="w-[90%] h-100vh flex">
          <img src={top.image} alt={top.title} className="object-contain" />
        </div>
        <div className="text-gray-500 tracking-wider">
          {top.para.map((desc)=>(
            <p>{desc.desc}</p>
          ))}
          <h1 className="text-[25px] text-[#14213d] tracking-wider">
            Enhance Your Company with Seamless E-commerce Excellence
          </h1>
          <p className="tracking-wider">Reblate Solutions offers Shopify Dropshipping and WooCommerce
            services for e-commerce businesses. Their team handles complexities,
            allowing focus on growth. Reblate Solutions combines technical
            expertise with dedication to success, ensuring your e-commerce
            venture meets and exceeds expectations.
          </p>
        </div>
          </>
        ))}
        
      </div>
      <div className="md:pb-8 py-4 md:px-52 px-5 w-full bg-white">
        <h1 className=" font-black md:text-[60px] md:pl-24 pl-9 sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
          What we Offer
        </h1>
        <div className="grid gird-cols-1 md:grid-cols-2 gap-2 text-gray-500 md:pl-24 pl-9 max-w-7xl mx-auto mt-4">
          {EcommerceOffer.map((offer) => (
            <div key={offer.id} className="text-start w-[90%]">
              <h1 className="text-[25px] text-[#14213d]">{offer.title}</h1>
              <ul className="text-normal">
                {offer.desc.map((desc) => (
                  <li className="list-disc" key={offer.id}>
                    {desc.list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="px-9 pb-10 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
        {EcommercegridBottom.map((bottom)=>(
          <>
          <div key={bottom.id} className="text-gray-500 flex justify-center flex-col tracking-wider">
          <h1 className="text-[25px] text-[#14213d]">{bottom.title}</h1>
          {bottom.para.map((desc)=>(
            <p>{desc.desc}</p>
          ))}
        </div>
        <div className="w-[100%] flex items-center justify-end">
          <img src={bottom.image} alt={bottom.title} className="w-[75%] h-full object-contain" />
        </div>
          </>
        ))}
        
      </div>
      <div className="pb-4 bg-white text-left px-9">
        <h1 className=" font-black md:text-[40px] text-[30px] text-[#14213d]">
          Other Services
        </h1>
      </div>
      <div className="px-9 flex-row bg-white flex-wrap justify-center gap-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10">
        {technologies.map((technology) => (
          <>
            <Link to={technology.link} key={technology.title} onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}className="bg-black/10 p-5 rounded-2xl w-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-[#14213d] translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-300" />
                <div className="w-full flex items-center justify-between ">
                  <div className="relative w-[35%] flex md:w-[50%]">
                    <img
                      src={technology.icon}
                      alt="project_image"
                      className="w-[60%] object-contain rounded-full md:h-[50px] h-auto p-2 group-hover:bg-gray-100 z-10 "
                    />
                  </div>
                  <div className="w-full flex justify-start">
                    <h3 className="text-black font-bold md:text-[16px] text-[13px] group-hover:text-white z-10 text-start">
                      {technology.title}
                    </h3>
                  </div>
                </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default Shopify;
