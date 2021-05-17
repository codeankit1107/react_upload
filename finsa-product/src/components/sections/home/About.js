import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import illustration from '../../../assets/img/illustration/011.png';
class About extends Component {
    render() {
        return (
            <section className="about-section about-illustration-img section-gap">
                <div className="container">
                    <div className="illustration-img">
                        <img src={illustration} alt="" />
                    </div>
                    <div className="row no-gutters justify-content-lg-end justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="about-text">
                                <div className="section-title left-border mb-40">
                                    <span className="title-tag">About Us</span>
                                    <h2 className="title">Hybrid & Virtual Events </h2>
                                </div>
                                <p className="mb-25">
                                virtual values is a virtual & hybrid events platform that helps organizations reach global audiences. Start hosting amazing online conferences, trade shows, job fairs & more.
                                </p>
                                <p>
                                



                                </p>
                                <ul className="about-list">
                                    <li> <i className="far fa-check" /> Extensive customization with features and integrations</li>
                                    <li> <i className="far fa-check" /> Live and semi-live webinars</li>
                                    <li> <i className="far fa-check" /> Stunning 3D design</li>
                                    <li> <i className="far fa-check" /> Unbeatable customer support</li>
                                
                                </ul>
                                <Link to="/about" className="main-btn">REquest a Demo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;