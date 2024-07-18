export default defineEventHandler(async (event) => {
  const { coinMarketCapBaseUrl, coinMarketCapApiKey } = useRuntimeConfig(event)
  return await $fetch(`${coinMarketCapBaseUrl}/v1/cryptocurrency/listings/latest?sort_dir=desc`, {
    headers: {
      'X-CMC_PRO_API_KEY': coinMarketCapApiKey,
    }
  })
})
