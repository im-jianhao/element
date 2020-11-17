<template>
  <div v-if="list.length" class="message">
    <div v-for="m in list" :key="m.id">
      {{ m.message }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  created() {
    this.id = 0
  },

  methods: {
    add(options) {
      const layer = {
        ...options,
        id: this.id++
      }
      this.list.push(layer)
      setTimeout(() => {
        this.list = this.list.filter(m => m.id !== layer.id)
      }, options.duration)
      // this.close(layer)
    },
    close(layer) {}
  }
}
</script>
