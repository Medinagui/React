import { useState } from "react";



const ManageData = () => {
    const [number, setNumber] = useState(15);
    const [valorBool, setBool] = useState(true);

    const handleSetNumber = (x) =>
    {
        if(x)
        {
            return () => {
                setNumber(25);
                setBool(false);
            };
            
        }
        else
        {
            return () => {
                setNumber(15);
                setBool(true);
            };
        }
    };

    return (
    <div>
        Valor : {number}
        <div>
            <button onClick={handleSetNumber(valorBool)}>
                Mudar o State 
            </button>
        </div>
    </div>
  )
}

export default ManageData