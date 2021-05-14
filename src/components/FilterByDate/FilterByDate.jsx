import React, {useEffect, useState} from 'react';
import DateForm from "./DateForm/DateForm";
import s from './FilterByDate.module.css'

const FilterByDate = ({setState}) => {
    const [startDate, setStartDate] = useState({
        label: 'Начальная дата',
        selectedDate: new Date(1619913600000).toLocaleDateString()
    });

    const [endDate, setEndDate] = useState({
        label: 'Конечная дата',
        selectedDate: new Date()
    });


    const handleStartDateChange = (date) => {
        setStartDate({
            ...startDate,
            selectedDate: date
        })
    };
    const handleEndDateChange = (date) => {
        setEndDate({
            ...endDate,
            selectedDate: date
        })
    };

    useEffect(() => {
        setState([Date.parse(startDate.selectedDate), Date.parse(endDate.selectedDate)])
    }, [startDate.selectedDate, endDate.selectedDate]);


    return (
        <div className={s.container}>
            <DateForm label={startDate.label} handleDateChange={handleStartDateChange} selectedDate={startDate.selectedDate}/>
            <DateForm label={endDate.label} handleDateChange={handleEndDateChange} selectedDate={endDate.selectedDate}/>
        </div>
    )
}

export default FilterByDate;