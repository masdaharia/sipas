import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Navbar(props) {
    return (
        <div
            className={`z-50 ${
                props.withBg
                    ? "bg-gradient-to-r from-blue-400 via-blue-200 to-white"
                    : "bg-transparent"
            }  w-full h-fit flex flex-col sm:flex-row justify-between items-center py-5 px-20 fixed top-0`}
        >
            <Link href="/">
                <h1 className="text-2xl text-white font-bold">SIPAS</h1>
            </Link>
            <div className="space-x-10">
                <Link href="/">
                    <button
                        className={`${
                            props.title == "Home"
                                ? "text-blue-400"
                                : "text-gray-800"
                        } hover:text-blue-500 transition-all duration-200`}
                    >
                        Home
                    </button>
                </Link>
                <Link href="/about">
                    <button
                        className={`${
                            props.title == "About"
                                ? "text-blue-400"
                                : "text-gray-800"
                        } hover:text-blue-500 transition-all duration-200`}
                    >
                        About
                    </button>
                </Link>
                <Link href="/login">
                    <button
                        className={`${
                            props.title == "Login+"
                                ? "text-blue-400"
                                : "text-white"
                        } hover:text-blue-500 hover:bg-white border border-blue-500 transition-all duration-200 bg-blue-500 px-5 py-2 rounded-lg`}
                    >
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
}
