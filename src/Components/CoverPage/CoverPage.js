import React from 'react'
import './CoverPage.css'
import Image from '../../images/picture.png'
import { MdKeyboardArrowRight } from "react-icons/md";
function CoverPage() {
  return (
    <div class="container">
        <div class="left-side">
          
           

<ul>
  <li>Fashion Collection  </li><span style={{float:'right'}}><MdKeyboardArrowRight/></span>
  <br/>
  <li>Electronics Item  </li> <span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Home Applicances </li> <span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Kitchen Item</li> <span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Food  </li><span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Furniture</li> <span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Gadgets</li> <span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Toys and Games</li> <span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Health & beauty</li> <span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>View All Categories</li> <span style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
</ul>

        </div>
        <div className="right-side">
           <div className='flex'>
            <div style={{padding:'100px'}}>
            <p>Up to <span className="text">70%</span> of on black Friday</p>
            <h1>TRENDY <span style={{color:"blue"}}>FASHION</span><br/> COLLECTION</h1>
            <button  className='btn'>Buy Now</button>
         
          

           </div>

           <div>
           <img src={Image} alt=""/>
           </div>
           </div>
          
           
        </div>
    </div>
  )
}

export default CoverPage

