import React from 'react'
import './Navbar.css'
import { FaAngleDown } from "react-icons/fa";
function Navbar() {
  return (
    <div>
       {/* <div class="top-navbar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div class="bottom-navbar">
    <ul>
      <li><a href="#">Products</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
  </div> */}
        <nav class="navbar">
		<div class="navdiv">
			<div class="logo"><a>Browse Categories</a> </div>
			<ul>
				<li><a>Home</a></li>
				<li><a >Products <span style={{paddingTop:'2px'}}><FaAngleDown/></span> </a>  </li>
				<li><a >Categries <span style={{paddingTop:'2px'}}><FaAngleDown/></span></a></li>
                <li><a >Pages <span style={{paddingTop:'2px'}}><FaAngleDown/></span></a></li>
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
  )
}

export default Navbar