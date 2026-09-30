import { StyleSheet, Text, View } from 'react-native';

import { COLORS, SPACING } from '../constants/theme';

// Fila etiqueta / valor para mostrar un dato del estudiante
export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: SPACING.xs,
  },
  label: {
    color: COLORS.textMuted,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  value: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: '600',
  },
});
