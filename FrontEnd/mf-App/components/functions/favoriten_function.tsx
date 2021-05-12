// Favoriten_function erhält id und fügt diese einem Array hinzu oder entfernt diese, wenn sie bereits vorhanden war
export default function favoriten_function(id: number, arr:number[]){
    if (arr.includes(id)) {
        let pos = arr.indexOf(id);
        arr.splice(pos,1);
    } else {
        arr.push(id);
    }
    return arr;


}