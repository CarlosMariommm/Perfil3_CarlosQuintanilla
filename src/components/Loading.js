import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../constants/theme';

// Indicador de carga a pantalla completa
export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
    backgroundColor: COLORS.background,
  },
  message: {
    color: COLORS.textMuted,
    fontSize: 15,
  },
});
