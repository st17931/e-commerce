import './Cartitem.css'


export default function Cartitem({ title, price, imgsrc }) {

    return (
        <div className='outerDiv'>
            <img height="100px" width="100px" src={imgsrc} alt="" />
            <div>
                <h5>{title}</h5>
                <h6>{price}</h6>
            </div>
        </div>
    )
}