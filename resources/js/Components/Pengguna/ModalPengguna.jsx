import React, { useEffect, useState } from "react";
import ModalRoot from "../ModalRoot";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { useRecoilState, useRecoilValue } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";

export default function ModalPengguna() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const editData = useRecoilValue(modalData);

    const [dataPengguna, setDataPengguna] = useState({
        name: "",
        username: "",
        jenis_kelamin: "",
        tanggal_lahir: "",
        address: "",
        email: "",
        role: "",
    });

    const [error, setError] = useState();

    const submitUser = (e) => {
        e.preventDefault();

        if (editData) {
            Inertia.post("edit-pengguna", dataPengguna, {
                onError: (e) => {
                    e?.duplicate && toast.error(e?.duplicate);
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDataPengguna((dataPengguna) => ({
                        ...dataPengguna,
                        name: "",
                        username: "",
                        jenis_kelamin: "",
                        tanggal_lahir: "",
                        address: "",
                        email: "",
                        role: "",
                    }));
                    setError(null);
                    toast.success("Pengguna berhasil diubah!");
                },
            });
        } else {
            Inertia.post("tambah-pengguna", dataPengguna, {
                onError: (e) => {
                    setError(e);
                },
                onSuccess: () => {
                    setShowModal(false);
                    setDataPengguna((dataPengguna) => ({
                        ...dataPengguna,
                        name: "",
                        username: "",
                        jenis_kelamin: "",
                        tanggal_lahir: "",
                        address: "",
                        email: "",
                        role: "",
                    }));
                    setError(null);
                    toast.success("Pengguna berhasil ditambahkan!");
                },
            });
        }
    };

    useEffect(() => {
        setDataPengguna((dataPengguna) => ({
            ...dataPengguna,
            id: editData?.id,
            name: editData?.name,
            username: editData?.username,
            jenis_kelamin: editData?.jenis_kelamin,
            tanggal_lahir: editData?.tanggal_lahir,
            address: editData?.address,
            email: editData?.email,
            role: editData?.roles[0].name,
        }));
        //setError();
    }, [editData]);

    return (
        <div>
            <ModalRoot
                title={
                    <h1 className="font-semibold text-gray-800 text-xl">
                        {`${editData ? "Edit" : "Tambah"} Pengguna`}
                    </h1>
                }
            >
                <form onSubmit={submitUser} className="flex flex-col space-y-3">
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Lengkap</h1>
                        <input
                            onChange={(e) => {
                                setDataPengguna((dataPengguna) => ({
                                    ...dataPengguna,
                                    name: e.target.value,
                                }));
                            }}
                            value={dataPengguna?.name}
                            type="text"
                            name="name"
                            id="name"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.name && (
                            <span className="text-xs text-red-500">
                                {error?.name}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Nama Pengguna</h1>
                        <input
                            onChange={(e) => {
                                setDataPengguna((dataPengguna) => ({
                                    ...dataPengguna,
                                    username: e.target.value,
                                }));
                            }}
                            value={dataPengguna?.username}
                            type="text"
                            name="username"
                            id="username"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.username && (
                            <span className="text-xs text-red-500">
                                {error?.username}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Jenis Kelamin</h1>
                        <select
                            onChange={(e) => {
                                setDataPengguna((dataPengguna) => ({
                                    ...dataPengguna,
                                    jenis_kelamin: e.target.value,
                                }));
                            }}
                            value={dataPengguna?.jenis_kelamin}
                            type="text"
                            name="jenis_kelamin"
                            id="jenis_kelamin"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            <option value="">Pilih Jenis Kelamin</option>
                            <option value="Laki-laki">Laki-laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                        {error?.jenis_kelamin && (
                            <span className="text-xs text-red-500">
                                {error?.jenis_kelamin}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Tanggal Lahir</h1>
                        <input
                            onChange={(e) => {
                                setDataPengguna((dataPengguna) => ({
                                    ...dataPengguna,
                                    tanggal_lahir: e.target.value,
                                }));
                            }}
                            value={dataPengguna?.tanggal_lahir}
                            type="date"
                            name="tanggal_lahir"
                            id="tanggal_lahir"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.tanggal_lahir && (
                            <span className="text-xs text-red-500">
                                {error?.tanggal_lahir}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Alamat</h1>
                        <input
                            onChange={(e) => {
                                setDataPengguna((dataPengguna) => ({
                                    ...dataPengguna,
                                    address: e.target.value,
                                }));
                            }}
                            value={dataPengguna?.address}
                            type="text"
                            name="address"
                            id="address"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.address && (
                            <span className="text-xs text-red-500">
                                {error?.address}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Email</h1>
                        <input
                            onChange={(e) => {
                                setDataPengguna((dataPengguna) => ({
                                    ...dataPengguna,
                                    email: e.target.value,
                                }));
                            }}
                            value={dataPengguna?.email}
                            type="text"
                            name="email"
                            id="email"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        />
                        {error?.email && (
                            <span className="text-xs text-red-500">
                                {error?.email}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="text-gray-500 text-sm">Role</h1>
                        <select
                            onChange={(e) => {
                                setDataPengguna((dataPengguna) => ({
                                    ...dataPengguna,
                                    role: e.target.value,
                                }));
                            }}
                            value={dataPengguna?.role}
                            type="text"
                            name="role"
                            id="role"
                            className="border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                        >
                            <option value="">Pilih Jenis Role</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                        {error?.role && (
                            <span className="text-xs text-red-500">
                                {error?.role}
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
