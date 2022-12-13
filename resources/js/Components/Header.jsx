import React, { useState } from "react";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import { Transition } from "@headlessui/react";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { usePage } from "@inertiajs/inertia-react";

export default function Header(props) {
    const [showLogout, setShowLogout] = useState(false);
    const { auth } = usePage().props;
    const cekgambar = (gambar) => {
        if (gambar == "default") {
            return "../../../img/Profile.jpg";
        } else {
            // return `storage/${gambar}`;
            return gambar.replace("public", "/storage");
        }
    };
    const logout = () => {
        Inertia.post("logout");
    };
    return (
        <div className="w-full bg-white h-16 flex items-center p-3 justify-between relative">
            <h1 className="text-gray-700 text-xl font-bold">{props.title}</h1>
            <div className="flex items-center justify-end mr-4 w-44 flex-grow">
                <div className="flex space-x-2 text-right mr-3">
                    {auth.user.name}
                </div>

                <div
                    onClick={() => {
                        setShowLogout(!showLogout);
                    }}
                    className="w-8 h-8 overflow-hidden rounded-full"
                >
                    <img
                        src={cekgambar(auth?.user?.profil)}
                        alt=""
                        className="w-8 h-8 overflow-hidden rounded-full"
                    ></img>
                </div>
            </div>

            <div className="absolute top-16 right-5 z-40">
                <Transition
                    show={showLogout}
                    enter="transition-opacity duration-75"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="bg-white rounded-lg shadow-lg p-2 flex flex-col items-end space-y-2">
                        <h2 className="font-semibold text-lg">
                            {auth.user.name}
                        </h2>
                        <button
                            onClick={() => {
                                logout();
                            }}
                            className="p-2 rounded-md bg-red-100 text-red-400"
                        >
                            Logout
                        </button>
                    </div>
                </Transition>
            </div>
        </div>
    );
}
