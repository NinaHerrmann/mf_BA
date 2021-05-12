// kategorie_function prüft ob string in Array ist, fügt diesen zu wenn er im Array ist, entfernt string sonst
export default function kategorie_function(eintrag: string, arr:string[]){
    if (arr.includes(eintrag)) {
        let pos = arr.indexOf(eintrag);
        arr.splice(pos,1);
    } else {
        arr.push(eintrag);
    }
    return arr;


}