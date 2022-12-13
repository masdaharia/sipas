import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { useRecoilState } from "recoil";
import { modalData, modalToggle } from "../../Store/Modal";
import ModalDetailArtikel from "./ModalDetailArtikel";

export default function CardArtikel({ data }) {
    const [showModal, setShowModal] = useRecoilState(modalToggle);
    const [detailArtikel, setDetailArtikel] = useRecoilState(modalData);
    const handleUrlGambar = (dbUrl) => {
        return dbUrl.replace("public", "/storage");
    };
    return (
        <div className="bg-white shadow-md rounded-xl p-4">
            <img
                className="rounded-md w-full aspect-video object-cover"
                src={handleUrlGambar(data.gambar)}
                alt={data.judul_artikel}
            />
            <h2 className="font-bold mt-2">{data.judul_artikel}</h2>
            <h3 className="text-gray-700 text-xs italic">
                Sumber : {data.sumber_artikel}
            </h3>

            <button
                onClick={() => {
                    setDetailArtikel(data);
                    setShowModal(true);
                }}
                className=" border-t mt-2 w-full text-left text-sm pt-2 text-gray-500 flex items-center "
            >
                Lihat Selengkapnya <BsArrowRightShort />
            </button>
        </div>
    );
}
