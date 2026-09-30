import { useMemo } from 'react';

import { SHOWS_API_URL } from '../constants/api';
import stripHtml from '../utils/stripHtml';
import useFetchData from './useFetchData';

// Convierte una serie de TVMaze en los datos que necesita una tarjeta
const toCardData = (show) => ({
  id: String(show.id),
  title: show.name,
  image: show.image?.medium ?? null,
  description: stripHtml(show.summary) || 'Sin descripción disponible.',
  genres: show.genres?.join(' · ') ?? '',
  rating: show.rating?.average ?? null,
});

// Lógica de la pantalla de series: consumo de la API y preparación de los datos
export default function useShows() {
  const { data, loading, error, refetch } = useFetchData(SHOWS_API_URL);

  const shows = useMemo(() => (Array.isArray(data) ? data.map(toCardData) : []), [data]);

  return { shows, loading, error, refetch };
}
