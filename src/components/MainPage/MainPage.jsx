import React, {useState} from 'react';
import VisitChart from "../VisitChart/VisitChart";
import StandsList from "../StandsList/StandsList";
import s from './MainPage.module.css'
import DownloadVisitors from "../DownloadVisitors/DownloadVisitors.jsx";
import Header from "../Header/Header";


const MainPage = () => {
    const [state, setState] = useState(null);

    return (
        <div className={s.mainPage}>
            <Header setState={setState}/>
            <StandsList className={s.container}/>
            <div className={s.chartContainer}>
                <VisitChart state={state}/>
            </div>
            <div className={s.buttonContainer}>
                <DownloadVisitors state={state}/>
            </div>
        </div>
    );
}

export default MainPage;
