import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import InfoRow from '../components/InfoRow';
import PrimaryButton from '../components/PrimaryButton';
import { STUDENT } from '../constants/student';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

// Pantalla 1: presentación con los datos del estudiante
export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + SPACING.lg }]}
    >
      <Image source={require('../../assets/splash-icon.png')} style={styles.logo} />
      <Text style={styles.heading}>Perfil 3</Text>
      <Text style={styles.subheading}>Desarrollo de componentes para dispositivos móviles</Text>

      <View style={styles.infoCard}>
        <InfoRow label="Nombre" value={STUDENT.name} />
        <InfoRow label="Carnet" value={STUDENT.carnet} />
        <InfoRow label="Sección y grupo" value={STUDENT.section} />
      </View>

      <PrimaryButton label="Ver series de TV" onPress={() => navigation.navigate('Shows')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: SPACING.lg,
    gap: SPACING.lg,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  heading: {
    color: COLORS.text,
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  subheading: {
    color: COLORS.textMuted,
    fontSize: 14,
    textAlign: 'center',
    marginTop: -SPACING.md,
  },
  infoCard: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.lg,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: SPACING.lg,
    gap: SPACING.md,
  },
});
