import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Dimensions } from "react-native";
import { SubHomeScreenProps } from "../Types/ScreenTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import AppContext from '../array-context';
import ItemTest from "../components/ItemTest";


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


  // Favoriten ist Haupt-Screen des FavoritenStacks, ruft die API mit allen Favoriten-IDs auf und gibt die Objekte wieder an ItemTest weiter
function Favoriten({navigation}:SubHomeScreenProps) {

  // Abruf der Context-gespeicherten States/Statefunktionen
    const TestContext = useContext(AppContext);
    const FavoritenArray = TestContext.favoriten_array;
    const SetFavoritenArray = TestContext.setArray;
    // ApiSuchString enthält alle IDs von Objekten, die als Favorit gespeichert wurden (mit "," getrennt)
    const ApiSuchString = TestContext.apiSuchString;
    const SetApiSuchString = TestContext.setApiSuchString;

    const [isloading,setLoading] = useState(true);
    const [data, setData] = useState<eintragP[]>([]);

    // useEffect wird beim Erstaufruf der Komponente aufgerufen und ...
    useEffect(()=>{
      fetch(`http://192.168.0.88:8080/eintraege/idliste/${ApiSuchString}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
        // ... immer, wenn sich eines der Elemente im unteren Array ändert
        // -> also wird die API bei jeder Änderung des Favoritenarrays erneut aufgerufen um die Anzeige synchron zu halten
    }, [ApiSuchString, FavoritenArray]);


    return (
      <SafeAreaView style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height, top:-40}}>

        <ScrollView>
          {/*  Objekte im Array werden ItemTEst-Komponente übergeben */}
          <ItemTest eintrag= {data} navigation={navigation}/>
        </ScrollView>

      </SafeAreaView>
    );
  }
export default Favoriten;