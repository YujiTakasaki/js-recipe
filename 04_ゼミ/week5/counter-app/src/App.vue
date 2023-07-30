<template>
  <div>
    <input v-model="inputMoney" type="number" />
    <button v-on:click="deposit">入金</button>
    <button v-on:click="withdrawal">出金</button>
  </div>
  <div>
    <h1>残高セクション</h1>
    <div>残金 {{ totalMoney }}円</div>
  </div>
  <div>
    <h1>取引記録セクション</h1>
    <div
      class="record-card"
      v-for="record in recordList"
      v-bind:key="record.date"
    >
      <div>日付: {{ record.date }}</div>
      <div>操作: {{ record.operation }}</div>
      <div>金額: {{ record.money }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputMoney: 0,
      totalMoney: 0,
      recordList: [],
    }
  },
  methods: {
    deposit: function () {
      this.totalMoney += this.inputMoney
      this.addRecord("入金")
    },
    withdrawal: function () {
      this.totalMoney -= this.inputMoney
      this.addRecord("出金")
    },
    addRecord: function (operation) {
      this.recordList.push({
        date: new Date(),
        operation: operation,
        money: this.inputMoney,
      })
    },
  },
}
</script>

<style>
.record-card {
  border: solid 1px #000;
  margin-top: 2px;
}
</style>
