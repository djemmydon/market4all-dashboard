import React from 'react'
import { Chart as ChartJs, BarElement, registerables } from 'chart.js';
import { Bar, Bubble, Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

interface DataType {
    labes: [],
    dataset: []
}
ChartJs.register(
    ...registerables
)



const data = {
    labels: ["red", "blue", "yellow", "red", "blue", "yellow"],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};


const options = {



    responsive: true,
    maintainAspectRatio: false

}
function Chart1() {
    return (
        <Body>
            <Bar data={data} />
        </Body>
    )
}

export default Chart1


const Body = styled.div`
    padding:  10px 20px;
    box-shadow: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    border-radius: 1rem;
border: 1px solid #f3f3f3;
`