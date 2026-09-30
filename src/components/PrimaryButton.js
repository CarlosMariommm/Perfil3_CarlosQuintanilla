import { Pressable, StyleSheet, Text } from 'react-native';

import { COLORS, RADIUS, SPACING } from '../constants/theme';

// Botón principal de la aplicación
export default function PrimaryButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    color: COLORS.onPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
});
