import React from 'react';
import {Link} from "react-router-dom";
import s from './StandItem.module.css';

const StandItem = ({standName, standIcon, exhibitionName}) => {

    return (
        <Link className={s.standItem} to='/'>
            <img className={s.standImage} src={'https://cniitu.clevr-expo.com/' + standIcon} alt='Изображение стенда'/>
            <div className={s.standName}>
                <span>{standName}</span>
                <span className={s.description}> ({exhibitionName})</span>
            </div>
        </Link>
    );
}

export default StandItem;
