import React from "react";

interface TemperatureOutputProps {
    // Text (string), der beschreibt, welche Temperatur angezeigt wird, z. B. "Celsius" oder "Fahrenheit"
    label: string;
    // der tatsächliche Temperaturwert, der als Text (string) gespeichert wird
    value: string;
}
// zeigt Temperatur und Label an
const TemperatureOutput: React.FC<TemperatureOutputProps> = ({ label, value }) => {
    return (
        // z.B. wenn label "Celsius" und value "25.5", wird p Celsius: 25.5 anzeigen
        <p>{label}: {value}</p>
    );
};

export default TemperatureOutput;