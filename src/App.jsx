
import './App.css'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Slider from './Components/Slider'

import SectionHeader from './Components/SectionHeader'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import Blogs from './Components/Blogs'
import LogoSlider from './Components/Logoslider'
import BrandSlider from './Components/BrandSlider'
import { toggleAdcSection } from './Redux/ActionCreator/actions'
import { useSelector, useDispatch } from "react-redux";
import Cartitem from './Components/Cartitem'


function App() {
  const isAtcSection = useSelector((state)=> state.toggleAdc.is);
  const itemsIncart = useSelector((state)=>state.addItemToCart.cartItems);
  const dispatch = useDispatch()

  return (
    <>
    {
      isAtcSection && <div className='atcSection'
      onClick={()=>dispatch(toggleAdcSection())}
      
      >
        <div className='insideAtcSection'>
            <h6>Cart</h6>
            <hr/>
            <div>
              
              {itemsIncart.length == 0 ? <p>You dont have any item in the cart</p> :
              itemsIncart.map((value)=> <Cartitem title={value.title} price={value.price} imgsrc={value.imgsrc}/>)}
            </div>
        </div>
          </div>}
      <Navbar />
      <Cards />
      <SectionHeader />
      <Slider />
      <Blogs />
      <LogoSlider />
      {/* <BrandSlider /> */}
      <Gallery />
      <Footer />
    </>
  )
}

export default App
