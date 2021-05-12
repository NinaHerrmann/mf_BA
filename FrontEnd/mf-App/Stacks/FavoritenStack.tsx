import React  from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ItemFullScreen from '../Screens/ItemFullScreen'
import Favoriten from '../Screens/Favoriten';


const Stack = createStackNavigator();

//  FavoritenStackk bettet Favoriten und ItemFullScreen ein
function FavoritenStack() {
   
    return (
      

        <Stack.Navigator>
            <Stack.Screen name = "Favoriten" component= {Favoriten}/>
            <Stack.Screen name="ItemFullScreen" component={ItemFullScreen}/>
        </Stack.Navigator>
        
    );
    }

export default FavoritenStack;