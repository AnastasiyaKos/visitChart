import React from 'react';
import './MainPage.module.css';
import VisitChart from "../VisitChart/VisitChart";
import StandsList from "../StandsList/StandsList";


function MainPage() {
    return (
        <div className="">
            <StandsList/>
            <VisitChart/>
        </div>
    );
}

export default MainPage;
