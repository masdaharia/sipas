import React from "react";
import { useRecoilState } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";
import * as MdIcons from "react-icons/md";
import Admin from "../../Layouts/Admin";
import ModalArtikel from "../../Components/Artikel/ModalArtikel";
import TabelArtikel from "../../Components/Artikel/TabelArtikel";

export default function Artikel() {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const [dataEdit, setDataEdit] = useRecoilState(modalData);

    return (
        <Admin judul="Artikel">
            <div className="p-4 space-y-3">
                <div className="space-y-3">
                    <h1 className="font-semibold text-gray-700 text-xl">
                        Data Artikel
                    </h1>
                    <ModalArtikel />
                    <button
                        onClick={() => {
                            setDataEdit(null);
                            setShowModal(true);
                        }}
                        className="text-blue-500 border-2 border-blue-600 px-3 py-1 rounded-xl 
                focus:ring focus:outline-none focus:ring-blue-200 hover:bg-blue-500
                hover:text-white transition-all duration-200 flex items-center space-x-2"
                    >
                        <MdIcons.MdAddCircle size={16} />
                        <h1>Tambah</h1>
                    </button>
                    <TabelArtikel />
                </div>
            </div>
        </Admin>
    );
}
