import React from "react";

interface TemperatureInputProps {
    // Wert, der im Eingabefeld angezeigt wird. Er wird als string (Text) definiert.
    value: string;
    // Funktion, die ausgeführt wird, wenn der Wert im Eingabefeld sich ändert.
    onChange: (value: string) => void;
}

// Destructuring Assignment: In der Zeile { value, onChange } sind value und onChange die Props, die an die TemperatureInput-Komponente übergeben werden.
const TemperatureInput: React.FC<TemperatureInputProps> = ({ value, onChange }) => {
    return (
        <input
            type="number"
            value={value}
            // jedes Mal, wenn der Benutzer etwas in das Eingabefeld eingibt oder ändert, wird der neue Wert erfasst und an eine Funktion weitergegeben, die entsprechend handeln kann
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default TemperatureInput;