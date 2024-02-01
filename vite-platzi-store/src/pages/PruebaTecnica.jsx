import React, { useEffect, useState } from "react";
import { Button } from "keep-react";
import "../App.css"


export function PruebaTecnica() {
    const [fact, setFact] = useState('Hola');
    const mensaje = fact.slice(0,15);
    const ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";
    const ENDPOINT_RANDOM_IMG  = `https://cataas.com/cat/cute/says/${mensaje}`;
    
    const refresh = () => {
        fetch(ENDPOINT_RANDOM_FACT)
        .then((res) => res.json())
        .then((data) => setFact(data.fact))
    };
    
    useEffect(() => {
        refresh();
    }, []);

    return (
        <main>
            <h1 className="text-3xl font-bold underline">Prueba técnica fetching de datos</h1>
            <p>{fact}</p>
            <img src={ENDPOINT_RANDOM_IMG} alt={mensaje} />
            <Button onClick={refresh} className="mx-auto my-auto">Pulsame para refrescar</Button>
        </main>
    );
}
