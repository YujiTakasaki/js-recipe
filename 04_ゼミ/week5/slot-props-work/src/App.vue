<template>
  <div class="container">
    <h1>props Human</h1>
    <div class="props-example">
      <PropsHuman
        v-for="(person, index) in people"
        v-bind:key="index"
        v-bind:person="person"
      />
    </div>
  </div>
</template>

<script>
import PropsHuman from "./components/PropsHuman.vue"

export default {
  components: {
    PropsHuman,
  },
  data() {
    return {
      people: [
        {
          face: "😘",
          cloth: "👙",
        },
        {
          face: "😇",
          cloth: "👗",
        },
        {
          face: "😊",
          cloth: "🩱",
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.slot-example,
.props-example {
  display: flex;
}

a {
  cursor: default;
  color: inherit;
  text-decoration: none;
}
</style>
