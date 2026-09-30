import { StatusBar } from 'expo-status-bar';

import useSplashScreen from './src/hooks/useSplashScreen';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const appReady = useSplashScreen();

  if (!appReady) {
    return null;
  }

  return (
    <>
      <AppNavigator />
      <StatusBar style="light" />
    </>
  );
}
