import SectionHeader from "./SectionHeader"

function Services(props) {
  return (
    <>
    
      <div className="services">
        <div className="img-cont">
        <img src={props.imgsrc} alt="" /> <br /> </div>
        <div className="service-section">
        <span className="services-title">{props.servicetitle}</span> <br />
        <div className="services-content">{props.servicecontent}</div>
        </div>
      </div>
    </>
  )
}

export default Services
