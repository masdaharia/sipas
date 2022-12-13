import React from "react";

const StatisticCard = ({ jumlah, text, icon, color }) => {
    return (
        <div className="relative bg-white rounded-xl p-5 shadow-xl shadow-blue-600/10 h-32 flex flex-col">
            <div className=" flex items-end space-x-2 justify-between mb-2 -mt-10">
                <div
                    className={`${color} aspect-square w-24 flex items-center justify-center rounded-md transform translate-y-2`}
                >
                    {icon}
                </div>
                <h1 className="text-5xl text-gray-700 font-semibold">
                    {jumlah}
                </h1>
            </div>
            <h4 className="text-gray-500 text-md text-right">{text}</h4>
        </div>
    );
};

export default StatisticCard;
