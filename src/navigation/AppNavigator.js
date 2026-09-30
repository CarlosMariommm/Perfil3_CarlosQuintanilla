import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { COLORS } from '../constants/theme';
import HomeScreen from '../screens/HomeScreen';
import ShowsScreen from '../screens/ShowsScreen';

const Stack = createNativeStackNavigator();

const navigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: COLORS.background,
    card: COLORS.background,
    text: COLORS.text,
    primary: COLORS.primary,
    border: COLORS.border,
  },
};

// Navegación tipo stack entre la pantalla de presentación y la pantalla de la API
export default function AppNavigator() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: COLORS.text,
          headerTitleStyle: { fontWeight: '700' },
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Estudiante' }} />
        <Stack.Screen name="Shows" component={ShowsScreen} options={{ title: 'Series de TV' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
