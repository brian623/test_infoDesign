import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarCharts = ({ data }) => {
    function renderCharts(item) {
        const firstItem = item;
        console.log(JSON.stringify(firstItem));

        const consumoData = {
            labels: [
                "Consumo Residencial",
                "Consumo Comercial",
                "Consumo Industrial",
            ],
            datasets: [
                {
                    label: "Consumo",
                    data: [
                        firstItem.consumo_residencial,
                        firstItem.consumo_comercial,
                        firstItem.consumo_industrial,
                    ],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(53, 162, 235, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                    ],
                },
            ],
        };

        const perdidasData = {
            labels: [
                "Pérdidas Residencial",
                "Pérdidas Comercial",
                "Pérdidas Industrial",
            ],
            datasets: [
                {
                    label: "Pérdidas",
                    data: [
                        firstItem.perdidas_residencial,
                        firstItem.perdidas_comercial,
                        firstItem.perdidas_industrial,
                    ],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(53, 162, 235, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                    ],
                },
            ],
        };

        const costoData = {
            labels: ["Costo Residencial", "Costo Comercial", "Costo Industrial"],
            datasets: [
                {
                    label: "Costo",
                    data: [
                        firstItem.costo_residencial,
                        firstItem.costo_comercial,
                        firstItem.costo_industrial,
                    ],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(53, 162, 235, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                    ],
                },
            ],
        };
        return (
            <div className="d-flex flex-column mt-4" key={firstItem.Linea}>
                <h4>{firstItem.Linea}</h4>
                <div className="d-flex justify-content-between">
                    <div className="polar-chart">
                        <PolarArea data={consumoData} />
                    </div>
                    <div className="polar-chart">
                        <PolarArea data={perdidasData} />
                    </div>
                    <div className="polar-chart">
                        <PolarArea data={costoData} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="polar-chart-container">
            {data.map((item) => renderCharts(item))}
        </div>
    )
};

export default PolarCharts;
