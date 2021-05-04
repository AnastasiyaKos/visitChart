import React, {useEffect, useState} from 'react';
import {getVisitData} from "../../api/VisitChartService";
import {Bar} from 'react-chartjs-2';

const divStyle = {
    height: '500px',
    width: '650px'
}

let VisitChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = async () => {
        const count = [];
        const date = [];


        await getVisitData().then((data) => {
            const apiData = data.data;
            for (const dataObj of apiData) {
                count.push(dataObj.value);
                date.push(new Date(dataObj.timestamp).toLocaleDateString());
            }
        });

        setChartData({
            labels: date,
            datasets: [{
                label: 'Количество посещений',
                data: count,
                backgroundColor: [
                    'rgba(50, 119, 108, 0.6)'
                ],
                borderWidth: 1
            }]
        })
    }

    useEffect(() => {
        chart()
    }, [])


    return (
        <div style={divStyle}>
            <Bar data={chartData}/>
        </div>

    );
}

export default VisitChart;
