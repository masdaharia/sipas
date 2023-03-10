import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function ModalGejala() {
    const [, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [dataGejala, setDataGejala] = useState({
        kode_gejala: "",
        nama_gejala: "",
        gambar: "",
        deskripsi: "",
    });

    const [error, setError] = useState();

    const submitSymptom = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("edit-gejala", dataGejala, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDataGejala((dataGejala) => ({
                        ...dataGejala,
                        kode_gejala: "",
                        nama_gejala: "",
                        gambar: "",
                        deskripsi: "",
                    }));
                    setError(null);
                    toast.success("Gejala berhasil diubah!");
                },
            });
        } else {
            Inertia.post("tambah-gejala", dataGejala, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDataGejala((dataGejala) => ({
                        ...dataGejala,
                        kode_gejala: "",
                        nama_gejala: "",
                        gambar: "",
                        deskripsi: "",
                    }));
                    setError(null);
                    toast.success("Gejala berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setDataGejala((dataGejala) => ({
            ...dataGejala,
            id: editData?.id,
            kode_gejala: editData?.kode_gejala,
            nama_gejala: editData?.nama_gejala,
            gambar: editData?.gambar,
            deskripsi: editData?.deskripsi,
        }));
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Gejala`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitSymptom}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Kode Gejala</h1>
                        <input
                            onChange={(e) => {
                                setDataGejala((dataGejala) => ({
                                    ...dataGejala,
                                    kode_gejala: e.target.value,
                                }));
                            }}
                            value={dataGejala.kode_gejala}
                            type="text"
                            name="kode_gejala"
                            id="kode_gejala"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.kode_gejala && (
                            <span className="text-xs text-red-500">
                                {error?.kode_gejala}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Gejala</h1>
                        <input
                            onChange={(e) => {
                                setDataGejala((dataGejala) => ({
                                    ...dataGejala,
                                    nama_gejala: e.target.value,
                                }));
                            }}
                            value={dataGejala.nama_gejala}
                            type="text"
                            name="nama_gejala"
                            id="nama_gejala"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.nama_gejala && (
                            <span className="text-xs text-red-500">
                                {error?.nama_gejala}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Deskripsi</h1>
                        <textarea
                            onChange={(e) => {
                                setDataGejala((dataGejala) => ({
                                    ...dataGejala,
                                    deskripsi: e.target.value,
                                }));
                            }}
                            value={dataGejala.deskripsi}
                            name="deskripsi"
                            id="deskripsi"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.deskripsi && (
                            <span className="text-xs text-red-500">
                                {error?.deskripsi}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gambar Gejala</h1>
                        <input
                            onChange={(e) => {
                                setDataGejala((dataGejala) => ({
                                    ...dataGejala,
                                    gambar: e.target.files,
                                }));
                            }}
                            type="file"
                            name="gambar"
                            id="gambar"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.gambar && (
                            <span className="text-xs text-red-500">
                                {error?.gambar}
                            </span>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold text-center py-2 rounded-lg mt-2"
                    >
                        Simpan
                    </button>
                </form>
            </ModalRoot>
        </div>
    );
}
