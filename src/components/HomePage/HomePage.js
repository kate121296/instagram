import React from 'react';

import SubHeader from "../SubHeader/SubHeader";
import Header from "../Header/Header";
import Photoes from "../Photoes/Photoes";
import FixedMenu from "../FixesMenu/FixedMenu";

function HomePage() {
    return (
        <div>
            <Header/>
            <SubHeader/>
            <Photoes/>
            <FixedMenu/>
        </div>

    );
}

export default HomePage;