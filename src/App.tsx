import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import TemperatureCalculator from "./components/temperatureCalculator/TemperatureCalculator";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<TemperatureCalculator />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;