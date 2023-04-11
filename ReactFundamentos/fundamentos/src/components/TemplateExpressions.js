import MyComponent from "./MyComponent";

const TemplateExpressions = () => {

    const name = "Medina"
    const data = {
        age: 22,
        job:"Desenvolvedor"
    }

    return (
        <div>
            <h1>Olá {name}, tudo jóia?</h1>
            <p>Você tem {data.age} anos e atua como {data.job}</p>
            <p>Sabia que 4 + 4 = {4 + 4} ?</p>
            <p>{console.log("JSX REACT BABY")}</p>
            <MyComponent/>
        </div>
    )
}

export default TemplateExpressions;