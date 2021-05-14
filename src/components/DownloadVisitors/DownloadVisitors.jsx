import React from "react";
import {downloadVisitorsData} from "../../api/clevrService";
import s from './DownloadVisitor.module.css'


const DownloadVisitors = ({state}) => {
    console.log(state)

    let userId = localStorage.getItem('userId');
    let language = localStorage.getItem('language');

    if (!userId) {
        localStorage.setItem('userId', '1');
    }
    if (!language) {
        localStorage.setItem('language', 'en');
    }

    const downloadPDF = () => {
        downloadVisitorsData(userId, 'pdf', language, state);
    }

    const downloadExcel = () => {
        downloadVisitorsData(userId, 'excel', language, state);
    }


    return (
        <div className={s.container}>
            <a  className={s.button} onClick={downloadPDF}>
                PDF
            </a>
            <p>Смотрите данные о посетителях</p>
            <a className={s.button} onClick={downloadExcel}>
                Excel
            </a>
        </div>
    )
};

export default DownloadVisitors;