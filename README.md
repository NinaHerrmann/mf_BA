# Installation

Folgende Programme müssen vor der Nutzung der App installiert werden: MySQL Workbench, Java Development Kit 16, Apache Maven, Node. Außerdem muss Expo installiert sein. Über 'npm install -g expo-cli' wird expo global installiert.

Zuerst sollte die lokale Datenbank eingerichtet werden. Dazu wird MySQL-Workbench geöffnet und eine lokale Instanz angelegt. Nutzer und Passwort können dabei selsbt gewählt werden (in der Server-App ist User:root und passwort: rootmffair). Die lokale Instanz kann dann ausgewählt werden und über den Punkt "File"-> "open SQL-Script" kann die 'database.sql'-Datei eingelesen werden. Diese kann nun über den "Blitz" ausgeführt werden, sodass die gesamte Datenbankstruktur generiert wird. Zur Veranschaulichung der App-Funktionalität, wurden bereits einige Einträge erzeugt. 

Falls der gewählte Name oder das Passwort von root/rootmffair abweichen sollte, müssen Änderungen im 'testapi'-Ordner vorgenommen werden. Dazu empfiehlt es sich IntelliJ oder eine ähnliche Java-IDE zu verwenden. In src->main->ressources->application.properties ist der Verweis auf die Datenbank und dort können die Änderungen getroffen werden. Bevor die Server-App gestartet wird, muss zunächst über die Eingabeaufforderung der Pfad des 'testapi'-Ordners aufgerufen und 'mvn install' eingegeben werden. Wenn dieser Prozess abgeschlossen ist, kann 'mvn spring-boot:run' eingegeben werden, um die Server-App zu starten.

Abschließend muss noch die React-Native/Expo Struktur mit Expo abgerufen werden. Dazu wird in den mf-app-neu Ordner in der Eingabeaufforderung navigiert und zunächst 'npm install' aufgerufen. Nach Abschluss muss noch 'expo install' durchlaufen. Danach sollten alle Vorkehrungen getroffen sein und die App über 'expo start' gestartet werden können. 

Nach 'expo start' sollte sich nach kurzer Zeit ein Browser-Fenster mit einem QR-Code geöffnet haben, der dann über die Expo Go App eingescannt werden kann (auf iOS muss App heruntergeladen sein; der Code muss allerdings über die normale Kamera-App gescannt werden). Es sollte ein Ladebalken auf dem Smartphone angezeigt werden, der Auskunft über den Fortschritt des Downloads gibt.

Diese Schritte müssen nicht jesdes mal wiederholt werden. Wurde die App bereits erfolgreich gestartet, reicht es 'mvn spring-boot:run' und 'expo start' in den respektiven Ordnern auszuführen.

Während der Entwicklung der App kam es vor, dass die App Expo-Go nicht mehr vernünftig funktionierte und auch kein Reload half. Ein Zurücksetzten des Speicherinhalts der App sorgte dann wieder für ein erwartetes Verhalten der App.
 

