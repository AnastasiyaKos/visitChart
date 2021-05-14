import React, {useEffect, useState} from 'react';
import {getAllStands} from "../../api/clevrService";
import s from './StandsList.module.css';
import StandItem from "./StandItem/StandItem";

const StandsList = () => {
    const [allStands, setAllStands] = useState([]);


    useEffect(() => {
         getAllStands().then((data) => {
             const allStands = data.data;
             setAllStands(allStands);
        })},[setAllStands]);


    return (
        <div className={s.containerStandList}>
            <h1>Список Ваших стендов:</h1>
            <ul className={s.container}>
                {allStands === [] && allStands !== undefined && 'У Вас нет стендов' }
                {allStands !== undefined &&
                allStands.map((stand) => <StandItem key={stand.id} standName={stand.name} standIcon={stand.icon}
                                                    exhibitionName={stand.exhibitionName}/> )}
            </ul>
        </div>
    );
}

export default StandsList;
