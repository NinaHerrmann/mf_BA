import React  from 'react';
import { SubHomeScreenProps } from '../Types/ScreenTypes';
import {createStackNavigator} from '@react-navigation/stack';
import ItemFullScreen from '../Screens/ItemFullScreen';
import FilterSuche from '../Screens/FilterSuche';


const Stack = createStackNavigator();

// Suche ist Haupt-Screen und ItemFullScreen kann aufgerufen werden
function SucheStack(){ 
   
    return (
      

        <Stack.Navigator>
            <Stack.Screen name="Suche" component={FilterSuche}/>
            <Stack.Screen name="ItemFullScreen" component={ItemFullScreen} /> 

        </Stack.Navigator>
        
    );
    }

export default SucheStack;