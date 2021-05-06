import React, {useEffect, useState} from 'react';
import {getStandNames} from "../../api/clevrService";
import s from './StandsList.module.css';
import StandItem from "./StandItem/StandItem";

const StandsList = () => {
    const [standNames, setStandName] = useState([]);


    useEffect(() => {
         getStandNames().then((data) => {
             const allStands = data.data;
             setStandName(allStands);
        })},[setStandName]);


    return (
        <div >
            <ul className={s.container}>
                {standNames !== undefined &&
                standNames.map((stand) => <StandItem standName={stand.name}/> )}
            </ul>
        </div>
    );
}

export default StandsList;
