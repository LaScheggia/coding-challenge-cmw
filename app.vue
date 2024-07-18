<template>
  <div class="container">
    <Header :cryptoData=cryptoData />

    <ClientOnly fallbackTag="span">
      <CryptoTable :cryptoData=cryptoData />
      <template #fallback>
        <div class="spinner-wrapper">
          <span class="loader"></span>
        </div>
      </template>
    </ClientOnly>

  </div>
</template>

<script setup lang="ts">
const data = await $fetch('/api/crypto')
const cryptoData = data.data

useHead({
  title: 'Crypto Tracker',
  meta: [{ name: 'crypto tracker', content: 'A table tracking the first 100 crypto' }],
})
</script>

<style>
.spinner-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}

.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #1b463e;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
