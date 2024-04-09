import './Products.css'
import Services from "./Services"
import Icon1 from '/src/assets/I1.png'
import Icon2 from '/src/assets/I2.png'
import Icon3 from '/src/assets/I3.png'
import Icon4 from '/src/assets/I4.png'
function SectionHeader() {
  return (
    <>
  <h1 className="text-center heading">Why Shop With Shallow</h1>
    <div className="service-container container">
      <Services
      imgsrc={Icon1}
      servicetitle="100% Organic"
      servicecontent="Lorem ipsum dolor sit amet, consectetur  "
      
      
      />
       <Services
      imgsrc={Icon2}
      servicetitle="100% Organic"
      servicecontent="Lorem ipsum dolor sit amet, consectetur a "
      
      
      />
       <Services
      imgsrc={Icon3}
      servicetitle="100% Organic"
      servicecontent="Lorem ipsum dolor sit amet, consectetur a "
      
      
      />
       <Services
      imgsrc={Icon4}
      servicetitle="100% Organic"
      servicecontent="Lorem ipsum dolor sit amet, consectetur   "
      
      
      />

</div>
    </>
  )
}

export default SectionHeader
