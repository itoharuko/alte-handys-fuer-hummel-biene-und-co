import React from 'react';
 
import './sass/index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import BlueSection from './sections/BlueSection';
import RedSection from './sections/RedSection';
import OrangeSection from './sections/OrangeSection';
import GreenSection from './sections/GreenSection';
import FooterSection from './sections/FooterSection';

AOS.init();
export default function App() {
    return (
        <>
            <BlueSection />
            <RedSection />
            <OrangeSection />
            <GreenSection />
            <FooterSection />
        </>
    );
}
