import React from "react";
import {downloadVisitorsData} from "../../api/clevrService";
import s from './DownloadVisitor.module.css'


const DownloadVisitors = () => {


    const downloadPDF = () => {
        downloadVisitorsData('pdf', 'en', [1620594000000, 1620853200000]);
    }

    const downloadExcel = () => {
        downloadVisitorsData('excel', 'en', [1620594000000, 1620853200000]);
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