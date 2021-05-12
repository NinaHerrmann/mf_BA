// Context Datei der App
import React from 'react';

interface ContextProps{
    // Speicherort für IDs der Favoriten
    favoriten_array:number[],
    // Funktion um favoriten_array zu verändern
    setArray:(value:number[])=>void,
    // string für die Favoriten-Api-Suche
    apiSuchString:string,
    setApiSuchString: (value:string)=>void

}

// Initialisierung
const AppContext = React.createContext<ContextProps>({
    favoriten_array:[],
    setArray:()=> {},
    apiSuchString:"",
    setApiSuchString:()=>{}
});

export const AppProvider = AppContext.Provider;

export default AppContext;