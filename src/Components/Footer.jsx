import './Footer.css'

function Footer() {
  return (
    <>
      <div className="footer">

        <div className="container footer-container">
          <div className="footer-content">
            <li className="active">Contact Information </li>
            <li>
              <i class="fa-solid fa-location-dot"></i> 4005, Silver Business Point India
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              +91 123456789
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i> demoexample@gmail.com
            </li>

          </div>
          <div className="footer-content">
            <li className="active">Account</li>
            <li>
              <a href="">  My Account</a>
            </li>
            <li><a href="">Specials</a></li>
            <li><a href="">Order History</a>

            </li>
            <li> <a href="">Newsletter</a></li>

            <li>   <a href="">Contact Us</a></li>
          </div>
          <div className="footer-content">
            <li className="active">  Information</li>
            <li>  <a href="">Delivery</a></li>
            <li>     <a href="">Terms & Conditions</a></li>
            <li> <a href="">Information</a></li>
            <li><a href="">About Us</a></li>
            <li>  <a href="">Privacy Policy</a></li>

          </div>
          <div className="footer-content">
            <li className="active">Keep in Touch</li>
            <div className='news'>Subscribe our newsletter and  <br />get latest offers and promotions</div>
            <div className='form'>


              <input type="text" placeholder='Your E-mail ' />


            </div>
            <div className='icons'>

              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-pinterest"></i>
              <i class="bi bi-youtube"></i>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
