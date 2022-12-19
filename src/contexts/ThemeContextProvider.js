import {createContext,useState} from 'react';
export let themeContext=createContext();

function ThemeContextProvider({children}){


    let lightTheme={
            name:"light",
            backgroundColor:"white",
            color:"black"
        }

        let darkTheme={
            name:"dark",
            backgroundColor:"#191919"

        }

    

    let [theme,setTheme]=useState(darkTheme)

    let changeTheme=()=>{
        if(theme.name=="light"){
            setTheme(darkTheme)
        }
        if(theme.name=="dark"){
            setTheme(lightTheme)
        }
    }

    console.log(theme)
    return(
        <themeContext.Provider value={[theme,changeTheme]}>
            {children}
        </themeContext.Provider>
    )
}


export default ThemeContextProvider;