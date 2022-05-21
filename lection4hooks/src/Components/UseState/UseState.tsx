import { useState } from 'react';

const UseState = () => {
    const [state, setState] = useState({ isAdmin: false, userName: "Olga" })
    const { isAdmin } = state;

    const assingAdmin = () => {
        setState({ ...state, isAdmin: true })
    }

    return (
        <div>
            <h1>Hello user, you is {isAdmin ? "SUPER ADMIN" : "a user"}</h1>
            <button onClick={assingAdmin}>Assing admin</button>
        </div>
    )
}

export default UseState