import React from 'react'
import SearchFeed from '../components/SearchFeed'
import { portfolioback } from '../assets'

const Portfolio = () => {
  return (
    <div className='pt-[120px] bg-gray-100 '>
      <div className="text-center pt-3">
          <h1 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-[#14213d]">
            Portfolio
          </h1>
         
        </div>
      <SearchFeed/>
    </div>
  )
}

export default Portfolio