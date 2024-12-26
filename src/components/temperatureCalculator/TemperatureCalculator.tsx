import React, { useState } from "react";
import TemperatureInput from "../temperatureInput/TemperatureInput";
import TemperatureOutput from "../temperatureOutput/TemperatureOutput";
import "./TemperatureCalculator.css";

const TemperatureCalculator: React.FC = () => {
    // useState für die Zustände celsius und fahrenheit, die die eingegebenen Temperaturen speichern ("" weil am Anfang leer, noch kein Wert eingegeben)
    const [celsius, setCelsius] = useState<string>("");
    const [fahrenheit, setFahrenheit] = useState<string>("");

    // Funktionen Umgang Temperaturänderungen: celsius-Wert setzen und fahrenheit berechnen
    const handleCelsiusChange = (value: string) => {
        setCelsius(value);
        // Eingabe der Ziffern = string, also Umrechnung in Dezimalzahl: float + Umrechnungsformel in Fahrenheit. Ergebnis wird in Variable fahrenheitValue gespreichert
        const fahrenheitValue = (parseFloat(value) * 9 / 5) + 32;
        // Wenn isNaN(fahrenheitValue) true, ist Wert von fahrenheitValue keine Zahl, Zustand fahrenheit wird auf "" (Leerstring) gesetzt. Wenn isNaN(fahrenheitValue) false, ist fahrenheitValue eine gültige Zahl, fahrenheit wird auf fahrenheitValue.toFixed(2) gesetzt. toFixed(2) rundet Zahl auf zwei Dezimalstellen.
        setFahrenheit(isNaN(fahrenheitValue) ? "" : fahrenheitValue.toFixed(2));
    };
    // fahrenheit-Wert setzen und celsius berechnen
    const handleFahrenheitChange = (value: string) => {
        setFahrenheit(value);
        const celsiusValue = (parseFloat(value) - 32) * 5 / 9;
        setCelsius(isNaN(celsiusValue) ? "" : celsiusValue.toFixed(2));
    };
    // prüfen, ob Wasser kocht
    const boilingCelsius = parseFloat(celsius) >= 100;
    const boilingFahrenheit = parseFloat(fahrenheit) >= 212;

    return (
        <div>
            <div className="container">
                <label>Schreibe Temperatur in Celsius:</label>
                <div className="inner-container">
                    <TemperatureInput
                        value={celsius}
                        onChange={handleCelsiusChange}
                    />
                </div>
                <TemperatureOutput label="Fahrenheit" value={fahrenheit} />
                <p>{boilingCelsius ? "Das Wasser kocht" : "Das Wasser kocht nicht"}</p>
            </div>
            <div className="container">
                <label>Schreibe Temperatur in Fahrenheit:</label>
                <div className="inner-container">
                    <TemperatureInput
                        value={fahrenheit}
                        onChange={handleFahrenheitChange}
                    />
                </div>
                <TemperatureOutput label="Celsius" value={celsius} />
                <p>{boilingFahrenheit ? "Das Wasser kocht" : "Das Wasser kocht nicht"}</p>
            </div>
        </div>
    );
};

export default TemperatureCalculator;