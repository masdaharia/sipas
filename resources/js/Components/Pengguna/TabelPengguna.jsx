import { Inertia } from "@inertiajs/inertia";
import { Grid, _ } from "gridjs-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { useRecoilState, useRecoilValue } from "recoil";
import { baseUrlApi } from "../../Store/Global";
import { dialogToggle, modalData, modalToggle } from "../../Store/Modal";
import ZenDialog from "../ZenDialog";

export default function TabelPengguna(props) {
    const [showDialog, setShowDialog] = useRecoilState(dialogToggle);
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const [editData, setEditData] = useRecoilState(modalData);
    const url = useRecoilValue(baseUrlApi);
    const [dialogInfo, setDialogInfo] = useState({
        title: "",
        message: "",
        isConfirm: false,
        id: null,
    });

    const sureDelete = (confirm) => {
        if (confirm) {
            Inertia.post(
                "hapus-pengguna",
                { id: dialogInfo.id },
                {
                    onSuccess: () => {
                        toast.success("Data terhapus!");
                        setShowDialog(false);
                    },
                    onError: () => {
                        toast.error("Data gagal dihapus!");
                    },
                }
            );
        } else {
            setShowDialog(false);
        }
    };

    const hapusPengguna = (id, name) => {
        setDialogInfo({
            title: "Yakin Menghapus?",
            message: "Data yang dihapus tidak dapat dikembalikan. Lanjutkan?",
            isConfirm: true,
            id: id,
        });
        setShowDialog(true);
    };

    return (
        <div className="flex flex-col">
            <ZenDialog
                title={dialogInfo.title}
                message={dialogInfo.message}
                isConfirm={dialogInfo.isConfirm}
                acceptHandler={sureDelete}
            />
            <Grid
                server={{
                    url: url + "data-pengguna",
                    then: (data) =>
                        data.map((user, index) => [
                            index + 1,
                            user?.name,
                            user?.username,
                            _(
                                <span className="capitalize">
                                    {user?.roles[0].name}
                                </span>
                            ),
                            user?.tanggal_lahir,
                            user?.jenis_kelamin,
                            user?.address,
                            user?.email,
                            _(
                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() => {
                                            setEditData(user);
                                            setShowModal(true);
                                        }}
                                        className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition duration-200"
                                    >
                                        <MdIcons.MdEdit
                                            size={16}
                                            className="text-yellow-400"
                                        />
                                    </button>

                                    <button
                                        onClick={() => {
                                            hapusPengguna(user.id);
                                        }}
                                        className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition duration-200"
                                    >
                                        <FaIcons.FaTrash
                                            size={16}
                                            className="text-red-400"
                                        />
                                    </button>
                                </div>
                            ),
                        ]),
                }}
                columns={[
                    { name: "No", width: "5%" },
                    "Nama Lengkap",
                    "Nama Pengguna",
                    "Role",
                    "Tanggal Lahir",
                    "Jenis Kelamin",
                    "Alamat",
                    "email",
                    { name: "Aksi", width: "10px" },
                    { name: "", width: "10px" },
                ]}
                search={true}
                pagination={{
                    enabled: true,
                    limit: 10,
                }}
                sort={true}
                className={{
                    container:
                        "bg-white shadow-md rounded-lg overflow-hidden p-5 overflow-x-auto",
                    table: "mt-5 min-w-full border-2 border-gray-200",
                    thead: "bg-gray-200",
                    th: "text-left text-sm font-medium text-gray-700 px-4 py-3",
                    tbody: "text-sm",
                    tr: "hover:bg-gray-100 border-b-2 border-gray-200",
                    td: "px-4 py-3",
                    footer: "text-gray-500 text-sm",
                    pagination:
                        "flex justify-between items-center mt-5 pl-4 text-gray-800 w-full",
                    paginationButton: "mr-4",
                    paginationButtonCurrent:
                        "text-white px-2 py-1 rounded bg-gray-800 hover:bg-gray-700",
                    paginationButtonPrev:
                        "text-gray-800 px-2 py-1 rounded bg-gray-100 hover:bg-gray-200",
                    paginationButtonNext:
                        "text-gray-800 px-2 py-1 rounded bg-gray-100 hover:bg-gray-200",
                    notfound: "font-semibold h-48 bg-empty text-center"
                }}
                language={{
                    search: {
                        placeholder: "🔍 Cari...",
                    },
                    pagination: {
                        previous: "Sebelumnya",
                        next: "Selanjutnya",
                        showing: "Menampilkan",
                        results: () => "Data",
                    },
                }}
            />
        </div>
    );
}
