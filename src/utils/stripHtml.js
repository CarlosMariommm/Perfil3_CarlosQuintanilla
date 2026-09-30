const ENTITIES = {
  '&amp;': '&',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
  '&lt;': '<',
  '&gt;': '>',
  '&nbsp;': ' ',
};

// TVMaze entrega el resumen con etiquetas HTML (<p>, <b>, ...); aquí se deja solo el texto
export default function stripHtml(html) {
  if (!html) return '';

  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, (entity) => ENTITIES[entity] ?? entity)
    .replace(/\s+/g, ' ')
    .trim();
}
