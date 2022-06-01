import React, {useState} from "react"

function Counter(){
    const[counter, setCounter] = useState(0);
    const[loginInfo,setLoginInfo] = useState({
        email: "",
        password: ""
    })

    function handleClick(){
        setCounter((prev) => prev +1);
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClicke = {handleClick}>+</button>
        </div>
    )

}

export default Counter;
