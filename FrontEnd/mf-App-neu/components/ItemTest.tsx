import React, { useState , useContext} from 'react';
import { Button, Text, TouchableOpacity, View } from "react-native";
import styles from '../Styles/ItemStyles';
import favoriten_function from './functions/favoriten_function';
import { ItemProps } from '../Types/ScreenTypes';
import AppContext from '../array-context';




const ItemTest = ({eintrag, navigation}:ItemProps)=>{
    
    
    // beide im Context hinterlegten states der Wurzel Datei inklusive ändernde-Funktion in dieser Datei abrufen und in Konstanten speichern
    const TestContext = useContext(AppContext);
    const FavoritenArray = TestContext.favoriten_array;
    const SetFavoritenArray = TestContext.setArray;
    const ApiSuchString = TestContext.apiSuchString;
    const SetApiSuchString = TestContext.setApiSuchString;
    const [title,setTitle] = useState("");
  
    
   // absichern, dass übergebener Eintrag existiert
    if (eintrag){
        // abscihern, dass eintrag ein Array ist
        if (Array.isArray(eintrag)){
            return (
                <View style={styles.vertical}>
                    {eintrag.map((item, index)=> (
                        <TouchableOpacity 
                        style={styles.itemsVertical} 
                        key={index} 
                        onPress={()=>{
                            navigation?.navigate("ItemFullScreen", {value:item, title:item.name})}
                        }>
                           
                             <Button
                            title="Favorit entfernen"
                            onPress={()=>{
                                    var arrayUsed = favoriten_function(item.id,FavoritenArray)
                                    SetFavoritenArray(arrayUsed);
                                    SetApiSuchString(arrayUsed.toString());
                                    if (FavoritenArray.includes(item.id)){
                                        setTitle("Favorit entfernen")}
                                        else{setTitle("Als Favorit markieren")}
                                    }
                                }
                            
                                
                            />
                
                        
                            <Text style={{fontSize:20}}>
                                Name:{item.name}
                            </Text>
                            <Text>
                                Beschreibung:
                                {item.beschreibung}
                            </Text>
                            <Text>
                                Adresse: {item.strasse}, {item.plz} Münster
                            </Text>
                            <Text>
                                Typ: {item.kategorie}
                            </Text>
                            <Text>
                                Koordinaten: {item.latitude} {item.longitude}
                            </Text>
                            <Text>
                                {/* {arr} */}
                            </Text>
                            <Text>
                                {/* {api_string} */}
                            </Text>
                        </TouchableOpacity>
                ))}
                
            </View>
            )
        }else return(
            // falls eintrag nur ein Objekt ist anstatt Array

           
            <View style={styles.itemsVertical}>
              
                <Button
                title="Favorit entfernen"
                onPress={()=>{
                    var arrayUsed = favoriten_function(eintrag.id,FavoritenArray)
                    SetFavoritenArray(arrayUsed);
                    SetApiSuchString(arrayUsed.toString());
                    if (FavoritenArray.includes(eintrag.id)){
                        setTitle("Favorit entfernen")}
                        else{setTitle("Als Favorit markieren")}
                    
                  
                }}/>
                <Text style={{fontSize:20}}>
                    Name:{eintrag.name}
                </Text>
                <Text>
                    id: {eintrag.id}
                </Text>
                <Text>
                    Beschreibung:
                    {eintrag.beschreibung}
                </Text>
                <Text>
                    Adresse: {eintrag.strasse}, {eintrag.plz} Münster
                </Text>
                <Text>
                    Typ: {eintrag.kategorie}
                </Text>
                <Text>
                    Koordinaten: {eintrag.latitude} {eintrag.longitude}
                </Text>
            </View>


        )
        // falls eintrag nicht existiert
    } else return <View/>

}
export default ItemTest;