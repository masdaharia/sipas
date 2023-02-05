import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as MdIcons from "react-icons/md";

const UserDiagnosaForm = ({ gejala, Tab, setTab }) => {
    const { register, handleSubmit } = useForm();
    const [Error, setError] = useState();
    const diagnosa = (data) => {
        Inertia.post("diagnosa", data, {
            onSuccess: () => {
                toast.success("Diagnosa Berhasil !");
            },
            onError: (e) => {
                setError(e);
                e.type && toast[e.type](e.message);
            },
        });
    };

    return (
        <form
            action=""
            onSubmit={handleSubmit(diagnosa)}
            className={`overflow-y-visible flex justify-around shadow-xl shadow-blue-600/10 bg-white p-4 rounded-2xl ${
                !Tab ? "hidden" : "visible"
            }`}
        >
            <div className="w-2/4 justify-center ">
                <div className="  flex-col flex justify-center">
                    <h1 className="text-2xl sm:text-3xl text-center font-bold">
                        Konsultasi
                    </h1>
                    <h3 className="text-center text-lg">
                        Pilih gejala yang sedang dialami
                    </h3>
                </div>
                {gejala?.map((gej, key) => {
                    return (
                        <div
                            className=" h-8 flex items-center mb-4 mt-3 bg-gray-300 rounded-md"
                            name="gejala"
                            key={key}
                        >
                            <input
                                id={"gejala-" + gej.id}
                                type="checkbox"
                                {...register("gejala")}
                                value={gej.id}
                                className="ml-4 w-4 h-4 text-blue-700 bg-gray-400 rounded border-gray-300"
                            />
                            <label
                                className="m-4 text-sm font-medium leading-none text-gray-900"
                                htmlFor={"gejala-" + gej.id}
                            >
                                {gej.nama_gejala}
                            </label>
                        </div>
                    );
                })}
                <button
                    onClick={(e) => {
                        setTab(false);
                    }}
                    className="flex items-center bg-blue-700 text-white border-2 border-blue-700 px-3 py-1 rounded-xl focus:ring fokus:outline-none focus:ring-blue-200 hover:bg-white hover:text-blue-500 transition-all duration-200 item-center space-x-2 "
                >
                    <MdIcons.MdZoomIn size={16} />
                    <h1>Diagnosa</h1>
                </button>
            </div>
        </form>
    );
};

export default UserDiagnosaForm;
