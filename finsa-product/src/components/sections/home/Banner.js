import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import img1 from '../../../assets/img/banner/01.png';
import img2 from '../../../assets/img/banner/02.jpg';
import img3 from '../../../assets/img/banner/03.jpg';

const bannerpost = [
    { img: img1, tag: 'Virtual Events', title: "Everything You Need To Host Epic Hybrid & Virtual Events", btntext: 'Request a demo', btntext1: 'Our Services' },
    { img: img2, tag: 'Virtual Product launch', title: "Everything You Need To Host Epic Hybrid & Virtual Events", btntext: 'Request a demo', btntext1: 'Our Services' },
    { img: img3, tag: 'Virtual Job fair', title: "Everything You Need To Host Epic Hybrid & Virtual Events", btntext: 'Request a demo', btntext1: 'Our Services' },
]

class Banner extends Component {
    render() {
        const settings = {
            infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 500,
			arrows: false,
			fade: false,
			dots: false,
			swipe: true,
			adaptiveHeight: true,
			responsive: [{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}],
        }
        return (
            <section className="banner-section">
                <Slider className="banner-slider" id="bannerSlider" {...settings}>
                    {bannerpost.map((item, i) => (
                        <div key={i}>
                            <div className="single-banner" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10">
                                            <div className="banner-content">
                                                <span className="promo-text" data-animation="fadeInDown" data-delay="0.8s">{item.tag}</span>
                                                <h1 data-animation="fadeInUp" data-delay="1s">{item.title}</h1>
                                                <ul className="btn-wrap">
                                                    <li data-animation="fadeInLeft" data-delay="1.2s">
                                                        <Link to="/careers" className="main-btn main-btn-4">{item.btntext}</Link>
                                                    </li>
                                                    <li data-animation="fadeInRight" data-delay="1.4s">
                                                        <Link to="/service" className="main-btn main-btn-2">{item.btntext1}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-shapes">
                                    <div className="one" />
                                    <div className="two" />
                                    <div className="three" />
                                    <div className="four" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="search-wrap">
                    <Link to="#" className="search-icon"><i className="far fa-search" /></Link>
                </div>
            </section>
        );
    }
}

export default Banner;