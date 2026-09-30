import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

// Mantiene el splash visible hasta que la app lo oculte manualmente
SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({ duration: 400, fade: true });

// Mantiene el splash durante el tiempo indicado y avisa cuando la app puede mostrarse
export default function useSplashScreen(delay = 1500) {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // En Android el splash se retira en el siguiente dibujado de pantalla,
      // por eso se oculta justo antes de renderizar el contenido de la app
      SplashScreen.hide();
      setAppReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return appReady;
}
