import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import toast from "react-hot-toast";
import * as MdIcons from "react-icons/md";
import { useRecoilState, useRecoilValue } from "recoil";
import { dialogToggle, modalData, modalToggle } from "../../Store/Modal";
import ZenDialog from "../ZenDialog";
import { Grid, _ } from "gridjs-react";
import { baseUrlApi } from "../../Store/Global";
import { Link, usePage } from "@inertiajs/inertia-react";
import moment from "moment";

export default function TabelRiwayat(props) {
    const [showDialog, setShowDialog] = useRecoilState(dialogToggle);
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const [editData, setEditData] = useRecoilState(modalData);
    const url = useRecoilValue(baseUrlApi);

    const { auth } = usePage().props;
    const showPenyakit = (hasil) => {
        let length = hasil.penyakit.length;

        return hasil.penyakit?.map((peny, key) => (
            <span key={key}>
                {" "}
                {peny}
                {key == length - 1 ? " " : ", "}
            </span>
        ));
    };
    const showisi = (user, data) => {
        if (user == "user") {
            return data.map((riwayat, index) => [
                index + 1,
                moment(riwayat?.waktudiagnosa).format("DD-MM-yy"),
                _(
                    <div>
                        {showPenyakit(JSON.parse(riwayat?.hasildiagnosa))}
                    </div>
                ),
                _(
                    <div className="flex items-center space-x-2 sm:text-sm text-xs">
                        <Link
                            href={"detail-" + riwayat?.id}
                            className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition duration-200"
                        >
                            <MdIcons.MdLooks
                                size={16}
                                className="text-yellow-400"
                            />
                        </Link>
                        <button
                            onClick={() => {
                                deleteHistory(riwayat?.id);
                            }}
                            aria-label="delete"
                            className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition duration-200"
                        >
                            <MdIcons.MdClose
                                size={16}
                                className="text-yellow-400"
                            />
                        </button>
                    </div>
                ),
            ]);
        } else if (user == "admin") {
            return data.map((riwayat, index) => [
                index + 1,
                moment(riwayat?.waktudiagnosa).format("DD-MM-yy"),
                riwayat?.user?.name,
                riwayat?.age,
                _(
                    <div>
                        {showPenyakit(JSON.parse(riwayat?.hasildiagnosa))}
                    </div>
                ),
                _(
                    <div className="flex items-center space-x-2 sm:text-sm text-xs">
                        <Link
                            href={"detail-" + riwayat?.id}
                            className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition duration-200"
                        >
                            <MdIcons.MdLooks
                                size={16}
                                className="text-yellow-400"
                            />
                        </Link>
                        <button
                            onClick={() => {
                                deleteHistory(riwayat?.id);
                            }}
                            aria-label="delete"
                            className="p-2 rounded-lg bg-yellow-100 hover:bg-yellow-200 transition duration-200"
                        >
                            <MdIcons.MdClose
                                size={16}
                                className="text-yellow-400"
                            />
                        </button>
                    </div>
                ),
            ]);
        }
    };
    const showlabel = (user) => {
        if (user == "user") {
            return [
                { name: "No", width: "5%" },
                { name: "Tanggal Diagnosa", width: "40%" },
                "Diagnosis",
                { name: "Aksi" },
            ];
        } else if (user == "admin") {
            return [
                { name: "No", width: "5%" },
                { name: "Tanggal Diagnosa", width: "40%" },
                "Nama",
                "Umur",
                "Diagnosis",
                { name: "Aksi" },
            ];
        }
    };
    const lihat = (id) => {
        let formData = new FormData();
        formData.append("id", id);
        Inertia.post("/detaildiagnosa", formData);
    };

    const [dialogInfo, setDialogInfo] = useState({
        title: "",
        message: "",
        isConfirm: false,
        id: null,
    });

    const sureDelete = (confirm) => {
        if (confirm) {
            Inertia.post(
                "hapus-riwayat",
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

    const deleteHistory = (id, name) => {
        setDialogInfo({
            title: "Yakin Menghapus?",
            message: "Data yang dihapus tidak dapat dikembalikan. Lanjutkan?",
            isConfirm: true,
            id: id,
        });
        setShowDialog(true);
    };

    return (
        <div
            className={`w-full divide-y rounded-lg overflow-hidden ${
                auth.user.roles[0].name == "admin"
                    ? "bg-slate-900 "
                    : "bg-blue-400"
            }`}
        >
            <ZenDialog
                title={dialogInfo.title}
                message={dialogInfo.message}
                isConfirm={dialogInfo.isConfirm}
                acceptHandler={sureDelete}
            />
            <Grid
                server={{
                    url: `http://localhost:8000/api/riwayat-diagnosa/${auth.user.id},${auth.user.roles[0].name}`,
                    then: (data) => showisi(auth.user.roles[0].name, data),
                }}
                columns={showlabel(auth.user.roles[0].name)}
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
