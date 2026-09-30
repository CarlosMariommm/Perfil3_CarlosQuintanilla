import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../constants/theme';
import PrimaryButton from './PrimaryButton';

// Mensaje de error con opción para reintentar la petición
export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ocurrió un problema</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry ? <PrimaryButton label="Reintentar" onPress={onRetry} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.md,
    padding: SPACING.lg,
    backgroundColor: COLORS.background,
  },
  title: {
    color: COLORS.error,
    fontSize: 18,
    fontWeight: '700',
  },
  message: {
    color: COLORS.textMuted,
    fontSize: 14,
    textAlign: 'center',
  },
});
