import { FlatList, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Card from '../components/Card';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import { COLORS, SPACING } from '../constants/theme';
import useShows from '../hooks/useShows';

// Pantalla 2: listado de series obtenido de la API de TVMaze
export default function ShowsScreen() {
  const insets = useSafeAreaInsets();
  const { shows, loading, error, refetch } = useShows();

  if (loading && shows.length === 0) {
    return <Loading message="Cargando series..." />;
  }

  if (error && shows.length === 0) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + SPACING.md }]}
      data={shows}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Card
          title={item.title}
          image={item.image}
          description={item.description}
          subtitle={item.genres}
          rating={item.rating}
        />
      )}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
    gap: SPACING.md,
  },
});
