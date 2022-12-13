import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Hero() {
    return (
        <div className="relative h-screen bg-blue-50">
            <span className="h-full bg-blue-500 w-2/3 transform -skew-x-12 -translate-x-28 absolute" />
            <div className="h-screen w-full px-20 grid grid-cols-1 sm:grid-cols-2 z-40">
                <div className="flex flex-col items-center sm:items-start justify-center space-y-5 row-start-2 sm:row-start-1">
                    <h1 className="mt-5 sm:mt-0 text-3xl sm:text-5xl text-center sm:text-left font-bold text-white z-40">
                        Selamat datang di SIPAS
                    </h1>
                    <p className="leading-6 text-center text-white sm:text-left z-40">
                        SIPAS merupakan sistem yang dapat membantu pengguna
                        dalam berkonsultasi tentang penyakit kulit yang diderita
                        oleh pengguna
                    </p>
                    <Link href="/about">
                        <button
                            href=""
                            className="bg-blue-400 text-white font-semibold text-xl px-6 py-3 rounded-lg transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            Selengkapnya
                        </button>
                    </Link>
                </div>
                <div className="w-full flex items-center row-start-1 sm:col-start-2 z-40">
                    <img src="/img/tampilan.png" alt="" />
                </div>
            </div>
        </div>
    );
}
