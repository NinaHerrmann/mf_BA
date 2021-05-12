import React, { useEffect, useState } from "react";
import { View, Button, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ItemTest from "../../components/ItemTest";
import { eintragP, SubHomeScreenProps } from "../../Types/ScreenTypes";


// siehe Engagement; gleiche Funktionsweise nur mit Kategorie events
function Events({navigation}:SubHomeScreenProps) {
  const [isloading,setLoading] = useState(true);
  const [data, setData] = useState<eintragP[]>([]);


  useEffect(()=>{
    fetch(`http://192.168.0.88:8080/eintraege/kategorien/events`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);
    
    return (
      <SafeAreaView style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height, top:-40}}>
        <ScrollView>
          <ItemTest eintrag= {data} navigation={navigation}/>
        </ScrollView>

      </SafeAreaView>


    );
  }
    
export default Events;