import React from "react";
import TabelRiwayat from "../../Components/Riwayat/TabelRiwayat";
import Admin from "../../Layouts/Admin";

export default function Riwayat() {
    return (
        <Admin judul="Riwayat">
            <div className="p-4 space-y-3">
                <div className="space-y-3">
                    <h1 className="font-semibold text-gray-700 text-xl">
                        Data Riwayat Penyakit
                    </h1>
                    <TabelRiwayat />
                </div>
            </div>
        </Admin>
    );
}
