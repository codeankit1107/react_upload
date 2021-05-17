import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

import img1 from '../../../assets/img/video-bg/poster-1.jpg';
import img2 from '../../../assets/img/video-bg/poster-2.jpg';

class About extends Component {
    componentDidMount(){
        $('.popup-video').magnificPopup({
			type: 'iframe',
		});
    }
    render() {
        return (
            <section className="about-section section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-video">
                                <div className="video-poster-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms" style={{ backgroundImage: "url("+ img1 +")" }}>
                                </div>
                                <div className="video-poster-two wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms" style={{ backgroundImage: "url("+ img2 +")" }}>
                                    <Link to="https://www.youtube.com/watch?v=fEErySYqItI" className="video-play-icon popup-video">
                                        <i className="fas fa-play" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text-two">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About Us</span>
                                    <h2 className="title">Professional Business Guidance Agency </h2>
                                </div>
                                <p>
                                    Sedut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                    laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
          </p>
                                <ul className="about-list">
                                    <li> <i className="fas fa-check" /> There are many variations of passages of LoreIpsum
              available, but the majority have suffered</li>
                                    <li> <i className="fas fa-check" /> It uses a dictionary of over 200 Latin wor combined with a
              handful of model sentence structure</li>
                                    <li> <i className="fas fa-check" /> Richard McClintock, a Latin profe hampden-sydney College
              in Virginia, looked up one more</li>
                                </ul>
                                <Link to="/about" className="main-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;