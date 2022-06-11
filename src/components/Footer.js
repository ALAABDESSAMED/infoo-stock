 import React from 'react' 
 import "./Footer.css" 
import {  Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
      
    <footer className="footer" >
    <div class="mt-5 pt-5 pb-5 footer bg-info" >
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 about-company">
          <h2>Sticker-Shop</h2>
          <p class="pr-5 text-white-50">We sell stickers and ship them with low prices</p>
          <p><a href="#"><i class="fa fa-facebook-square mr-1 text-success" ></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
        </div>
        <div class="col-lg-3 col-xs-12 links">
          <h4 class="mt-lg-0 mt-sm-3">Links</h4>
            <ul class="m-0 p-0">
              <li> <a href="#">Facebook</a></li>
              <li> <a href="#">Instagram</a></li>

            </ul>
        </div>
        <div class="col-lg-4 col-xs-12 location">
          <h4 class="mt-lg-0 mt-sm-4">Location</h4>
          <p>Avenue Ali Ben Kahla, Kalaa Kebira 4060</p>
          <p class="mb-0"><i class="fa fa-phone mr-3"></i>(216) 55 07 43 88</p>
          <p><i class="fa fa-envelope-o mr-3"></i>achourhaythem6@gmail.com</p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col copyright">
          <p class=""><small class="text-white-50">© 2022. All Rights Reserved.</small></p>
        </div>
      </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer
