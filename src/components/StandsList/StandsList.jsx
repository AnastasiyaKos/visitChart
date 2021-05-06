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
        <div >
            <ul className={s.container}>
                {allStands !== undefined &&
                allStands.map((stand) => <StandItem key={stand.id} standName={stand.name}/> )}
            </ul>
        </div>
    );
}

export default StandsList;
