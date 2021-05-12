# mf_BA
muenster.fair BA

# Installation
Für die Installation wird node benötigt.  

Expo Installation:  

Im Command Line Interface:'npm install -g expo-cli'  
zum Überprüfen kann  'expo whoami'  aufgerufen werden; es sollte "you're not logged in ... " erscheinen   
Anschließend auf mf-App Pfad wechseln und 'npm install' eingeben und nach Abschluss  'expo install' laufen lassen  
Expo wurde nun richtig installiert und alle Abhängigkeiten des Projekts sollten berücksichtigt werden. 'expo start' startet nun den Metro-Bundler und es wird ein QR-Scode angezeigt, der mit der Expo Go App engescannt werden kann (iOS muss auch Expo Go App installieren, muss aber mit der Kamera-App den QR-Code scannen).

Im Command-Line-Interface zum mf-App-Ordner navigieren und 'expo install' laufen lassen um alle Dependencies korrekt zu installieren  

über 'expo start' wird der Metro-Bundler-Server gestartet und es wird ein QR-Code angezeigt, den man mit der Expo Go App (erhältlich im Google Play Store und iOS App Store) einscannen kann.

mySQL-Datenbank  



spring boot App starten:  
(hierfür muss Java 11 installiert sein)  

im CLI zum testapi-Ordner navigieren und 'mvn install' eingeben  
nach Abschluss kann 'mvn spring-boot:run' eingeben werden und die App startet  

