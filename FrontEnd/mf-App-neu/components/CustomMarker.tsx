import React from 'react';
import { Marker } from 'react-native-maps';

type Types = {
    jsonObj: { data: { ID: string; name: string; coords: { latitude: number; longitude: number; }; category: string; }[]; }
}


// CustomMarker wird in Map eingesetzt und erhält Objekt-Array als Parameter und bildet für jedes Objekt einen Marker auf einer übergelegten Karte ein
const CustomMarker = ({jsonObj}: Types)=>{
    return (
        <>
            {jsonObj.data.map((item)=> (
                <Marker
                    key={item.ID}
                    coordinate={item.coords}
                    title={item.name}
              />
            ))}
            
        </>
    )

}
export default CustomMarker;