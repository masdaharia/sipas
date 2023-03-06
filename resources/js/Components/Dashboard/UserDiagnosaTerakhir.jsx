import { usePage } from "@inertiajs/inertia-react";
import moment from "moment";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Line, Circle } from "rc-progress";
import * as IoIcons from "react-icons/io";

const UserDiagnosaTerakhir = () => {
    const { lastcheck } = usePage().props;
    // console.log(lastcheck?);
    const hasildiagnosa = lastcheck
        ? JSON.parse(lastcheck?.hasildiagnosa)
        : null;
    const hasil = JSON.parse(lastcheck?.hasil);
    const [TabP, setTabP] = useState(false);

    const showlistpenyakit = (data) => {
        console.log(data);
        let lenght = data.lenght;
        return data?.map((data, key) => (
            <ul className="w-full pt-1 text-sm" key={key}>
                {1 + key}.{showhasil(data.nama_penyakit)}
                {/* {data.nama_penyakit?.map((nama_penyakit, key) => (
                    <span key={key}> {nama_penyakit}, </span>
                ))} */}
                <li className="flex space-x-1 items-center">
                    <div className="flex-grow">
                        <Line
                            strokeWidth={2}
                            trailWidth={2}
                            strokeLinecap="square"
                            strokeColor={"#3CA3EC"}
                            percent={data.bobot}
                        />
                    </div>
                    <div className="font-semibold w-10 text-right">
                        {data.bobot.toFixed(0)}%
                    </div>
                </li>
            </ul>
        ));
    };

    const showhasil = (data) => {
        let length = data.length;
        return data?.map((data, key) => (
            <span className="text-center" key={key}>
                {""}
                {data}
                {key == length - 1 ? " " : ", "}
            </span>
        ));
    };
    const showtingkat = (data) => {
        var p = data.toString();
        if (p.match(/Nodula.*/) || p.match(/Kista.*/)) {
            return (
                <span className="text-white py-1 px-2 capitalize bg-red-400 rounded-lg">
                    berat
                </span>
            );
        } else if (p.match(/Papula.*/) || p.match(/Pustula.*/)) {
            return (
                <span className="text-white py-1 px-2 capitalize bg-orange-400 rounded-lg">
                    Sedang
                </span>
            );
        } else if (p.match(/Whitehead.*/) || p.match(/Blackhead.*/)) {
            return (
                <span className="text-white py-1 px-2 capitalize bg-green-400 rounded-lg">
                    Ringan
                </span>
            );
        }
    };
    return (
        <>
            {lastcheck ? (
                <div className="bg-white rounded-lg py-5 h-full flex flex-col items-center space-y-2 divide-y">
                    <div className="font-semibold text-lg text-left w-full px-5">
                        Hasil Diagnosa Terakhir
                    </div>
                    <div className="flex flex-col items-center space-y-2 px-5 w-full">
                        <div className="w-full italic">
                            {moment(lastcheck?.waktudiagnosa).format(
                                "DD/MM/YYYY"
                            )}
                        </div>
                        {/* <div className="w-40 h-40 rounded-full bg-slate-300 flex items-center justify-center">
                            <div className="text-4xl text-center">
                                {hasildiagnosa?.bobot.toFixed(1)}%
                            </div>
                        </div> */}
                        <div className="w-40 h-40 relative flex items-center justify-center">
                            <div className="w-40 h-40">
                                <Circle
                                    percent={hasildiagnosa?.bobot.toFixed(1)}
                                    strokeWidth={6}
                                    trailWidth={5}
                                    strokeLinecap="square"
                                    strokeColor={"#3CA3EC"}
                                    // strokeColor="#D3D3D3"
                                />
                            </div>
                            <div className="w-40 h-40 flex absolute text-center items-center justify-center text-3xl">
                                {hasildiagnosa?.bobot.toFixed(1)}%
                            </div>
                        </div>
                        <div className="text-lg text-center font-bold w-full">
                            {showhasil(hasildiagnosa?.penyakit)}
                        </div>
                        <div className="">
                            Tingkat Keparahan :{" "}
                            {showtingkat(hasildiagnosa?.penyakit)}
                        </div>
                        <button
                            className="text-sm hover:text-base transform duration-300 text-black hover:text-blue-400"
                            type="button"
                            onClick={() => {
                                if (TabP) {
                                    setTabP(false);
                                } else {
                                    setTabP(true);
                                }
                            }}
                        >
                            {TabP ? (
                                <div className="flex items-center justify-center">
                                    Sembunyikan{" "}
                                    <span>
                                        <IoIcons.IoMdArrowDropdown />{" "}
                                    </span>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center">
                                    Selengkapnya{" "}
                                    <span>
                                        <IoIcons.IoMdArrowDropright />{" "}
                                    </span>
                                </div>
                            )}
                        </button>
                        <div
                            className={`w-full ${TabP ? "visible" : "hidden"}`}
                        >
                            <div className="text-base font-semibold">
                                Persentase Kemungkinan lainnya :
                            </div>
                            {showlistpenyakit(hasil)}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg py-5 h-full flex flex-col items-center space-y-2 divide-y">
                    <div className="font-semibold text-lg text-left w-full px-5">
                        Hasil Diagnosa Terakhir
                    </div>
                    <div className="flex flex-col items-center space-y-2 px-5 w-full pt-5">
                        <div className=" w-40 h-40 rounded-full bg-slate-300 flex items-center justify-center">
                            <div className="text-4xl text-white text-center">
                                <FaIcons.FaStackOverflow size={48} />
                            </div>
                        </div>
                        <div className="w-full italic text-center">
                            Anda Belum memiliki riwayat konsultasi
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserDiagnosaTerakhir;
