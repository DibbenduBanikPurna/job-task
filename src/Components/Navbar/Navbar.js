import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <nav class="navbar">
		<div class="navdiv">
			<div class="logo"><a>Browse Categories</a> </div>
			<ul>
				<li><a>Home</a></li>
				<li><a >Products</a></li>
				<li><a >Categries</a></li>
                <li><a >Pages</a></li>
                <li><a >Campaign</a></li>
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