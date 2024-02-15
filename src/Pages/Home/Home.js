import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import CoverPage from '../../Components/CoverPage/CoverPage'
import Products from '../../Components/Products/Products'
import Section from '../../Components/Section/Section'
import TopSection from '../../Components/TopSection/TopSection'

function Home() {
  return (
    <div>
      <TopSection/>
        {/* <Navbar/> */}
        <CoverPage/>
        <Section/>
        <Products/>
    </div>
  )
}

export default Home