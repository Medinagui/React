const Challenge = () => {
    const valor1 = 5;
    const valor2 = 7;
    const soma = valor1 + valor2;

    const handleSoma = () => {
        console.log(soma);
    };

    return(
        <div>
            <p>O valor 1 é : {valor1}</p>
            <p>O valor 2 é : {valor2}</p>
            <div>
                <button onClick={handleSoma}>
                    Clique aqui para somar! Verifique o console
                </button>
            </div>
        </div>
    )
}

export default Challenge;