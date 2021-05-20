import React, {useEffect, useState} from 'react';
import {getAllStands} from "../../api/clevrService";
import s from './StandsList.module.css';
import StandItem from "./StandItem/StandItem";

const StandsList = () => {
    const [allStands, setAllStands] = useState([]);

    let userId = localStorage.getItem('userId');

    if (!userId) {
        localStorage.setItem('userId', '1')
    }

    useEffect(() => {
         getAllStands(userId).then((data) => {
             const allStands = data.data;
             setAllStands(allStands);
        })},[setAllStands]);

    return (
        <div className={s.container}>
            <h1>Список Ваших стендов:</h1>
            <ul className={s.containerStandList}>
                {allStands === [] && allStands !== undefined && 'У Вас нет стендов' }
                {allStands !== undefined &&
                allStands.map((stand) => <StandItem key={stand.id} standName={stand.name} standIcon={stand.icon}
                                                    exhibitionName={stand.exhibitionName}/> )}
            </ul>
        </div>
    );
}

export default StandsList;
