const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento");
    };

    const renderSomething = (x) => {
        if(x)
        {
            return <h1>Renderiza Isso!</h1>
        }
        else
        {
            return <h1>Também posso renderizar isso!</h1>
        }
    }

return(
    <div>
        <div>
            <button onClick={handleMyEvent}>
                Clique Aqui!
            </button>
            <div>
                <button onClick = {() => console.log("Clicou!")}>
                    Clique aqui também!
                </button>
                <button onClick = {() =>{
                    if(true){
                        console.log("Isso não deveria existir :D");
                    }
                }}>
                    Clica aqui, por favor?
                </button>
            </div>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
)

}

export default Events;