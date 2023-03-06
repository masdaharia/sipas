import React from "react";
import { useRecoilValue } from "recoil";
import { modalData } from "../../Store/Modal";
import ModalRoot from "../ModalRoot";

export default function ModalDetailArtikel({}) {
    const data = useRecoilValue(modalData);
    const handleUrlGambar = (dbUrl) => {
        return dbUrl?.replace("public", "/storage");
    };
    return (
        <ModalRoot>
            <div className="bg-white shadow-md rounded-xl p-4">
                <img
                    className="rounded-md w-full aspect-video object-cover"
                    src={handleUrlGambar(data?.gambar)}
                    alt={data?.judul_artikel}
                />
                <h2 className="font-bold mt-2">{data?.judul_artikel}</h2>
                <p>
                    <div
                        style={{ whiteSpace: "pre-line" }}
                        className="text-justify"
                    >
                        {data?.isi_artikel}
                    </div>
                </p>
                <h3 className="text-gray-700 text-xs italic">
                    Sumber : {data?.sumber_artikel}
                </h3>
            </div>
        </ModalRoot>
    );
}
