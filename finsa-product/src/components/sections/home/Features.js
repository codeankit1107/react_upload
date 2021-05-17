import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/img/feature/01.jpg';
import img2 from '../../../assets/img/feature/02.jpg';
import img3 from '../../../assets/img/feature/03.jpg';
import img4 from '../../../assets/img/feature/04.jpg';
import img5 from '../../../assets/img/feature/05.jpg';
import img6 from '../../../assets/img/feature/06.jpg';

const featuresblock = [
    { img: img1, title: 'ENGAGE AUDIENCES AT SCALE', text: 'Enable global networking with Group & 1:1 text/audio/video chat' },
    { img: img2, title: 'PRESENT TO THE WORLD', text: 'Enable speakers to host talks, keynotes & breakout sessions with webinars.' },
    { img: img3, title: 'MEASURE YOUR IMPACT', text: 'Get insightful reports to understand how effective your online event was.' },
    { img: img4, title: '24/7 GLOBAL CUSTOMER SUPPORT', text: 'Get insightful reports to understand how effective your online event was.' },
    { img: img5, title: 'MOBILE-COMPLIANT & ACCESSIBLE', text: 'Get world-class customer support for any timezone around the clock.' },
    { img: img6, title: 'MULTI-LINGUAL SUPPORT', text: 'Join accessibility-enabled events from any device and any location.' },
]
class Features extends Component {
    render() {
        return (
            <section className="feature-section section-gap">
                <div className="container">
                    <div className="section-title text-center both-border mb-50">
                        <span className="title-tag"> Our Core Features </span>
                        <h2 className="title">EVERYTHING YOU NEED FOR A SUCCESSFUL VIRTUAL EVENT</h2>
                    </div>
                    {/* Feature boxes */}
                    <div className="feature-boxes row justify-content-center">
                        {featuresblock.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-10 col-tiny-12">
                                <div className="feature-box">
                                    <div className="feature-bg bg-img-c" style={{ backgroundImage: "url(" + item.img + ")" }}>
                                    </div>
                                    <div className="feature-desc">
                                        <Link to="/servicedetail" className="feature-link"><i className="fal fa-long-arrow-right" /></Link>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;