import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// App-Context
import { AppProvider } from './array-context';
//Graphic elements and styling
import light from "./Styles/lightColors";
import { Ionicons } from '@expo/vector-icons';
//Screens + Types
import { RootStackParamList } from "./Types/ScreenTypes";
import HomeStack from './Stacks/HomeStack';
import SucheStack from './Stacks/SucheStack';
import KarteStack from './Stacks/KarteStack';
import FavoritenStack from './Stacks/FavoritenStack';




const Tab = createBottomTabNavigator<RootStackParamList>();
type iconType={
  iconName: "home"|"home-outline"|"map"|"map-outline"|"star"|"star-outline"|"search"|"search-outline"
}



function App() {
  
  // array für Favoritenauswahl (id=1 ; id=2 als Favoriten beim ersten Start)
  const [fav_array, setFav_array] = React.useState([1,2]);
  // string aus ids die angezeigt werden sollen
  const [api_str, setApi_str]= React.useState(fav_array.toString())  
    
     return(
    // Context Initialisierung und Zuweisung
    <AppProvider value={{favoriten_array:fav_array,setArray:setFav_array, apiSuchString:api_str, setApiSuchString:setApi_str}}>

      {/*  */}
      <NavigationContainer theme={light}>
        {/* Theme hat noch einige Probleme bereitet und ist deswegen momentan nicht änderbar */}
        {/* NavigationContainer muss gesamte Navigations-Komponenten einschließen um Hierarchie-Baum aufzustellen*/}
        <Tab.Navigator initialRouteName= "Home" screenOptions={({route})=>({
          tabBarIcon:({focused, color,size})=>{
            let iconName="home";
            if(route.name==="Home"){
              iconName=focused ? 'home' : 'home-outline';
            } else if (route.name === 'Karte') {
              iconName = focused ? "map": 'map-outline';
            }
            else if (route.name === 'Favoriten') {
              iconName=focused ? 'star' : 'star-outline';
          }
            else if (route.name === 'Suche') {
              iconName=focused ? 'search' : 'search-outline';
            }
            

           // Ionicons stellt Icons für die Tab-Navigation bereit
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        }}
            
        >
          {/* .Navigator erhält .Screen Komponenten als children und dient als Navigationsanker */}
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name= "Karte" component= {KarteStack} />
          <Tab.Screen name="Favoriten" component={FavoritenStack}/>
          <Tab.Screen name= "Suche" component= {SucheStack}/>
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
 
  );
}

export default App;
