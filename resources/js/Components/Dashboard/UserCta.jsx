import React from "react";
import * as MdIcons from "react-icons/md";

const UserCta = ({ auth, setTab, Tab }) => {
    return (
        <div
            className={`flex bg-white p-5 gap-3 rounded-lg h-full ${
                Tab == false ? "visible" : "hidden"
            }`}
        >
            <div className="w-1/3 flex items-center justify-center">
                <img
                    className="flex justify-center items-center w-full -mb-5"
                    src="/img/dashboardU.png" //nanti gambarnya ganti disini
                />
            </div>
            <div className="flex-grow flex flex-col justify-center ">
                <div className="mb-1">
                    <h3 className="font-semibold text-gray-700 text-3xl">
                        Hi, {auth?.user?.name}.
                    </h3>
                    <h2 className="font-semibold text-gray-700 text-4xl">
                        Selamat Datang di SIPAS
                    </h2>
                </div>

                <div className="">
                    <h2 className=" text-gray-700 text-xl ">
                        Punya masalah mengenai kulit?
                    </h2>
                    <button
                        onClick={(e) => {
                            setTab(true);
                        }}
                        className="flex mt-3 items-center text-blue-500 border-2 border-blue-700 px-3 py-1 rounded-xl focus:ring fokus:outline-none focus:ring-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-200 item-center space-x-2"
                    >
                        <MdIcons.MdZoomIn size={16} />
                        <h1>Cek Sekarang</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCta;
