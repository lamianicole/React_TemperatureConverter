import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout: React.FC = () => {
    return (
        <div>
            <h1>Temperatur-Rechner</h1>
            <Outlet />
        </div>
    );
};

export default RootLayout;