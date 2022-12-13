import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import StatisticCard from "./StatisticCard";

export default function Statistic() {
    const {
        jumlahdatapengguna,
        jumlahdatapenyakit,
        jumlahdatagejala,
        jumlahdataaturan,
        jumlahdatariwayat,
        jumlahdataartikel,
    } = usePage().props;
    return (
        <div className="px-4 pt-8 pb-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <StatisticCard
                jumlah={jumlahdatapengguna}
                text={"Jumlah Pengguna"}
                icon={
                    <FaIcons.FaUserFriends size={32} className="text-white" />
                } // ganti icon disini
                color="bg-blue-500"
            />
            <StatisticCard
                jumlah={jumlahdatapenyakit}
                text={"Jumlah Penyakit"}
                icon={<FaIcons.FaVirus size={32} className="text-white" />}
                color="bg-yellow-500"
            />
            <StatisticCard
                jumlah={jumlahdatagejala}
                text={"Jumlah Gejala"}
                icon={<MdIcons.MdSick size={32} className="text-white" />}
                color="bg-green-500"
            />
            <StatisticCard
                jumlah={jumlahdataaturan}
                text={"Jumlah Aturan"}
                icon={<MdIcons.MdDeviceHub size={32} className="text-white" />}
                color="bg-rose-500"
            />
            <StatisticCard
                jumlah={jumlahdataartikel}
                text={"Jumlah Artikel"}
                icon={
                    <MdIcons.MdOutlineMenuBook
                        size={32}
                        className="text-white"
                    />
                }
                color="bg-teal-500"
            />
            <StatisticCard
                jumlah={jumlahdatariwayat}
                text={"Jumlah Riwayat"}
                icon={
                    <FaIcons.FaUserInjured size={32} className="text-white" />
                }
                color="bg-purple-500"
            />

            {/* <div className="bg-white rounded-xl p-5 shadow-xl shadow-white/10">
                <h1 className="text-5xl text-blue-600">{jumlahdatariwayat}</h1>
                <div className="flex items-center space-x-2">
                    <FaIcons.FaUserMd size={32} className="text-blue-600" />
                    <h4 className="text-blue-600 text-lg">tesss</h4>
                </div>
            </div> */}
        </div>
    );
}
