import React from 'react'
import  './Section.css'
import { CiLock } from "react-icons/ci";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
function Section() {
  return (
    <>
    <div class="flex-container">
   <div class="flex-item">
        
    <div  style={{float:'left',padding:'10px'}}>
    <p>Gadget Store</p>
    <h1>30% Sale</h1>
    <p style={{color:'red'}}><CiLock/>  <span style={{textDecoration:'underline'}}>Buy Now</span></p>
    </div>
    <div>
    <img style={{height:'80px', float:'right',marginTop:'40px'}} src="https://cdn.dummyjson.com/product-images/6/1.png" alt=""/>
    </div>
   
  
   
   </div>
    <div class="flex-item">
    <div style={{float:'left',padding:'10px'}}>
    <p>Bundle Package</p>
    <h1>Save 30%</h1>
    <p style={{color:'red',textDecoration:'underline'}}> See all</p>
    </div>
    <div>
    <img style={{height:'80px', float:'right',marginTop:'40px'}} src="https://cdn.dummyjson.com/product-images/25/1.png" alt=""/>
    </div>
    </div>
    <div class="flex-item">
    <div style={{float:'left',padding:'10px'}}>
    <p>Valentines Offer</p>
    <h1>30% Sale</h1>
    <p style={{color:'red'}}><CiLock/>  <span style={{textDecoration:'underline'}}>Buy Now</span></p>
    </div>
    <div>
    <img style={{height:'80px', float:'right',marginTop:'40px'}} src="https://cdn.dummyjson.com/product-images/30/1.jpg" alt=""/>
    </div>
   
    </div>
    <div class="flex-item">
    <div style={{float:'left',padding:'10px'}}>
    <p>Relax Chair</p>
    <h1>New Arrival</h1>
    <p style={{color:'red'}}><CiLock/>  <span style={{textDecoration:'underline'}}>Buy Now</span></p>
    </div>
    <div>
    <img style={{height:'80px', float:'right',marginTop:'40px'}} src="https://cdn.dummyjson.com/product-images/27/1.jpg" alt=""/>
    </div>
   
    </div>
   
</div>
<h4 style={{marginLeft:'195px'}}>  Featured Item <span style={{float:'right'}}> <FaArrowLeft/> <span style={{color:'cyan'}}><FaArrowRight/></span>  </span> </h4>
</>
  )
}

export default Section