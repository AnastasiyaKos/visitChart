import React, {useState} from 'react';
import VisitChart from "../VisitChart/VisitChart";
import StandsList from "../StandsList/StandsList";
import FilterByDate from "../FilterByDate/FilterByDate";
import s from './MainPage.module.css'
import DownloadVisitors from "../DownloadVisitors/DownloadVisitors.jsx";


const MainPage = () => {
    const [state, setState] = useState(null);

    return (
        <div className={s.mainPage}>
            <div className={s.container}>
                <StandsList/>
                <FilterByDate  setState={setState}/>
            </div>
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
