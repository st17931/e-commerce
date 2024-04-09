
import './Navbar.css'
import logo from '/src/assets/Logo.png'
import header from '/src/assets/header.png'
import slider2 from '/src/assets/slider2.png'
import header1 from '/src/assets/header1.png'
import header2 from '/src/assets/header2.png'
import { useDispatch,useSelector } from "react-redux"
import {toggleAdcSection} from "../Redux/ActionCreator/actions.js"
function Navbar() {
  const dispatch = useDispatch();
  const itemInCart = useSelector((state)=> state.addItemToCart.cartItems)
  console.log("Item in cart", itemInCart);
  return (
    <>

      {/* Navbar starts */}
      <div className=" nav container ">
        <div className="nav-items col-5">
          <div className="li-items">
            <li>Shallow</li>
            <li>Accessories</li>
            <li>Category</li>
          </div>
          <li>Collection</li>
        </div>
        <div className="logo-cont col-7">
          <div className="logo ">
            <img src={logo} alt="" />
          </div>
          <div className="cart-items ">
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-user"></i>
            <i className="bi bi-bag cart"
            onClick={()=> dispatch(toggleAdcSection())}
            >
              <span className='popupOnBag'>{itemInCart.length}</span>

            </i>

          </div>

        </div>
        <div className="hamburger">
          <i class="fa fa-bars"></i>
        </div>
      </div>

      {/* Navbar Ends */}
      {/* Header Starts */}
      <div className="container header ">

        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={header} className="d-block w-100 header-img" alt="..." />
              <img src={header1} className="d-block w-100 header1-img" alt="..." />
              <div className="slider-content">
                <div className="sub-title">
                  GET 50% OFF
                </div>
                <div className="main-title">
                   YOUR BEAUTY COMES <br /> FROM WITHIN
                </div>
                <div className="desc">
                  Skincare made with the world's finest plant oils and absolutes
                </div>
                <span className="carousel-btn">SHOP NOW</span>
              </div>

            </div>
            <div className="carousel-item">
              <img src={slider2} className="d-block w-100 header-img" alt="..." />
              <img src={header2} className="d-block w-100 header1-img" alt="..." />
              <div className="slider-content-2">
                <div className="sub-title">
                  NEW ARRIAVALS
                </div>
                <div className="main-title">
                 NATURAL BEAUTY FACE <br /> & Skin Glow
                </div>
                <div className="desc">
                  Skincare made with the world's finest plant oils and absolutes
                </div>
                <span className="carousel-btn">SHOP NOW</span>
              </div>

            </div>

          </div>

          <div className="dot-cont ">

            <div className="carousel-control-prev right " data-bs-target="#carouselExample" data-bs-slide="next">
              <span className=" " aria-hidden="true"></span>
              <span className="visually-hidden  ">Next</span>
            </div>



            <div className="carousel-control-next left" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="" aria-hidden="true"></span>
              <span className="visually-hidden ">Previous</span>
            </div>

          </div>
          <div className="header-btn">
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon carousel-arrbtn" aria-hidden="true"></span>
            <span className="visually-hidden  ">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon carousel-arrbtn" aria-hidden="true"></span>
            <span className="visually-hidden ">Next</span>
          </button>
          </div>
        </div>
      </div>




      {/* Header ends */}

    </>
  )
}

export default Navbar
