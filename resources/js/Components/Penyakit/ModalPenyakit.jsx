import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function ModalPenyakit() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [dataPenyakit, setDataPenyakit] = useState({
        kode_penyakit: "",
        nama_penyakit: "",
        tingkat_keparahan: "",
        saran: "",
        gambar: "",
    });

    const [error, setError] = useState();

    const submitDisease = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("edit-penyakit", dataPenyakit, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDataPenyakit((dataPenyakit) => ({
                        ...dataPenyakit,
                        kode_penyakit: "",
                        nama_penyakit: "",
                        tingkat_keparahan: "",
                        keterangan: "",
                        saran: "",
                        gambar: "",
                    }));
                    setError(null);
                    toast.success("Penyakit berhasil diubah!");
                },
            });
        } else {
            Inertia.post("tambah-penyakit", dataPenyakit, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDataPenyakit((dataPenyakit) => ({
                        ...dataPenyakit,
                        kode_penyakit: "",
                        nama_penyakit: "",
                        tingkat_keparahan: "",
                        keterangan: "",
                        saran: "",
                        gambar: "",
                    }));
                    setError(null);
                    toast.success("Penyakit berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setDataPenyakit((dataPenyakit) => ({
            ...dataPenyakit,
            id: editData?.id,
            kode_penyakit: editData?.kode_penyakit,
            nama_penyakit: editData?.nama_penyakit,
            tingkat_keparahan: editData?.tingkat_keparahan,
            keterangan: editData?.keterangan,
            saran: editData?.saran,
            gambar: editData?.gambar,
        }));
        setError();
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Penyakit`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitDisease}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Kode Penyakit</h1>
                        <input
                            onChange={(e) => {
                                setDataPenyakit((dataPenyakit) => ({
                                    ...dataPenyakit,
                                    kode_penyakit: e.target.value,
                                }));
                            }}
                            value={dataPenyakit.kode_penyakit}
                            type="text"
                            name="kode_penyakit"
                            id="kode_penyakit"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.kode_penyakit && (
                            <span className="text-xs text-red-500">
                                {error?.kode_penyakit}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Penyakit</h1>
                        <input
                            onChange={(e) => {
                                setDataPenyakit((dataPenyakit) => ({
                                    ...dataPenyakit,
                                    nama_penyakit: e.target.value,
                                }));
                            }}
                            value={dataPenyakit.nama_penyakit}
                            type="text"
                            name="nama_penyakit"
                            id="nama_penyakit"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.nama_penyakit && (
                            <span className="text-xs text-red-500">
                                {error?.nama_penyakit}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">
                            Tingkat Keparahan
                        </h1>
                        <select
                            onChange={(e) => {
                                setDataPenyakit((dataPenyakit) => ({
                                    ...dataPenyakit,
                                    tingkat_keparahan: e.target.value,
                                }));
                            }}
                            value={dataPenyakit.tingkat_keparahan}
                            type="text"
                            name="tingkat_keparahan"
                            id="tingkat_keparahan"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            <option value="">Tingkat Keparahan</option>
                            <option value="ringan">Ringan</option>
                            <option value="sedang">Sedang</option>
                            <option value="parah">Parah</option>
                        </select>
                        {error?.tingkat_keparahan && (
                            <span className="text-xs text-red-500">
                                {error?.tingkat_keparahan}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Keterangan</h1>
                        <textarea
                            onChange={(e) => {
                                setDataPenyakit((dataPenyakit) => ({
                                    ...dataPenyakit,
                                    keterangan: e.target.value,
                                }));
                            }}
                            value={dataPenyakit.keterangan}
                            name="keterangan"
                            id="keterangan"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            {dataPenyakit.keterangan}
                        </textarea>
                        {error?.keterangan && (
                            <span className="text-xs text-red-500">
                                {error?.keterangan}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Saran</h1>
                        <textarea
                            onChange={(e) => {
                                setDataPenyakit((dataPenyakit) => ({
                                    ...dataPenyakit,
                                    saran: e.target.value,
                                }));
                            }}
                            value={dataPenyakit.saran}
                            name="saran"
                            id="saran"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            {dataPenyakit.saran}
                        </textarea>
                        {error?.saran && (
                            <span className="text-xs text-red-500">
                                {error?.saran}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gambar</h1>
                        <input
                            onChange={(e) => {
                                setDataPenyakit({
                                    ...dataPenyakit,
                                    gambar: e.target.files,
                                });
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
