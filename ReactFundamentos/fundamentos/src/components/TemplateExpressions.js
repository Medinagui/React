const TemplateExpressions = () => {

    const name = "Medininha"
    const data = {
        age:31,
        job:"Desenvolvedor"
    }

    return (
        <div>
            <h1>Olá {name}, tudo xoia?</h1>
            <p>Você atua como {data.job}</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX REACT")}</p>
        </div>
    )
}

export default TemplateExpressions;