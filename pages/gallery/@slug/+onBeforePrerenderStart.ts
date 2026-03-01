export { onBeforePrerenderStart }

const gallerySlugs = [
  'botanical-watercolour',
  'oil-paintings',
  'miniatures',
]

function onBeforePrerenderStart() {
  return gallerySlugs.map((slug) => `/gallery/${slug}`)
}
