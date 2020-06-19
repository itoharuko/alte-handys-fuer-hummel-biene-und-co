import React from 'react';

export default function FooterSection() {
    return (
        <section id='footer-section' className='section section--bg-footer'>
            <div className='container'>
                <div className='row row--justify-contents-space-between'>
                    <div className='row__col-sm-12 row__col-md-5'>
                        <p className='text text--color-white'>
                            Der NABU erhält eine <b>jährliche Spende von Telefonica, </b>
                            abhängig vom Erlös aus Recycling und Wiederverwendung.
                        </p>
                    </div>
                    <div className='row__col-sm-12 row__col-md-5'>
                        <p className='text text--color-white'>
                            <b>Das Geld aus der NABU-Handysammlung
                                fließt in den Insektenschutz.
                            </b>
                            &nbsp;Weitere Infos <b>unter www.NABU.de/handyrecycling</b>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
