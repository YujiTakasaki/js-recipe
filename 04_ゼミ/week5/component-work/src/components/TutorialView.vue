<template>
  <div class="tutorial">
    <h1>
      <span v-on:mousemove="fire" v-on:mouseleave="bomb">{{ icon }}</span>
      WebExpertコース Vue CLI チュートリアル
      <span v-on:mousemove="fire" v-on:mouseleave="bomb">{{ icon }}</span>
    </h1>
    <p>
      Vue
      CLIでの開発は、今までの開発と異なる部分が数点ありますが、より便利に開発できます。<br />
      このTutorialコンポーネントを参考にして、いくつかのアプリを.vueファイルで開発してみましょう!
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: "🧨",
    }
  },
  methods: {
    fire() {
      this.icon = "🔥"
    },
    bomb() {
      this.icon = "🧨"
    },
  },
}
</script>

<style scoped>
.tutorial {
  text-align: center;
}
</style>
