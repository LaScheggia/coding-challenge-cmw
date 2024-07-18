<template>
  <div class="overflowBorder">
    <table id="crypto">
      <thead>
        <tr>
          <th>Position Number</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Circulating Supply</th>
          <th>Last updated</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="crypto in props.cryptoData" :key="crypto.id">
          <td>{{ crypto.cmc_rank }}</td>
          <td>{{ crypto.name }}</td>
          <td>{{ crypto.symbol }}</td>
          <td>{{ crypto.quote.USD.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</td>
          <td>{{ crypto.circulating_supply.toFixed(2) }}</td>
          <td>{{ formatDate(crypto.last_updated) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  cryptoData: Array
})

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', hour12: true };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  const parts = formatter.formatToParts(date);
  
  const day = parts.find(part => part.type === 'day').value;
  const month = parts.find(part => part.type === 'month').value;
  const weekday = parts.find(part => part.type === 'weekday').value;
  const hour = parts.find(part => part.type === 'hour').value;
  const minute = parts.find(part => part.type === 'minute').value;
  const dayPeriod = parts.find(part => part.type === 'dayPeriod').value;

  return `${weekday} ${day} ${month}, ${hour}:${minute} ${dayPeriod}`;
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  color: #333333;
  margin: 0;
  padding: 20px;
}

.overflowBorder {
  overflow: auto;
  border-radius: 8px;
}

table {
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
  border-style: hidden;
}

thead {
  border-radius: 16px;
}

th {
  text-transform: uppercase;
  background-color: #1b463e;
  color: white;
  font-weight: 100;
  font-size: 12px;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #dddddd;
}

td {
  background-color: #f9f9f9;
  border-right: 1px solid #e7e7e7;
}

tr:nth-child(even) td {
  background-color: #eeeeee;
}

td:nth-child(1) {
  font-weight: bold;
}
</style>
