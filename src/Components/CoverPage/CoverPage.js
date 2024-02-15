import React from 'react'
import './CoverPage.css'
import Image from '../../images/picture.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
function CoverPage() {
  return (
    <div class="container">
        <div class="left-side">
          
           

<ul>
  <li>Fashion Collection  </li><span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span>
  <br/>
  <li>Electronics Item  </li> <span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Home Applicances </li> <span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Kitchen Item</li> <span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Food  </li><span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Furniture</li> <span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Gadgets</li> <span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Toys and Games</li> <span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>Health & beauty</li> <span className='s' style={{float:'right'}}><MdKeyboardArrowRight/></span><br/>
  <li>View All Categories</li> <span className='s' style={{float:'right',color:'cyan'}}><FaPlus/></span><br/>
</ul>

        </div>
        <div className="right-side">
           <div className='flex'>
            <div style={{padding:'100px'}}>
            <p>Up to <span className="text">70%</span> of on black Friday</p>
            <h1 style={{textAlign:'left'}}>TRENDY <span style={{color:"blue"}}>FASHION</span><br/> COLLECTION</h1>
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

