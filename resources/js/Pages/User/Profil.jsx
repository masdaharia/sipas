import React, { useState } from "react";
import Admin from "../../Layouts/Admin";
import * as MdIcons from "react-icons/md";
import { usePage } from "@inertiajs/inertia-react";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";

export default function Profil() {
    const [selectedImage, setSelectedImage] = useState();
    const { auth } = usePage().props;
    console.log(auth);
    const [error, setError] = useState();

    const [name, setName] = useState(auth?.user.name);
    const [username, setUsername] = useState(auth?.user.username);
    const [jenis_kelamin, setJenisKelamin] = useState(auth?.user.jenis_kelamin);
    const [tanggal_lahir, setTanggalLahir] = useState(auth?.user.tanggal_lahir);
    const [address, setAddress] = useState(auth?.user.address);
    const [email, setEmail] = useState(auth?.user.email);

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const { handleSubmit } = useForm();
    const cekgambar = (gambar) => {
        if (gambar == "default") {
            return "../../../img/Profile.jpg";
        } else {
            const path = gambar.replace("public", "/storage");
            // console.log("3333 path: ", path);
            return path;
        }
    };
    const ubahprofil = () => {
        let formData = new FormData();
        if (selectedImage) {
            formData.append("profil", selectedImage);
        }
        name && formData.append("name", name);
        username && formData.append("username", username);
        jenis_kelamin && formData.append("jenis_kelamin", jenis_kelamin);
        tanggal_lahir && formData.append("tanggal_lahir", tanggal_lahir);
        address && formData.append("address", address);
        email && formData.append("email", email);

        formData.append("id", auth?.user.id);
        Inertia.post("/ubahprofil", formData, {
            onSuccess: () => {
                toast.success("Data Berhasil Disimpan!");
            },
            onError: (e) => {
                setError(e);
                toast.error("Data Gagal Disimpan!");
            },
        });
    };

    return (
        <Admin judul="Profil">
            <h1 className="text-xl font-semibold text-gray-700 p-4">
                Profil Saya
            </h1>
            <div className="w-full p-4 space-y-4">
                <div className="flex flex-row">
                    {/* semua pembungkus */}
                    <form
                        onSubmit={handleSubmit(ubahprofil)}
                        className="w-full ml-4  bg-white border rounded-xl border-gray-300 p-3 flex flex-row"
                    >
                        {/* pembungkus gambar dn teks */}
                        <div className="w-full p-5 justify-between rounded-xl flex md:flex-row flex-col items-center space-x-4">
                            {/* Gambar */}
                            {/* <div className=""> */}
                            <div className="flex flex-col justify-between items-center">
                                {selectedImage ? (
                                    <img
                                        class="my-2 w-48 h-48 border-0 rounded-full shadow-lg"
                                        src={URL.createObjectURL(selectedImage)}
                                        alt=""
                                    />
                                ) : (
                                    <img
                                        class="my-2 w-48 h-48 border-0 rounded-full shadow-lg"
                                        // src={`/storage/profil/profile/QOjtHdYtw8vx1bp9Qin2ifXsUoJF1WEGycuAHISQ.png`}
                                        // src={`/storage/${auth.user.profil}`}
                                        src={cekgambar(auth?.user?.profil)}
                                        alt=""
                                    />
                                )}
                                <button className="w-3/4 text-blue-700 border-2 border-blue-900 px-3 py-1 rounded-xl focus:ring focus:outline-none focus:ring-blue-200 hover:bg-blue-700 hover:text-white transition-all duration-200 flex items-center ">
                                    <input
                                        accept="image/*"
                                        id="gambar"
                                        name="gambar"
                                        type="file"
                                        onChange={imageChange}
                                    />
                                </button>
                            </div>

                            {/* bungkus semua form */}
                            <div className="flex-grow flex flex-col ">
                                {/* ini bungkus perfield */}

                                <div className=" pt-2  w-full flex flex-row justify-center items-center">
                                    <div className=" w-1/3 flex ">
                                        <h1 className=" font-semibold pb-3 ">
                                            Nama Lengkap :
                                        </h1>
                                    </div>
                                    <div className="w-2/3">
                                        <input
                                            onChange={(e) => {
                                                setName(e.target.value);
                                            }}
                                            value={name}
                                            type="text"
                                            name="name"
                                            id="name"
                                            className="w-full pb-2 border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                                        />
                                        {error?.name && (
                                            <span className="text-xs text-red-500 pt-1">
                                                {error?.name}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className=" pt-2  w-full flex flex-row justify-center items-center">
                                    <div className="w-1/3 flex ">
                                        <h1 className=" font-semibold pb-3 ">
                                            Nama Pengguna :
                                        </h1>
                                    </div>
                                    <div className=" w-2/3">
                                        <input
                                            onChange={(e) => {
                                                setUsername(e.target.value);
                                            }}
                                            value={username}
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="w-full pb-2 border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                                        />
                                        {error?.username && (
                                            <span className="text-xs text-red-500 pt-1">
                                                {error?.username}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className=" pt-2  w-full flex flex-row justify-center items-center">
                                    <div className="w-1/3 flex ">
                                        <h1 className=" font-semibold pb-3 ">
                                            Jenis Kelamin :
                                        </h1>
                                    </div>
                                    <div className="w-2/3">
                                        <select
                                            onChange={(e) => {
                                                setJenisKelamin(e.target.value);
                                            }}
                                            value={jenis_kelamin}
                                            type=""
                                            name="jenis_kelamin"
                                            id="jenis_kelamin"
                                            className="w-full pb-2 border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                                        >
                                            <option value="" disabled>
                                                Jenis Kelamin
                                            </option>
                                            <option value="Perempuan">
                                                Perempuan
                                            </option>
                                            <option value="Laki-Laki">
                                                Laki-Laki
                                            </option>
                                        </select>
                                        {error?.jenis_kelamin && (
                                            <span className="text-xs text-red-500 pt-1">
                                                {error?.jenis_kelamin}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="pt-2  w-full flex flex-row justify-center items-center">
                                    <div className=" w-1/3 flex ">
                                        <h1 className=" font-semibold pb-3 ">
                                            Tanggal Lahir :
                                        </h1>
                                    </div>
                                    <div className=" w-2/3">
                                        <input
                                            onChange={(e) => {
                                                setTanggalLahir(e.target.value);
                                            }}
                                            value={tanggal_lahir}
                                            type="date"
                                            name="tanggal_lahir"
                                            id="tanggal_lahir"
                                            className="w-full pb-2 border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                                        />
                                        {error?.tanggal_lahir && (
                                            <span className="text-xs text-red-500 pt-1">
                                                {error?.tanggal_lahir}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className=" pt-2  w-full flex flex-row justify-center items-center">
                                    <div className="w-1/3 flex ">
                                        <h1 className=" font-semibold pb-3 ">
                                            Alamat :
                                        </h1>
                                    </div>
                                    <div className="w-2/3">
                                        <input
                                            onChange={(e) => {
                                                setAddress(e.target.value);
                                            }}
                                            value={address}
                                            type="text"
                                            name="address"
                                            id="address"
                                            className="w-full pb-2 border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                                        />
                                        {error?.address && (
                                            <span className="text-xs text-red-500 pt-1">
                                                {error?.address}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className=" pt-2  w-full flex flex-row justify-center items-center">
                                    <div className="w-1/3 flex ">
                                        <h1 className=" font-semibold pb-3 ">
                                            Email :
                                        </h1>
                                    </div>
                                    <div className="w-2/3">
                                        <input
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            value={email}
                                            type="text"
                                            name="email"
                                            id="email"
                                            className="w-full pb-2 border-2 border-gray-200 focus:border-white focus:outline-none focus:ring focus:ring-gray-400 transition duration-200 rounded-lg"
                                        />
                                        {error?.email && (
                                            <span className="text-xs text-red-500 pt-1">
                                                {error?.email}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className=" pt-2  w-full flex flex-row justify-center items-center">
                                    <div className="w-1/3 flex "></div>
                                    <div className="w-2/3">
                                        <button
                                            className="text-white border-2 border-blue-900 bg-blue-700 px-2 py-1 rounded-xl 
                focus:ring focus:outline-none focus:ring-blue-200 hover:bg-white
                hover:text-blue-700 transition-all duration-200 flex items-center space-x-2 mt-5"
                                        >
                                            <MdIcons.MdSave size={16} />
                                            <h1>Simpan</h1>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Admin>
    );
}
