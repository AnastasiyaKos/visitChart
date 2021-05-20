import React from 'react';
import {Link} from "react-router-dom";
import FilterByDate from "../FilterByDate/FilterByDate";

import chart from './img/chart.png';
import exist from './img/exist.png';
import s from './Header.module.css';

const Header = ({setState}) => {

    return (
        <div className={s.container}>
            <div className={s.statisticsContainer}>
                <img src={chart} width='97px' height='99px'/>
                <p>Statistics</p>
            </div>
            <FilterByDate setState={setState}/>
            <Link className={s.existContainer} to='/profile'>
                <img src={exist} width='74px' height='75px'/>
                <p>Back</p>
            </Link>
        </div>
    );
}

export default Header;
