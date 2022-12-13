import React from "react";
import CardArtikel from "../../Components/Artikel/CardArtikel";
import ModalDetailArtikel from "../../Components/Artikel/ModalDetailArtikel";
import Admin from "../../Layouts/Admin";

export default function Artikel({ artikel }) {
    return (
        <Admin judul="Artikel">
            <div className="grid grid-cols-3 gap-4 p-3">
                {artikel?.map((art) => (
                    <CardArtikel data={art} />
                ))}
            </div>
            <ModalDetailArtikel />
        </Admin>
    );
}
