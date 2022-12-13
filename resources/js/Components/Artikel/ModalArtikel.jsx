import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function ModalArtikel() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [dataArtikel, setDataArtikel] = useState({
        judul_artikel: "",
        isi_artikel: "",
        sumber_artikel: "",
        gambar: "",
    });

    const [error, setError] = useState();

    const submitArtikel = (e) => {
        e.preventDefault();
        if (editData) {
            Inertia.post("edit-artikel", dataArtikel, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDataArtikel((dataArtikel) => ({
                        ...dataArtikel,
                        judul_artikel: "",
                        isi_artikel: "",
                        sumber_artikel: "",
                        gambar: "",
                    }));
                    setError(null);
                    toast.success("Artikel berhasil diubah!");
                },
            });
        } else {
            Inertia.post("tambah-artikel", dataArtikel, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDataArtikel((dataArtikel) => ({
                        ...dataArtikel,
                        judul_artikel: "",
                        isi_artikel: "",
                        sumber_artikel: "",
                        gambar: "",
                    }));
                    setError(null);
                    toast.success("Artikel berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setDataArtikel((dataArtikel) => ({
            ...dataArtikel,
            id: editData?.id,
            judul_artikel: editData?.judul_artikel,
            isi_artikel: editData?.isi_artikel,
            sumber_artikel: editData?.sumber_artikel,
            gambar: editData?.gambar,
        }));
        setError();
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Artikel`}
                    </h1>
                }
            >
                <form
                    onSubmit={submitArtikel}
                    className="flex flex-col space-y-3"
                >
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Judul Artikel</h1>
                        <input
                            onChange={(e) => {
                                setDataArtikel((dataArtikel) => ({
                                    ...dataArtikel,
                                    judul_artikel: e.target.value,
                                }));
                            }}
                            value={dataArtikel.judul_artikel}
                            type="text"
                            name="judul_artikel"
                            id="judul_artikel"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.judul_artikel && (
                            <span className="text-xs text-red-500">
                                {error?.judul_artikel}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Isi Artikel</h1>
                        <input
                            onChange={(e) => {
                                setDataArtikel((dataArtikel) => ({
                                    ...dataArtikel,
                                    isi_artikel: e.target.value,
                                }));
                            }}
                            value={dataArtikel.isi_artikel}
                            type="text"
                            name="isi_artikel"
                            id="isi_artikel"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.isi_artikel && (
                            <span className="text-xs text-red-500">
                                {error?.isi_artikel}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">
                            Sumber Artikel
                        </h1>
                        <input
                            onChange={(e) => {
                                setDataArtikel((dataArtikel) => ({
                                    ...dataArtikel,
                                    sumber_artikel: e.target.value,
                                }));
                            }}
                            value={dataArtikel.sumber_artikel}
                            type="text"
                            name="sumber_artikel"
                            id="sumber_artikel"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.sumber_artikel && (
                            <span className="text-xs text-red-500">
                                {error?.sumber_artikel}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Gambar</h1>
                        <input
                            onChange={(e) => {
                                setDataArtikel({
                                    ...dataArtikel,
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
