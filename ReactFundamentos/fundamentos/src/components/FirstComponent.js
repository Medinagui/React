// Arquivo de estilo

import MyComponent from "./MyComponent";

const FirstComponent = () => {

    // Essa função faz isso

    /*
        Várias
        Linhas
        Legais
    */

    return (
        <div>
            {/* Algum Comentário */}
            <h1>Meu primeiro componente</h1>
            <p className = "teste">Meu texto</p>
            <MyComponent/>
        </div>   
    )
};

export default FirstComponent;
