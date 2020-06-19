import React from 'react';
import header from '../assets/images/sections/green/header.png';
import headerMobile from '../assets/images/sections/green/header-mobile.png';
import subHeader from '../assets/images/sections/green/sub-header.png';
import truck from '../assets/images/sections/green/truck.png';
import wiederaufPfeil from '../assets/images/sections/green/wiederauf-pfeil.png';
import recyclingPfeil from '../assets/images/sections/green/recycling-pfeil.png';
import reparatur from '../assets/images/sections/green/reparatur.png';
import recyclingVorgang from '../assets/images/sections/green/recycling-vorgang.png';
import verkauf from '../assets/images/sections/green/verkauf.png';
import verkaufMobile from '../assets/images/sections/green/verkauf-mobile.png';
import rohstoff from '../assets/images/sections/green/rohstoff.png';
import erloes from '../assets/images/sections/green/erloes.png';
import bee from '../assets/images/sections/green/bee.png';
import snug from '../assets/images/sections/green/snug.png';
import reinigung from '../assets/images/sections/green/reinigung.png';
import ersatzteile from '../assets/images/sections/green/ersatzteile.png';

export default function GreenSection() {
    return (
        <section id='green-section' className='section section--bg-green'>
            <div className='container'>
                <div className='bee'>
                    <img src={bee} alt='bee' />
                </div>
                <div className='row row--justify-contents-center'>
                    <div className='section__header__wrapper'>
                        <div className='big-banner --hide --md-show'>
                            <img src={header} alt='header' />
                        </div>
                        <div className='banner --md-hide'>
                            <img src={headerMobile} alt='header' />
                        </div>
                    </div>
                </div>
                <div className='row row--justify-contents-center'>
                    <div className='row__col-md-6 row__col-sm-12' />
                    <div className='row__col-md-6 row__col-sm-12 align-right item'>
                        <div className='section__header__wrapper sub-banner-wrapper'>
                            <div className='sub-banner'>
                                <img src={subHeader} alt='sub-header' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row row--justify-contents-center row--align-items-center'>
                    <div className='row__col-sm-12 row__col-md-6 align-left item'>
                        <div className='row row--justify-contents-center row--md-justify-contents-end'>
                            <div className='truck'>
                                <img src={truck} alt='afb-truck' />
                            </div>
                        </div>
                    </div>
                    <div className='row__col-sm-12 row__col-md-6 align-right item'>
                        <div className='row row--justify-contents-center row--md-justify-contents-start'>
                            <div className='row_col-12 row__col-md-12'>
                                <p className='text text--h4 --normal'>
                                    Die gemeinnützige GmbH <b>AfB</b> (Arbeit
                                    für Menschen mit Behinderung) prüft und
                                    sortiert einkommende Handys und Smartphones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row row--justify-contents-center row--align-items-center'>
                    <div className='row__col-6 row__col-md-6 align-left item'>
                        <div className='row row--justify-contents-center row--md-justify-contents-end'>
                            <div className='wiederauf-pfeil'>
                                <img
                                    src={wiederaufPfeil}
                                    alt='wiederauf-pfeil'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row__col-6 row__col-md-6 align-right item'>
                        <div className='row row--justify-contents-center row--md-justify-contents-start'>
                            <div className='recycling-pfeil'>
                                <img
                                    src={recyclingPfeil}
                                    alt='recycling-pfeil'
                                />
                                <div className='snug'>
                                    <img src={snug} alt='snug' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row row--justify-contents-center row--align-items-center reparatur-part'>
                    <div className='row__col-6 row__col-md-6 align-left item'>
                        <div className='row row--justify-contents-center row--sm-justify-contents-start'>
                            <div className='reparatur'>
                                <img src={reparatur} alt='reparatur' />
                                <div className='reinigung'>
                                    <img src={reinigung} alt='reinigung' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row__col-6 row__col-md-6 align-right item'>
                        <div className='row row--justify-contents-center row--sm-justify-contents-end'>
                            <div className='recycling-vorgang'>
                                <img
                                    src={recyclingVorgang}
                                    alt='recycling-vorgang'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row row--justify-contents-center row--align-items-center rohstoff-part'>
                    <div className='row__col-6 row__col-md-6 align-left item'>
                        <div className='row row--justify-contents-center row--sm-justify-contents-end verkauf-container'>
                            <div className='verkauf --hide --md-show'>
                                <img src={verkauf} alt='verkauf' />
                            </div>
                            <div className='verkauf --md-hide'>
                                <img src={verkaufMobile} alt='verkauf' />
                            </div>
                            <div className='ersatzteile'>
                                <img src={ersatzteile} alt='ersatzteile' />
                            </div>
                        </div>
                    </div>
                    <div className='row__col-6 row__col-md-6 align-right item'>
                        <div className='row row--justify-contents-center row--sm-justify-contents-start'>
                            <div className='rohstoff'>
                                <img src={rohstoff} alt='rohstoff' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row row--justify-contents-center erloes-part'>
                    <div className='erloes'>
                        <img src={erloes} alt='erloes' />
                    </div>
                </div>
            </div>
        </section>
    );
}
