# Prototype MS Fair App

## Requirements
- [ ] Mysql (workbench - depending on how used you are to cmd ;))
- [ ] JDK (tested 16.0.1)
- [ ] Maven (recommended 3.8.1 - not working for 3.6.x)
- [ ] Node + Expo (tested v14.15.4, 4.4.9)

## Limitations
- [ ] Expo Go for iOS requires to use your local IP-Adress
- [ ] Web Browser simulation is not possible as `react-native-maps` is not available for web
- [ ] simulating on a hardware device requires to have the device in the same network as the laptop/desktop
- [ ] simulating on Android will require you to have some (sometimes not to small) android emulator (e.g. [Android Studio](https://docs.expo.io/workflow/android-studio-emulator/) for the maybe biggest but up to date possibility)

## Set-up
- [ ] open MySQL (workbench, or terminal) and use the `Datenbank\createDatabase.sql` file to create a examplarly database with entries. 
        (In case of workbench `File->open SQL-Script`)
- [ ] adjust DB-Owner and Password in `BackEnd\ServerApp\src\main\ressources\application.properties` to your settings
- [ ] run `mvn install` inside `BackEnd\ServerApp`
- [ ] run `npm install` inside `Front-End\mf-App-neu`
- [ ] run `expo install` inside `Front-End\mf-App-neu`
- [ ] OPTIONAL: all URLs are set to use `10.0.2.2` (Android Emulator)
if you want to have the app running on iOS you will need to 
change that to your local IP-adress (or the adress the backend is running on).

## Starting the Prototype
- [ ] call `mvn spring-boot:run` inside `BackEnd\ServerApp`
- [ ] call `expo start` inside `Front-End\mf-App-neu`

## Debugging
- [ ] reload expo go as it sometimes not refreshes completly
- [ ] call `[whatyouexpecttobeyourbackendurl]:8080/eintraege/alle` to see if the Backend sends data.
(Android Emulator (10.0.2.2) --> `localhost:8080/eintraege/alle` 
iOS Device --> `[youripadress]:8080/eintraege/alle`)

