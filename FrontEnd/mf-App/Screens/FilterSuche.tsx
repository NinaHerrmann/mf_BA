import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet , Platform} from "react-native";
import { SubHomeScreenProps } from "../Types/ScreenTypes";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import DropDownPicker from 'react-native-dropdown-picker';
import kategorie_function from '../components/functions/kategorieFunction'



interface eintragP {
  id: number;
  name: string;
  kategorie: string;
  strasse: string;
  plz: number;
  latitude: number;
  longitude: number;
  beschreibung: string;
  link: string
}

// kompliziertere Komponente
function FilterSuche({ navigation}: SubHomeScreenProps) {
  
  // query-state enthält immer den aktuellen Wert der Suchleiste
  const [query, setQuery] = useState('');
  // eintraege werden aus data gebildet; data soll nicht verändert werden, weswegen eintraege data bei dessen Initialisierung kopiert und dann als 
  // Objekt verwendet wird, dass verändert werden darf
  const [eintraege, setEintraege] = useState<eintragP[]>([]);
  // data ist aktuelle Server-Antwort entsprechend der ausgewählten Kategorien / Kriterien
  const [data, setData] = useState<eintragP[]>([]);
  const [isLoading, setLoading] = useState(true);
  // kategorien ist ein Array welches alle gedrückten Kategorien enthält / erneutes drücken entfernt kategorie
  const [kategorien, setKategorien] = useState<string[]>([]);
  // str ist der String mit dem die API abgefragt wird; str führt zum gewünschten Endpunkt der API; "alle" zu Beginn sorgt dafür ,dass
  // zunächst alle Eintraege angezeigt werden
  const [str, setStr] = useState("alle");
  // kritStr dient als Zwischenspeicher für Kriterien (abgespeichert als string um str bilden zu können)
  const [kritStr, setKritStr] = useState("");
  // alarm dient nur dazu, dass die Hook, die die ausgewählten Kategorien enthalten soll direkt synchronisiert werden 
  const [alarm, setAlarm] = useState(1);
  //  katStr gleiche Funktion wie kritStr für Kategorien
  const [katStr, setKatStr] = useState("");


  
  // States, die für die Dropdown-Liste benötigt werden
  const [open, setOpen] = useState(false);
  // value speichert alle ausgewählten Kriterien
  const [value, setValue] = useState([]);
  // label definiert die Bezeichnung der Kriterien in der Anzeige und value definiert die interne Bezeichnung im value-Array
  const [items, setItems] = useState([
    {label: 'Bio', value: 'bio'},
    {label: 'vegetarisch', value: 'vegetarisch'},
    {label: 'saisonal', value: 'saisonal'},
    {label: 'Regional', value: 'Regional'},
    {label: 'Vegan', value: 'Vegan'},
    {label: 'Fairer Handel', value: 'Fairer Handel'},
    {label: 'Nachhaltige Rohstoffe', value: 'Nachhaltige Rohstoffe'},
    {label: 'Recycle-Produkte', value: 'Recycle-Produkte'},
    {label: 'Fair Fashion', value: 'Fair Fashion'},
    {label: 'Soziales Engagement', value: 'Soziales Engagement'},
    {label: 'Barrierefreiheit', value: 'Barrierefreiheit'},
    {label: 'Female Empowerment', value: 'Female Empowerment'},
    {label: 'Diversity', value: 'Diversity'}
  ]);


  //  Array, für Kategorie-Leiste
  const categoryArr= ["Café" , "Restaurant", "Shopping", "Events"];
  // Hilfsstrings 
  var stringEnde = "";
  var kategorieString="";

  //  die nächsten beiden Hooks werden aufgerufen sobald, die kriterien(das value array) ...
  React.useEffect(()=>{
    if (value.length===0){setKritStr("")}
    else{
      for (var kriterium in value){
        stringEnde += value[kriterium];
        stringEnde+=",";}
        setKritStr(stringEnde.substr(0,stringEnde.length-1));
    }
  }, [value]);

  // ... bzw. das kategorien Array verändert werden. Beide sorgen dafür, dass katStr und kritStr zu jedem Zeitpunkt nur die aktuellen Werte enthalten
  React.useEffect(()=>{
    if (kategorien.length===0){setKatStr("")}
    else{
        for(var kategorie in kategorien){
            kategorieString += kategorien[kategorie];
            kategorieString+= ",";
            setKatStr(kategorieString.substr(0,kategorieString.length-1));
        }
    }
    // alarm, da kategorien alleine eine Verzögerung um einen "Takt" (ein Synchronisationsschritt) hervorruft
}, [kategorien,alarm])




  // diese Hook erzeugt den richtigen API-Pfad und wird immer aktualsiert wenn einer von kritStr oder katStr Änderungen erhalten
  React.useEffect(()=>{
    // (kriterien.length === 0 )? setStr("alle") :setStr("test/kriterien/"+kriterien);
    if (kritStr.length === 0 && katStr.length === 0){setStr("alle")}
    else if (katStr.length===0){setStr("test/kriterien/"+kritStr)}
    else if (kritStr.length===0){setStr("/kategorien/"+katStr)}
    else {setStr("test/"+katStr+"/"+kritStr)}
  }, [kritStr, katStr]);


  // diese Hook ruft die API auf und verarbeitet die Antwort und speichert das Objekt-Array in Data
  React.useEffect(()=>{
    fetch(`http://192.168.0.88:8080/eintraege/${str}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [str]);



  // sobald data erzeugt wurde, wird eine Kopie erzeugt
  React.useEffect(()=>{
    setEintraege(data.slice());
  }, [data])



  // Funktion die Änderung der Query (Sucheingabe) und Überschreibung von eintraege vornimmt
  // erneutes data.slice() ist zwingend notwendig, sonst kann Suche nur einmal stattfinden und wird nicht zurückgesetzt
  const updateQuery = (input:string) =>{
    setQuery(input);
    setEintraege(data.slice());
  }

  // diese Funktion gibt den Namen des Eintrags wieder (oder null) wenn der Name des Eintrags zur Sucheingabe passt
  const filterNames = (eintrag:eintragP) => {
    
    let search = query.toLowerCase().replace(/ /g,"_"); 
    if(eintrag.name.startsWith(search)|| eintrag.name.toLowerCase().startsWith(search)){
       return eintrag.name;
    }else{ 
       eintraege.splice(eintraege.indexOf(eintrag), 1);
       return null;
    }
 }

  return (
    <SafeAreaView style={{flex:1, top:-60}}>
        {/*  Platform muss hier abgescihert werden, da ansinsten die Search-Bar Funktion  nicht kompatibel ist */}
        { (Platform.OS === "android" || Platform.OS === "ios")?
        <SafeAreaView style= {{flex:1}}>

          {/* horizontale Kategorie-Leiste */}
          <ScrollView
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          style={styles.category_bar}
          horizontal
          >
            {/*  jedes Element des Arrays erhält eine Berührfläche */}
            {categoryArr.map((category, index)=>(
              
              // Style-Unterschied bei Antippen
              <TouchableOpacity key= {index} style={(kategorien.includes(category))?styles.category_buttonPressed : styles.category_buttonUnpressed}
              onPress={()=>{
                // berühren der Schaltfläche triggert kategorie_function, die den Eintrag entweder hinzufügt (wenn er noch nicht im Array enthalten war)
                // sonst wird dieser entfernt
                var arrNeu = kategorie_function(category,kategorien)
                setKategorien(arrNeu);
                setAlarm(alarm+1);
              }}>
                
                <Text style={{fontSize:20}}>
                  {category}
                
                </Text>
              </TouchableOpacity>

            ))}

          </ScrollView>

        
          <View style={{position:"absolute", top:100, width:"98%" , left:"1%"}}>
            {/*  Standard Dropdown-Picker der Bibliothek react-native-dropdown-picker für die Auswahl mehrerer Elemente */}
            <DropDownPicker
              multiple= {true}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              //  genauso aus der Dokumentation übernommen, aber zeigt (TypeScript intern) Fehler an
              // läuft trotzdem
              setValue={setValue}
              setItems={setItems}
              
              />

            {/*  Suchleiste die bei Eingabe Query ändert  */}
            <SearchBar
            platform= {Platform.OS}
            onChangeText={updateQuery}
            value={query}
            placeholder="Hier suchen..."
            />
        
            {/* Liste der Einträge die die Filterauswahl erfüllen */}
            <FlatList 
            data={eintraege} 
            keyExtractor={(i:eintragP)=>i.id.toString()} 
            extraData={query} 
            renderItem={({item, index})=>(
              // Jeder Eintrag erhält ein anwählbares Objekt, dass bei Berührung die ItemFullScreen-Ansicht zeigt
              <TouchableOpacity
              key={index}
              onPress= {()=>navigation?.navigate("ItemFullScreen", {value:item , title:item.name})}
              style={styles.flatList}>
                <Text>
                  {filterNames(item)}
                </Text>
              </TouchableOpacity>)}
              />
            </View>       


          

          {/* Hilfreich zum Debugging
             <Text>
              Value: 
              {value}
              Str:
              {str}
              StrEnd:
              {strEnd}
          
            {pressedKats}
            {kategorien}
            {value}
            {kriterien}
          </Text> */}
            
          
        </SafeAreaView>
        // wenn nicht Android oder iOS dann wird nichts angezeigt
          : <View></View> 
  }
         
      

    </SafeAreaView>


  )
}
export default FilterSuche;

const styles = StyleSheet.create({
  flatList:{
      paddingLeft: 15, 
      marginTop:15, 
      paddingBottom:15,
      fontSize: 20,
      borderBottomColor: '#26a69a',
      borderBottomWidth:1
  },
  button:{
    position: "absolute",
    bottom:10,
    backgroundColor:"#fff",
    paddingHorizontal:10,
    borderRadius: 20,
    padding:8,
    marginHorizontal:10,

  },
  category_bar: {
    // position: "absolute",
    // top:10,
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