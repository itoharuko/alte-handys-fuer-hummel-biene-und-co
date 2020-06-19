import React from 'react';
import logo from '../assets/images/logo.jpg';
import bee from '../assets/images/sections/blue/bee.png';
import butterfly from '../assets/images/sections/blue/butterfly.png';
import handyHand from '../assets/images/sections/blue/handy-hand.png';
import handyPhone from '../assets/images/sections/blue/handy-phone.png';

export default function BlueSection() {
    return (
        <section id='blue-section' className='section section--bg-blue'>
            <div className='container'>
                <div className='row row--align-items-end --mg-b-lg'>
                    <div className='row__col-12 row__col-sm-auto'>
                        <div className='logo'>
                            <img src={logo} alt='nabu logo' />
                        </div>
                    </div>
                    <div className='row__col-12 row__col-sm-auto'>
                        <h1 className='header'>
                            <span className='text text--h3 text--block text--color-white'>
                                Handys für Hummel, Biene & Co.
                            </span>
                            <span className='text text--h5 text--block text--color-silver-white'>
                                Die Sammelaktion zum Mitmachen
                            </span>
                        </h1>
                    </div>
                </div>

                <div className='section__content'>
                    <div className='desktop-content --hide --md-show'>
                        <div className='row row--align-items-center row--justify-contents-center'>
                            <div className='left-storer-container'>
                                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className='storer storer--orange'>
                                    <span>
                                        <div className="count-box">18</div>
                                        Monate
                                    </span>
                                    <span>beträgt die<br />durchschnittliche<br />Handy-Nutzungs-<br />dauer</span>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1500" className='bee'>
                                    <img src={bee} alt='hummel' />
                                </div>
                            </div>
                            <div className='row handy-hand-container'>
                                <div className='handy-hand'>
                                    <img src={handyHand} alt='handy-hand' />
                                </div>
                                <div className='handy-phone'>
                                    <img src={handyPhone} alt='handy-phone' />
                                </div>
                            </div>
                            <div className='right-storer-container'>
                                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className='storer storer--orange'>
                                    <span>
                                        <div className="count-box"><span className='count'>105 </span></div>
                                        Millionen
                                    </span>
                                    <span>
                                        <b>Geräte </b>lagern<br />in deutschen<br />Schubladen</span>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1500" className='butterfly'>
                                    <img src={butterfly} alt='Florfliege' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='mobile-content --md-hide'>
                        <div className='row row--direction-column row--align-items-center'>
                            <div>
                                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className='storer storer--orange first-storer'>
                                    <span>
                                        <div className="count-box"><span className='count'>18</span></div>
                                        Monate
                                    </span>
                                    <span>beträgt die<br />durchschnittliche<br />Handy-Nutzungs-<br />dauer</span>
                                </div>
                                <div className='handy-phone'>
                                    <img src={handyPhone} alt='handy phone' />
                                </div>
                            </div>
                            <div>
                                <div className='handy-hand'>
                                    <img src={handyHand} alt='handy-hand' />
                                </div>
                                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className='storer storer--orange top-storer'>
                                    <span>
                                        <div className="count-box"><span className='count'>105 </span></div>
                                        Millionen
                                    </span>
                                    <span>
                                        <b>Geräte </b>
                                        lagern<br />in deutschen<br />Schubladen</span>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1500" className='butterfly'>
                                    <img src={butterfly} alt='Florfliege' />
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1500" className='bee'>
                                    <img src={bee} alt='hummel' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
