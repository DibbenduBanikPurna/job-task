import React, { useEffect, useState } from 'react'
import './Products.css'
import ProductList from './ProductList'
import { CiDeliveryTruck } from "react-icons/ci";
import { FaHeadphones, FaHandHoldingUsd,FaBox  } from "react-icons/fa";

function Products() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data.products)
            setProducts(data.products)
        })
    },[])
  return (
    <>
   
    <div className='container'>
        
        <div className='side'>
        <div class="box">
            <div style={{display:'flex'}}>
                <div>
                <p><span style={{fontSize:'30px',marginBottom:'15px', color:'cyan'}}><CiDeliveryTruck/> </span></p>
                </div>
                <div style={{margin:'5px'}}>
                <p>Free Shiping <br/> <span style={{fontSize:'12px',color:'grey'}}>minimum order $90</span></p>
                <p style={{fontSize:'12px'}}></p>
                </div>

                
            </div>
            <div style={{display:'flex'}}>
                <div>
                <p><span style={{fontSize:'30px',marginBottom:'15px',color:'cyan'}}><FaHeadphones/> </span></p>
                </div>
                <div style={{margin:'5px'}}>
                <p>24/7 Support<br/> <span style={{fontSize:'12px',color:'grey'}}>Contact us 24 hours</span></p>
                <p style={{fontSize:'12px'}}></p>
                </div>

                
            </div>
            <div style={{display:'flex'}}>
                <div>
                <p><span style={{fontSize:'30px',marginBottom:'15px', color:'cyan'}}><FaHandHoldingUsd/> </span></p>
                </div>
                <div style={{margin:'5px'}}>
                <p>Best Prices & Offers<br/> <span style={{fontSize:'12px',color:'grey'}}>order $100 or More</span></p>
                <p style={{fontSize:'12px'}}></p>
                </div>

                
            </div>
            <div style={{display:'flex'}}>
                <div>
                <p><span style={{fontSize:'25px',marginBottom:'15px', color:'cyan'}}><FaBox/> </span></p>
                </div>
                <div style={{margin:'5px'}}>
                <p>Easy Returns<br/> <span style={{fontSize:'12px',color:'grey'}}>Within 30 days</span></p>
                <p style={{fontSize:'12px'}}></p>
                </div>

                
            </div>
       
        </div>
       
        </div>
       
       
         <div class="card-container">
        
       
           
            {
                products.map((p,i)=>{
                    return <ProductList key={i} product={p} />
                })
            }
      
        
    </div>
    </div>
    </>
  )
}

export default Products