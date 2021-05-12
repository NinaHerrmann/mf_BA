import React, { useContext , useEffect, useState} from "react";
import { Button, Dimensions, Linking, Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import favoriten_function from "../components/functions/favoriten_function";
import {  ItemFullScreenProps} from "../Types/ScreenTypes";

import AppContext from '../array-context' 
import MapView, { Callout, Marker } from "react-native-maps";

function ItemFullScreen({route, navigation}:ItemFullScreenProps) {

    // Abrufen der Route-Parameter
    // item = ein einzelner Eintrag
    const item = route?.params?.value;
    const strin = route.params.title;
    
    // Abrufen des Contexts
    const TestContext = useContext(AppContext);
    const FavoritenArray = TestContext.favoriten_array;
    const SetFavoritenArray = TestContext.setArray;
    const ApiSuchString = TestContext.apiSuchString;
    const SetApiSuchString = TestContext.setApiSuchString;
    const [title, setTitle] = useState((typeof item != "undefined")?((FavoritenArray.includes(item?.id))?"Favorit entfernen":"Als Favorit markieren"): "Fehler");

    const [update, setUpdate] = useState(1);

    useEffect(()=>{


      }, [update, FavoritenArray, ApiSuchString]);
  

        
    return (
        <SafeAreaView style={{ flex: 1, margin:10}}>
            {/* Button für Favoriten-Hinzufügen/Entfernen */}
            <Button
            title={title}
            onPress={()=>{
                if (item){
                    var arrayUsed = favoriten_function(item.id,FavoritenArray)
                    SetFavoritenArray(arrayUsed);
                    SetApiSuchString(arrayUsed.toString());
                    if (FavoritenArray.includes(item.id)){
                        setUpdate(update+1);
                        setTitle("Favorit entfernen")}
                        else{setTitle("Als Favorit markieren")}
                    }
                }}/>
                {/* Eintragsinfos */}
                <Text style={{fontSize:30}}>
                    {item?.name}
                </Text>
                <View style={{padding:1}}/>
                <Text style={{fontSize:15}}>
                    Beschreibung:
                    {item?.beschreibung}
                </Text>
                <Text style={{fontSize:15}}>
                    Adresse: {item?.strasse}, {item?.plz} Münster
                </Text>
                <Text style={{fontSize:15}}>
                    Typ: {item?.kategorie}
                </Text>
                <Text style={{fontSize:15}}>
                    Koordinaten: {item?.latitude} {item?.longitude}
                </Text>
                
                {/* Gut geeignet für Debugging */}
                {/* <Text>
                    {FavoritenArray}
                </Text>
                <Text>
                    {ApiSuchString}
                </Text> */}


                {/* Karte zeigt Standort des Eintrags an */}
                <MapView 
                    style={styles.map}
                    region={{
                        latitude:item.latitude,
                        longitude:item.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    
                    >
                        <Marker
                            key={item.id}
                            coordinate={{latitude:item.latitude,longitude:item.longitude}}
                            title={item.name}
                        >
                            {/* Callout gibt Funktion an die beim Drücken des Namensschild erfolgt;
                            hier wird COde aufgerufen, der eine Navigationsapp auf dem Gerät des Nutzers öfnnet und die 
                            Navigation zum Standort des Eintrags ermöglicht */}
                            <Callout 
                                onPress={()=>{
                                    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
                                    const latLng = `${item.latitude},${item.longitude}`;
                                    const label = 'Custom Label';
                                    const url = Platform.select({
                                    ios: `${scheme}${label}@${latLng}`,
                                    android: `${scheme}${latLng}(${label})`
                                    });

                                    if(url){

                                        Linking.openURL(url); 
                                    }
                                }}>
                                <Text>
                                    {item.name}
                                </Text>
                            </Callout>
                        </Marker>
                        
                        
                    </MapView>
        </SafeAreaView>
                
            
        );
    }


    const styles = StyleSheet.create({
        map:{
            width: Dimensions.get('window').width-20,
            height: Dimensions.get('window').width/1.5,
            
            
        }
    })

export default ItemFullScreen;