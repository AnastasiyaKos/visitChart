import React from "react";
import s from './DownloadVisitor.module.css'


const DownloadVisitors = ({state}) => {
    let userId = localStorage.getItem('userId');
    let language = localStorage.getItem('language');

    if (!userId) {
        localStorage.setItem('userId', '1');
    }
    if (!language) {
        localStorage.setItem('language', 'en');
    }

    const baseUrl = `https://cniitu.clevr-expo.com:18080/useraction/statistics/`;

    return (
        <div className={s.container}>
            {state && <>
                <a className={s.button}
                   href={baseUrl + `${userId}/all?type=excel&dateFrom=${state[0]}&dateTo=${state[1]}&language=${language}`}
                   download target='_blank'>
                    PDF
                </a>
                <p>Смотрите данные о посетителях</p>
                <a className={s.button}
                   href={baseUrl + `${userId}/all?type=pdf&dateFrom=${state[0]}&dateTo=${state[1]}&language=${language}`}
                   download target='_blank'>
                    Excel
                </a>
            </>}
        </div>
    )
}

export default DownloadVisitors;