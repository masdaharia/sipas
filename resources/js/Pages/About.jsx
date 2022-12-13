import React from "react";
import Guest from "../Layouts/Guest";

export default function About() {
    return (
        <Guest judul="About">
            <div className="w-full py-20 px-20 min-h-screen bg-white  items-center">
                <div className="flex flex-col items-center  justify-center">
                    <h1 className="text-3xl text-blue-900 font-bold">
                        Tentang Kami
                    </h1>
                    <h2 className=" text-2xl text-blue-900 font-semibold">
                        Informasi Terkait Sistem dan Pakar
                    </h2>
                </div>

                <div className="flex flex-row py-5">
                    <div className="w-3/5 ml-4 p-3 flex flex-row">
                        <div className="flex flex-col">
                            <h2 className="text-3xl text-center font-semibold text-blue-900 ">
                                Sistem
                            </h2>
                            <p className=" text-left text-blue-900">
                                Sistem pakar adalah suatu program komputer atau
                                sistem informasi yang memiliki beberapa
                                pengetahuan dari seorang pakar, terkait suatu
                                bidang yang spesifik. Sederhananya, sistem pakar
                                merupakan perangkat lunak yang dapat meniru
                                kemampuan dari seorang pakar, seperti dokter,
                                psikolog, dan lain sebagainya. Pakar yang
                                dimaksud dalam sistem pakar ini adalah
                                orang-orang yang memiliki kemampuan atau
                                keahlian dalam menyelesaikan suatu permasalahan
                                yang tidak dapat diselesaikan oleh orang awam.
                                Pengetahuan dari seorang pakar pada sistem ini
                                digunakan untuk menjawab pertanyaan atau
                                konsultasi.
                            </p>
                            <p className="text-left text-blue-900">
                                SIPAS (SIstem PAkar Skin) merupakan sistem yang
                                dapat membantu pengguna dalam berkonsultasi
                                tentang penyakit kulit yang diderita oleh
                                pengguna. Pada sistem ini penyakit yang diagnosa
                                ada 6 jenis penyakit, yaitu: Blackhead,
                                Whitehead, Papula, Pustula, Nodula dan Kista.
                            </p>
                        </div>
                    </div>
                    <div className="w-2/5 mx-4 space-y-4 p-3 flex flex-col items-center">
                        <img className="h-72" src="/img/about.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="w-2/5 mx-4 space-y-4 p-3 flex flex-col items-center">
                        <img className="h-72" src="/img/about1.jpg" alt="" />
                    </div>
                    <div className="w-3/5 ml-4 p-3 flex flex-row">
                        <div className="flex flex-col items-center space-x-5">
                            <h1 className="text-3xl text-left sm:text-left font-semibold text-blue-900 ">
                                Pakar
                            </h1>
                            <p className="leading-6 text-center text-blue-900 sm:text-left z-40">
                                Pakar adalah seseorang yang dianggap sebagai
                                sumber terpercaya atas keahlian tertentu yang
                                dengan kemampuannya dalam menilai dan memutuskan
                                sesuatu dengan benar,baik maupun handal sesuai
                                dengan aturan dan status oleh sesamanya ataupun
                                khayalak dalam bidang khusus tertentu.
                            </p>
                            <p>
                                Pada sistem yang sedang dibangun pakar yang
                                berkonstribusi dalam pengembangan sistem adalah
                                seorang dokter kulit dan kelamin yang praktek di
                                CarSya Skin Clinic yang bertempat di Jl. Teluk
                                Tomini No.9a yaitu Dr. Sari Handayani Pusadan,
                                Sp.KK, M.Kes dan Dr. Asrawati Sofyan, SpKK,
                                M.Kes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Guest>
    );
}
