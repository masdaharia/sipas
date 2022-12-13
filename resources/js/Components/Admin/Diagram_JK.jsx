import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { usePage } from "@inertiajs/inertia-react";
ChartJS.register(ArcElement, Tooltip, Legend);
export default function Diagram_JK() {
    const { data_diagram } = usePage().props;
    // -----------Data Diagram JK
    const data_jk = {
        labels: ["Laki-Laki", "Perempuan"],
        datasets: [
            {
                label: " Jumlah ",
                data: [data_diagram?.gender?.L, data_diagram?.gender?.P],
                backgroundColor: ["rgb(96,162,215)", "rgb(238,99,140)"],
                borderColor: ["rgb(96,162,215)", "rgb(238,99,140)"],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <Doughnut data={data_jk} />
        </div>
    );
}
