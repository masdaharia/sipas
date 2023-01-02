import { usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";

import UserCta from "../../Components/Dashboard/UserCta";
import UserDiagnosaForm from "../../Components/Dashboard/UserDiagnosaForm";
import UserDiagnosaTerakhir from "../../Components/Dashboard/UserDiagnosaTerakhir";
import UserDiagramBulat from "../../Components/Dashboard/UserDiagramBulat";
import Admin from "../../Layouts/Admin";

export default function Dashboard() {
    const { auth, gejala } = usePage().props;

    const [Tab, setTab] = useState(false);

    return (
        <Admin judul="Dashboard">
            <div className="mt-10 mx-10 space-y-3 grid">
                <UserDiagnosaForm gejala={gejala} Tab={Tab} setTab={setTab} />
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-4 h-full ">
                        <UserCta auth={auth} setTab={setTab} Tab={Tab} />
                    </div>

                    {!Tab && (
                        <>
                            <div className="col-span-2">
                                <UserDiagramBulat />
                            </div>
                            <div className="col-span-2 h-full">
                                <UserDiagnosaTerakhir />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </Admin>
    );
}
