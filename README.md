# Perfil3_CarlosQuintanilla

Evaluación práctica – Perfil 15% · Módulo 5: Desarrollo de componentes para dispositivos móviles  
Instituto Técnico Ricaldone · Tercer año de Desarrollo de Software

## Estudiante

- **Nombre:** Carlos Mario Quintanilla Ramírez
- **Carnet:** 20210212
- **Sección y grupo:** 3º B - Grupo 1B

## Entregables

- **Video demostrativo:** _pendiente de agregar el enlace_
- **Descarga del APK:** _pendiente de agregar el enlace_

## Sobre la aplicación

Aplicación móvil desarrollada con React Native y Expo que consume la API pública de
[TVMaze](https://api.tvmaze.com/shows) para mostrar un listado de series de televisión.

- **Pantalla 1 – Estudiante:** muestra nombre, carnet, sección y grupo, y un botón para navegar a la pantalla 2.
- **Pantalla 2 – Series de TV:** lista de tarjetas con el nombre, la imagen y la descripción de cada serie.
- **Icono y splash screen** personalizados.

## Estructura del proyecto

```
App.js                      Punto de entrada: splash screen + navegación
src/
  components/               Componentes reutilizables (solo interfaz)
    Card.js                 Tarjeta de una serie, recibe los datos por props
    Loading.js              Indicador de carga
    ErrorMessage.js         Mensaje de error con botón de reintento
    InfoRow.js              Fila etiqueta / valor
    PrimaryButton.js        Botón principal
  hooks/                    Custom hooks (lógica y consumo de la API)
    useFetchData.js         Petición genérica con fetch y async/await
    useShows.js             Obtiene las series y las adapta para las tarjetas
    useSplashScreen.js      Control del splash screen
  navigation/
    AppNavigator.js         Stack de React Navigation
  screens/
    HomeScreen.js           Pantalla 1
    ShowsScreen.js          Pantalla 2
  constants/                Datos del estudiante, tema y URL de la API
  utils/
    stripHtml.js            Limpia las etiquetas HTML del resumen de TVMaze
```

## Tecnologías

- React Native + Expo SDK 57
- React Navigation (native stack)
- expo-splash-screen
- EAS Build para generar el APK

## Cómo ejecutar el proyecto

```bash
npm install
npx expo start
```

## Cómo generar el APK

```bash
npx eas-cli@latest build -p android --profile preview
```

## Créditos

- Datos de series: [TVMaze API](https://www.tvmaze.com/api)
- Icono del televisor: [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) de Microsoft (licencia MIT), obtenido desde Wikimedia Commons
