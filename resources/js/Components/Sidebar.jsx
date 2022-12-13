import { Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

export default function Sidebar(props) {
    const { auth } = usePage().props;
    const role = auth.user.roles[0].name;
    // console.log(role);
    return (
        <div className="sm:h-screen h-fit p-5 bg-white shadow-xl w-full sm:w-fit md:w-64 fixed sm:relative bottom-0 z-50">
            <div className="hidden sm:flex space-x-4 py-5 justify-center items-center">
                <MdIcons.MdMedicalServices
                    size={32}
                    className="text-blue-600"
                />
                <h1 className="font-bold text-3xl text-blue-600 hidden md:block sm:hidden">
                    SIPAS
                </h1>
            </div>

            <div className="mt-0 sm:mt-10 flex flex-row sm:flex-col space-y-0 sm:space-y-2 items-center sm:items-start justify-evenly sm:justify-start">
                <Link
                    className={`w-auto sm:w-full ${
                        role == "admin" ? "visible" : "hidden"
                    }`}
                    href="dashboard"
                >
                    <div
                        className={`flex ${
                            props.active == "Dashboard"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Dashboard</h1>
                    </div>
                </Link>
                {/* <Link className="w-auto sm:w-full" href="doctors">
                    <div
                        className={`flex ${
                            props.active == "Dokter"
                                ? "bg-blue-600 border-blue-900  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserMd size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Dokter</h1>
                    </div>
                </Link> */}
                {/* -----------Menu admin------------------ */}
                <Link
                    className={`w-auto sm:w-full ${
                        role == "admin" ? "visible" : "hidden"
                    }`}
                    href="pengguna"
                >
                    <div
                        className={`flex ${
                            props.active == "Pengguna"
                                ? "bg-blue-600 border-blue-900  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserFriends size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Pengguna</h1>
                    </div>
                </Link>

                <Link
                    className={`w-auto sm:w-full ${
                        role == "admin" ? "visible" : "hidden"
                    }`}
                    href="penyakit"
                >
                    <div
                        className={`flex ${
                            props.active == "Penyakit"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaVirus size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">
                            Data Penyakit
                        </h1>
                    </div>
                </Link>
                <Link
                    className={`w-auto sm:w-full ${
                        role == "admin" ? "visible" : "hidden"
                    }`}
                    href="gejala"
                >
                    <div
                        className={`flex ${
                            props.active == "Gejala"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdSick size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">
                            Data Gejala
                        </h1>
                    </div>
                </Link>
                <Link
                    className={`w-auto sm:w-full ${
                        role == "admin" ? "visible" : "hidden"
                    }`}
                    href="aturan"
                >
                    <div
                        className={`flex ${
                            props.active == "Aturan"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDeviceHub size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">
                            Data Aturan
                        </h1>
                    </div>
                </Link>

                <Link
                    className={`w-auto sm:w-full ${
                        role == "admin" ? "visible" : "hidden"
                    }`}
                    href="artikel"
                >
                    <div
                        className={`flex ${
                            props.active == "Artikel"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdOutlineMenuBook size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Artikel</h1>
                    </div>
                </Link>

                {/* -----------Menu User------------------ */}
                <Link
                    className={`w-auto sm:w-full ${
                        role == "user" ? "visible" : "hidden"
                    }`}
                    href="dashboard-user"
                >
                    <div
                        className={`flex ${
                            props.active == "Dashboard"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdDashboard size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Dashboard</h1>
                    </div>
                </Link>

                <Link
                    className={`w-auto sm:w-full $
                        
                    }`}
                    href="riwayat"
                >
                    <div
                        className={`flex ${
                            props.active == "Riwayat"
                                ? "bg-blue-600 border-blue-900  text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserInjured size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">
                            Data Riwayat
                        </h1>
                    </div>
                </Link>

                <Link
                    className={`w-auto sm:w-full ${
                        role == "user" ? "visible" : "hidden"
                    }`}
                    href="artikel"
                >
                    <div
                        className={`flex ${
                            props.active == "Artikel"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <MdIcons.MdOutlineMenuBook size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Artikel</h1>
                    </div>
                </Link>

                <Link className={`w-auto sm:w-full $}`} href="profil">
                    <div
                        className={`flex ${
                            props.active == "Profil"
                                ? "bg-blue-600 border-blue-900 text-white font-bold"
                                : "bg-white text-gray-500 border-white hover:bg-gray-100 hover:border-gray-300"
                        }  space-x-3 p-3 rounded-md border-l-8 transition-all duration-300 w-full`}
                    >
                        <FaIcons.FaUserCircle size={24} className="" />
                        <h1 className="hidden sm:hidden md:block">Profil</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
}
