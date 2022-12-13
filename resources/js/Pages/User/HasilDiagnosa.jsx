import { Link, usePage } from "@inertiajs/inertia-react";
import moment from "moment/moment";
import React from "react";
import Admin from "../../Layouts/Admin";

export default function HasilDiagnosa() {
    const { user, riwayat } = usePage().props;
    const hipotesa = JSON.parse(riwayat?.hipotesa);
    const hasildiagnosa = JSON.parse(riwayat?.hasildiagnosa);
    console.log(hipotesa, hasildiagnosa);
    const showhasil = (data) => {
        let lenght = data.lenght;
        return data?.map((data, key) => (
            <span key={key}>
                {""}
                {data}
                {key == lenght - 1 ? "" : ", "}
            </span>
        ));
    };

    const showwithsimbol = (data) => {
        let lenght = data.lenght;
        return data?.map((data, key) => (
            <span key={key}>
                {"• "}
                {data}
                <br />
            </span>
        ));
    };
    const showhipotesa = (data) => {
        let lenght = data.lenght;
        return data?.map((data, key) => (
            <span key={key}>
                {"• "}
                {data.gejala}
                <br />
            </span>
        ));
    };
    // console.log(user, riwayat);
    const cekgambar = (gambar) => {
        if (gambar == "default" || gambar == null) {
            return "../../../img/Profile.jpg";
        } else {
            // return `storage/${gambar}`;
            return gambar.replace("public", "/storage");
        }
    };
    return (
        <Admin judul="Hasil Diagnosa">
            <h1 className="text-xl font-semibold text-gray-700 p-4">
                Hasil Diagnosa
            </h1>
            <div className="w-full p-4 space-y-4">
                <div className="flex flex-row">
                    <div className="w-3/5 ml-4 bg-white border rounded-xl border-gray-300 p-3 flex flex-row">
                        <div className="flex flex-row items-center space-x-5">
                            <div>
                                <img
                                    src={cekgambar(user?.profil)}
                                    alt=""
                                    className="w-40 h-40 rounded-full"
                                ></img>
                            </div>
                            <div>
                                <div className="">
                                    Nama Lengkap : {user?.name}
                                </div>
                                <div className="">
                                    Jenis Kelamin : {user?.jenis_kelamin}
                                </div>
                                <div className="">Umur : {riwayat?.age}</div>
                                <div className="">Alamat : {user?.address}</div>
                                <div className="">
                                    Tanggal Lahir : {user?.tanggal_lahir}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 mx-4 space-y-4 bg-white border rounded-xl border-gray-300 p-3 flex flex-col items-center">
                        <div className="text-lg">
                            {" "}
                            {moment(riwayat?.waktudiagnosa).format(
                                "DD MMMM YYYY"
                            )}
                        </div>
                        <div className="w-40 h-40 rounded-full bg-slate-300 flex items-center justify-center">
                            <div className="text-4xl">
                                {hasildiagnosa?.bobot.toFixed(1)}%
                            </div>
                        </div>
                        <div className="text-lg font-bold">
                            {showhasil(hasildiagnosa?.penyakit)}
                        </div>
                    </div>
                </div>
                <div className="ml-4">
                    <div className="text-2xl underline underline-offset-8">
                        Deskripsi Penyakit
                    </div>
                </div>
                <div className="mx-4 bg-white border rounded-xl border-gray-300 p-3 flex flex-col space-y-3">
                    <div className="text-lg ">
                        <div className="">Keterangan :</div>
                        <div className="">
                            {showwithsimbol(hasildiagnosa?.keterangan)}
                        </div>
                    </div>
                    <div className="text-lg">
                        <div className="">Saran :</div>
                        <div className="">
                            {showwithsimbol(hasildiagnosa?.saran)}
                        </div>
                    </div>
                </div>
                <div className="ml-4">
                    <div className="text-2xl underline underline-offset-8">
                        Gejala Yang Dipilih
                    </div>
                </div>
                <div className="mx-4 bg-white border rounded-xl border-gray-300 p-3 flex flex-row">
                    <div className="">{showhipotesa(hipotesa)}</div>
                </div>
                <div className="flex flex-row-reverse">
                    <Link
                        href={"diagnosa-" + riwayat?.id}
                        className="p-2 bg-slate-400 rounded-xl mx-4 hover:bg-slate-300 ease-in-out duration-300"
                    >
                        Riwayat Perhitungan
                    </Link>
                </div>
            </div>
        </Admin>
    );
}
