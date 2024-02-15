import React from 'react'
import './TopSection.css'
import { MdAddShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineRetweet } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
function TopSection() {
  return (
    <div>
    <nav className='mainNav'>
      <div className='mainNavLogo'>logo</div>
      <div className='searchBar'>
          <input type='search' placeholder='searcg for product' />
          <button className='searchBtn'><FaSearch /></button>
          <select className="options">
            <option>All Category</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      <div className='navIcons'>
       
        <AiOutlineRetweet />
        <AiOutlineHeart />

       <span><AiOutlineShoppingCart />
       <span className='fix'>0</span>
        </span> 
       
   
          Account  <VscAccount style={{color:'cyan'}} />
          <span>$20.00</span>
        
      </div>
    </nav>



    <nav class="navbar">
      <div class="navdiv">
        <div class="logo"><a>Browse Categories</a> </div>
        <ul>
          <li><a>Home</a></li>
          <li><a >Products <span style={{ paddingTop: '2px' }}><FaAngleDown /></span> </a>  </li>
          <li><a >Categries <span style={{ paddingTop: '2px' }}><FaAngleDown /></span></a></li>
          <li><a >Pages <span style={{ paddingTop: '2px' }}><FaAngleDown /></span></a></li>
          <li><a >Campaign </a></li>
          <li><a >Offer</a></li>
          <li><a >Blog</a></li>
          <li><a >Review</a></li>
          <li><a >Flash Sale</a></li>
          <li><a >Contact us</a></li>

        </ul>
      </div>
    </nav>
  </div>
    // <div>
    //   <nav className='mainNav'>
    //     <div className='mainNavLogo'>P U R N A</div>
    //     <div className='searchBar'>
    //         {/* <p className='bo'>search for products <span style={{float:'right'}}>All Categories</span></p> */}
    //       {/* <input type='search' placeholder='search for product'  /> */}
    //       {/* <button className='searchBtn'><FaSearch /></button> */}
    //     </div>
    //     <div className='navIcons'>
    //      <span style={{margin:'5px'}}> <AiOutlineRetweet /></span>
    //      <span style={{margin:'5px'}}> <AiOutlineHeart /></span>
    //      <span style={{margin:'5px'}}><AiOutlineShoppingCart /></span> 
    //       <div >
    //        <span style={{margin:'30px'}}> Account <span style={{color:'cyan'}}><VscAccount /></span></span>
    //         <span style={{margin:'10px'}}>$20.00</span>
    //       </div>
    //     </div>
    //   </nav>



    //   <nav class="navbar">
    //     <div class="navdiv">
    //       <div class="logo"><a>Browse Categories</a> </div>
    //       <ul>
    //         <li><a>Home</a></li>
    //         <li><a >Products <span style={{ paddingTop: '2px' }}><FaAngleDown /></span> </a>  </li>
    //         <li><a >Categries <span style={{ paddingTop: '2px' }}><FaAngleDown /></span></a></li>
    //         <li><a >Pages <span style={{ paddingTop: '2px' }}><FaAngleDown /></span></a></li>
    //         <li><a >Campaign </a></li>
    //         <li><a >Offer</a></li>
    //         <li><a >Blog</a></li>
    //         <li><a >Review</a></li>
    //         <li><a >Flash Sale</a></li>
    //         <li><a >Contact us</a></li>

    //       </ul>
    //     </div>
    //   </nav>
    // </div>
//     <div class="top-navbar">
      
//     <ul>
//     <li style={{float:'left'}}><a href="#" >P U R N A</a></li>
//       <li><input type="text" placeholder='search for products'/></li>
//       <li><a href="#">About</a></li>
//       <li><a href="#"><MdAddShoppingCart/></a></li>
//       <li><a href="#">Account</a></li>
//       <li><a href="#">Account</a></li>
//       <li style={{fontWeight:'bold'}}>$20.00</li>
//     </ul>
//   </div>
  )
}

export default TopSection