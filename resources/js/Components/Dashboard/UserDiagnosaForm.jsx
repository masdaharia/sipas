import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

const UserDiagnosaForm = ({ gejala, Tab, setTab }) => {
    const { register, handleSubmit } = useForm();
    const [Error, setError] = useState();
    const [openDetail, setOpenDetail] = useState("");
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

    const handleClickDetail = (currentId) => {
        if (openDetail === currentId) {
            setOpenDetail("");
        } else {
            setOpenDetail(currentId);
        }
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
                            className="h-max py-2  mb-4 mt-3 bg-gray-100 rounded-md "
                            name="gejala"
                            key={key}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <input
                                        id={"gejala-" + gej.id}
                                        type="checkbox"
                                        {...register("gejala")}
                                        value={gej.id}
                                        className="ml-4 text-blue-700 bg-gray-300 rounded border-gray-300 cursor-pointer"
                                    />
                                    <label
                                        className=" text-sm font-medium leading-snug text-gray-900"
                                        htmlFor={"gejala-" + gej.id}
                                    >
                                        {gej.nama_gejala}
                                    </label>
                                </div>
                                <span
                                    onClick={() => handleClickDetail(gej.id)}
                                    className="mx-4 cursor-pointer"
                                    title="detail"
                                >
                                    <AiIcons.AiFillQuestionCircle className="text-gray-400" />
                                </span>
                            </div>
                            {openDetail === gej.id && (
                                <div className="w-full p-4">
                                    {gej.gambar && (
                                        <div className="w-full aspect-video overflow-hidden">
                                            <img
                                                className="object-cover w-full"
                                                src={gej.gambar?.replace(
                                                    "public",
                                                    "/storage"
                                                )}
                                                alt="gambar_gejala"
                                            />
                                        </div>
                                    )}

                                    <p className="italic text-gray-600 mt-2">
                                        {gej.deskripsi}
                                    </p>
                                </div>
                            )}
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
