import { usePage } from "@inertiajs/inertia-react";
import React from "react";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import Diagram_JK from "./Diagram_JK";

export default function Diagram() {
    const { data_diagram } = usePage().props;
    // const showlabel = (data) => {
    //     // console.log(data);
    //     return data?.map((data, key = key) => data.penyakit);
    // };
    // const showstat = (data) => {
    //     // console.log(data);
    //     return data?.map((data, key = key) => data.jumlah);
    // };

    const renderBar = (data) => {
        let color = [
            "rgba(255, 99, 132)",
            "rgba(54, 162, 235)",
            "rgba(20, 184, 166)",
            "rgba(153, 102, 255)",
            "rgba(42, 197, 94)",
            "rgba(255, 159, 64)",
        ];
        return data?.map((data, key = key) => (
            <Bar key={key} stackId="a" dataKey={data?.name} fill={color[key]} />
        ));
    };

    const datadiagnosa = data_diagram?.penyakit;

    return (
        <div className="w-full h-fit p-4 flex md:flex-row flex-col md:space-x-3 space-x-0 md:space-y-0 space-y-3">
            <div className="bg-white rounded-xl py-5 shadow-xl shadow-blue-600/10 md:w-3/5 w-full divide-y">
                <div className="px-5 pb-5 text-center text-2xl font-bold capitalize">
                    Data diagnosa
                </div>
                <div className="p-5 flex items-center overflow-y-hidden overflow-x-auto">
                    {/* <Pie data={data_diagram?.penyakit} /> */}
                    <BarChart
                        width={500}
                        height={300}
                        data={datadiagnosa}
                        margin={{
                            top: 40,
                            right: 20,
                            left: 30,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {renderBar(data_diagram?.penyakit)}
                    </BarChart>
                </div>
            </div>
            <div className="bg-white rounded-xl h-fit py-5 shadow-xl shadow-blue-600/10 md:w-2/5 w-full divide-y">
                <div className="px-5 pb-5 text-center text-2xl font-bold capitalize">
                    Data Jenis Kelamin
                </div>
                <div className="p-5 flex items-center justify-center capitalize">
                    <Diagram_JK />
                </div>
            </div>
        </div>
    );
}
