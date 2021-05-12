import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemTest from "../../components/ItemTest";
import { eintragP, SubHomeScreenProps } from "../../Types/ScreenTypes";

// lädt alle Einträge die mit der Kategorie Engagement gekennzeichnet wurden
function Engagement({navigation}:SubHomeScreenProps) {
  const [isloading,setLoading] = useState(true);
  // data enthält in Array umgewandeltes JSON der Server-Antwort
  const [data, setData] = useState<eintragP[]>([]);

// use Effect (Hook) wird beim erstmaligen Laden der Seite aufgerufen
  useEffect(()=>{
    fetch(`http://192.168.0.88:8080/eintraege/kategorien/engagement`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
    
    return (
      <SafeAreaView style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height, top:-40}}>
        <ScrollView>
          {/* Server-Antwort wird ItemTest übergeben; ItemTest erzeugt für jedes Objekt eine Ansicht die in die ScrollView eingebettet wird */}
          <ItemTest eintrag= {data} navigation={navigation}/>
        </ScrollView>

      </SafeAreaView>


    );
  }
export default Engagement;