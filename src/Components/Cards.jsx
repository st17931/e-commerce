import Products from "./Products"
import './Products.css'
import p1 from '/src/assets/p1.png'
import p11 from '/src/assets/p1.1.png'
import p2 from '/src/assets/p2.png'
import p22 from '/src/assets/p2.2.png'
import p3 from '/src/assets/p3.png'
import p33 from '/src/assets/p33.png'
import p4 from '/src/assets/p4.1.png'
import p44 from '/src/assets/p44.1.png'
function Cards() {
  return (
    <>
      <h1 className="text-center heading" >This Week's Highlights</h1>

      <div className=" cards-container  ">
       <div className="col-6">
        <Products
          imgsrc={p1}
          imgHover={p11}
          title="Apple Cinema 30"
          strikeprice="$122.00"
          price="$110.00"


        />
        <Products
          imgsrc={p2}
          imgHover={p22}
          title="Canon EOS 5D"
          strikeprice="$122.00"
          price="$110.00"


        />
        </div>
        <div className="col-6">
      
              <Products
          imgsrc={p3}
          imgHover={p33}
          title="HP LP3065"
          strikeprice="$122.00"
          price="$110.00"


        />
        <Products
          imgsrc={p44}
          imgHover={p4}
          title="HTC Touch HD"
          strikeprice="$122.00"
          price="$110.00"

        />
        </div>

</div>
  

    </>
  )
}

export default Cards
