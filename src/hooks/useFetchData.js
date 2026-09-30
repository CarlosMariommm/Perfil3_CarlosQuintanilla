import { useCallback, useEffect, useState } from 'react';

// Hook genérico: consume cualquier endpoint y expone los datos junto al estado de la petición
export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`El servidor respondió con el código ${response.status}`);
      }

      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message || 'No se pudo obtener la información');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
