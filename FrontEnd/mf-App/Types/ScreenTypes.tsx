import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


// Typescript Typ-Erstellung
export type RootStackParamList = {
  Home: undefined;
  SubHomeScreen1: {textInput:string} | undefined;
  Favoriten: undefined;
  FilterSuche: undefined;
  Maps: undefined;
  FoodGuide:undefined;
  ShoppingGuide:undefined;
  Events:undefined;
  Engagement:undefined;
  Karte:undefined;
  Suche:undefined;

  // ItemFullScreen:{value:eintragP};
  ItemFullScreen:{value:eintragP, title:string};
  Item:{value:eintragP[]};


  
  

};

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type HomeProps = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};


export type KarteScreenRouteProp = RouteProp<RootStackParamList, 'ItemFullScreen'>;

export type KarteScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ItemFullScreen'
>;
export interface eintragP {
  id:number;
  name:string;
  kategorie:string;
  strasse:string;
  plz: number;
  latitude: number;
  longitude:number;
  beschreibung: string;
  link: string
  }
export type SubHomeScreenProps = {
  route: KarteScreenRouteProp;
  navigation: KarteScreenNavigationProp;
};

export type ItemFullScreenProps = {
  route: KarteScreenRouteProp;
  navigation: KarteScreenNavigationProp;  
};

export type ItemProps = {
  eintrag: eintragP|eintragP[];
  route?: KarteScreenRouteProp;
  navigation?: KarteScreenNavigationProp;
}


