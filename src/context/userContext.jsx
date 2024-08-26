import { useEffect, useState } from 'react';
import { createContext } from 'react';

export let userContext = createContext();


export default function UserContextProvider(props){
    const[isLogin, setLogin] = useState(null);

useEffect(() =>{
    if(localStorage.getItem('userToken') !== null) {
        setLogin(localStorage.getItem('userToken'))
    }
},[])

    return <userContext.Provider value = {{isLogin,setLogin}}>
        {props.children}
    </userContext.Provider>

} 