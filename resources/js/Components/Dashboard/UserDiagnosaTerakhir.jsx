import { usePage } from "@inertiajs/inertia-react";
import moment from "moment";
import React from "react";
import * as FaIcons from "react-icons/fa";

const UserDiagnosaTerakhir = () => {
    const { lastcheck } = usePage().props;
    // console.log(lastcheck?);
    const hasildiagnosa = lastcheck
        ? JSON.parse(lastcheck?.hasildiagnosa)
        : null;
    const showhasil = (data) => {
        let lenght = data.lenght;
        return data?.map((data, key) => (
            <span className="text-center" key={key}>
                {""}
                {data}
                {key == lenght - 1 ? " " : ", "}
            </span>
        ));
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
                        <div className="w-40 h-40 rounded-full bg-slate-300 flex items-center justify-center">
                            <div className="text-4xl text-center">
                                {hasildiagnosa?.bobot.toFixed(1)}%
                            </div>
                        </div>
                        <div className="text-lg text-center font-bold w-full">
                            {showhasil(hasildiagnosa?.penyakit)}
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
