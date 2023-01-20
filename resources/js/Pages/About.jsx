import React from "react";
import Guest from "../Layouts/Guest";

const Title = ({ children }) => {
    return (
        <h2 className="text-3xl relative text-center font-semibold text-blue-900 pb-3 before:border-b-4 before:absolute before:bottom-0 before:w-2/3 before:hover:w-full before:content-[''] before:border-[#EA5A52] before:transition-all before:ease-out before:duration-300">
            {children}
        </h2>
    );
};

const Paragraph = ({ children }) => {
    return <p className=" text-left leading-7 text-blue-900/75">{children}</p>;
};

const AboutArticle = ({ title, children, image, reverse }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 py-5 gap-2">
            <div
                className={`col-span-1 order-2 ${
                    !reverse && "lg:order-1"
                }  md:col-span-3 p-3`}
            >
                <div className="flex flex-col items-start gap-4">
                    <Title>{title}</Title>
                    {children}
                </div>
            </div>
            <div
                className={`col-span-1 order-1 ${
                    !reverse && "md:order-2"
                } space-y-4 p-3 md:col-span-2 flex items-start lg:items-center justify-center`}
            >
                <img
                    className="h-[200px] hover:scale-125 transition-all ease-out duration-300"
                    src={image}
                    alt=""
                />
            </div>
        </div>
    );
};

export default function About() {
    return (
        <Guest judul="About" withBg={true}>
            <div className="w-full pt-32 pb-20 px-20 min-h-screen bg-white items-center space-y-10">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl text-blue-900 font-bold">
                        Tentang Kami
                    </h1>
                    <h2 className=" text-2xl text-blue-900 font-semibold text-center">
                        Informasi Terkait Sistem dan Pakar
                    </h2>
                </div>

                <AboutArticle title="Sistem" image="/img/about.png">
                    <Paragraph>
                        Sistem pakar adalah suatu program komputer atau sistem
                        informasi yang memiliki beberapa pengetahuan dari
                        seorang pakar, terkait suatu bidang yang spesifik.
                        Sederhananya, sistem pakar merupakan perangkat lunak
                        yang dapat meniru kemampuan dari seorang pakar, seperti
                        dokter, psikolog, dan lain sebagainya. Pakar yang
                        dimaksud dalam sistem pakar ini adalah orang-orang yang
                        memiliki kemampuan atau keahlian dalam menyelesaikan
                        suatu permasalahan yang tidak dapat diselesaikan oleh
                        orang awam. Pengetahuan dari seorang pakar pada sistem
                        ini digunakan untuk menjawab pertanyaan atau konsultasi.
                    </Paragraph>
                    <Paragraph>
                        SIPAS (SIstem PAkar Skin) merupakan sistem yang dapat
                        membantu pengguna dalam berkonsultasi tentang penyakit
                        kulit yang diderita oleh pengguna. Pada sistem ini
                        penyakit yang diagnosa ada 6 jenis penyakit, yaitu:
                        Blackhead, Whitehead, Papula, Pustula, Nodula dan Kista.
                    </Paragraph>
                </AboutArticle>
                <AboutArticle
                    title="Pakar"
                    image="/img/about1.jpg"
                    reverse={true}
                >
                    <Paragraph>
                        Pakar adalah seseorang yang dianggap sebagai sumber
                        terpercaya atas keahlian tertentu yang dengan
                        kemampuannya dalam menilai dan memutuskan sesuatu dengan
                        benar,baik maupun handal sesuai dengan aturan dan status
                        oleh sesamanya ataupun khayalak dalam bidang khusus
                        tertentu.
                    </Paragraph>
                    <Paragraph>
                        Pada sistem yang sedang dibangun pakar yang
                        berkonstribusi dalam pengembangan sistem adalah seorang
                        dokter kulit dan kelamin yang praktek di CarSya Skin
                        Clinic yang bertempat di Jl. Teluk Tomini No.9a yaitu
                        Dr. Sari Handayani Pusadan, Sp.KK, M.Kes dan Dr.
                        Asrawati Sofyan, SpKK, M.Kes.
                    </Paragraph>
                </AboutArticle>
            </div>
        </Guest>
    );
}
