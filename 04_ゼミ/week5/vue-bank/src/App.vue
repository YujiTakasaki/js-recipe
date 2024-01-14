<template>
  <div>
    <section>
      <h1>入力画面</h1>
      <input type="number" v-model="nyuryokugaku" />円
      <div>
        <button v-on:click="nyukin">入金</button>
        <button v-on:click="shukin" v-bind:disabled="!hasZandaka">出金</button>
      </div>
    </section>
    <section>
      <h1>口座残高</h1>
      {{ zandaka }}円
    </section>
    <section>
      <h1>取引記録</h1>
      <div v-for="log in logs" v-bind:key="log.date">
        <div>日付: {{ log.date }}</div>
        <div>操作: {{ log.type }}</div>
        <div>金額: {{ log.money }}</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nyuryokugaku: 100,
      zandaka: 0,
      logs: [],
    }
  },
  methods: {
    nyukin: function () {
      this.zandaka += this.nyuryokugaku
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: this.nyuryokugaku,
      })
    },
    shukin: function () {
      this.zandaka -= this.nyuryokugaku
      this.logs.push({
        date: new Date(),
        type: "出金",
        money: this.nyuryokugaku,
      })
    },
  },
  computed: {
    hasZandaka: function () {
      return this.nyuryokugaku <= this.zandaka
    },
  },
}
</script>
