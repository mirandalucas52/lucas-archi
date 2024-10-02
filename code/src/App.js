import React, { useState } from "react";
import "./App.css";

function App() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState("");

    const calculateResult = () => {
        const sum = parseFloat(a) + parseFloat(b);
        setResult(sum);
    };

    return (
        <div className="App">
            <h1>Ma Calculatrice</h1>
            <div>
                <input
                    type="number"
                    placeholder="Saisir a"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Saisir b"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                />
            </div>
            <div>
                <button onClick={calculateResult}>Calculer</button>
            </div>
            <div>
                <p>Résultat est : {result !== null ? result : "N/A"}</p>
            </div>
        </div>
    );
}

export default App;
