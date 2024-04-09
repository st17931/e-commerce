import { useState } from 'react'
import { addToCart } from '../Redux/ActionCreator/actions'
import { useDispatch } from "react-redux"

import './Products.css'
function Products(props) {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const EnterHandler = () => {
    setHover(true)
  }

  return (
    <>
      <div className="card col " onMouseEnter={EnterHandler} onMouseLeave={() => setHover(false)}>
        <img src={hover ? props.imgHover : props.imgsrc} alt="" />
        <div className="card-cart-items">
          <div className="eye">  <i class="fa-solid fa-eye"></i> </div>
          <div className="wishlist"> <i class="fa-regular fa-heart"></i></div>
          <div className="compare"><i class="bi bi-bar-chart-fill"></i>
          </div>
          <div className="add-to-cart"
           onClick={()=> dispatch(addToCart(props))}
          >   <i class="fa-solid fa-cart-shopping"></i></div>
        </div>
        <div className="card-body">
          <span className="title">{props.title}</span>
          <br />
          <span className="strike-price"><s>{props.strikeprice}</s></span>
          <span className="price">{props.price}</span>
        </div>
      </div>





    </>
  )
}

export default Products
