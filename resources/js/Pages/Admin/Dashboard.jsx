import React from "react";
import Diagram from "../../Components/Admin/Diagram";
import Statistic from "../../Components/Admin/Statistic";
import Admin from "../../Layouts/Admin";

export default function Dashboard() {
    return (
        <Admin judul="Dashboard">
            <div className="space-y-2 mb-20">
                <Statistic />
                <Diagram />
            </div>
        </Admin>
    );
}
