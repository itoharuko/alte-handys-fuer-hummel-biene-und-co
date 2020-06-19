import React from 'react';
import header1 from '../assets/images/sections/orange/header-1.png';
import header2 from '../assets/images/sections/orange/header-2.png';
import bin from '../assets/images/sections/orange/bin.png';
import machMit from '../assets/images/sections/orange/mach-mit.png';
import sammelBox from '../assets/images/sections/orange/sammel-box.png';
import handys from '../assets/images/sections/orange/handys.png';
export default function OrangeSection() {
    return (
        <section id='orange-section' className='section section--bg-orange'>
            <div className='container'>
                <div className='row'>
                    <div className='row__col-sm-12 row__col-md-4 right-section'>
                        <div className='section__header section__header--no-margin'>
                            <div className='section__header__wrapper'>
                                <div className='banner'>
                                    <img src={header1} alt='header' />
                                </div>
                                <div className='small-banner'>
                                    <img src={header2} alt='header' />
                                </div>
                            </div>
                        </div>
                        <div className='row row--justify-contents-end'>
                            <div className='storer storer--small storer--red'>
                                <span>
                                    <span className='count'>60.000</span>
                                </span>
                                <span>
                                    <b>Handys</b> wurden<br />2018 vom NABU<br />gesammelt!</span>
                            </div>
                        </div>
                        <div className='row row--justify-contents-end'>
                            <div className='mach-mit'>
                                <img src={machMit} alt='mach-mit' />
                            </div>
                        </div>
                    </div>
                    <div className='row__col-sm-12 row__col-md-8 left-section'>
                        <div>
                            <div className='row row--md-align-items-end row--justify-contents-center'>
                                <div>
                                    <div className='sammel-box'>
                                        <img src={sammelBox} alt='sammel-box' />
                                        <div className='handys'>
                                            <img src={handys} alt='handy' />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='bin --hide --md-show'>
                                        <img src={bin} alt='bin' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-zone'>
                            <p className='text'>
                                Handys können per Post an die AfB geschickt oder direkt in einer 
                                NABU-Sammelstelle in die Box geworfen werden.
                            </p>
                            <p className='text --bold'>
                                <a href='https://www.nabu.de/handyrecycling' target="_blank" rel="noopener noreferrer">
                                    www.NABU.de/handyrecycling
                                </a>
                            </p>
                        </div>
                        <div className='row row--justify-contents-end'>
                            <div className='bin --md-hide --mg-b-xs'>
                                <img src={bin} alt='bin' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
