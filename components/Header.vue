<template>
  <div>
    <h1>Il valore di Bitcoin è {{ btc.quote.USD.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }} </h1>
    <p>La cryptovaluta con maggior Market Cap dopo Bitcoin è {{ secondCrypto.name }} con valore {{ secondCrypto.quote.USD.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  cryptoData: Array
})
const btc = props.cryptoData.find(el => el.symbol === "BTC")
const secondCrypto = props.cryptoData[1]

console.log(secondCrypto)
</script>
