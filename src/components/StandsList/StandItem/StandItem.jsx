import React from 'react';
import s from './StandItem.module.css';
import standImage1 from './img/standImage1.png';

const StandItem = ({standName}) => {

    return (
        <li className={s.standItem}>
            <img className={s.standImage} src={standImage1} alt='Изображение стенда'/>
            <span className={s.standName}>{standName}</span>
        </li>
    );
}

export default StandItem;
