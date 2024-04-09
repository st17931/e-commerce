import './Blogs.css'
import blog1 from '/src/assets/blog1.png'
import blog2 from '/src/assets/blog2.png'
import blog3 from '/src/assets/blog3.png'
function Blogs() {
    return (
        <>

            <h1 className="text-center heading">Blog & Insights</h1>


            <div className="cards-container blogs-card ">
                <div className="cards col-4 ">
                <div className="blog-image">
                <img src={blog1} alt="" srcset="" />
                    <div className="blogs-date">08 Aug ,2023</div>
                    
                    </div>      
                 
                    <div className="card-body">
                        <div className="blog-title">SCELERISQUE VESTIBULUM URNA</div>
                        <div className="blog-about">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis dicta molestias esse aspernatur repudiandae repellendus ullam quis expedita necessitatibus!
                        </div>
                    </div>

                </div>
                <div className="cards col-4">
                <div className="blog-image">
                    <img src={blog2} alt="" srcset="" />
                    <div className="blogs-date">08 Aug ,2023</div>
                    </div>
                    <div className="card-body">
                        <div className="blog-title">SCELERISQUE VESTIBULUM URNA</div>
                        <div className="blog-about">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis dicta molestias esse aspernatur repudiandae repellendus ullam quis expedita necessitatibus!
                        </div>
                    </div>

                </div>
                <div className="cards col-4">
                <div className="blog-image">
                    <img src={blog3} alt="" srcset="" />
                    <div className="blogs-date">08 Aug ,2023</div></div>
                    <div className="card-body">
                        <div className="blog-title">SCELERISQUE VESTIBULUM URNA</div>
                        <div className="blog-about">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, debitis dicta molestias esse aspernatur repudiandae repellendus ullam quis expedita necessitatibus!
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blogs
