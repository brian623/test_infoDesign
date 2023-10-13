import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ data }) {
  const consumoData = data.map((item) => item.consumo);
  const perdidasData = data.map((item) => item.perdidas);
  const costoData = data.map((item) => item.costo);

  const labels = data.map((item) => item.Linea);

  const consumoChart = {
    labels: labels,
    datasets: [
      {
        label: 'Consumo',
        data: consumoData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const perdidasChart = {
    labels: labels,
    datasets: [
      {
        label: 'Pérdidas',
        data: perdidasData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const costoChart = {
    labels: labels,
    datasets: [
      {
        label: 'Costo',
        data: costoData,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='d-flex flex-wrap justify-content-around my-4'>
      <div className='m-3'>
        <h4>Consumo</h4>
        <Bar data={consumoChart} options={options} />
      </div>
      <div className='m-3'>
        <h4>Pérdidas</h4>
        <Bar data={perdidasChart} options={options} />
      </div>
      <div className='m-3'>
        <h4>Costo</h4>
        <Bar data={costoChart} options={options} />
      </div>
    </div>
  );
}
export default BarChart;