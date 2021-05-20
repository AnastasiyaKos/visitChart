import React, {useEffect, useState} from 'react';
import {getVisitData} from "../../api/clevrService";
import {Bar} from 'react-chartjs-2';

const divStyle = {
    maxWidth: '100%',
};

const canvasStyle = {
    position: 'static',
    margin: '0 40px'
    // height: '100%',
    // width: '100%'
}

let VisitChart = ({state}) => {
    const [chartData, setChartData] = useState({});
    const [visits, setVisits] = useState(null);
    const [clicks, setClicks] = useState(null);
    const [timestamp, setTimestamp] = useState(null);

    useEffect(() => {
        if (state) {
            chart();
        }
    }, [state]);

    const chart = async () => {
        await getVisitData(state).then((data) => {
            let visits = [];
            let clicks = [];
            let timestamp = [];

            data.data.forEach((key) => {
                visits.push(key.visits);
                clicks.push(key.clicks);
                timestamp.push(new Date(key.timestamp).toLocaleDateString());
            });

            setVisits(visits);
            setClicks(clicks);
            setTimestamp(timestamp);
        });

    }

    useEffect(() => {
        if (visits && clicks && timestamp) {
            setChartData({
                labels: timestamp,
                datasets: [{
                    label: 'Количество посещений',
                    data: visits,
                    backgroundColor: [
                        'rgba(50, 119, 108, 0.6)'
                    ],
                    borderWidth: 1
                }, {
                    label: 'Количество кликов',
                    data: clicks,
                    backgroundColor: [
                        'rgba(50, 20, 108, 0.6)'
                    ],
                    borderWidth: 1
                }]
            })
        }
    }, [timestamp]);


    return (
        <div style={divStyle}>
            <h1>Общая статистика всех Ваших стендов:</h1>
            {visits && clicks && timestamp &&
            <Bar data={chartData} style={canvasStyle}/>}
        </div>

    );
}

export default VisitChart;
