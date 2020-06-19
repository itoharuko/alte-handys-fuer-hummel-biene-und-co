import React from 'react';
import header from '../assets/images/sections/red/header.png';
import klimaEmission from '../assets/images/sections/red/klima-emission.png';
import chemical from '../assets/images/sections/red/chemical.png';
import abholzung from '../assets/images/sections/red/abholzung.png';
import brokenHeart from '../assets/images/sections/red/broken-heart.png';

export default function RedSection() {
    return (
        <section id='red-section' className='section section--bg-red'>
            <div className='container'>
                <div className='section__header'>
                    <div className='section__header__wrapper'>
                        <div className='medium-banner'>
                            <img src={header} alt='header' />
                        </div>
                    </div>
                </div>

                <div className='section__content'>
                    <div className='row row--padded'>
                        <div className='row__col-sm-6 row__col-md-3'>
                            <div className='card'>
                                <div className='card__header'>
                                    <div className='placeholder'>
                                        <img
                                            src={klimaEmission}
                                            alt='klimma emission'
                                        />
                                    </div>
                                </div>
                                <div className='card__body'>
                                    Hohe{' '}
                                    <b>
                                        CO<sub>2</sub>-Emissionen{' '}
                                    </b>
                                    bei der Herstellung und Produktion wirken
                                    sich negativ auf das Klima aus
                                </div>
                            </div>
                        </div>
                        <div className='row__col-sm-6 row__col-md-3'>
                            <div className='card'>
                                <div className='card__header'>
                                    <div className='placeholder'>
                                        <img src={chemical} alt='chemical' />
                                    </div>
                                </div>
                                <div className='card__body'>
                                    Bei der Gewinnung von Edelmetallen landen
                                    <b> giftige Chemikalien</b> in der Umwelt.
                                </div>
                            </div>
                        </div>
                        <div className='row__col-sm-6 row__col-md-3'>
                            <div className='card'>
                                <div className='card__header'>
                                    <div className='placeholder'>
                                        <img src={abholzung} alt='abholzung' />
                                    </div>
                                </div>
                                <div className='card__body'>
                                    Für den Abbau von Me-<br />
                                    tallen werden häufig<br />
                                    große<b> Flächen Regen-<br />
                                    wald abgeholzt.</b> Das<br />
                                    führt auch zum Verlust<br />
                                    der Biodiversität.
                                </div>
                            </div>
                        </div>
                        <div className='row__col-sm-6 row__col-md-3'>
                            <div className='card'>
                                <div className='card__header'>
                                    <div className='placeholder'>
                                        <img
                                            src={brokenHeart}
                                            alt='broken heart'
                                        />
                                    </div>
                                </div>
                                <div className='card__body'>
                                    Beim Abbau der Roh-<br />
                                    stoffe und bei der<br />
                                    Produktion von Smart-<br />
                                    phones herrschen oft<br />
                                    <b> katastrophale Ar-<br />
                                    beitsbedingungen.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
