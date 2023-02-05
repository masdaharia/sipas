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
        let length = data.length;
        return data?.map((data, key) => (
            <span key={key}>
                {""}
                {data}
                {key == length - 1 ? "" : ", "}
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
        <Admin judul="Hasil Diagnosa">
            {/* <h1 className="text-xl font-semibold text-gray-700 p-4">
                Hasil Diagnosa
            </h1> */}
            <div className="w-full p-4 space-y-4 ">
                <div className="flex flex-row">
                    <div className="w-3/5 ml-4 bg-white  rounded-xl p-3 flex flex-row shadow-xl shadow-blue-600/10">
                        <div className="flex flex-row items-center space-x-5">
                            <div>
                                <img
                                    src={cekgambar(user?.profil)}
                                    alt=""
                                    className="w-40 h-40 rounded-full"
                                ></img>
                            </div>
                            <div>
                                {/* <div className="">
                                    Nama Lengkap : {user?.name}
                                </div>
                                <div className="">
                                    Jenis Kelamin : {user?.jenis_kelamin}
                                </div>
                                <div className="">Umur : {riwayat?.age}</div>
                                <div className="">Alamat : {user?.address}</div>
                                <div className="">
                                    Tanggal Lahir : {user?.tanggal_lahir}
                                </div> */}

                                <table border="0">
                                    <tr>
                                        <td>Nama Lengkap </td>
                                        <td> : </td>
                                        <td> {user?.name} </td>
                                    </tr>
                                    <tr>
                                        <td>Jenis Kelamin </td>
                                        <td> : </td>
                                        <td> {user?.jenis_kelamin} </td>
                                    </tr>
                                    <tr>
                                        <td>Umur </td>
                                        <td> : </td>
                                        <td> {riwayat?.age} </td>
                                    </tr>
                                    <tr>
                                        <td>Alamat </td>
                                        <td> : </td>
                                        <td> {user?.address} </td>
                                    </tr>
                                    <tr>
                                        <td>Tanggal Lahir </td>
                                        <td> : </td>
                                        <td> {user?.tanggal_lahir} </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 mx-4 space-y-4 bg-white  rounded-xl  p-3 flex flex-col items-center shadow-xl shadow-blue-600/10">
                        <div className="text-lg">
                            {" "}
                            {moment(riwayat?.waktudiagnosa).format(
                                "DD MMMM YYYY"
                            )}
                        </div>
                        <div className="w-40 h-40 rounded-full bg-slate-300 flex items-center justify-center ">
                            <div className="text-4xl">
                                {hasildiagnosa?.bobot.toFixed(1)}%
                            </div>
                        </div>
                        <div className="text-lg font-bold">
                            {showhasil(hasildiagnosa?.penyakit)}
                        </div>
                        <div className="-pt-2">
                            Tingkat Keparahan :{" "}
                            {showtingkat(hasildiagnosa?.penyakit)}
                        </div>
                    </div>
                </div>
                <div className="ml-4">
                    <div className="text-2xl underline underline-offset-8 ">
                        Deskripsi Penyakit
                    </div>
                </div>
                <div className="mx-4 bg-white  rounded-xl  p-3 flex flex-col space-y-3 shadow-xl shadow-blue-600/10">
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
                <div className="mx-4 bg-white  rounded-xl  p-3 flex flex-row shadow-xl shadow-blue-600/10">
                    <div className="">{showhipotesa(hipotesa)}</div>
                </div>
                <div className="flex flex-row-reverse">
                    <Link
                        href={"diagnosa-" + riwayat?.id}
                        className="p-2 bg-blue-700 text-white rounded-xl mx-4 hover:bg-slate-300 ease-in-out duration-300"
                    >
                        Riwayat Perhitungan
                    </Link>
                </div>
            </div>
        </Admin>
    );
}
