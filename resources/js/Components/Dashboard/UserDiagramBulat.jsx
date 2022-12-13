import React from "react";
import { Pie, PieChart } from "recharts";

const UserDiagramBulat = () => {
    const data01 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
        { name: "Group E", value: 278 },
        { name: "Group F", value: 189 },
    ];
    return (
        <div className="bg-white p-5 rounded-lg">
            <h2>Rata-rata penyakit yang diderita oleh pengguna SIPAS</h2>
            <div className="w-full flex justify-center items-center">
                <PieChart width={250} height={250}>
                    <Pie
                        legendType="line"
                        dataKey={"value"}
                        outerRadius={80}
                        fill="#8884d8"
                        // label
                        isAnimationActive={true}
                        data={data01}
                    />
                </PieChart>
            </div>
        </div>
    );
};

export default UserDiagramBulat;
