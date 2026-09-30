import { Image, StyleSheet, Text, View } from 'react-native';

import { COLORS, RADIUS, SPACING } from '../constants/theme';

// Tarjeta reutilizable: recibe por props el título, la imagen y la descripción a mostrar
export default function Card({ title, image, description, subtitle, rating }) {
  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>Sin imagen</Text>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        {subtitle ? (
          <Text style={styles.subtitle} numberOfLines={1}>
            {subtitle}
          </Text>
        ) : null}

        {rating != null ? <Text style={styles.rating}>★ {rating}</Text> : null}

        <Text style={styles.description} numberOfLines={5}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    overflow: 'hidden',
  },
  image: {
    width: 118,
    minHeight: 172,
    backgroundColor: COLORS.border,
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: COLORS.textMuted,
    fontSize: 12,
  },
  content: {
    flex: 1,
    padding: SPACING.md,
    gap: SPACING.xs,
  },
  title: {
    color: COLORS.text,
    fontSize: 17,
    fontWeight: '700',
  },
  subtitle: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: '600',
  },
  rating: {
    color: COLORS.rating,
    fontSize: 13,
    fontWeight: '700',
  },
  description: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 18,
    marginTop: SPACING.xs,
  },
});
