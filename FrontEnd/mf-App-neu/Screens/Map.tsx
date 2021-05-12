import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { SubHomeScreenProps } from "../Types/ScreenTypes";
import MapView, { Callout, Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import kategorieFunction from '../components/functions/kategorieFunction'





interface eintragP {
  id:number;
  name:string;
  kategorie:string;
  strasse:string;
  hausnummer:string;
  plz: number;
  latitude: number;
  longitude:number;
  beschreibung: string;
  link: string
  }

function Map({navigation}:SubHomeScreenProps){
  // Koordinateninitialisierung mit Standort im Kreuzviertel
  const [latitude, setLatitude] = useState(51.97056843460715);
  const [longitude, setLongitude] = useState(7.615404438949764);
  const [isLoading, setLoading] = useState(true);
  // speichert API-Antwort
  const [data, setData] = useState<eintragP[]>([]);
  // Filter, die als Schaltflächen am oberen Kartenrand angezeigt wird
  const filterArr= ["Café" , "Restaurant", "Shopping", "vegan", "vegetarisch"];
  // Kriterien Array
  const [kriterien,setKriterien] = useState<string[]>([]);
  // Kriterien String
  const [kritString, setKritString]= useState("");
  // Kategorien Array
  const [kategorien,setKategorien] = useState<string[]>([]);
  // Kategorien String
  const [katString, setKatString]= useState("");
  // String für API
  const [str, setStr] = useState("alle");
  // nur um neu zu laden
  const [alarm, setAlarm] = useState(1);

  const [errorMsg, setErrorMsg] = useState("");

  // Hilfsstrings
  var stringEnde = "";
  var katHilfString = "";


  // Die nächsten zwei Hoooks ändern die String-Repräsentationen sobald die Arrays sich ändern
  // sehr ähnlich zu FilterSuche 
  React.useEffect(()=>{
    if (kriterien.length===0){setKritString("")}
    else{
      for (var kriterium in kriterien){
        stringEnde += kriterien[kriterium];
        stringEnde+=",";}
        setKritString(stringEnde.substr(0,stringEnde.length-1));
    }
  }, [kriterien, alarm]);

  React.useEffect(()=>{
    if (kategorien.length===0){setKatString("")}
    else{
        for(var kategorie in kategorien){
            katHilfString += kategorien[kategorie];
            katHilfString+= ",";
            setKatString(katHilfString.substr(0,katHilfString.length-1));
        }
    }
}, [kategorien, alarm])




  // Diese Hook erzeugt den richtigen API-Pfad
  React.useEffect(()=>{
    // (kriterien.length === 0 )? setStr("alle") :setStr("test/kriterien/"+kriterien);
    if (kritString.length === 0 && katString.length === 0){setStr("alle")}
    else if (katString.length===0){setStr("test/kriterien/"+kritString)}
    else if (kritString.length===0){setStr("/kategorien/"+katString)}
    else {setStr("test/"+katString+"/"+kritString)}
  }, [katString, kritString]);

  // Abfrage der API
  React.useEffect(()=>{
    fetch(`http://192.168.0.88:8080/eintraege/${str}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [str]);



  // Hook um den Standorts des Nutzers zu erfragen
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        // Zugriff verboten
        setErrorMsg('Permission to access location was denied');
        
        
      // Zugriff erhalten; genaues Einstellen der lat/long
      }else{

        let location = await Location.getCurrentPositionAsync({});
        setLongitude(location.coords.longitude);
        setLatitude(location.coords.latitude);
        
      }
  
    

      
    })();
  }, []);
  
    return (
        <View style={styles.container}>
          {/* aus react-native-maps; zeigt Karte an */}
          <MapView 
          style={styles.map}
          region={{
            // Position wird entweder der genauen Position angepasst, oder auf festgelegte Koordinaten gesetzt, wenn der Nutzer nicht in Münster oder 
            // Umgebung ist; wenn Zugriff verweigert wurde sind long/lat bereits auf Münnster gelegt
            latitude:(latitude<52.04 && latitude>51.85 && longitude<7.75 && longitude>7.48)? latitude : 51.97056843460715,
            longitude:(latitude<52.04 && latitude>51.85 && longitude<7.75 && longitude>7.48)? longitude : 7.615404438949764 ,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
            
        
            {data.map((item)=> (
              // jeder Eintrag erhält einen Marker
              <Marker
                    key={item.id}
                    coordinate={{latitude:item.latitude,longitude:item.longitude}}
                    title={item.name}
              >
                <Callout 
                // bei Druck auf den Marker wird der Name angezeigt
                // bei Druck auf dem Namen wird  ItemFullScreen des Eintrags aufgerufen
                onPress={()=>{navigation?.navigate("ItemFullScreen", {value:item , title:item.name})}}>
                  <Text>
                    {item.name}
                  </Text>
                </Callout>

              </Marker>
            ))}
          </MapView>
          {/* Kategorie-Leiste (wird am oberen Rand angezeigt) */}
          <ScrollView
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.category_bar}
          horizontal
          >
            {filterArr.map((filter, index)=>(
              // Verdunkeln der Schaltfläche wenn sie ausgewählt sein soll
              <TouchableOpacity key= {index} style={(kategorien.includes(filter)||kriterien.includes(filter))?styles.category_buttonPressed : styles.category_buttonUnpressed}
              onPress={()=>{
                // wenn vegan/vegetarisch => änder kriterien ...
                if (filter=="vegan" || filter ==="vegetarisch" ){
                    var fueller = kategorieFunction(filter, kriterien);
                    setKriterien(fueller);
                    setAlarm(alarm+1);}
                    else {
                      // ... sonst änder kategorien
                        var fueller2 = kategorieFunction(filter,kategorien);
                        setKategorien(fueller2);
                        setAlarm(alarm+1);}
                    
                  
                }
              }>
                <Text style={{fontSize:20}}>
                  {filter}
                
                </Text>
              </TouchableOpacity>

            ))}

          </ScrollView>
         
        </View>
      );
    }
    
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height-105,
    },
    category_bar: {
      position: "absolute",
      top:10,
      
     
      
     
    },
    category_buttonPressed:{
      backgroundColor:"grey",
      paddingHorizontal:10,
      borderRadius: 20,
      padding:8,
      marginHorizontal:10,
    },
    category_buttonUnpressed:{
        backgroundColor:"#fff",
        paddingHorizontal:10,
        borderRadius: 20,
        padding:8,
        marginHorizontal:10,
      }

    
  });
    
export default Map;