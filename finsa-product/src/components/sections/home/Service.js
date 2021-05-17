import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icon1 from '../../../assets/img/icons/01.png';
import icon2 from '../../../assets/img/icons/02.png';
import icon3 from '../../../assets/img/icons/03.png';
import lines from '../../../assets/img/lines/07.png';

const serviceblock = [
    { icon: icon1, title: 'Virtual confrence', text: 'Transform your live event into a fully realized online experience, with easy access to keynotes, breakout sessions, and much more.' },
    { icon: icon2, title: 'Virtual trade show', text: 'Find your most qualified leads and generate buzz by showcasing your products in a cost-effective online trade show.' },
    { icon: icon3, title: 'Virtual job fair', text: 'Play matchmaker for organizations and qualified candidates with fully remote online job fairs, featuring virtual job boards and much more.' },
]

class Service extends Component {
    render() {
        return (
            <section className="service-section shape-style-one section-gap grey-bg">
                <div className="container">
                    {/* Section Title */}
                    <div className="section-title text-center both-border mb-30">
                        <span className="title-tag"></span>
                        <h2 className="title">VIRTUAL EVENTS FOR ORGANIZATIONS</h2>
                    </div>
                    {/* Services Boxes */}
                    <div className="row service-boxes justify-content-center">
                        {serviceblock.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-8 col-10 col-tiny-12 wow fadeInLeft" data-wow-duration="1500ms" data-wow-delay="400ms">
                                <div className="service-box text-center">
                                    <div className="icon">
                                        <img src={item.icon} alt="Icon" />
                                    </div>
                                    <h3><Link to="/servicedetail">{item.title}</Link></h3>
                                    <p>{item.text}</p>
                                    <Link to="/servicedetail" className="service-link">
                                        <i className="fal fa-long-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="dots-line">
                    <img src={lines} alt="" />
                </div>
            </section>
        );
    }
}

export default Service;