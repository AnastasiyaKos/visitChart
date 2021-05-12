import React from 'react';
import {Link} from "react-router-dom";
import s from './StandItem.module.css';

const StandItem = ({standName, standIcon, exhibitionName}) => {

    return (
        // <li className={s.standItem}>
        //     <img className={s.standImage} src={standImage1} alt='Изображение стенда'/>
        //     <span className={s.standName}>{standName}</span>
        // </li>

    <Link to='/'>
        <a className={s.standItem}>
            <img className={s.standImage} src={'https://cniitu.clevr-expo.com/' + standIcon} alt='Изображение стенда'/>
            <div className={s.standName}>
                <span >{standName}</span>
                <span className={s.description}> ({exhibitionName})</span>
            </div>
        </a>
    </Link>
    );
}

export default StandItem;
