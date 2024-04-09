import './Slider.css'
import f1 from '/src/assets/f1.png'
import f2 from '/src/assets/f2.png'
import f3 from '/src/assets/f3.png'
import f4 from '/src/assets/f4.png'
import poster from '/src/assets/poster.png'
import i1 from '/src/assets/icon1.png'
import i2 from '/src/assets/icon2.png'
import i3 from '/src/assets/icon3.png'
import i4 from '/src/assets/icon4.png'
import bannerparallax1 from '/src/assets/bannerparallax-1.png'
import bannerparallax2 from '/src/assets/bannerparallax-2.png'
function Slider() {
    return (
        <>
            <div className="testimonial">

                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="..." class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


            </div>
            <h1 className="text-center heading">Shop Your Favourites</h1>
            <div className="container fav">
                <div className="fav-responsive"><div className="col"><img src={f1} alt="" /> <span className="text-container">Hair Care</span></div>
                <div className="col"><img src={f2} alt="" /><span className="text-container">Organic Soap</span></div></div>
<div className="fav-responsive">                <div className="col"><img src={f3} alt="" /><span className="text-container">Skin Care</span></div>
                <div className="col"><img src={f4} alt="" /><span className="text-container">Fragrance</span></div></div>
            </div>

            <div className="main-section">
                <div className="col-6 poster">
                    <img src={poster} alt="" />

                </div>
                <div className="col-6 ">
                    <div className="feature-block"><h4>Beauty Glow Starts With Shallow Cosmetic Products</h4></div>
                    <div className="features-block"><img src={i1} alt="" />
                        <div className="poster-container">
                            <span className="poster-title">Shining Skin</span><br />
                            <span className="poster-content">Lorem ipsum dolor sit amet, conc</span>
                        </div>
                    </div>
                    <div className="features-block"><img src={i2} alt="" />
                        <div className="poster-container">
                            <span className="poster-title">Shining Skin</span><br />
                            <span className="poster-content">Lorem ipsum dolor sit amet, conconsur in the done</span>
                        </div>
                    </div>
                    <div className="features-block">
                        <img src={i3} alt="" />
                        <div className="poster-container">
                            <span className="poster-title">Shining Skin</span><br />
                            <span className="poster-content">Lorem ipsum dolor sit amet, conconsur for</span>
                        </div>
                    </div>
                    <div className="features-block"><img src={i4} alt="" />
                        <div className="poster-container">
                            <span className="poster-title">Shining Skin</span> <br />
                            <span className="poster-content">Lorem ipsum dolor sit amet</span>
                        </div>
                    </div>
                    <button className="btn">LEARN MORE</button>
                </div>

            </div>


            <div className="banner">

                <div className="col-7">
                    <img src={bannerparallax1} alt="" />
                </div>
                <div className="col-5 ">

                    <div className="banner-content">
                        <div className="sub-title">25% OFF ON EVERYTHING</div>
                        <div className="title"><h2>A Better Way To Feel Better</h2></div>
                        <div className="banner-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore qui, exercitationem reiciendis nisi mollitia eveniet aliquam reprehenderit sequi quasi!</div>
                        <button className="banner-btn">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div className="banner banner2">
                <div className="col-5">
                    <div className="banner-content">
                        <div className="sub-title">WE BELIVE IN NATURAL BEAUTY</div>
                        <div className="title"><h2>Skin Nourishment Night Cream & Oil</h2></div>
                        <div className="banner-about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore qui, exercitationem reiciendis nisi mollitia eveniet aliquam reprehenderit sequi quasi!</div>
                        <button className="banner-btn">SHOP NOW</button>
                    </div>

                </div>
                <div className="col-7 ">
                    <img src={bannerparallax2} alt="" />

                </div>
            </div>
        </>
    )
}

export default Slider
