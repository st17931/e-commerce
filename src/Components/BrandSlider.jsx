import './Products.css'


import logo1 from '/src/assets/logo1.png'
import logo2 from '/src/assets/logo2.png'
import logo3 from '/src/assets/logo3.png'
import logo4 from '/src/assets/logo4.png'
import logo5 from '/src/assets/logo5.png'

function BrandSlider() {
  return (
    <>
      <div className=" brandslider">
        <div className="col">
            <img src={logo1} alt="" />
        </div>
        <div className="col">
        <img src={logo2} alt="" />
        </div>
        <div className="col">
        <img src={logo3} alt="" />
        </div>
        <div className="col">
        <img src={logo4} alt="" />
        </div>
        <div className="col">
        <img src={logo5} alt="" />
        </div>
      </div>
    </>
  )
}

export default BrandSlider
